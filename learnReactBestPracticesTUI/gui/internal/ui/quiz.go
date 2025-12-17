package ui

import (
	"fmt"

	"react-best-practices-gui/internal/models"

	"fyne.io/fyne/v2"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/dialog"
	"fyne.io/fyne/v2/widget"
)

// QuizDialog represents a quiz dialog window
type QuizDialog struct {
	questions  []models.QuizQuestion
	window     fyne.Window
	dialog     dialog.Dialog
	onComplete func(score int, total int)

	// Current state
	currentQuestion int
	score           int
	answers         []int

	// UI components
	questionLabel *widget.Label
	optionsRadio  *widget.RadioGroup
	progressLabel *widget.Label
	progressBar   *widget.ProgressBar
	nextButton    *widget.Button
	prevButton    *widget.Button
	submitButton  *widget.Button
}

// NewQuizDialog creates a new quiz dialog
func NewQuizDialog(questions []models.QuizQuestion, parent fyne.Window) *QuizDialog {
	qd := &QuizDialog{
		questions:       questions,
		window:          parent,
		currentQuestion: 0,
		score:           0,
		answers:         make([]int, len(questions)),
	}

	// Initialize answers to -1 (no selection)
	for i := range qd.answers {
		qd.answers[i] = -1
	}

	qd.setupUI()
	return qd
}

// setupUI creates the quiz dialog UI
func (qd *QuizDialog) setupUI() {
	// Title
	title := widget.NewLabelWithStyle("Quiz Time!", fyne.TextAlignCenter, fyne.TextStyle{Bold: true})

	// Progress
	qd.progressLabel = widget.NewLabel(fmt.Sprintf("Question %d of %d", 1, len(qd.questions)))
	qd.progressBar = widget.NewProgressBar()
	qd.updateProgress()

	progressContainer := container.NewVBox(
		qd.progressLabel,
		qd.progressBar,
	)

	// Question
	qd.questionLabel = widget.NewLabel("")
	qd.questionLabel.Wrapping = fyne.TextWrapWord

	// Options
	qd.optionsRadio = widget.NewRadioGroup([]string{}, func(selected string) {
		if selectedIndex := qd.findOptionIndex(selected); selectedIndex != -1 {
			qd.answers[qd.currentQuestion] = selectedIndex
		}
		qd.updateButtons()
	})

	// Navigation buttons
	qd.prevButton = widget.NewButton("← Previous", func() {
		qd.previousQuestion()
	})

	qd.nextButton = widget.NewButton("Next →", func() {
		qd.nextQuestion()
	})

	qd.submitButton = widget.NewButton("Submit Quiz", func() {
		qd.submitQuiz()
	})

	buttonContainer := container.NewHBox(
		qd.prevButton,
		qd.nextButton,
		qd.submitButton,
	)

	// Main content
	content := container.NewVBox(
		title,
		widget.NewSeparator(),
		progressContainer,
		widget.NewSeparator(),
		qd.questionLabel,
		widget.NewSeparator(),
		qd.optionsRadio,
		widget.NewSeparator(),
		buttonContainer,
	)

	// Create dialog
	qd.dialog = dialog.NewCustom("Quiz", "Cancel", content, qd.window)
	qd.dialog.Resize(fyne.NewSize(600, 500))

	// Load first question
	qd.loadQuestion()
}

// loadQuestion loads the current question into the UI
func (qd *QuizDialog) loadQuestion() {
	if qd.currentQuestion < 0 || qd.currentQuestion >= len(qd.questions) {
		return
	}

	question := qd.questions[qd.currentQuestion]

	// Update question text
	qd.questionLabel.SetText(fmt.Sprintf("Q%d: %s", qd.currentQuestion+1, question.Question))

	// Update options
	qd.optionsRadio.Options = question.Options

	// Set previously selected answer if any
	selectedIndex := qd.answers[qd.currentQuestion]
	if selectedIndex >= 0 && selectedIndex < len(question.Options) {
		qd.optionsRadio.SetSelected(question.Options[selectedIndex])
	} else {
		qd.optionsRadio.SetSelected("")
	}

	qd.updateProgress()
	qd.updateButtons()
	qd.optionsRadio.Refresh()
}

// updateProgress updates the progress indicators
func (qd *QuizDialog) updateProgress() {
	qd.progressLabel.SetText(fmt.Sprintf("Question %d of %d", qd.currentQuestion+1, len(qd.questions)))
	progress := float64(qd.currentQuestion) / float64(len(qd.questions))
	qd.progressBar.SetValue(progress)
}

// updateButtons updates button states based on current question and answers
func (qd *QuizDialog) updateButtons() {
	// Previous button
	qd.prevButton.Enable()
	if qd.currentQuestion == 0 {
		qd.prevButton.Disable()
	}

	// Next button
	qd.nextButton.Enable()
	if qd.currentQuestion == len(qd.questions)-1 {
		qd.nextButton.Disable()
	}

	// Submit button - enabled when all questions are answered
	allAnswered := qd.allQuestionsAnswered()
	if allAnswered {
		qd.submitButton.Enable()
		qd.submitButton.SetText("Submit Quiz")
	} else {
		qd.submitButton.Disable()
		answered := qd.getAnsweredCount()
		qd.submitButton.SetText(fmt.Sprintf("Answer all questions (%d/%d)", answered, len(qd.questions)))
	}
}

// nextQuestion moves to the next question
func (qd *QuizDialog) nextQuestion() {
	if qd.currentQuestion < len(qd.questions)-1 {
		qd.currentQuestion++
		qd.loadQuestion()
	}
}

// previousQuestion moves to the previous question
func (qd *QuizDialog) previousQuestion() {
	if qd.currentQuestion > 0 {
		qd.currentQuestion--
		qd.loadQuestion()
	}
}

// submitQuiz calculates the score and shows results
func (qd *QuizDialog) submitQuiz() {
	if !qd.allQuestionsAnswered() {
		dialog.ShowInformation("Incomplete Quiz",
			"Please answer all questions before submitting.", qd.window)
		return
	}

	// Calculate score
	qd.calculateScore()

	// Show results dialog
	qd.showResults()

	// Close quiz dialog
	qd.dialog.Hide()
}

// calculateScore calculates the quiz score
func (qd *QuizDialog) calculateScore() {
	qd.score = 0
	for i, answer := range qd.answers {
		if answer == qd.questions[i].Correct {
			qd.score++
		}
	}
}

// showResults shows the detailed quiz results
func (qd *QuizDialog) showResults() {
	// Create results content
	results := container.NewVBox()

	// Overall score
	percentage := float64(qd.score) / float64(len(qd.questions)) * 100
	scoreLabel := widget.NewLabelWithStyle(
		fmt.Sprintf("Final Score: %d/%d (%.1f%%)", qd.score, len(qd.questions), percentage),
		fyne.TextAlignCenter,
		fyne.TextStyle{Bold: true},
	)
	results.Add(scoreLabel)
	results.Add(widget.NewSeparator())

	// Question by question breakdown
	for i, question := range qd.questions {
		userAnswer := qd.answers[i]
		correct := userAnswer == question.Correct

		// Question header
		questionHeader := fmt.Sprintf("Q%d: %s", i+1, question.Question)
		if len(questionHeader) > 60 {
			questionHeader = questionHeader[:60] + "..."
		}

		var statusIcon string
		if correct {
			statusIcon = "[PASS]"
		} else {
			statusIcon = "[FAIL]"
		}

		questionLabel := widget.NewLabel(fmt.Sprintf("%s %s", statusIcon, questionHeader))
		results.Add(questionLabel)

		// Show answers
		if userAnswer >= 0 && userAnswer < len(question.Options) {
			yourAnswer := widget.NewLabel(fmt.Sprintf("Your answer: %s", question.Options[userAnswer]))
			results.Add(yourAnswer)
		}

		correctAnswer := widget.NewLabel(fmt.Sprintf("Correct answer: %s", question.Options[question.Correct]))
		results.Add(correctAnswer)

		// Show explanation if available
		if question.Explanation != "" {
			explanation := widget.NewLabel(fmt.Sprintf("Explanation: %s", question.Explanation))
			explanation.Wrapping = fyne.TextWrapWord
			results.Add(explanation)
		}

		results.Add(widget.NewSeparator())
	}

	// Create scrollable results dialog
	scroll := container.NewScroll(results)
	scroll.SetMinSize(fyne.NewSize(500, 400))

	resultsDialog := dialog.NewCustom("Quiz Results", "Close", scroll, qd.window)
	resultsDialog.Resize(fyne.NewSize(600, 500))

	// Set callback for when results dialog is closed
	resultsDialog.SetOnClosed(func() {
		if qd.onComplete != nil {
			qd.onComplete(qd.score, len(qd.questions))
		}
	})

	resultsDialog.Show()
}

// Helper methods

// findOptionIndex finds the index of the selected option
func (qd *QuizDialog) findOptionIndex(selected string) int {
	for i, option := range qd.optionsRadio.Options {
		if option == selected {
			return i
		}
	}
	return -1
}

// allQuestionsAnswered checks if all questions have been answered
func (qd *QuizDialog) allQuestionsAnswered() bool {
	for _, answer := range qd.answers {
		if answer == -1 {
			return false
		}
	}
	return true
}

// getAnsweredCount returns the number of answered questions
func (qd *QuizDialog) getAnsweredCount() int {
	count := 0
	for _, answer := range qd.answers {
		if answer != -1 {
			count++
		}
	}
	return count
}

// SetOnComplete sets the callback function for when quiz is completed
func (qd *QuizDialog) SetOnComplete(callback func(score int, total int)) {
	qd.onComplete = callback
}

// Show displays the quiz dialog
func (qd *QuizDialog) Show() {
	qd.dialog.Show()
}
