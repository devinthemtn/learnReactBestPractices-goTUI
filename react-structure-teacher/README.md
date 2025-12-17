# React Structure Teacher

An interactive GUI application built with Go and WAILS that teaches React project structure and filesystem best practices through hands-on learning.

## Features

- **Interactive Lessons**: Step-by-step tutorials on React project organization
- **Structure Explorer**: Visual examples of good vs bad project structures
- **Project Validator**: Analyze your React projects against best practices
- **Knowledge Quizzes**: Test your understanding with interactive quizzes
- **Real-time Feedback**: Get instant validation and suggestions
- **Progress Tracking**: Monitor your learning journey

## Screenshots

The application provides a modern, dark-themed interface with:
- Dashboard with learning progress overview
- Interactive project structure visualizer
- Comprehensive lesson system with quizzes
- Project validation with detailed feedback
- Best practices explorer with examples

## Installation

### Prerequisites

- Go 1.21 or later
- Node.js 16 or later
- WAILS v2

### Building from Source

1. Clone the repository:
```bash
git clone <repository-url>
cd react-structure-teacher
```

2. Build the application:
```bash
make build
```

Or run the complete build pipeline:
```bash
make all
```

### Development

To run in development mode with hot reload:

```bash
make dev
```

Other useful development commands:
```bash
make install      # Install dependencies
make lint         # Lint code
make test         # Run tests  
make format       # Format code
make clean        # Clean build artifacts
```

## Usage

### Dashboard
- View your learning progress
- Quick access to all features
- Recent activity tracking
- Performance statistics

### Lessons
- Interactive tutorials on React project structure
- Progressive learning path
- Built-in knowledge checks
- Detailed explanations and examples

### Structure Explorer
- Compare good vs bad project structures
- Interactive file tree navigation
- Best practice explanations
- Anti-pattern identification

### Project Validator
- Upload or manually input your project structure
- Get detailed analysis and scoring
- Receive specific improvement suggestions
- Learn from validation feedback

### Quiz System
- Test knowledge with interactive quizzes
- Multiple choice questions with explanations
- Progress tracking and scoring
- Immediate feedback on answers

## Core Principles Taught

### 1. Consistency
- Use same patterns across all projects
- Maintain consistent naming conventions
- Apply uniform folder structures

### 2. Scalability
- Structure supports growth from 10 to 1000+ files
- Feature-based organization for larger apps
- Modular component architecture

### 3. Discoverability
- Clear, descriptive naming
- Logical folder hierarchy
- Intuitive file organization

### 4. Separation of Concerns
- Group by feature/domain, not file type
- Co-locate related files
- Domain-driven structure

## Best Practices Covered

### Folder Structure
```
project-root/
├── public/           # Static assets
├── src/              # All source code
│   ├── components/   # Reusable UI components
│   ├── pages/        # Page-level components
│   ├── features/     # Feature-specific modules
│   ├── hooks/        # Custom React hooks
│   ├── utils/        # Helper functions
│   ├── services/     # API and external services
│   ├── store/        # State management
│   ├── types/        # TypeScript definitions
│   ├── constants/    # App-wide constants
│   └── styles/       # Global styles and themes
├── .env.example      # Environment variables template
├── .gitignore        # Git ignore rules
├── package.json      # Dependencies and scripts
└── README.md         # Project documentation
```

### Naming Conventions
- **Components**: PascalCase (`UserProfile.jsx`)
- **Utilities/Hooks**: camelCase (`useAuth.js`, `formatDate.js`)
- **Constants**: SCREAMING_SNAKE_CASE (`API_BASE_URL.js`)
- **Folders**: kebab-case or lowercase (`user-profile/`, `components/`)

### File Organization
- One component per file
- Co-locate related files (component + styles + tests)
- Use index files sparingly
- Avoid deep nesting (max 3-4 levels)
- Clear, descriptive file names

## Technology Stack

### Backend
- **Go**: Main application logic and data handling
- **WAILS v2**: Desktop application framework
- **Embedded Assets**: Static files bundled with executable

### Frontend
- **React 18**: User interface library
- **React Router**: Client-side routing
- **Lucide React**: Icon library
- **Vite**: Build tool and development server

### Architecture
- **Cross-platform**: Works on Windows, macOS, and Linux
- **Native Performance**: Compiled to native binary
- **Modern UI**: Responsive design with dark theme
- **Offline Capable**: No internet connection required

## Development

### Project Structure
```
react-structure-teacher/
├── main.go                    # Go application entry point
├── go.mod                     # Go module definition
├── wails.json                # WAILS configuration
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── pages/           # Application pages
│   │   ├── wailsjs/         # WAILS JS bindings
│   │   ├── App.jsx          # Root component
│   │   ├── main.jsx         # React entry point
│   │   └── index.css        # Global styles
│   ├── package.json         # Frontend dependencies
│   ├── vite.config.js       # Vite configuration
│   └── index.html           # HTML template
├── build/                   # Build output directory
└── README.md               # This file
```

### Adding New Features

1. **Backend**: Add new methods to `main.go`
2. **Frontend**: Create React components in appropriate directories
3. **Bindings**: Generate JS bindings with `make generate`
4. **Styling**: Use CSS-in-JS with consistent design tokens

### Build System

The project uses a comprehensive Makefile for build automation:

```bash
make help         # Show all available targets
make install      # Install all dependencies
make dev          # Start development server
make build        # Build for production
make dist         # Build for multiple platforms
make test         # Run all tests
make lint         # Lint all code
make format       # Format all code
make clean        # Clean build artifacts
make validate     # Validate project structure
make info         # Show project information
make all          # Run complete build pipeline
```

### Data Structure

The application uses structured data for educational content:

- **BestPracticesData**: Core principles and conventions
- **Lesson**: Interactive learning modules with quizzes
- **ValidationResult**: Project analysis results
- **ProjectStructure**: User project representation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Development Guidelines

- Follow Go conventions for backend code
- Use React best practices (the ones we teach!)
- Maintain consistent code style
- Add documentation for new features
- Test changes thoroughly

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Based on React community best practices
- Inspired by popular React style guides
- Built with the WAILS framework
- Uses Lucide for icons and Vite for building

## Support

For questions, issues, or contributions:
- Open an issue on GitHub
- Check the documentation  
- Review the interactive lessons in the app

### Quick Start

```bash
# Install prerequisites: Go 1.21+, Node.js 16+, WAILS v2
go install github.com/wailsapp/wails/v2/cmd/wails@latest

# Build and run
make build
make run

# Or for development
make dev
```

---

**Learn React project structure the right way with hands-on, interactive tutorials!**