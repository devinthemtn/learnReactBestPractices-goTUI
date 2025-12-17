package ui

import (
	"fmt"
	"io"
	"react-best-practices-tui/internal/models"

	"github.com/charmbracelet/bubbles/list"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

// LessonItem represents a lesson in the list
type LessonItem struct {
	lesson    models.Lesson
	completed bool
	progress  *models.Progress
}

// FilterValue implements list.Item interface
func (i LessonItem) FilterValue() string {
	return i.lesson.Title
}

// Title returns the lesson title for display
func (i LessonItem) Title() string {
	return i.lesson.Title
}

// Description returns the lesson description
func (i LessonItem) Description() string {
	return i.lesson.Description
}

// IsCompleted returns whether the lesson is completed
func (i LessonItem) IsCompleted() bool {
	if i.progress != nil {
		return i.progress.CompletedLessons[i.lesson.ID]
	}
	return i.completed
}

// Duration returns the estimated duration
func (i LessonItem) Duration() string {
	return fmt.Sprintf("~%d min", int(i.lesson.Duration.Minutes()))
}

// LessonDelegate handles rendering of lesson items in the list
type LessonDelegate struct {
	styles Styles
}

// NewLessonDelegate creates a new lesson delegate
func NewLessonDelegate(styles Styles) LessonDelegate {
	return LessonDelegate{
		styles: styles,
	}
}

// Height implements list.ItemDelegate interface
func (d LessonDelegate) Height() int {
	return 3
}

// Spacing implements list.ItemDelegate interface
func (d LessonDelegate) Spacing() int {
	return 1
}

// Update implements list.ItemDelegate interface
func (d LessonDelegate) Update(_ tea.Msg, _ *list.Model) tea.Cmd {
	return nil
}

// Render implements list.ItemDelegate interface
func (d LessonDelegate) Render(w io.Writer, m list.Model, index int, listItem list.Item) {
	i, ok := listItem.(LessonItem)
	if !ok {
		return
	}

	// Determine if this item is selected
	isSelected := index == m.Index()

	// Status indicator and score
	statusIcon := "⭕" // Not completed
	scoreText := ""
	if i.IsCompleted() {
		statusIcon = "✅" // Completed
		if i.progress != nil {
			if score, exists := i.progress.QuizScores[i.lesson.ID]; exists {
				scoreText = fmt.Sprintf(" (%d%%)", score)
			}
		}
	}

	// Lesson number
	lessonNum := fmt.Sprintf("%02d", index+1)

	// Create the main title line
	titleStyle := d.styles.Content
	if isSelected {
		titleStyle = d.styles.Highlight
	}

	title := fmt.Sprintf("%s Lesson %s: %s%s", statusIcon, lessonNum, i.Title(), scoreText)
	titleLine := titleStyle.Render(title)

	// Create the description line
	descStyle := d.styles.StatusBar
	if isSelected {
		descStyle = d.styles.Content
	}

	description := fmt.Sprintf("   %s", i.Description())
	descLine := descStyle.Render(description)

	// Create the duration line
	durationStyle := d.styles.StatusBar
	if isSelected {
		durationStyle = d.styles.Warning
	}

	duration := fmt.Sprintf("   Duration: %s", i.Duration())
	durationLine := durationStyle.Render(duration)

	// Add selection styling
	content := fmt.Sprintf("%s\n%s\n%s", titleLine, descLine, durationLine)

	if isSelected {
		content = d.styles.Border.Copy().
			BorderLeft(true).
			BorderForeground(lipgloss.Color("#FF6B6B")).
			PaddingLeft(1).
			Render(content)
	} else {
		content = lipgloss.NewStyle().PaddingLeft(2).Render(content)
	}

	fmt.Fprint(w, content)
}
