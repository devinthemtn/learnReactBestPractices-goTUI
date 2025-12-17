# Testing Quiz Functionality

This document provides instructions for testing the quiz feature in the React Best Practices TUI.

## Test Steps

1. **Build and Run the Application**
   ```bash
   make build
   ./build/react-tui
   ```

2. **Navigate to a Lesson**
   - Use arrow keys (↑/↓) to select any lesson
   - Press Enter to open the lesson

3. **Test Quiz Activation**
   - While viewing a lesson, press the `t` key
   - You should see the quiz interface appear
   - The screen should show:
     - Quiz title with lesson name
     - Question counter (Question X of Y)
     - Current question text
     - Multiple choice options (A, B, C, D)

4. **Test Quiz Navigation**
   - Use ↑/↓ arrow keys to select different answer options
   - The selected option should be highlighted with "→"
   - Press Enter to confirm your answer
   - Should automatically move to next question

5. **Test Quiz Completion**
   - After answering all questions, should show results screen
   - Should display:
     - Final score (X/Y correct, percentage)
     - Performance message based on score
     - Detailed review of each question
     - Correct answers and explanations for wrong answers

6. **Test Quiz Exit**
   - Press Esc during quiz to return to lesson
   - Press any key after results to return to lesson

## Expected Behavior

### Lessons with Quizzes:
- Core Principles (1 question)
- Top-Level Project Organization (2 questions)
- Inside src/ Organization (3 questions)
- File Naming Conventions (3 questions)
- Colocation (2 questions)
- Scaling Your Project Structure (2 questions)
- Common Anti-Patterns to Avoid (3 questions)

### Quiz Interface:
- Clean question display
- Color-coded answer selection
- Clear navigation instructions
- Proper scoring calculation
- Detailed feedback

### Progress Tracking:
- Completed lessons show ✅ checkmark
- Quiz scores show as percentages in lesson list
- Lessons marked complete if score ≥ 70%

## Troubleshooting

If the quiz doesn't start when pressing 't':
1. Make sure you're in lesson view (not menu or help)
2. Verify the lesson has quiz questions
3. Check that the key binding is working

If quiz navigation feels unresponsive:
1. Use clear key presses (don't hold keys)
2. Wait for visual feedback before next action
3. Ensure terminal supports the key combinations

## Visual Indicators

Look for these visual cues:
- Quiz availability indicator in lesson view: "🎯 Quiz Available"
- Selected answer highlighted with "→" prefix
- Score color coding: Green (≥90%), Yellow (70-89%), Red (<70%)
- Progress symbols: ✅ (completed), ⭕ (not completed)

## Test Cases

### Test Case 1: Basic Quiz Flow
1. Open "Core Principles" lesson
2. Press 't' to start quiz
3. Answer the question correctly
4. Verify 100% score and completion status

### Test Case 2: Wrong Answer Flow
1. Open any lesson with multiple questions
2. Deliberately answer first question wrong
3. Check that explanation appears in results
4. Verify score calculation is correct

### Test Case 3: Quiz Exit and Return
1. Start any quiz
2. Press Esc to exit mid-quiz
3. Return to lesson view
4. Start quiz again - should restart from beginning

### Test Case 4: Progress Persistence
1. Complete a quiz with good score (≥70%)
2. Return to main menu
3. Verify lesson shows as completed with score
4. Reopen lesson - completion status maintained

This test suite ensures all quiz functionality works as expected.