package main

import (
	"context"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// OnStartup is called when the app starts up. The context can be used
// to perform startup tasks as well as accessing the runtime.
func (a *App) OnStartup(ctx context.Context) {
	a.ctx = ctx
}

// GetBestPractices returns the React best practices data
func (a *App) GetBestPractices() BestPracticesData {
	return BestPracticesData{
		CorePrinciples: []Principle{
			{
				Title:       "Consistency",
				Description: "Use the same patterns across all projects",
				Examples: []string{
					"Same naming conventions",
					"Same folder structure",
					"Same component patterns",
				},
			},
			{
				Title:       "Scalability",
				Description: "Structure should support growth from 10 to 1000+ files",
				Examples: []string{
					"Feature-based organization",
					"Modular components",
					"Separation of concerns",
				},
			},
			{
				Title:       "Discoverability",
				Description: "Developers should find files quickly and intuitively",
				Examples: []string{
					"Clear naming conventions",
					"Logical folder structure",
					"Path aliases for imports",
				},
			},
			{
				Title:       "Separation of Concerns",
				Description: "Group by feature/domain, not by file type",
				Examples: []string{
					"Feature folders over type folders",
					"Co-locate related files",
					"Domain-driven structure",
				},
			},
		},
		FolderStructure: FolderStructure{
			Root: Folder{
				Name:        "project-root",
				Description: "Root directory of your React project",
				Children: []Folder{
					{
						Name:        "public",
						Description: "Static assets (images, fonts, index.html)",
						Required:    true,
					},
					{
						Name:        "src",
						Description: "All source code",
						Required:    true,
						Children: []Folder{
							{
								Name:        "components",
								Description: "Reusable UI components",
								Required:    true,
							},
							{
								Name:        "pages",
								Description: "Page-level components (routes)",
								Required:    true,
							},
							{
								Name:        "features",
								Description: "Feature-specific modules",
								Required:    false,
							},
							{
								Name:        "hooks",
								Description: "Custom React hooks",
								Required:    false,
							},
							{
								Name:        "utils",
								Description: "Helper functions and utilities",
								Required:    false,
							},
							{
								Name:        "services",
								Description: "API calls and external integrations",
								Required:    false,
							},
							{
								Name:        "store",
								Description: "State management (Redux, Context, etc.)",
								Required:    false,
							},
							{
								Name:        "types",
								Description: "TypeScript types/interfaces",
								Required:    false,
							},
							{
								Name:        "constants",
								Description: "App-wide constants and config",
								Required:    false,
							},
							{
								Name:        "styles",
								Description: "Global styles and theme",
								Required:    false,
							},
						},
					},
				},
			},
		},
		NamingConventions: []NamingConvention{
			{
				Type:        "Components",
				Convention:  "PascalCase",
				Examples:    []string{"UserProfile.jsx", "NavigationBar.jsx", "LoginForm.jsx"},
				Description: "Components should use PascalCase for easy identification",
			},
			{
				Type:        "Utilities/Hooks",
				Convention:  "camelCase",
				Examples:    []string{"formatDate.js", "useAuth.js", "validateEmail.js"},
				Description: "Functions and hooks use camelCase with descriptive names",
			},
			{
				Type:        "Constants",
				Convention:  "SCREAMING_SNAKE_CASE",
				Examples:    []string{"API_BASE_URL.js", "MAX_RETRY_ATTEMPTS.js"},
				Description: "Constants use uppercase with underscores",
			},
			{
				Type:        "Folders",
				Convention:  "kebab-case or lowercase",
				Examples:    []string{"user-profile/", "components/", "utils/"},
				Description: "Folders use kebab-case or lowercase for consistency",
			},
		},
		AntiPatterns: []AntiPattern{
			{
				Title:       "Organizing by File Type Instead of Feature",
				Description: "Separating components, styles, and logic into different top-level folders",
				BadExample:  "src/components/, src/styles/, src/logic/",
				GoodExample: "src/features/auth/ (contains components, styles, logic)",
				Impact:      "Makes it hard to find related files and understand feature boundaries",
			},
			{
				Title:       "Deeply Nested Folders",
				Description: "Creating folder hierarchies more than 3-4 levels deep",
				BadExample:  "src/components/ui/forms/inputs/text/TextInput.jsx",
				GoodExample: "src/components/forms/TextInput.jsx",
				Impact:      "Makes navigation difficult and import paths unwieldy",
			},
			{
				Title:       "Generic Component Names",
				Description: "Using vague names that don't describe the component's purpose",
				BadExample:  "Card.jsx, Item.jsx, Container.jsx",
				GoodExample: "UserProfileCard.jsx, ProductListItem.jsx, DashboardContainer.jsx",
				Impact:      "Reduces code discoverability and makes maintenance harder",
			},
		},
		QuizQuestions: []QuizQuestion{
			{
				Question: "What is the recommended naming convention for React components?",
				Options:  []string{"camelCase", "PascalCase", "kebab-case", "snake_case"},
				Correct:  1,
				Explanation: "React components should use PascalCase (e.g., UserProfile.jsx) to distinguish them from regular functions and make them easily identifiable.",
			},
			{
				Question: "Which folder structure approach is recommended for larger React applications?",
				Options:  []string{"Organize by file type", "Organize by feature", "Flat structure", "Alphabetical order"},
				Correct:  1,
				Explanation: "Feature-based organization keeps related files together, making it easier to understand and maintain specific features of your application.",
			},
			{
				Question: "What should you avoid when creating folder hierarchies?",
				Options:  []string{"Using index files", "Deep nesting (>3-4 levels)", "Descriptive names", "Colocation"},
				Correct:  1,
				Explanation: "Deep nesting makes navigation difficult and creates unwieldy import paths. Keep folder hierarchies to 3-4 levels maximum.",
			},
		},
	}
}

// GetLessons returns interactive lessons
func (a *App) GetLessons() []Lesson {
	return []Lesson{
		{
			ID:          1,
			Title:       "Project Structure Fundamentals",
			Description: "Learn the basic principles of organizing a React project",
			Content: `# Project Structure Fundamentals

## Core Principles

A well-structured React project follows four key principles:

### 1. Consistency
Use the same patterns across all projects. This means:
- Same naming conventions everywhere
- Same folder organization patterns
- Same component structure patterns

### 2. Scalability
Your structure should work with 10 files or 1000+ files:
- Feature-based organization for larger apps
- Modular, reusable components
- Clear separation of concerns

### 3. Discoverability
Developers should find files quickly:
- Descriptive, clear naming
- Logical folder hierarchy
- Consistent import patterns

### 4. Separation of Concerns
Group related functionality together:
- Feature folders over type folders
- Co-locate related files
- Domain-driven organization
`,
			Quiz: []QuizQuestion{
				{
					Question: "Which principle helps ensure files are easy to find?",
					Options:  []string{"Consistency", "Scalability", "Discoverability", "Separation of Concerns"},
					Correct:  2,
					Explanation: "Discoverability ensures developers can find files quickly through clear naming and logical organization.",
				},
			},
		},
		{
			ID:          2,
			Title:       "Folder Organization Strategies",
			Description: "Master different approaches to organizing your React project folders",
			Content: `# Folder Organization Strategies

## Small Projects (< 20 components)
For small projects, keep it simple:

\`\`\`
src/
├── components/
├── pages/
├── hooks/
├── utils/
└── styles/
\`\`\`

## Medium Projects (20-100 components)
Add more structure:

\`\`\`
src/
├── components/
│   ├── ui/          # Reusable UI components
│   ├── layout/      # Layout components
│   └── forms/       # Form components
├── pages/
├── features/        # Feature-specific code
├── hooks/
├── services/
├── store/
└── utils/
\`\`\`

## Large Projects (100+ components)
Feature-based organization:

\`\`\`
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── store/
│   └── dashboard/
├── shared/
│   ├── components/
│   ├── hooks/
│   └── utils/
└── app/
\`\`\`
`,
			Quiz: []QuizQuestion{
				{
					Question: "What organization strategy is best for large projects (100+ components)?",
					Options:  []string{"Type-based", "Feature-based", "Alphabetical", "Random"},
					Correct:  1,
					Explanation: "Feature-based organization groups all related files for a feature together, making large codebases easier to navigate and maintain.",
				},
			},
		},
	}
}

// ValidateProjectStructure validates a project structure against best practices
func (a *App) ValidateProjectStructure(structure ProjectStructure) ValidationResult {
	score := 0
	maxScore := 0
	var issues []ValidationIssue
	var suggestions []string

	// Check for required folders
	requiredFolders := []string{"src", "public"}
	for _, required := range requiredFolders {
		maxScore++
		found := false
		for _, folder := range structure.Folders {
			if folder == required {
				found = true
				score++
				break
			}
		}
		if !found {
			issues = append(issues, ValidationIssue{
				Type:       "Missing Required Folder",
				Message:    "Missing required folder: " + required,
				Severity:   "error",
				Suggestion: "Create a " + required + " folder in your project root",
			})
		}
	}

	// Check naming conventions
	for _, file := range structure.Files {
		maxScore++
		if isComponent(file) {
			if isPascalCase(file) {
				score++
			} else {
				issues = append(issues, ValidationIssue{
					Type:       "Naming Convention",
					Message:    "Component " + file + " should use PascalCase",
					Severity:   "warning",
					Suggestion: "Rename component to use PascalCase (e.g., UserProfile.jsx)",
				})
			}
		}
	}

	// Generate suggestions based on structure
	if len(structure.Folders) < 5 {
		suggestions = append(suggestions, "Consider adding more organized folders like 'components', 'hooks', 'utils' for better structure")
	}

	percentage := float64(score) / float64(maxScore) * 100
	var grade string
	switch {
	case percentage >= 90:
		grade = "A"
	case percentage >= 80:
		grade = "B"
	case percentage >= 70:
		grade = "C"
	case percentage >= 60:
		grade = "D"
	default:
		grade = "F"
	}

	return ValidationResult{
		Score:       score,
		MaxScore:    maxScore,
		Percentage:  percentage,
		Grade:       grade,
		Issues:      issues,
		Suggestions: suggestions,
	}
}

// Helper functions
func isComponent(filename string) bool {
	return len(filename) > 4 && (filename[len(filename)-4:] == ".jsx" || filename[len(filename)-4:] == ".tsx")
}

func isPascalCase(filename string) bool {
	if len(filename) == 0 {
		return false
	}
	return filename[0] >= 'A' && filename[0] <= 'Z'
}
