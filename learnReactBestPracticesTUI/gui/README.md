# React Best Practices GUI 🚀

A modern graphical user interface (GUI) application for learning React project structure and filesystem best practices. This GUI version provides an intuitive, visual learning experience with interactive lessons, quizzes, and project structure examples.

## ✨ Features

### 🎯 Core Features
- **Interactive Lessons**: 9 comprehensive lessons covering React project organization
- **Visual Quiz System**: Test your knowledge with interactive quizzes and instant feedback
- **Project Structure Examples**: Visual file tree displays showing good vs bad practices
- **Progress Tracking**: Keep track of completed lessons and quiz scores with visual progress bars
- **Modern GUI Interface**: Clean, intuitive interface built with Fyne framework

### 📚 Learning Content
- **Core Principles** - The four pillars of good React structure
- **Top-Level Organization** - Essential folders and configuration files
- **Source Code Structure** - Components, pages, features organization
- **File Naming Conventions** - PascalCase, camelCase, and constant naming
- **Colocation Strategies** - Keep related files together
- **Scaling Techniques** - Grow from small to large projects
- **Documentation Organization** - README vs detailed docs strategy
- **JSDoc Integration** - Type safety and documentation patterns
- **Anti-Patterns** - Common mistakes to avoid

### 🖥️ GUI Enhancements
- **Split-Panel Layout** - Lessons list on left, content on right
- **Visual Progress Indicators** - Progress bars and completion status
- **Interactive Quiz Interface** - Radio buttons, navigation, detailed results
- **File Tree Visualization** - Color-coded file categories with icons
- **Responsive Design** - Resizable windows and panels
- **Keyboard Shortcuts** - Full keyboard navigation support
- **Menu System** - File, View, and Help menus

## 🛠️ Installation

### Prerequisites
- Go 1.21 or higher
- GUI environment (X11 on Linux, native on macOS/Windows)

### Quick Install

```bash
# Clone the repository
git clone <repository-url>
cd learnReactBestPracticesTUI/gui

# Install dependencies
make deps

# Build and run
make run
```

### Build Options

```bash
# Build for current platform
make build

# Build for all platforms
make build-all

# Create macOS application bundle
make bundle-darwin

# Install globally
make install

# Create distributable package
make package
```

## 🎮 Usage

### Getting Started
1. **Launch the Application**: Run `./build/react-gui` or `make run`
2. **Select a Lesson**: Click on any lesson in the left panel
3. **Read Content**: Study the lesson material in the main content area
4. **Take Quizzes**: Click "📝 Take Quiz" to test your knowledge
5. **View Examples**: Click "🌳 View Examples" to see project structures
6. **Track Progress**: Monitor your completion in the progress bar

### Interface Overview

#### Left Panel - Lessons
- **Lesson List**: All 9 lessons with completion indicators
- **Progress Bar**: Visual progress tracking
- **Completion Icons**: ✅ for completed lessons

#### Right Panel - Content
- **Lesson Content**: Formatted text with sections and examples
- **Action Buttons**: Take Quiz, Mark Complete, View Examples
- **Scrollable Content**: Handle long lessons with smooth scrolling

#### Menu Bar
- **File Menu**: New Progress, Quit
- **View Menu**: Reset Window Size, Toggle Fullscreen
- **Help Menu**: About, Keyboard Shortcuts

### Keyboard Navigation
- **Tab** - Move between UI elements
- **Enter** - Select/activate buttons
- **↑/↓** - Navigate lesson list
- **Escape** - Close dialogs
- **Ctrl+Q** - Quit application
- **F11** - Toggle fullscreen

## 🧠 Quiz System

### Interactive Features
- **Multiple Choice Questions** - Radio button selection
- **Navigation Controls** - Previous/Next question buttons
- **Progress Tracking** - Question X of Y indicator
- **Smart Submission** - Only enabled when all questions answered
- **Detailed Results** - Question-by-question breakdown with explanations

### Scoring System
- **Percentage Calculation** - Score out of total questions
- **Performance Feedback** - Encouragement based on score
- **Auto-Completion** - Mark lesson complete on 80%+ score
- **Score Persistence** - Track quiz scores across sessions

## 🌳 Project Structure Examples

### Visual File Trees
- **Color-coded Files** - Different colors for components, hooks, services
- **Icon System** - Intuitive icons for different file types
- **Good vs Bad Examples** - Clear indicators for best practices
- **Detailed Explanations** - Why certain structures work better

### File Categories & Colors
- 🔵 **Components** - React components (.jsx files)
- 🟢 **Hooks** - Custom React hooks (use*.js)
- 🟡 **Services** - API calls and external integrations
- 🟠 **Utils** - Helper functions and utilities
- 🟣 **Config** - Configuration files
- 🔴 **Tests** - Test files
- 📁 **Directories** - Folder structures

## 🏗️ Technical Architecture

### Built With
- **[Fyne](https://fyne.io/)** - Cross-platform GUI framework for Go
- **Go 1.21+** - Modern Go with generics and latest features
- **Shared Models** - Reuses data models from TUI version

### Project Structure
```
gui/
├── cmd/                    # Application entry point
│   └── main.go            # Main function and CLI handling
├── internal/              # Internal application code
│   └── ui/                # GUI components
│       ├── main.go        # Main window and application logic
│       ├── quiz.go        # Quiz dialog component
│       └── examples.go    # Examples dialog component
├── build/                 # Build artifacts
├── assets/                # GUI assets (icons, images)
├── go.mod                 # Go module definition
├── Makefile              # Build automation
└── README.md             # This file
```

### Design Patterns
- **Component-Based UI** - Modular, reusable UI components
- **Event-Driven Architecture** - User interactions trigger state changes
- **Separation of Concerns** - UI logic separated from business logic
- **Shared Data Models** - Consistent with TUI version

## 🚀 Development

### Development Setup
```bash
# Setup development environment
make setup

# Run in development mode
make dev

# Run tests
make test

# Format code
make fmt

# Lint code (requires golangci-lint)
make lint
```

### Building for Distribution
```bash
# Build for Linux
make build-linux

# Build for Windows
make build-windows

# Build for macOS
make build-darwin

# Create macOS app bundle
make bundle-darwin

# Package for distribution
make package
```

### Adding New Features
1. **New Lessons**: Add to shared models in `../internal/lessons/`
2. **UI Components**: Create in `internal/ui/`
3. **Dialogs**: Follow pattern established in `quiz.go` and `examples.go`
4. **Styling**: Use Fyne's theming system

## 🎨 Customization

### Window Settings
- **Default Size**: 1200x800 pixels
- **Minimum Size**: Responsive to content
- **Resizable**: Yes, with maintained aspect ratios
- **Fullscreen**: Supported via F11 or menu

### Theme Support
- **System Theme**: Automatically matches OS theme
- **Dark/Light Mode**: Follows system preferences
- **High DPI**: Automatic scaling support

## 🐛 Troubleshooting

### Common Issues

#### "fyne package not found"
```bash
go mod download
go mod tidy
```

#### "CGO_ENABLED required"
On some systems, you may need:
```bash
export CGO_ENABLED=1
make build
```

#### Window doesn't appear (Linux)
Ensure X11 forwarding or Wayland support:
```bash
export DISPLAY=:0
./build/react-gui
```

#### Performance issues
- Try disabling animations in system settings
- Ensure graphics drivers are up to date
- Use hardware acceleration if available

### Getting Help
1. **In-App Help**: Press `?` or use Help menu
2. **Keyboard Shortcuts**: Help → Keyboard Shortcuts
3. **About Dialog**: Help → About for version info
4. **Debug Mode**: Run with `-debug` flag for verbose logging

## 📊 System Requirements

### Minimum Requirements
- **OS**: Windows 10+, macOS 10.13+, Linux with X11/Wayland
- **RAM**: 512MB available memory
- **CPU**: Any modern 64-bit processor
- **Display**: 1024x768 minimum resolution

### Recommended Requirements
- **OS**: Latest stable OS version
- **RAM**: 2GB+ available memory
- **CPU**: Multi-core processor for smooth animations
- **Display**: 1920x1080+ for best experience

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly (`make test`)
5. Format code (`make fmt`)
6. Submit a pull request

### Code Style
- Follow Go standard formatting (`gofmt`)
- Use meaningful variable names
- Add comments for complex logic
- Write tests for new features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Fyne Framework** - Excellent cross-platform GUI toolkit
- **React Community** - Best practices and patterns
- **Go Team** - Robust programming language
- **Contributors** - Everyone who helps improve this project

---

**Happy Learning!** 🎉 Master React project structure with this interactive GUI experience.

For the TUI version, see the [main project README](../README.md).