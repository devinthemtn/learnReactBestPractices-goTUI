# Quiz Functionality Testing Guide

## Overview
This guide provides step-by-step instructions to test the quiz functionality in the React Best Practices TUI application.

## ✅ Fixed Issue
**Problem**: The 't' key for taking quizzes was not working.
**Solution**: Moved the quiz key handler out of the Enter key case and into its own separate key binding handler.

## Quick Test Instructions

### 1. Build and Start the Application
```bash
make build
./build/react-tui
```

### 2. Navigate to Any Lesson
- Use ↑/↓ arrow keys to highlight any lesson
- Press Enter to open the lesson
- You should see lesson content with "🎯 Interactive Quiz Available" if quizzes exist

### 3. Start a Quiz
- While viewing a lesson, press the `t` key
- The screen should immediately switch to quiz mode
- You should see:
  - Quiz title with lesson name
  - Question counter (e.g., "Question 1 of 3")
  - Question text
  - Multiple choice options A, B, C, D

### 4. Take the Quiz
- Use ↑/↓ arrow keys to select answers
- Selected answer shows with "→" prefix
- Press Enter to confirm your selection
- Automatically advances to next question

### 5. View Results
- After answering all questions, see results screen with:
  - Final score percentage
  - Performance message
  - Question-by-question review
  - Explanations for incorrect answers

## Detailed Test Cases

### Test Case 1: Core Principles Lesson (1 Question)
1. Open "Core Principles" lesson
2. Press 't' to start quiz
3. Answer: "Which principle emphasizes organizing code by business logic rather than file type?"
4. Correct answer: D) Separation of Concerns
5. Should show 100% score if answered correctly

### Test Case 2: File Naming Conventions (3 Questions)
1. Open "File Naming Conventions" lesson  
2. Press 't' to start quiz
3. Answer all 3 questions:
   - React component naming (Answer: B - UserProfile.jsx)
   - Hook naming (Answer: B - useAuth.js)  
   - Constants naming (Answer: C - API_BASE_URL.js)
4. Should show results with score out of 3

### Test Case 3: Navigation During Quiz
1. Start any quiz
2. Press Esc to exit quiz mid-way
3. Should return to lesson view
4. Press 't' again - should restart quiz from beginning

### Test Case 4: Progress Tracking
1. Complete a quiz with ≥70% score
2. Return to main menu (Esc)
3. Lesson should show ✅ with percentage score
4. Re-enter lesson - should show "Previous score: X% - Retake anytime!"

## Visual Indicators to Look For

### In Lesson View:
- "🎯 Interactive Quiz Available" in bright yellow
- "📝 Test your knowledge with X questions • Press 't' to start" in green
- Help text shows "t: take quiz" option

### In Quiz Mode:
- Clean question display with progress counter
- "→" prefix for selected answer
- Color-coded answer options
- Clear navigation instructions at bottom

### In Results:
- Score with color coding:
  - Green: 90-100% ("🌟 Excellent!")
  - Yellow: 70-89% ("👍 Good job!")
  - Red: <70% ("📖 Review recommended")
- ✅/❌ indicators for each question
- Explanations for wrong answers

### In Menu After Quiz:
- ✅ checkmark for completed lessons
- Score percentage in parentheses
- Updated progress counter at top

## Troubleshooting

### If 't' Key Doesn't Work:
1. Ensure you're in lesson view (not menu or help screen)
2. Check that lesson has quiz questions (look for quiz indicator)
3. Try pressing 't' once clearly (don't hold or repeat rapidly)

### If Quiz Doesn't Appear:
1. Verify lesson content shows "🎯 Interactive Quiz Available"
2. Some lessons might not have quizzes implemented
3. Check console for any error messages

### If Navigation Feels Sluggish:
1. Use clear, distinct key presses
2. Wait for visual feedback before next action
3. Ensure terminal has good key handling support

## All Lessons with Quiz Questions

1. **Core Principles** - 1 question
2. **Top-Level Project Organization** - 2 questions  
3. **Inside src/ Organization** - 3 questions
4. **File Naming Conventions** - 3 questions
5. **Colocation** - 2 questions
6. **Scaling Your Project Structure** - 2 questions
7. **Common Anti-Patterns to Avoid** - 3 questions

**Total: 16 quiz questions across 7 lessons**

## Expected Quiz Flow

```
Lesson View → Press 't' → Quiz Mode → Answer Questions → Results → Return to Lesson
     ↑                                                                      ↓
     ←─────────────────── Press Esc (anytime) ─────────────────────────────
```

## Success Criteria

✅ 't' key immediately starts quiz from lesson view
✅ Quiz interface displays clearly with proper formatting  
✅ Arrow keys navigate answer options smoothly
✅ Enter key confirms selections and advances questions
✅ Results screen shows accurate scoring and feedback
✅ Esc key returns to lesson view at any time
✅ Progress tracking updates correctly after quiz completion
✅ Visual indicators clearly show quiz availability and status

The quiz functionality should now work perfectly! Test it with any lesson that shows the quiz indicator.