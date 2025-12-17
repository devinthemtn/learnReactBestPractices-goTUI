# React Best Practices TUI 🚀

A Terminal User Interface (TUI) application that teaches React project structure and filesystem best practices through interactive lessons, examples, and quizzes.

## Features 📚

- **Interactive Lessons**: Learn React project organization through structured modules
- **Working Quiz System**: Test your knowledge with interactive quizzes (press 't' in any lesson)
- **Visual File Trees**: See good vs bad project structures with color-coded examples
- **Progress Tracking**: Keep track of completed lessons and quiz scores
- **Best Practices Reference**: Quick access to naming conventions and organizational patterns
- **Keyboard Navigation**: Fully keyboard-driven interface for efficient learning
- **Color-Coded Categories**: Different file types are highlighted for better understanding

## Installation 🛠️

### Prerequisites
- Go 1.21 or higher
- Terminal with color support

### Build from Source
```bash
# Clone the repository
git clone <repository-url>
cd learnReactBestPracticesTUI

# Install dependencies
go mod tidy

# Build the application
go build -o react-tui ./cmd

# Run the application
./react-tui
```

### Quick Start
```bash
# Run directly without building
go run ./cmd/main.go
```

## Usage 🎮

### Navigation Controls
- `↑/k`, `↓/j` - Navigate up/down in menus and lists
- `←/h`, `→/l` - Navigate left/right (context dependent)
- `Enter` - Select current item or confirm action
- `Esc/q` - Go back to previous screen
- `t` - Take quiz (when viewing lessons)
- `?` - Show/hide help screen
- `Ctrl+C` - Quit the application

### Application Flow
1. **Main Menu**: Select from available lessons
2. **Lesson View**: Read content, study examples, and learn concepts
3. **Take Quizzes**: Press 't' in any lesson to test your knowledge
4. **Interactive Examples**: Explore file tree structures with explanations
5. **Progress Tracking**: See your completion status across all lessons

## Lesson Structure 📖

### Core Principles
Learn the fundamental principles of React project organization:
- **Consistency** - Use the same patterns across projects
- **Scalability** - Structure that grows from 10 to 1000+ files
- **Discoverability** - Files are easy to find intuitively
- **Separation of Concerns** - Group by feature, not file type

### Available Lessons

1. **Core Principles** (~10 min) • 1 quiz question
   - The four pillars of good React structure
   - Why structure matters for team productivity

2. **Top-Level Project Organization** (~15 min) • 2 quiz questions
   - Essential folders and configuration files
   - Best practices for project root structure

3. **Inside src/ - The Heart of Your App** (~20 min) • 3 quiz questions
   - Components, pages, features organization
   - Service layer and state management structure

4. **File Naming Conventions** (~8 min) • 3 quiz questions
   - PascalCase for components
   - camelCase for hooks and utilities
   - SCREAMING_SNAKE_CASE for constants

5. **Colocation - Keep Related Files Together** (~12 min) • 2 quiz questions
   - Benefits of file colocation
   - Organizing component files with styles and tests

6. **Scaling Your Project Structure** (~15 min) • 2 quiz questions
   - Small vs medium vs large project organization
   - When to refactor your structure

7. **Documentation Organization** (~12 min) • 2 quiz questions
   - Essential info in README.md vs detailed docs in doc/ folder
   - Clear naming conventions for documentation files
   - Two-tier documentation strategy

8. **JSDoc for Type Safety & Documentation** (~15 min) • 3 quiz questions
   - Using JSDoc for type annotations in JavaScript React projects
   - Setting up type checking with TypeScript compiler
   - Component and function documentation patterns

9. **Common Anti-Patterns to Avoid** (~10 min) • 3 quiz questions
   - Organizing by file type instead of feature
   - Deep nesting problems
   - Generic naming issues

## File Color Coding 🎨

The application uses color coding to help you understand different file categories:

- 🔵 **Components** - React components (.jsx files)
- 🟢 **Hooks** - Custom React hooks (use*.js)
- 🟡 **Services** - API calls and external integrations
- 🟠 **Utils** - Helper functions and utilities
- 🟣 **Config** - Configuration files
- 🔴 **Tests** - Test files
- ⚪ **General** - Other files
- 📁 **Directories** - Folder structures

## Project Structure 🏗️

```
learnReactBestPracticesTUI/
├── cmd/                          # Application entry point
│   └── main.go                   # Main function
├── internal/                     # Internal application code
│   ├── models/                   # Data structures and types
│   │   └── lesson.go            # Lesson, progress, and app state models
│   ├── lessons/                  # Educational content
│   │   └── content.go           # All lesson content and examples
│   └── ui/                      # User interface components
│       ├── app.go               # Main application logic
│       └── list.go              # List components and delegates
├── doc/                         # Project documentation
│   ├── README.md                # Documentation index
│   ├── React_Project_Structure_Best_Practices.md  # Core guide
│   ├── DEMO.md                  # Demo instructions  
│   ├── QUIZ_TESTING.md          # Quiz functionality docs
│   └── test-quiz.md             # Sample quiz content
├── go.mod                       # Go module dependencies
├── go.sum                       # Dependency checksums
└── README.md                    # This file
```

## Documentation 📖

This project follows documentation best practices by organizing detailed documentation in a dedicated `doc/` folder:

- **[Documentation Index](./doc/README.md)** - Overview of all available documentation
- **[React Project Structure Best Practices](./doc/React_Project_Structure_Best_Practices.md)** - Comprehensive guide to React project organization
- **[Demo Guide](./doc/DEMO.md)** - Instructions for running project demos
- **[Quiz Testing](./doc/QUIZ_TESTING.md)** - Information about quiz functionality

The main README.md stays at the project root for GitHub visibility, while detailed documentation lives in the `doc/` folder for better organization and discoverability.

## Technical Details 🔧

### Built With
- **[Bubble Tea](https://github.com/charmbracelet/bubbletea)** - TUI framework for Go
- **[Bubbles](https://github.com/charmbracelet/bubbles)** - Common TUI components
- **[Lip Gloss](https://github.com/charmbracelet/lipgloss)** - Style definitions for terminal UIs

### Architecture
The application follows the Elm Architecture pattern through Bubble Tea:
- **Model**: Application state and data structures
- **Update**: State transitions based on user input
- **View**: Rendering logic for different application screens

## Contributing 🤝

Contributions are welcome! Please feel free to submit issues and enhancement requests.

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the application thoroughly
5. Submit a pull request

### Adding New Lessons
To add new lessons, modify `internal/lessons/content.go`:
1. Create a new lesson function following existing patterns
2. Add it to the `GetAllLessons()` function
3. Include content sections, examples, and quiz questions

## License 📄

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments 🙏

- Based on React project structure best practices from the community
- Built with the excellent Charm TUI libraries
- Inspired by the need for better developer education tools

## Support 💬

If you encounter any issues or have questions:
1. Check the help screen (`?` key in the application)
2. Review this README for usage instructions
3. Open an issue on the repository

---

**Happy Learning!** 🎉 Master React project structure and build better applications.