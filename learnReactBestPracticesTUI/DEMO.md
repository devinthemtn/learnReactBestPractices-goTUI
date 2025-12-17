# React Best Practices TUI - Demo Guide 🚀

This document provides a walkthrough of the React Best Practices TUI application and demonstrates its features.

## Quick Start

```bash
# Build the application
make build

# Run the application
./build/react-tui

# Or run directly without building
make run
```

## Application Overview

The React Best Practices TUI is an interactive terminal application that teaches React project structure through:

- **7 Comprehensive Lessons** covering all aspects of React project organization
- **Interactive File Tree Visualizations** showing good vs bad patterns
- **Color-Coded Examples** for better understanding
- **Built-in Quizzes** to test your knowledge
- **Progress Tracking** across learning sessions

## Navigation Demo

### Main Menu
When you start the application, you'll see:

```
🚀 React Project Structure Best Practices
Master the art of organizing React applications

Progress: 0/7 lessons completed

React Project Structure Lessons

⭕ Lesson 01: Core Principles
   Learn the fundamental principles of React project organization
   Duration: ~10 min

⭕ Lesson 02: Top-Level Project Organization  
   Master the essential folders and files every React project needs
   Duration: ~15 min

⭕ Lesson 03: Inside src/ - The Heart of Your App
   Learn how to organize your source code for maximum efficiency  
   Duration: ~20 min

⭕ Lesson 04: File Naming Conventions
   Master consistent naming patterns for better code organization
   Duration: ~8 min

⭕ Lesson 05: Colocation - Keep Related Files Together
   Learn how to organize related files for better maintainability
   Duration: ~12 min

⭕ Lesson 06: Scaling Your Project Structure
   Adapt your structure as your project grows
   Duration: ~15 min

⭕ Lesson 07: Common Anti-Patterns to Avoid
   Learn what NOT to do when organizing React projects
   Duration: ~10 min

Press ? for help • Enter to select • Esc to go back • Ctrl+C to quit
```

### Lesson View Example
When you select a lesson, you'll see structured content like:

```
📚 Core Principles

Learn the fundamental principles of React project organization

The Four Pillars of Good React Structure
1. CONSISTENCY - Use the same patterns across all projects
2. SCALABILITY - Structure should support growth from 10 to 1000+ files  
3. DISCOVERABILITY - Developers should find files quickly and intuitively
4. SEPARATION OF CONCERNS - Group by feature/domain, not by file type

Why Structure Matters
A well-organized codebase:
• Reduces onboarding time for new developers
• Makes debugging and maintenance faster
• Prevents technical debt accumulation
• Improves team productivity and collaboration
• Makes refactoring safer and easier

📂 Examples

✅ Good: Feature-Based Organization
Components organized by feature rather than type

┌─────────────────────────────────────┐
│ 📁 src                              │
│   📁 features                       │
│     📁 auth                         │
│       🔵 LoginForm.jsx             │
│       🟢 useAuth.js                │
│       🟡 authService.js            │
└─────────────────────────────────────┘

💡 Related files are kept together, making it easy to find everything needed for a feature.

🎯 Quiz Available
Test your knowledge with 1 questions

Press Esc to go back • t to take quiz • ? for help • Ctrl+C to quit
```

### File Tree Visualization
The application shows color-coded file structures:

- 🔵 **Components** - React components (.jsx files)
- 🟢 **Hooks** - Custom React hooks (use*.js)  
- 🟡 **Services** - API calls and external integrations
- 🟠 **Utils** - Helper functions and utilities
- 🟣 **Config** - Configuration files
- 🔴 **Tests** - Test files
- 📁 **Directories** - Folder structures

### Quiz Interface
Press `t` in any lesson to take a quiz:

```
🎯 Quiz: Core Principles

Question 1 of 1

Which principle emphasizes organizing code by business logic rather than file type?

  A) Consistency
  B) Scalability  
  C) Discoverability
→ D) Separation of Concerns

Use ↑/↓ to select • Enter to confirm • Esc to go back
```

### Quiz Results
After completing a quiz:

```
🎉 Quiz Complete!

Score: 1/1 (100%)

🌟 Excellent! You've mastered this topic!

Review:
✅ Q1: Which principle emphasizes organizing code by business logic rather than file type?

Press any key to return to the lesson
```

### Progress Tracking
Completed lessons show with checkmarks and scores:

```
✅ Lesson 01: Core Principles (100%)
   Learn the fundamental principles of React project organization
   Duration: ~10 min
```

## Key Features Demo

### 1. Interactive Learning
- Navigate through lessons with arrow keys
- Each lesson builds on previous concepts
- Real-world examples with explanations

### 2. Visual File Structures
- See actual project structures
- Compare good vs bad examples
- Color-coded file categories

### 3. Knowledge Testing  
- Quizzes after each lesson
- Immediate feedback with explanations
- Progress tracking and scoring

### 4. Comprehensive Coverage
- From basic principles to advanced scaling
- Real project examples
- Common mistakes to avoid

## Example Learning Path

1. **Start with Core Principles** - Understand the "why" behind good structure
2. **Learn Top-Level Organization** - Master project root setup
3. **Dive into src/ Structure** - Organize your source code effectively
4. **Master Naming Conventions** - Consistent file naming patterns
5. **Practice Colocation** - Keep related files together
6. **Plan for Scaling** - Structure that grows with your app
7. **Avoid Anti-Patterns** - Learn from common mistakes

## Application Architecture

The TUI is built with:
- **Bubble Tea** - Elegant TUI framework for Go
- **Lipgloss** - Terminal styling and layout
- **Bubbles** - Common TUI components

## Tips for Best Experience

1. **Use a terminal with good color support** for the best visual experience
2. **Take your time with each lesson** - they build on each other
3. **Try the quizzes** - they reinforce key concepts
4. **Reference the help** with `?` key when needed
5. **Use keyboard shortcuts** for efficient navigation

## Getting Help

- Press `?` anywhere in the app for context-sensitive help
- Use `./react-tui -help` for command-line options
- Check the README.md for detailed documentation

## Sample Commands

```bash
# Show version
./build/react-tui -version

# Show help
./build/react-tui -help

# Run the application
./build/react-tui

# Build for multiple platforms
make build-all

# Create release packages
make package
```

The React Best Practices TUI makes learning React project structure engaging and interactive. Start your journey to better React organization today! 🚀