package ui

import (
	"fmt"

	"react-best-practices-gui/internal/models"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/dialog"
	"fyne.io/fyne/v2/layout"

	"fyne.io/fyne/v2/widget"
)

// ExamplesDialog represents a dialog for showing project structure examples
type ExamplesDialog struct {
	examples []models.ProjectExample
	window   fyne.Window
	dialog   dialog.Dialog

	// Current state
	currentExample int

	// UI components
	examplesList *widget.List
	treeView     *widget.Tree
	description  *widget.Label
	explanation  *widget.Label
	navigation   *fyne.Container
}

// NewExamplesDialog creates a new examples dialog
func NewExamplesDialog(examples []models.ProjectExample, parent fyne.Window) *ExamplesDialog {
	ed := &ExamplesDialog{
		examples:       examples,
		window:         parent,
		currentExample: 0,
	}

	ed.setupUI()
	return ed
}

// setupUI creates the examples dialog UI
func (ed *ExamplesDialog) setupUI() {
	// Title
	title := widget.NewLabelWithStyle("Project Structure Examples", fyne.TextAlignCenter, fyne.TextStyle{Bold: true})

	// Main content split into left panel (examples list) and right panel (tree view)
	leftPanel := ed.createExamplesList()
	rightPanel := ed.createTreeView()

	split := container.NewHSplit(leftPanel, rightPanel)
	split.SetOffset(0.3) // 30% for list, 70% for tree view

	// Navigation buttons
	ed.navigation = container.NewHBox(
		widget.NewButton("← Previous", func() {
			ed.previousExample()
		}),
		widget.NewButton("Next →", func() {
			ed.nextExample()
		}),
	)

	// Main content
	content := container.NewVBox(
		title,
		widget.NewSeparator(),
		split,
		widget.NewSeparator(),
		ed.navigation,
	)

	// Create dialog
	ed.dialog = dialog.NewCustom("Project Structure Examples", "Close", content, ed.window)
	ed.dialog.Resize(fyne.NewSize(900, 700))

	// Load first example
	ed.loadExample()
}

// createExamplesList creates the left panel with examples list
func (ed *ExamplesDialog) createExamplesList() *fyne.Container {
	// Examples list
	ed.examplesList = widget.NewList(
		func() int { return len(ed.examples) },
		func() fyne.CanvasObject {
			return container.NewHBox(
				widget.NewLabel("[?]"),
				widget.NewLabel("Example Name"),
				layout.NewSpacer(),
				widget.NewLabel("Status"),
			)
		},
		func(id widget.ListItemID, item fyne.CanvasObject) {
			example := ed.examples[id]
			hbox := item.(*fyne.Container)

			// Status indicator
			statusLabel := hbox.Objects[0].(*widget.Label)
			if example.IsGood {
				statusLabel.SetText("[OK]")
			} else {
				statusLabel.SetText("[X]")
			}

			// Name
			nameLabel := hbox.Objects[1].(*widget.Label)
			nameLabel.SetText(example.Name)

			// Status
			statusLabel = hbox.Objects[3].(*widget.Label)
			if example.IsGood {
				statusLabel.SetText("GOOD")
			} else {
				statusLabel.SetText("BAD")
			}
		},
	)

	ed.examplesList.OnSelected = func(id widget.ListItemID) {
		ed.currentExample = id
		ed.loadExample()
	}

	// Select first example by default
	ed.examplesList.Select(0)

	// Description area
	ed.description = widget.NewLabel("")
	ed.description.Wrapping = fyne.TextWrapWord

	return container.NewVBox(
		widget.NewLabelWithStyle("Examples", fyne.TextAlignCenter, fyne.TextStyle{Bold: true}),
		widget.NewSeparator(),
		container.NewScroll(ed.examplesList),
		widget.NewSeparator(),
		widget.NewLabelWithStyle("Description", fyne.TextAlignLeading, fyne.TextStyle{Bold: true}),
		ed.description,
	)
}

// createTreeView creates the right panel with tree view and explanation
func (ed *ExamplesDialog) createTreeView() *fyne.Container {
	// Tree view for project structure
	ed.treeView = widget.NewTree(
		func(uid widget.TreeNodeID) []widget.TreeNodeID {
			// This will be populated when loading examples
			return []widget.TreeNodeID{}
		},
		func(uid widget.TreeNodeID) bool {
			// Check if node has children
			return false
		},
		func(branch bool) fyne.CanvasObject {
			if branch {
				return container.NewHBox(
					widget.NewLabel("[DIR]"),
					widget.NewLabel("Folder"),
				)
			}
			return container.NewHBox(
				widget.NewLabel("[FILE]"),
				widget.NewLabel("File"),
			)
		},
		func(uid widget.TreeNodeID, branch bool, item fyne.CanvasObject) {
			// This will be implemented when loading examples
		},
	)

	// Explanation area
	ed.explanation = widget.NewLabel("")
	ed.explanation.Wrapping = fyne.TextWrapWord

	explanationScroll := container.NewScroll(ed.explanation)
	explanationScroll.SetMinSize(fyne.NewSize(0, 100))

	return container.NewVBox(
		widget.NewLabelWithStyle("Project Structure", fyne.TextAlignCenter, fyne.TextStyle{Bold: true}),
		widget.NewSeparator(),
		container.NewScroll(ed.treeView),
		widget.NewSeparator(),
		widget.NewLabelWithStyle("Explanation", fyne.TextAlignLeading, fyne.TextStyle{Bold: true}),
		explanationScroll,
	)
}

// loadExample loads the current example into the UI
func (ed *ExamplesDialog) loadExample() {
	if ed.currentExample < 0 || ed.currentExample >= len(ed.examples) {
		return
	}

	example := ed.examples[ed.currentExample]

	// Update description
	ed.description.SetText(example.Description)

	// Update explanation
	ed.explanation.SetText(example.Explanation)

	// Update tree view
	ed.updateTreeView(&example.Structure)

	// Update navigation buttons
	ed.updateNavigationButtons()
}

// updateTreeView rebuilds the tree view with the example structure
func (ed *ExamplesDialog) updateTreeView(rootNode *models.FileNode) {
	// Store node data for tree operations
	nodeData := make(map[string]*models.FileNode)

	// Build the tree structure
	ed.treeView = widget.NewTree(
		func(uid widget.TreeNodeID) []widget.TreeNodeID {
			if uid == "" {
				// Root level
				return []string{rootNode.Name}
			}

			node, exists := nodeData[uid]
			if !exists {
				return nil
			}

			var children []widget.TreeNodeID
			for _, child := range node.Children {
				childID := uid + "/" + child.Name
				nodeData[childID] = &child
				children = append(children, childID)
			}
			return children
		},
		func(uid widget.TreeNodeID) bool {
			if uid == "" {
				return true
			}

			node, exists := nodeData[uid]
			if !exists {
				return false
			}

			return node.Type == models.NodeTypeDirectory && len(node.Children) > 0
		},
		func(branch bool) fyne.CanvasObject {
			typeLabel := widget.NewLabel("[?]")
			nameLabel := widget.NewLabel("Item")

			return container.NewHBox(typeLabel, nameLabel)
		},
		func(uid widget.TreeNodeID, branch bool, item fyne.CanvasObject) {
			var node *models.FileNode

			if uid == rootNode.Name {
				node = rootNode
			} else {
				var exists bool
				node, exists = nodeData[uid]
				if !exists {
					return
				}
			}

			hbox := item.(*fyne.Container)
			typeLabel := hbox.Objects[0].(*widget.Label)
			nameLabel := hbox.Objects[1].(*widget.Label)

			// Set type indicator based on node type and category
			if node.Type == models.NodeTypeDirectory {
				typeLabel.SetText("[DIR]")
			} else {
				typeLabel.SetText(ed.getFileTypeText(node.Category))
			}

			// Set label with proper styling
			displayName := node.Name
			if node.Description != "" {
				displayName += fmt.Sprintf(" (%s)", node.Description)
			}

			nameLabel.SetText(displayName)

			// Apply highlighting if needed
			if node.IsHighlight {
				nameLabel.TextStyle.Bold = true
			}
		},
	)

	// Initialize root node in nodeData
	nodeData[rootNode.Name] = rootNode

	// Refresh the tree view in the parent container
	ed.refreshTreeContainer()
}

// getFileTypeText returns appropriate text indicator for different file categories
func (ed *ExamplesDialog) getFileTypeText(category models.FileCategory) string {
	switch category {
	case models.CategoryComponent:
		return "[COMP]" // React component
	case models.CategoryHook:
		return "[HOOK]" // Hook
	case models.CategoryService:
		return "[SVC]" // Service/API
	case models.CategoryConfig:
		return "[CFG]" // Configuration
	case models.CategoryTest:
		return "[TEST]" // Test file
	case models.CategoryStyle:
		return "[CSS]" // Style file
	case models.CategoryUtil:
		return "[UTIL]" // Utility
	default:
		return "[FILE]" // Default file
	}
}

// refreshTreeContainer refreshes the tree view container
func (ed *ExamplesDialog) refreshTreeContainer() {
	// Find the tree container and refresh it
	// This is a workaround since Fyne doesn't provide direct tree replacement
	if ed.treeView != nil {
		ed.treeView.Refresh()
	}
}

// previousExample navigates to previous example
func (ed *ExamplesDialog) previousExample() {
	if ed.currentExample > 0 {
		ed.currentExample--
		ed.examplesList.Select(ed.currentExample)
		ed.loadExample()
	}
}

// nextExample navigates to next example
func (ed *ExamplesDialog) nextExample() {
	if ed.currentExample < len(ed.examples)-1 {
		ed.currentExample++
		ed.examplesList.Select(ed.currentExample)
		ed.loadExample()
	}
}

// updateNavigationButtons updates the state of navigation buttons
func (ed *ExamplesDialog) updateNavigationButtons() {
	if ed.navigation == nil {
		return
	}

	prevButton := ed.navigation.Objects[0].(*widget.Button)
	nextButton := ed.navigation.Objects[1].(*widget.Button)

	// Previous button
	if ed.currentExample == 0 {
		prevButton.Disable()
	} else {
		prevButton.Enable()
	}

	// Next button
	if ed.currentExample >= len(ed.examples)-1 {
		nextButton.Disable()
	} else {
		nextButton.Enable()
	}
}

// Show displays the examples dialog
func (ed *ExamplesDialog) Show() {
	ed.dialog.Show()
}
