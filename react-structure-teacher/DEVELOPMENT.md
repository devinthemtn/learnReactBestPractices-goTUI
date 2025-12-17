# Development Guide

## React Structure Teacher Development Guide

This guide helps you get started developing and contributing to the React Structure Teacher application.

## Prerequisites

Before you start, ensure you have the following installed:

- **Go 1.21+**: [Download Go](https://golang.org/dl/)
- **Node.js 16+**: [Download Node.js](https://nodejs.org/)
- **WAILS v2**: Install with `go install github.com/wailsapp/wails/v2/cmd/wails@latest`
- **Make**: Usually pre-installed on Unix systems, for Windows use [chocolatey](https://chocolatey.org/) or [scoop](https://scoop.sh/)

## Quick Start

1. **Check prerequisites:**
```bash
make check-deps
```

2. **Install dependencies:**
```bash
make install
```

3. **Start development server:**
```bash
make dev
```

## Makefile Commands

### Essential Commands

| Command | Description |
|---------|-------------|
| `make help` | Show all available commands |
| `make install` | Install all dependencies |
| `make dev` | Start development server with hot reload |
| `make build` | Build for production |
| `make clean` | Clean all build artifacts |

### Development Workflow

| Command | Description |
|---------|-------------|
| `make generate` | Generate WAILS JS bindings |
| `make lint` | Lint Go and frontend code |
| `make format` | Format Go and frontend code |
| `make test` | Run all tests |
| `make validate` | Check project structure |

### Build & Distribution

| Command | Description |
|---------|-------------|
| `make build-dev` | Build for development (with debug symbols) |
| `make dist` | Build for multiple platforms |
| `make run` | Build and run the application |
| `make quick` | Quick development build and run |
| `make release` | Create release package |

### Maintenance

| Command | Description |
|---------|-------------|
| `make update` | Update all dependencies |
| `make install-tools` | Install additional development tools |
| `make info` | Show project information |
| `make all` | Complete build and test pipeline |

## Project Structure

```
react-structure-teacher/
├── Makefile                      # Build automation
├── main.go                       # Go application entry point
├── go.mod                        # Go module definition
├── wails.json                   # WAILS configuration
├── frontend/                    # React application
│   ├── src/
│   │   ├── components/          # Reusable React components
│   │   │   └── Navigation.jsx   # Sidebar navigation
│   │   ├── pages/              # Main application pages
│   │   │   ├── Dashboard.jsx    # Overview with progress
│   │   │   ├── Lessons.jsx      # Interactive tutorials
│   │   │   ├── StructureExplorer.jsx  # Structure examples
│   │   │   ├── Validator.jsx    # Project analysis
│   │   │   └── Quiz.jsx         # Knowledge testing
│   │   ├── wailsjs/            # WAILS JS bindings (generated)
│   │   ├── App.jsx             # Root React component
│   │   ├── main.jsx            # React entry point
│   │   └── index.css           # Global styles
│   ├── package.json            # Frontend dependencies
│   ├── vite.config.js          # Vite configuration
│   └── index.html              # HTML template
├── build/                      # Build output (generated)
├── README.md                   # Project documentation
├── DEVELOPMENT.md              # This file
└── .gitignore                  # Git exclusions
```

## Development Workflow

### 1. Setting Up Your Environment

```bash
# Clone and setup
git clone <repository>
cd react-structure-teacher
make install
```

### 2. Daily Development

```bash
# Start development server
make dev

# In another terminal, watch and validate changes
make validate
```

### 3. Making Changes

**Backend Changes (Go):**
- Edit `main.go` or related Go files
- Add new methods for frontend integration
- Update types and data structures

**Frontend Changes (React):**
- Edit components in `frontend/src/`
- Follow React best practices (the ones we teach!)
- Use consistent styling with design tokens

**After Changes:**
```bash
make generate  # Regenerate bindings if Go API changed
make lint      # Check code quality
make format    # Format code
make test      # Run tests
```

### 4. Testing Your Changes

```bash
# Quick test
make quick

# Full build and test
make build
make run

# Complete validation
make all
```

## Code Style Guidelines

### Go Code
- Follow standard Go conventions
- Use descriptive variable names
- Add comments for exported functions
- Keep functions focused and small

### React Code
- Use functional components with hooks
- Follow naming conventions taught in the app:
  - Components: PascalCase (`UserProfile.jsx`)
  - Hooks: camelCase with `use` prefix (`useAuth.js`)
  - Utilities: camelCase (`formatDate.js`)
- Co-locate related files when possible
- Use CSS-in-JS with design tokens from `index.css`

### File Organization
- Group by feature, not by file type
- Keep folder depth reasonable (max 3-4 levels)
- Use clear, descriptive names
- Follow the practices taught in the application

## Adding New Features

### 1. Backend Feature (Go)
```go
// Add to main.go
func (a *App) NewFeature() FeatureResult {
    // Implementation
    return FeatureResult{...}
}
```

### 2. Frontend Feature (React)
```bash
# Create new component
touch frontend/src/components/NewFeature.jsx

# Add to navigation if needed
# Edit frontend/src/components/Navigation.jsx

# Add route if it's a page
# Edit frontend/src/App.jsx
```

### 3. Generate Bindings
```bash
make generate
```

### 4. Test Integration
```bash
make dev  # Test in development
make build && make run  # Test production build
```

## Debugging

### Development Mode
```bash
make dev
# Open browser dev tools for frontend debugging
# Check terminal for Go backend logs
```

### Build Issues
```bash
make clean    # Clean everything
make install  # Reinstall dependencies
make build    # Try building again
```

### WAILS Specific Issues
```bash
wails doctor  # Check WAILS installation
make generate # Regenerate bindings
```

## Performance Optimization

### Go Backend
- Use efficient data structures
- Cache educational content in memory
- Minimize file I/O operations

### React Frontend
- Use React.memo for expensive components
- Implement proper key props for lists
- Optimize re-renders with useCallback/useMemo

### Build Optimization
```bash
make build  # Production build is optimized
make dist   # Multi-platform optimized builds
```

## Testing

### Manual Testing Checklist
- [ ] All navigation works
- [ ] Lessons load and progress correctly
- [ ] Structure explorer shows examples
- [ ] Validator analyzes projects correctly
- [ ] Quiz system functions properly
- [ ] Application builds and runs on target platforms

### Automated Testing
```bash
make test        # Run all tests
make test-go     # Go tests only
make test-frontend  # Frontend tests only
```

## Contributing

### Before Submitting
1. Run the full pipeline: `make all`
2. Test on your target platform
3. Update documentation if needed
4. Follow the project's best practices

### Commit Guidelines
- Use clear, descriptive commit messages
- Reference issues when applicable
- Keep commits focused and atomic

## Troubleshooting

### Common Issues

**WAILS not found:**
```bash
go install github.com/wailsapp/wails/v2/cmd/wails@latest
```

**Node modules issues:**
```bash
make clean
make install
```

**Binding generation fails:**
```bash
# Check Go code compiles
go build
make generate
```

**Build fails:**
```bash
make check-deps  # Verify prerequisites
make clean       # Clean old artifacts
make install     # Reinstall dependencies
make build       # Try again
```

### Getting Help

1. Check `make help` for available commands
2. Run `make info` to see project status
3. Use `make validate` to check project structure
4. Review the main README.md for usage information

---

Happy coding! 🚀

Remember: This project teaches React best practices, so let's make sure we follow them ourselves!