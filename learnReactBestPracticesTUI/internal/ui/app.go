package ui

import (
	"fmt"
	"react-best-practices-tui/internal/lessons"
	"react-best-practices-tui/internal/models"
	"strings"

	"github.com/charmbracelet/bubbles/key"
	"github.com/charmbracelet/bubbles/list"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

// App represents the main application model
type App struct {
	state         models.AppState
	width         int
	height        int
	lessons       []models.Lesson
	currentLesson int
	lessonList    list.Model
	progress      models.Progress
	keymap        keyMap
	styles        Styles
	quizState     QuizState
}

// keyMap defines the key bindings
type keyMap struct {
	Up    key.Binding
	Down  key.Binding
	Left  key.Binding
	Right key.Binding
	Enter key.Binding
	Back  key.Binding
	Quit  key.Binding
	Help  key.Binding
	Tab   key.Binding
	Quiz  key.Binding
}

// Styles holds all the styling for the application
type Styles struct {
	Title     lipgloss.Style
	Subtitle  lipgloss.Style
	Header    lipgloss.Style
	Content   lipgloss.Style
	Highlight lipgloss.Style
	Success   lipgloss.Style
	Warning   lipgloss.Style
	Error     lipgloss.Style
	Border    lipgloss.Style
	Menu      lipgloss.Style
	StatusBar lipgloss.Style
	Tree      lipgloss.Style
	TreeGood  lipgloss.Style
	TreeBad   lipgloss.Style
	Component lipgloss.Style
	Hook      lipgloss.Style
	Service   lipgloss.Style
	Util      lipgloss.Style
	Config    lipgloss.Style
}

// QuizState holds the state for quiz mode
type QuizState struct {
	currentQuestion int
	selectedAnswer  int
	showResult      bool
	correctAnswers  int
	totalQuestions  int
	answers         []int
}

// NewApp creates a new application instance
func NewApp() *App {
	// Initialize key bindings
	keymap := keyMap{
		Up:    key.NewBinding(key.WithKeys("up", "k"), key.WithHelp("↑/k", "up")),
		Down:  key.NewBinding(key.WithKeys("down", "j"), key.WithHelp("↓/j", "down")),
		Left:  key.NewBinding(key.WithKeys("left", "h"), key.WithHelp("←/h", "left")),
		Right: key.NewBinding(key.WithKeys("right", "l"), key.WithHelp("→/l", "right")),
		Enter: key.NewBinding(key.WithKeys("enter"), key.WithHelp("enter", "select")),
		Back:  key.NewBinding(key.WithKeys("esc", "q"), key.WithHelp("esc/q", "back")),
		Quit:  key.NewBinding(key.WithKeys("ctrl+c"), key.WithHelp("ctrl+c", "quit")),
		Help:  key.NewBinding(key.WithKeys("?"), key.WithHelp("?", "help")),
		Tab:   key.NewBinding(key.WithKeys("tab"), key.WithHelp("tab", "next section")),
		Quiz:  key.NewBinding(key.WithKeys("t"), key.WithHelp("t", "take quiz")),
	}

	// Initialize styles
	styles := initStyles()

	// Load lessons
	allLessons := lessons.GetAllLessons()

	// Create lesson list items
	items := make([]list.Item, len(allLessons))
	// Initialize progress
	progress := models.Progress{
		CompletedLessons: make(map[string]bool),
		QuizScores:       make(map[string]int),
	}

	for i, lesson := range allLessons {
		items[i] = LessonItem{
			lesson:    lesson,
			completed: false, // TODO: Load from progress
			progress:  &progress,
		}
	}

	// Create lesson list
	lessonList := list.New(items, NewLessonDelegate(styles), 50, 15)
	lessonList.Title = "React Project Structure Lessons"
	lessonList.SetShowStatusBar(false)
	lessonList.SetFilteringEnabled(false)

	return &App{
		state:         models.StateMenu,
		lessons:       allLessons,
		currentLesson: 0,
		lessonList:    lessonList,
		progress:      progress,
		keymap:        keymap,
		styles:        styles,
		quizState:     QuizState{},
	}
}

// Init implements the tea.Model interface
func (a *App) Init() tea.Cmd {
	return nil
}

// Update implements the tea.Model interface
func (a *App) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	var cmd tea.Cmd

	switch msg := msg.(type) {
	case tea.WindowSizeMsg:
		a.width = msg.Width
		a.height = msg.Height
		a.lessonList.SetWidth(msg.Width - 4)
		a.lessonList.SetHeight(msg.Height - 8)

	case tea.KeyMsg:
		switch {
		case key.Matches(msg, a.keymap.Quit):
			return a, tea.Quit

		case key.Matches(msg, a.keymap.Back):
			if a.state != models.StateMenu {
				a.state = models.StateMenu
				return a, nil
			}
			return a, tea.Quit

		case key.Matches(msg, a.keymap.Help):
			if a.state != models.StateHelp {
				a.state = models.StateHelp
			} else {
				a.state = models.StateMenu
			}
			return a, nil

		case key.Matches(msg, a.keymap.Quiz):
			if a.state == models.StateLessonView {
				lesson := a.lessons[a.currentLesson]
				if len(lesson.Quiz) > 0 {
					a.startQuiz()
					a.state = models.StateQuiz
				} else {
					// Flash message for lessons without quizzes
					// This could be enhanced with a temporary message system
					return a, nil
				}
				return a, nil
			}

		case key.Matches(msg, a.keymap.Enter):
			switch a.state {
			case models.StateMenu:
				if selectedItem, ok := a.lessonList.SelectedItem().(LessonItem); ok {
					// Find the lesson index
					for i, lesson := range a.lessons {
						if lesson.ID == selectedItem.lesson.ID {
							a.currentLesson = i
							a.state = models.StateLessonView
							break
						}
					}
				}
				return a, nil
			case models.StateQuiz:
				return a.updateQuiz(msg)
			}
		}
	}

	// Update the lesson list when in menu state
	if a.state == models.StateMenu {
		a.lessonList, cmd = a.lessonList.Update(msg)
	}

	return a, cmd
}

// View implements the tea.Model interface
func (a *App) View() string {
	switch a.state {
	case models.StateMenu:
		return a.renderMenu()
	case models.StateLessonView:
		return a.renderLesson()
	case models.StateQuiz:
		return a.renderQuiz()
	case models.StateHelp:
		return a.renderHelp()
	default:
		return "Unknown state"
	}
}

// renderMenu renders the main menu
func (a *App) renderMenu() string {
	var content strings.Builder

	// Title
	title := a.styles.Title.Render("🚀 React Project Structure Best Practices")
	subtitle := a.styles.Subtitle.Render("Master the art of organizing React applications")

	content.WriteString(title)
	content.WriteString("\n")
	content.WriteString(subtitle)
	content.WriteString("\n\n")

	// Progress summary
	completedCount := len(a.progress.CompletedLessons)
	totalLessons := len(a.lessons)
	progressText := fmt.Sprintf("Progress: %d/%d lessons completed", completedCount, totalLessons)
	content.WriteString(a.styles.Content.Render(progressText))
	content.WriteString("\n\n")

	// Lesson list
	content.WriteString(a.lessonList.View())

	// Help footer
	content.WriteString("\n\n")
	helpText := "Press ? for help • Enter to select • Esc to go back • Ctrl+C to quit"
	content.WriteString(a.styles.StatusBar.Render(helpText))

	return content.String()
}

// renderLesson renders the current lesson
func (a *App) renderLesson() string {
	if a.currentLesson >= len(a.lessons) {
		return "Invalid lesson"
	}

	lesson := a.lessons[a.currentLesson]
	var content strings.Builder

	// Lesson header
	header := fmt.Sprintf("📚 %s", lesson.Title)
	content.WriteString(a.styles.Header.Render(header))
	content.WriteString("\n\n")

	// Lesson description
	content.WriteString(a.styles.Content.Render(lesson.Description))
	content.WriteString("\n\n")

	// Render content sections
	for _, section := range lesson.Content {
		sectionTitle := a.styles.Subtitle.Render(section.Title)
		content.WriteString(sectionTitle)
		content.WriteString("\n")

		switch section.Type {
		case models.ContentTypeCode:
			codeContent := a.styles.Border.Render(section.Content)
			content.WriteString(codeContent)
		case models.ContentTypeTree:
			treeContent := a.styles.Tree.Render(section.Content)
			content.WriteString(treeContent)
		case models.ContentTypePrinciple:
			principleContent := a.styles.Highlight.Render(section.Content)
			content.WriteString(principleContent)
		default:
			textContent := a.styles.Content.Render(section.Content)
			content.WriteString(textContent)
		}
		content.WriteString("\n\n")
	}

	// Examples section
	if len(lesson.Examples) > 0 {
		content.WriteString(a.styles.Subtitle.Render("📂 Examples"))
		content.WriteString("\n\n")

		for _, example := range lesson.Examples {
			exampleStyle := a.styles.TreeGood
			prefix := "✅"
			if !example.IsGood {
				exampleStyle = a.styles.TreeBad
				prefix = "❌"
			}

			exampleTitle := fmt.Sprintf("%s %s", prefix, example.Name)
			content.WriteString(a.styles.Subtitle.Render(exampleTitle))
			content.WriteString("\n")
			content.WriteString(a.styles.Content.Render(example.Description))
			content.WriteString("\n")

			// Render file tree
			treeView := a.renderFileTree(example.Structure, 0)
			content.WriteString(exampleStyle.Render(treeView))
			content.WriteString("\n")

			if example.Explanation != "" {
				content.WriteString(a.styles.Content.Render("💡 " + example.Explanation))
				content.WriteString("\n")
			}
			content.WriteString("\n")
		}
	}

	// Quiz section if available
	lesson = a.lessons[a.currentLesson]
	if len(lesson.Quiz) > 0 {
		content.WriteString(a.styles.Highlight.Render("🎯 Interactive Quiz Available"))
		content.WriteString("\n")
		quizInfo := fmt.Sprintf("📝 Test your knowledge with %d questions • Press 't' to start", len(lesson.Quiz))
		content.WriteString(a.styles.Success.Render(quizInfo))
		content.WriteString("\n")

		// Show quiz progress if completed
		if a.progress.CompletedLessons[lesson.ID] {
			if score, exists := a.progress.QuizScores[lesson.ID]; exists {
				progressInfo := fmt.Sprintf("✅ Previous score: %d%% - Retake anytime!", score)
				content.WriteString(a.styles.Success.Render(progressInfo))
				content.WriteString("\n")
			}
		}
		content.WriteString("\n")
	}

	// Navigation help
	content.WriteString("\n")
	var helpText string
	if len(lesson.Quiz) > 0 {
		helpText = "📚 Esc: back to menu • t: take quiz • ?: help • Ctrl+C: quit"
	} else {
		helpText = "📚 Esc: back to menu • ?: help • Ctrl+C: quit"
	}
	content.WriteString(a.styles.StatusBar.Render(helpText))

	return content.String()
}

// renderHelp renders the help screen
func (a *App) renderHelp() string {
	var content strings.Builder

	title := a.styles.Title.Render("📖 Help & Controls")
	content.WriteString(title)
	content.WriteString("\n\n")

	helpContent := `Navigation:
  ↑/k, ↓/j     Navigate up/down in menus and lists
  ←/h, →/l     Navigate left/right (context dependent)
  Enter        Select current item or confirm action
  Esc/q        Go back to previous screen
  ?            Show/hide this help screen
  Ctrl+C       Quit the application

Lesson Features:
  • Interactive lessons on React project structure
  • Code examples and file tree visualizations
  • Quiz questions to test your knowledge
  • Progress tracking across sessions
  • Color-coded file categories for better understanding

File Color Coding:
  🔵 Components   - React components (.jsx files)
  🟢 Hooks        - Custom React hooks (use*.js)
  🟡 Services     - API calls and external integrations
  🟠 Utils        - Helper functions and utilities
  🟣 Config       - Configuration files
  🔴 Tests        - Test files
  ⚪ General      - Other files`

	content.WriteString(a.styles.Content.Render(helpContent))
	content.WriteString("\n\n")

	backText := "Press Esc or ? to go back"
	content.WriteString(a.styles.StatusBar.Render(backText))

	return content.String()
}

// renderFileTree renders a file tree structure
func (a *App) renderFileTree(node models.FileNode, depth int) string {
	var result strings.Builder

	// Indentation
	indent := strings.Repeat("  ", depth)

	// Tree connector
	connector := "├── "
	if depth == 0 {
		connector = ""
	}

	// Icon and styling based on type and category
	icon := "📄"
	style := a.styles.Content

	if node.Type == models.NodeTypeDirectory {
		icon = "📁"
		style = a.styles.Highlight
	} else {
		// File type specific icons and colors
		switch node.Category {
		case models.CategoryComponent:
			icon = "🔵"
			style = a.styles.Component
		case models.CategoryHook:
			icon = "🟢"
			style = a.styles.Hook
		case models.CategoryService:
			icon = "🟡"
			style = a.styles.Service
		case models.CategoryUtil:
			icon = "🟠"
			style = a.styles.Util
		case models.CategoryConfig:
			icon = "🟣"
			style = a.styles.Config
		case models.CategoryTest:
			icon = "🔴"
		}
	}

	// Highlight important files
	if node.IsHighlight {
		style = a.styles.Success
	}

	fileName := fmt.Sprintf("%s%s %s %s", indent, connector, icon, node.Name)
	result.WriteString(style.Render(fileName))
	result.WriteString("\n")

	// Render children
	for _, child := range node.Children {
		result.WriteString(a.renderFileTree(child, depth+1))
	}

	return result.String()
}

// initStyles initializes all the styles used in the application
func initStyles() Styles {
	return Styles{
		Title: lipgloss.NewStyle().
			Foreground(lipgloss.Color("#FF6B6B")).
			Bold(true).
			Padding(0, 1),

		Subtitle: lipgloss.NewStyle().
			Foreground(lipgloss.Color("#4ECDC4")).
			Bold(true),

		Header: lipgloss.NewStyle().
			Foreground(lipgloss.Color("#45B7D1")).
			Bold(true).
			Padding(0, 1),

		Content: lipgloss.NewStyle().
			Foreground(lipgloss.Color("#FFFFFF")),

		Highlight: lipgloss.NewStyle().
			Foreground(lipgloss.Color("#FFE66D")).
			Bold(true),

		Success: lipgloss.NewStyle().
			Foreground(lipgloss.Color("#96CEB4")).
			Bold(true),

		Warning: lipgloss.NewStyle().
			Foreground(lipgloss.Color("#FFEAA7")),

		Error: lipgloss.NewStyle().
			Foreground(lipgloss.Color("#FF7675")),

		Border: lipgloss.NewStyle().
			Border(lipgloss.RoundedBorder()).
			BorderForeground(lipgloss.Color("#74B9FF")).
			Padding(1, 2),

		Menu: lipgloss.NewStyle().
			Padding(1, 2),

		StatusBar: lipgloss.NewStyle().
			Foreground(lipgloss.Color("#A0A0A0")).
			Italic(true),

		Tree: lipgloss.NewStyle().
			Foreground(lipgloss.Color("#DDA0DD")),

		TreeGood: lipgloss.NewStyle().
			Border(lipgloss.RoundedBorder()).
			BorderForeground(lipgloss.Color("#96CEB4")).
			Padding(1, 2),

		TreeBad: lipgloss.NewStyle().
			Border(lipgloss.RoundedBorder()).
			BorderForeground(lipgloss.Color("#FF7675")).
			Padding(1, 2),

		Component: lipgloss.NewStyle().
			Foreground(lipgloss.Color("#74B9FF")),

		Hook: lipgloss.NewStyle().
			Foreground(lipgloss.Color("#00B894")),

		Service: lipgloss.NewStyle().
			Foreground(lipgloss.Color("#FDCB6E")),

		Util: lipgloss.NewStyle().
			Foreground(lipgloss.Color("#E17055")),

		Config: lipgloss.NewStyle().
			Foreground(lipgloss.Color("#A29BFE")),
	}
}

// startQuiz initializes the quiz state
func (a *App) startQuiz() {
	lesson := a.lessons[a.currentLesson]
	a.quizState = QuizState{
		currentQuestion: 0,
		selectedAnswer:  0,
		showResult:      false,
		correctAnswers:  0,
		totalQuestions:  len(lesson.Quiz),
		answers:         make([]int, len(lesson.Quiz)),
	}
}

// updateQuiz handles quiz interactions
func (a *App) updateQuiz(msg tea.KeyMsg) (*App, tea.Cmd) {
	lesson := a.lessons[a.currentLesson]

	if a.quizState.showResult {
		// In result screen, any key goes back to lesson
		a.state = models.StateLessonView
		return a, nil
	}

	switch {
	case key.Matches(msg, a.keymap.Up):
		if a.quizState.selectedAnswer > 0 {
			a.quizState.selectedAnswer--
		}
	case key.Matches(msg, a.keymap.Down):
		question := lesson.Quiz[a.quizState.currentQuestion]
		if a.quizState.selectedAnswer < len(question.Options)-1 {
			a.quizState.selectedAnswer++
		}
	case key.Matches(msg, a.keymap.Enter):
		// Record answer and move to next question
		a.quizState.answers[a.quizState.currentQuestion] = a.quizState.selectedAnswer

		question := lesson.Quiz[a.quizState.currentQuestion]
		if a.quizState.selectedAnswer == question.Correct {
			a.quizState.correctAnswers++
		}

		a.quizState.currentQuestion++
		a.quizState.selectedAnswer = 0

		// Check if quiz is complete
		if a.quizState.currentQuestion >= len(lesson.Quiz) {
			a.quizState.showResult = true
			// Calculate score percentage
			percentage := int(float64(a.quizState.correctAnswers) / float64(a.quizState.totalQuestions) * 100)
			a.progress.QuizScores[lesson.ID] = percentage

			// Mark lesson as completed if score is good
			if percentage >= 70 {
				a.progress.CompletedLessons[lesson.ID] = true
			}

			// Update lesson list items with new progress
			items := make([]list.Item, len(a.lessons))
			for i, l := range a.lessons {
				items[i] = LessonItem{
					lesson:    l,
					completed: a.progress.CompletedLessons[l.ID],
					progress:  &a.progress,
				}
			}
			a.lessonList.SetItems(items)
		}
	case key.Matches(msg, a.keymap.Back):
		a.state = models.StateLessonView
	}

	return a, nil
}

// renderQuiz renders the quiz interface
func (a *App) renderQuiz() string {
	lesson := a.lessons[a.currentLesson]
	var content strings.Builder

	if a.quizState.showResult {
		return a.renderQuizResult(lesson)
	}

	// Quiz header
	header := fmt.Sprintf("🎯 Quiz: %s", lesson.Title)
	content.WriteString(a.styles.Header.Render(header))
	content.WriteString("\n\n")

	// Progress indicator
	progress := fmt.Sprintf("Question %d of %d", a.quizState.currentQuestion+1, a.quizState.totalQuestions)
	content.WriteString(a.styles.Content.Render(progress))
	content.WriteString("\n\n")

	// Current question
	question := lesson.Quiz[a.quizState.currentQuestion]
	questionText := a.styles.Subtitle.Render(question.Question)
	content.WriteString(questionText)
	content.WriteString("\n\n")

	// Answer options
	for i, option := range question.Options {
		optionStyle := a.styles.Content
		prefix := "  "

		if i == a.quizState.selectedAnswer {
			optionStyle = a.styles.Highlight
			prefix = "→ "
		}

		optionText := fmt.Sprintf("%s%c) %s", prefix, 'A'+i, option)
		content.WriteString(optionStyle.Render(optionText))
		content.WriteString("\n")
	}

	// Help text
	content.WriteString("\n\n")
	helpText := "Use ↑/↓ to select • Enter to confirm • Esc to go back"
	content.WriteString(a.styles.StatusBar.Render(helpText))

	return content.String()
}

// renderQuizResult renders the quiz completion screen
func (a *App) renderQuizResult(lesson models.Lesson) string {
	var content strings.Builder

	// Result header
	header := "🎉 Quiz Complete!"
	content.WriteString(a.styles.Header.Render(header))
	content.WriteString("\n\n")

	// Score
	percentage := float64(a.quizState.correctAnswers) / float64(a.quizState.totalQuestions) * 100
	scoreText := fmt.Sprintf("Score: %d/%d (%.0f%%)",
		a.quizState.correctAnswers, a.quizState.totalQuestions, percentage)

	scoreStyle := a.styles.Success
	if percentage < 70 {
		scoreStyle = a.styles.Warning
	}
	if percentage < 50 {
		scoreStyle = a.styles.Error
	}

	content.WriteString(scoreStyle.Render(scoreText))
	content.WriteString("\n\n")

	// Performance message
	var message string
	if percentage >= 90 {
		message = "🌟 Excellent! You've mastered this topic!"
	} else if percentage >= 70 {
		message = "👍 Good job! You understand the key concepts."
	} else if percentage >= 50 {
		message = "📖 Not bad, but you might want to review the lesson."
	} else {
		message = "🔄 Consider reviewing the lesson before continuing."
	}

	content.WriteString(a.styles.Content.Render(message))
	content.WriteString("\n\n")

	// Detailed results
	content.WriteString(a.styles.Subtitle.Render("Review:"))
	content.WriteString("\n")

	for i, question := range lesson.Quiz {
		userAnswer := a.quizState.answers[i]
		isCorrect := userAnswer == question.Correct

		status := "❌"
		if isCorrect {
			status = "✅"
		}

		questionSummary := fmt.Sprintf("%s Q%d: %s", status, i+1, question.Question[:min(50, len(question.Question))])
		if len(question.Question) > 50 {
			questionSummary += "..."
		}

		resultStyle := a.styles.Content
		if isCorrect {
			resultStyle = a.styles.Success
		} else {
			resultStyle = a.styles.Error
		}

		content.WriteString(resultStyle.Render(questionSummary))
		content.WriteString("\n")

		if !isCorrect {
			explanation := fmt.Sprintf("   Correct: %c) %s",
				'A'+question.Correct, question.Options[question.Correct])
			content.WriteString(a.styles.StatusBar.Render(explanation))
			content.WriteString("\n")

			if question.Explanation != "" {
				expText := fmt.Sprintf("   💡 %s", question.Explanation)
				content.WriteString(a.styles.StatusBar.Render(expText))
				content.WriteString("\n")
			}
		}
	}

	// Help text
	content.WriteString("\n")
	helpText := "Press any key to return to the lesson"
	content.WriteString(a.styles.StatusBar.Render(helpText))

	return content.String()
}

// min returns the minimum of two integers
func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
