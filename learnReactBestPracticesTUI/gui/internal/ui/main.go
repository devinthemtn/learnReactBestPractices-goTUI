package ui

import (
	"fmt"
	"log"
	"time"

	"react-best-practices-gui/internal/lessons"
	"react-best-practices-gui/internal/models"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/dialog"
	"fyne.io/fyne/v2/layout"
	"fyne.io/fyne/v2/widget"
)

// MainWindow represents the main application window
type MainWindow struct {
	app      fyne.App
	window   fyne.Window
	lessons  []models.Lesson
	progress models.Progress

	// UI Components
	lessonList    *widget.List
	contentArea   *container.Scroll
	currentLesson *models.Lesson
	mainSplit     *container.Split

	// Progress tracking
	progressBar *widget.ProgressBar
	statusLabel *widget.Label
}

// NewMainWindow creates a new main window
func NewMainWindow(app fyne.App) *MainWindow {
	log.Println("Creating new main window...")

	if app == nil {
		log.Fatal("App is nil")
		return nil
	}

	window := app.NewWindow("React Best Practices - Interactive Learning")
	if window == nil {
		log.Fatal("Failed to create window")
		return nil
	}

	window.SetMaster()
	window.Resize(fyne.NewSize(1400, 900)) // Larger default size for better sidebar space
	window.CenterOnScreen()

	log.Println("Loading lessons...")
	allLessons := lessons.GetAllLessons()
	if len(allLessons) == 0 {
		log.Println("Warning: No lessons loaded")
	} else {
		log.Printf("Loaded %d lessons", len(allLessons))
	}

	mw := &MainWindow{
		app:     app,
		window:  window,
		lessons: allLessons,
		progress: models.Progress{
			CompletedLessons: make(map[string]bool),
			QuizScores:       make(map[string]int),
			LastAccessed:     time.Now(),
		},
	}

	log.Println("Setting up UI...")
	mw.setupUI()
	log.Println("Main window created successfully")
	return mw
}

// setupUI creates and arranges all UI components
func (mw *MainWindow) setupUI() {
	// Create menu bar
	mw.createMenuBar()

	// Create main content
	mainContent := mw.createMainContent()

	// Create status bar
	statusBar := mw.createStatusBar()

	// Combine everything
	content := container.NewBorder(
		nil,         // top
		statusBar,   // bottom
		nil,         // left
		nil,         // right
		mainContent, // center
	)

	mw.window.SetContent(content)
}

// createMenuBar creates the application menu
func (mw *MainWindow) createMenuBar() {
	// File menu
	fileMenu := fyne.NewMenu("File",
		fyne.NewMenuItem("New Progress", func() {
			mw.resetProgress()
		}),
		fyne.NewMenuItemSeparator(),
		fyne.NewMenuItem("Quit", func() {
			mw.app.Quit()
		}),
	)

	// View menu
	viewMenu := fyne.NewMenu("View",
		fyne.NewMenuItem("Narrow Sidebar (30%)", func() {
			if mw.mainSplit != nil {
				mw.mainSplit.SetOffset(0.3)
			}
		}),
		fyne.NewMenuItem("Normal Sidebar (40%)", func() {
			if mw.mainSplit != nil {
				mw.mainSplit.SetOffset(0.4)
			}
		}),
		fyne.NewMenuItem("Wide Sidebar (50%)", func() {
			if mw.mainSplit != nil {
				mw.mainSplit.SetOffset(0.5)
			}
		}),
		fyne.NewMenuItemSeparator(),
		fyne.NewMenuItem("Reset Window Size", func() {
			mw.window.Resize(fyne.NewSize(1400, 900))
			mw.window.CenterOnScreen()
		}),
		fyne.NewMenuItem("Toggle Fullscreen", func() {
			mw.window.SetFullScreen(!mw.window.FullScreen())
		}),
	)

	// Help menu
	helpMenu := fyne.NewMenu("Help",
		fyne.NewMenuItem("About", func() {
			mw.showAboutDialog()
		}),
		fyne.NewMenuItem("Keyboard Shortcuts", func() {
			mw.showShortcutsDialog()
		}),
	)

	mainMenu := fyne.NewMainMenu(fileMenu, viewMenu, helpMenu)
	mw.window.SetMainMenu(mainMenu)
}

// createMainContent creates the main content area with lessons and content
func (mw *MainWindow) createMainContent() *container.Split {
	// Left panel - Lesson list
	leftPanel := mw.createLessonPanel()

	// Right panel - Content area
	rightPanel := mw.createContentPanel()

	// Create split container with better proportions for lesson visibility
	mw.mainSplit = container.NewHSplit(leftPanel, rightPanel)
	mw.mainSplit.SetOffset(0.4) // 40% for lesson list, 60% for content - more space for all lessons

	return mw.mainSplit
}

// createLessonPanel creates the left panel with lesson list
func (mw *MainWindow) createLessonPanel() *fyne.Container {
	// Compact title with icon
	title := widget.NewLabelWithStyle("Lessons", fyne.TextAlignCenter, fyne.TextStyle{Bold: true})

	// Compact progress display
	mw.progressBar = widget.NewProgressBar()
	mw.updateProgressBar()

	// More compact progress text
	progressLabel := widget.NewLabel(fmt.Sprintf("%d/%d completed",
		mw.getCompletedLessonsCount(), len(mw.lessons)))
	progressLabel.Alignment = fyne.TextAlignCenter

	// Improved lesson list with compact layout for each item
	mw.lessonList = widget.NewList(
		func() int { return len(mw.lessons) },
		func() fyne.CanvasObject {
			// Title label with better styling - no truncation
			titleLabel := widget.NewLabel("Lesson Title")
			titleLabel.Wrapping = fyne.TextWrapWord
			titleLabel.TextStyle.Bold = true

			// Progress indicator (quiz questions count)
			detailLabel := widget.NewLabel("")
			detailLabel.TextStyle.Italic = true

			// Lesson number badge
			numberLabel := widget.NewLabel("0")
			numberLabel.TextStyle.Bold = true

			// Create vertical layout - no horizontal constraints
			headerRow := container.NewHBox(
				numberLabel,
				layout.NewSpacer(),
			)

			content := container.NewVBox(
				headerRow,
				titleLabel,
				detailLabel,
			)

			return content
		},
		func(id widget.ListItemID, item fyne.CanvasObject) {
			lesson := mw.lessons[id]
			vbox := item.(*fyne.Container)
			headerRow := vbox.Objects[0].(*fyne.Container)
			titleLabel := vbox.Objects[1].(*widget.Label)
			detailLabel := vbox.Objects[2].(*widget.Label)

			// Lesson number
			numberLabel := headerRow.Objects[0].(*widget.Label)
			numberLabel.SetText(fmt.Sprintf("%d.", id+1))

			// Title without truncation - full text on its own line
			var statusPrefix string
			if mw.progress.CompletedLessons[lesson.ID] {
				statusPrefix = "[DONE] "
			} else {
				statusPrefix = ""
			}
			titleLabel.SetText(statusPrefix + lesson.Title)

			// Show quiz count and estimated time with clear symbols
			quizCount := len(lesson.Quiz)
			duration := lesson.Duration.Minutes()
			detailText := fmt.Sprintf("Quiz: %d questions | Time: %.0f min", quizCount, duration)
			detailLabel.SetText(detailText)
		},
	)

	mw.lessonList.OnSelected = func(id widget.ListItemID) {
		mw.selectLesson(id)
	}

	// Select first lesson by default if we have lessons
	if len(mw.lessons) > 0 {
		mw.lessonList.Select(0)
	}

	// Create scrollable lesson list that uses most available space
	lessonScroll := container.NewScroll(mw.lessonList)
	lessonScroll.SetMinSize(fyne.NewSize(350, 500)) // Ensure adequate minimum size for readability

	// Minimal header to maximize list space
	header := container.NewVBox(
		title,
		progressLabel,
		mw.progressBar,
		widget.NewSeparator(),
	)

	// Use border layout to maximize list area
	panel := container.NewBorder(
		header,       // top - minimal space
		nil,          // bottom
		nil,          // left
		nil,          // right
		lessonScroll, // center - maximum space for lessons
	)

	// Set minimum size for better lesson visibility with all content
	panel.Resize(fyne.NewSize(400, 700))
	return panel
}

// createContentPanel creates the right panel for lesson content
func (mw *MainWindow) createContentPanel() *fyne.Container {
	log.Println("Creating content panel...")

	// Content area (scrollable)
	defaultLabel := widget.NewLabel("Select a lesson to begin learning!")
	if defaultLabel == nil {
		log.Fatal("Failed to create default label")
		return nil
	}

	mw.contentArea = container.NewScroll(defaultLabel)
	if mw.contentArea == nil {
		log.Fatal("Failed to create scroll container")
		return nil
	}

	mw.contentArea.SetMinSize(fyne.NewSize(600, 500))

	// Action buttons
	actionButtons := container.NewHBox(
		widget.NewButton("Take Quiz", func() {
			if mw.currentLesson != nil && len(mw.currentLesson.Quiz) > 0 {
				mw.showQuiz()
			}
		}),
		widget.NewButton("Mark Complete", func() {
			if mw.currentLesson != nil {
				mw.markLessonComplete()
			}
		}),
		layout.NewSpacer(),
		widget.NewButton("View Examples", func() {
			if mw.currentLesson != nil && len(mw.currentLesson.Examples) > 0 {
				mw.showExamples()
			}
		}),
	)

	return container.NewVBox(
		mw.contentArea,
		widget.NewSeparator(),
		actionButtons,
	)
}

// createStatusBar creates the bottom status bar
func (mw *MainWindow) createStatusBar() *fyne.Container {
	mw.statusLabel = widget.NewLabel("Ready to learn React best practices!")

	return container.NewHBox(
		mw.statusLabel,
		layout.NewSpacer(),
		widget.NewLabel(fmt.Sprintf("Total time: %v", mw.progress.TotalTime.Round(time.Minute))),
	)
}

// selectLesson handles lesson selection
func (mw *MainWindow) selectLesson(id widget.ListItemID) {
	log.Printf("Selecting lesson %d", id)

	if id < 0 || id >= len(mw.lessons) {
		log.Printf("Invalid lesson ID: %d (have %d lessons)", id, len(mw.lessons))
		return
	}

	lesson := &mw.lessons[id]

	mw.currentLesson = lesson
	log.Printf("Selected lesson: %s", lesson.Title)

	mw.displayLessonContent(lesson)

	if mw.statusLabel != nil {
		mw.statusLabel.SetText(fmt.Sprintf("Reading: %s", lesson.Title))
	}
}

// displayLessonContent shows the lesson content in the content area
func (mw *MainWindow) displayLessonContent(lesson *models.Lesson) {
	log.Printf("Displaying content for lesson: %s", lesson.Title)

	if mw.contentArea == nil {
		log.Println("Error: contentArea is nil")
		return
	}

	content := container.NewVBox()

	// Lesson header
	titleStyle := widget.NewLabelWithStyle(lesson.Title, fyne.TextAlignCenter, fyne.TextStyle{Bold: true})
	titleStyle.Resize(fyne.NewSize(500, 30))

	descriptionLabel := widget.NewLabel(lesson.Description)
	descriptionLabel.Wrapping = fyne.TextWrapWord

	durationLabel := widget.NewLabel(fmt.Sprintf("Estimated time: %v", lesson.Duration))

	header := container.NewVBox(
		titleStyle,
		widget.NewSeparator(),
		descriptionLabel,
		durationLabel,
		widget.NewSeparator(),
	)

	content.Add(header)

	// Add content sections
	for _, section := range lesson.Content {
		sectionWidget := mw.createContentSection(section)
		content.Add(sectionWidget)
		content.Add(widget.NewSeparator())
	}

	// Add quiz info if available
	if len(lesson.Quiz) > 0 {
		quizInfo := container.NewVBox(
			widget.NewLabelWithStyle("Quiz Available", fyne.TextAlignLeading, fyne.TextStyle{Bold: true}),
			widget.NewLabel(fmt.Sprintf("Test your knowledge with %d questions", len(lesson.Quiz))),
		)
		content.Add(quizInfo)
	}

	if mw.contentArea != nil {
		mw.contentArea.Content = content
		mw.contentArea.Refresh()
		log.Println("Content updated successfully")
	} else {
		log.Println("Error: contentArea is nil when trying to set content")
	}
}

// createContentSection creates a widget for a content section
func (mw *MainWindow) createContentSection(section models.ContentSection) *fyne.Container {
	sectionContainer := container.NewVBox()

	// Section title
	if section.Title != "" {
		titleLabel := widget.NewLabelWithStyle(section.Title, fyne.TextAlignLeading, fyne.TextStyle{Bold: true})
		sectionContainer.Add(titleLabel)
	}

	// Section content
	switch section.Type {
	case models.ContentTypeCode:
		// Code sections - use a different widget for code
		codeLabel := widget.NewLabel(section.Content)
		codeLabel.TextStyle.Monospace = true
		sectionContainer.Add(codeLabel)
	case models.ContentTypePrinciple:
		// Principles get emphasized styling - use regular label for now
		principleLabel := widget.NewLabel(section.Content)
		principleLabel.TextStyle.Bold = true
		sectionContainer.Add(principleLabel)
	default:
		// Default content - use rich text from markdown
		contentLabel := widget.NewRichTextFromMarkdown(section.Content)
		contentLabel.Wrapping = fyne.TextWrapWord
		sectionContainer.Add(contentLabel)
	}

	return sectionContainer
}

// showQuiz displays a quiz dialog
func (mw *MainWindow) showQuiz() {
	if mw.currentLesson == nil || len(mw.currentLesson.Quiz) == 0 {
		return
	}

	quiz := NewQuizDialog(mw.currentLesson.Quiz, mw.window)
	quiz.SetOnComplete(func(score int, total int) {
		mw.progress.QuizScores[mw.currentLesson.ID] = score

		// Show result
		percentage := float64(score) / float64(total) * 100
		message := fmt.Sprintf("Quiz completed!\nScore: %d/%d (%.1f%%)", score, total, percentage)

		if percentage >= 80 {
			message += "\n\nExcellent work! You've mastered this topic."
			mw.markLessonComplete()
		} else if percentage >= 60 {
			message += "\n\nGood job! Consider reviewing the lesson for better understanding."
		} else {
			message += "\n\nPlease review the lesson material and try again."
		}

		dialog.ShowInformation("Quiz Results", message, mw.window)
		mw.updateProgressBar()
		mw.lessonList.Refresh()
	})

	quiz.Show()
}

// showExamples displays project structure examples
func (mw *MainWindow) showExamples() {
	if mw.currentLesson == nil || len(mw.currentLesson.Examples) == 0 {
		return
	}

	examples := NewExamplesDialog(mw.currentLesson.Examples, mw.window)
	examples.Show()
}

// markLessonComplete marks the current lesson as completed
func (mw *MainWindow) markLessonComplete() {
	if mw.currentLesson == nil {
		return
	}

	mw.progress.CompletedLessons[mw.currentLesson.ID] = true
	mw.updateProgressBar()
	mw.lessonList.Refresh()

	mw.statusLabel.SetText(fmt.Sprintf("Completed: %s", mw.currentLesson.Title))

	// Show congratulations if all lessons are complete
	if mw.getCompletedLessonsCount() == len(mw.lessons) {
		dialog.ShowInformation("Congratulations!",
			"You've completed all lessons! You're now ready to build well-structured React applications.",
			mw.window)
	}
}

// Helper methods

func (mw *MainWindow) getCompletedLessonsCount() int {
	count := 0
	for range mw.progress.CompletedLessons {
		count++
	}
	return count
}

func (mw *MainWindow) updateProgressBar() {
	completed := float64(mw.getCompletedLessonsCount())
	total := float64(len(mw.lessons))
	mw.progressBar.SetValue(completed / total)
}

func (mw *MainWindow) resetProgress() {
	dialog.ShowConfirm("Reset Progress",
		"Are you sure you want to reset all progress? This cannot be undone.",
		func(confirmed bool) {
			if confirmed {
				mw.progress = models.Progress{
					CompletedLessons: make(map[string]bool),
					QuizScores:       make(map[string]int),
					LastAccessed:     time.Now(),
				}
				mw.updateProgressBar()
				mw.lessonList.Refresh()
				mw.statusLabel.SetText("Progress reset. Ready to start fresh!")
			}
		},
		mw.window)
}

func (mw *MainWindow) showAboutDialog() {
	about := dialog.NewInformation("About React Best Practices GUI",
		`React Best Practices GUI v1.0.0

An interactive application for learning React project structure and filesystem best practices.

Features:
- 9 comprehensive lessons
- Interactive quizzes
- Visual project examples
- Progress tracking
- Modern GUI interface

Built with Fyne framework and Go.

(C) 2024 React Best Practices Project`,
		mw.window)

	about.Show()
}

func (mw *MainWindow) showShortcutsDialog() {
	shortcuts := dialog.NewInformation("Keyboard Shortcuts",
		`Keyboard Shortcuts:

Navigation:
- Up/Down - Navigate lesson list
- Enter - Select lesson
- Tab - Move between panels

Sidebar Layout:
- View Menu - Adjust sidebar width (30%, 40%, 50%)
- Compact lesson display with progress indicators
- Smart text truncation for better visibility

Actions:
- Ctrl+Q - Quit application
- Ctrl+R - Reset progress
- Ctrl+T - Take quiz (if available)
- F11 - Toggle fullscreen

Mouse:
- Click to select lessons
- Click buttons to perform actions
- Scroll to navigate content
- Use View menu to adjust sidebar size`,
		mw.window)

	shortcuts.Show()
}

// ShowAndRun displays the window and runs the application
func (mw *MainWindow) ShowAndRun() {
	mw.window.ShowAndRun()
}
