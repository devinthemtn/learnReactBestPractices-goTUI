package lessons

import (
	"react-best-practices-tui/internal/models"
	"time"
)

// GetAllLessons returns all available lessons
func GetAllLessons() []models.Lesson {
	return []models.Lesson{
		getCorePrinciplesLesson(),
		getTopLevelStructureLesson(),
		getSrcOrganizationLesson(),
		getNamingConventionsLesson(),
		getColocationLesson(),
		getScalingLesson(),
		getAntiPatternsLesson(),
	}
}

func getCorePrinciplesLesson() models.Lesson {
	return models.Lesson{
		ID:          "core-principles",
		Title:       "Core Principles",
		Description: "Learn the fundamental principles of React project organization",
		Duration:    time.Minute * 10,
		Content: []models.ContentSection{
			{
				Title:   "The Four Pillars of Good React Structure",
				Type:    models.ContentTypePrinciple,
				Content: "1. CONSISTENCY - Use the same patterns across all projects\n2. SCALABILITY - Structure should support growth from 10 to 1000+ files\n3. DISCOVERABILITY - Developers should find files quickly and intuitively\n4. SEPARATION OF CONCERNS - Group by feature/domain, not by file type",
			},
			{
				Title:   "Why Structure Matters",
				Type:    models.ContentTypeText,
				Content: "A well-organized codebase:\n• Reduces onboarding time for new developers\n• Makes debugging and maintenance faster\n• Prevents technical debt accumulation\n• Improves team productivity and collaboration\n• Makes refactoring safer and easier",
			},
		},
		Examples: []models.ProjectExample{
			{
				Name:        "Good: Feature-Based Organization",
				Description: "Components organized by feature rather than type",
				IsGood:      true,
				Structure: models.FileNode{
					Name: "src",
					Type: models.NodeTypeDirectory,
					Children: []models.FileNode{
						{
							Name:     "features",
							Type:     models.NodeTypeDirectory,
							Category: models.CategoryFeature,
							Children: []models.FileNode{
								{
									Name:     "auth",
									Type:     models.NodeTypeDirectory,
									Category: models.CategoryFeature,
									Children: []models.FileNode{
										{Name: "LoginForm.jsx", Type: models.NodeTypeFile, Category: models.CategoryComponent},
										{Name: "useAuth.js", Type: models.NodeTypeFile, Category: models.CategoryHook},
										{Name: "authService.js", Type: models.NodeTypeFile, Category: models.CategoryService},
									},
								},
							},
						},
					},
				},
				Explanation: "Related files are kept together, making it easy to find everything needed for a feature.",
			},
		},
		Quiz: []models.QuizQuestion{
			{
				Question:    "Which principle emphasizes organizing code by business logic rather than file type?",
				Options:     []string{"Consistency", "Scalability", "Discoverability", "Separation of Concerns"},
				Correct:     3,
				Explanation: "Separation of Concerns means grouping related functionality together, typically by feature or domain rather than by file type (components, utils, etc.).",
			},
		},
	}
}

func getTopLevelStructureLesson() models.Lesson {
	return models.Lesson{
		ID:          "top-level-structure",
		Title:       "Top-Level Project Organization",
		Description: "Master the essential folders and files every React project needs",
		Duration:    time.Minute * 15,
		Content: []models.ContentSection{
			{
				Title:   "Essential Top-Level Folders",
				Type:    models.ContentTypeText,
				Content: "Every React project should have these core directories:\n• public/ - Static assets (images, fonts, index.html)\n• src/ - All source code\n• Configuration files at root level",
			},
			{
				Title:   "Configuration Files",
				Type:    models.ContentTypeCode,
				Content: "Root level should contain:\n• package.json - Dependencies and scripts\n• .gitignore - Files to exclude from git\n• .env - Environment variables\n• README.md - Project documentation\n• Build tool configs (vite.config.js, etc.)",
			},
		},
		Examples: []models.ProjectExample{
			{
				Name:        "Complete Top-Level Structure",
				Description: "A well-organized React project root",
				IsGood:      true,
				Structure: models.FileNode{
					Name: "my-react-app",
					Type: models.NodeTypeDirectory,
					Children: []models.FileNode{
						{Name: "public", Type: models.NodeTypeDirectory, Category: models.CategoryPublic, IsHighlight: true},
						{Name: "src", Type: models.NodeTypeDirectory, Category: models.CategoryGeneral, IsHighlight: true},
						{Name: ".env", Type: models.NodeTypeFile, Category: models.CategoryConfig},
						{Name: ".gitignore", Type: models.NodeTypeFile, Category: models.CategoryConfig},
						{Name: "package.json", Type: models.NodeTypeFile, Category: models.CategoryConfig, IsHighlight: true},
						{Name: "README.md", Type: models.NodeTypeFile, Category: models.CategoryConfig},
						{Name: "vite.config.js", Type: models.NodeTypeFile, Category: models.CategoryConfig},
					},
				},
				Explanation: "Clean separation between source code, static assets, and configuration files.",
			},
		},
		Quiz: []models.QuizQuestion{
			{
				Question:    "Where should static assets like images and fonts be placed?",
				Options:     []string{"src/assets/", "public/", "static/", "resources/"},
				Correct:     1,
				Explanation: "Static assets that don't need processing should go in public/ so they can be served directly by the web server.",
			},
			{
				Question:    "Which file contains your project dependencies and scripts?",
				Options:     []string{"package.json", "config.js", "index.html", ".gitignore"},
				Correct:     0,
				Explanation: "package.json is the manifest file that contains metadata about your project, including dependencies, scripts, and configuration.",
			},
		},
	}
}

func getSrcOrganizationLesson() models.Lesson {
	return models.Lesson{
		ID:          "src-organization",
		Title:       "Inside src/ - The Heart of Your App",
		Description: "Learn how to organize your source code for maximum efficiency",
		Duration:    time.Minute * 20,
		Content: []models.ContentSection{
			{
				Title:   "Essential src/ Folders",
				Type:    models.ContentTypeTree,
				Content: "src/\n├── components/   # Reusable UI components\n├── pages/        # Page-level components (routes)\n├── features/     # Feature-specific modules\n├── hooks/        # Custom React hooks\n├── utils/        # Helper functions\n├── services/     # API calls and external integrations\n├── store/        # State management\n├── types/        # TypeScript types (if using TS)\n├── constants/    # App-wide constants\n└── styles/       # Global styles and theme",
			},
			{
				Title:   "Components Organization",
				Type:    models.ContentTypeText,
				Content: "Organize components by purpose:\n• ui/ - Basic UI building blocks (Button, Input, Modal)\n• layout/ - Page layout components (Header, Footer, Sidebar)\n• shared/ - Shared business components used across features",
			},
		},
		Examples: []models.ProjectExample{
			{
				Name:        "Well-Structured src/ Directory",
				Description: "Complete src organization following best practices",
				IsGood:      true,
				Structure: models.FileNode{
					Name: "src",
					Type: models.NodeTypeDirectory,
					Children: []models.FileNode{
						{
							Name:     "components",
							Type:     models.NodeTypeDirectory,
							Category: models.CategoryComponent,
							Children: []models.FileNode{
								{
									Name:     "ui",
									Type:     models.NodeTypeDirectory,
									Category: models.CategoryComponent,
									Children: []models.FileNode{
										{Name: "Button", Type: models.NodeTypeDirectory, Category: models.CategoryComponent},
										{Name: "Input", Type: models.NodeTypeDirectory, Category: models.CategoryComponent},
									},
								},
								{
									Name:     "layout",
									Type:     models.NodeTypeDirectory,
									Category: models.CategoryComponent,
									Children: []models.FileNode{
										{Name: "Header.jsx", Type: models.NodeTypeFile, Category: models.CategoryComponent},
										{Name: "Footer.jsx", Type: models.NodeTypeFile, Category: models.CategoryComponent},
									},
								},
							},
						},
						{Name: "pages", Type: models.NodeTypeDirectory, Category: models.CategoryPage, IsHighlight: true},
						{Name: "features", Type: models.NodeTypeDirectory, Category: models.CategoryFeature, IsHighlight: true},
						{Name: "hooks", Type: models.NodeTypeDirectory, Category: models.CategoryHook},
						{Name: "utils", Type: models.NodeTypeDirectory, Category: models.CategoryUtil},
						{Name: "services", Type: models.NodeTypeDirectory, Category: models.CategoryService},
						{Name: "App.jsx", Type: models.NodeTypeFile, Category: models.CategoryComponent, IsHighlight: true},
					},
				},
				Explanation: "Clear separation of concerns with logical grouping of related functionality.",
			},
		},
		Quiz: []models.QuizQuestion{
			{
				Question:    "What's the main difference between components/ and pages/?",
				Options:     []string{"File size", "Components are reusable, pages are route-level", "Components use JSX, pages use JS", "No difference"},
				Correct:     1,
				Explanation: "Components are reusable UI pieces, while pages represent full screens/routes in your application.",
			},
			{
				Question:    "Where should you place custom React hooks?",
				Options:     []string{"components/", "hooks/", "utils/", "services/"},
				Correct:     1,
				Explanation: "Custom React hooks should be placed in the hooks/ directory for clear organization and reusability.",
			},
			{
				Question:    "What type of components belong in the features/ directory?",
				Options:     []string{"Reusable UI components", "Feature-specific components and logic", "Page components", "Test files"},
				Correct:     1,
				Explanation: "The features/ directory contains components, hooks, services, and other code specific to a particular business feature.",
			},
		},
	}
}

func getNamingConventionsLesson() models.Lesson {
	return models.Lesson{
		ID:          "naming-conventions",
		Title:       "File Naming Conventions",
		Description: "Master consistent naming patterns for better code organization",
		Duration:    time.Minute * 8,
		Content: []models.ContentSection{
			{
				Title:   "Naming Rules by File Type",
				Type:    models.ContentTypeCode,
				Content: "Components: PascalCase\n• UserProfile.jsx ✓\n• userProfile.jsx ✗\n\nHooks: camelCase with 'use' prefix\n• useAuth.js ✓\n• UseAuth.js ✗\n\nUtils/Services: camelCase\n• formatDate.js ✓\n• FormatDate.js ✗\n\nConstants: SCREAMING_SNAKE_CASE\n• API_BASE_URL.js ✓\n• apiBaseUrl.js ✗\n\nFolders: kebab-case or lowercase\n• user-profile/ ✓\n• UserProfile/ ✗",
			},
		},
		Quiz: []models.QuizQuestion{
			{
				Question:    "What's the correct naming for a React component file?",
				Options:     []string{"userProfile.jsx", "UserProfile.jsx", "user-profile.jsx", "USER_PROFILE.jsx"},
				Correct:     1,
				Explanation: "React components should use PascalCase naming convention (UserProfile.jsx).",
			},
			{
				Question:    "How should custom React hooks be named?",
				Options:     []string{"UseAuth.js", "useAuth.js", "use-auth.js", "USE_AUTH.js"},
				Correct:     1,
				Explanation: "Custom React hooks should use camelCase with the 'use' prefix (useAuth.js).",
			},
			{
				Question:    "What's the correct naming for constants?",
				Options:     []string{"apiBaseUrl.js", "ApiBaseUrl.js", "API_BASE_URL.js", "api-base-url.js"},
				Correct:     2,
				Explanation: "Constants should use SCREAMING_SNAKE_CASE naming convention (API_BASE_URL.js).",
			},
		},
	}
}

func getColocationLesson() models.Lesson {
	return models.Lesson{
		ID:          "colocation",
		Title:       "Colocation - Keep Related Files Together",
		Description: "Learn how to organize related files for better maintainability",
		Duration:    time.Minute * 12,
		Content: []models.ContentSection{
			{
				Title:   "What is Colocation?",
				Type:    models.ContentTypeText,
				Content: "Colocation means keeping related files close together in your file system. This includes:\n• Component files with their styles and tests\n• Feature-specific hooks near the components that use them\n• Utility functions close to where they're used",
			},
		},
		Examples: []models.ProjectExample{
			{
				Name:        "Good: Colocated Component",
				Description: "Component with its related files together",
				IsGood:      true,
				Structure: models.FileNode{
					Name: "Button",
					Type: models.NodeTypeDirectory,
					Children: []models.FileNode{
						{Name: "Button.jsx", Type: models.NodeTypeFile, Category: models.CategoryComponent, IsHighlight: true},
						{Name: "Button.module.css", Type: models.NodeTypeFile, Category: models.CategoryStyle},
						{Name: "Button.test.jsx", Type: models.NodeTypeFile, Category: models.CategoryTest},
						{Name: "index.js", Type: models.NodeTypeFile, Category: models.CategoryGeneral},
					},
				},
				Explanation: "Everything related to the Button component is in one folder, making it easy to find and modify.",
			},
		},
		Quiz: []models.QuizQuestion{
			{
				Question:    "What is the main benefit of colocation?",
				Options:     []string{"Faster builds", "Related files are easier to find and modify", "Smaller file sizes", "Better performance"},
				Correct:     1,
				Explanation: "Colocation keeps related files together, making it easier to find everything needed for a feature or component.",
			},
			{
				Question:    "Which files should be colocated with a React component?",
				Options:     []string{"Only the JSX file", "JSX, CSS, and test files", "Only test files", "All project files"},
				Correct:     1,
				Explanation: "Components should be colocated with their styles, tests, and any component-specific utilities or hooks.",
			},
		},
	}
}

func getScalingLesson() models.Lesson {
	return models.Lesson{
		ID:          "scaling",
		Title:       "Scaling Your Project Structure",
		Description: "Adapt your structure as your project grows",
		Duration:    time.Minute * 15,
		Content: []models.ContentSection{
			{
				Title:   "Project Size Guidelines",
				Type:    models.ContentTypeText,
				Content: "Small Projects (< 20 components):\n• Simple src/ organization\n• Minimal folder nesting\n\nMedium Projects (20-100 components):\n• Feature-based organization\n• Clear component categories\n\nLarge Projects (100+ components):\n• Domain-driven design\n• Micro-frontend considerations\n• Advanced tooling and automation",
			},
		},
		Quiz: []models.QuizQuestion{
			{
				Question:    "At what point should you consider feature-based organization?",
				Options:     []string{"From the start", "20-100 components", "Only for large teams", "Never"},
				Correct:     1,
				Explanation: "Feature-based organization becomes beneficial when you have 20-100 components, as it helps manage complexity.",
			},
			{
				Question:    "What's a sign that your project structure needs refactoring?",
				Options:     []string{"More than 3-4 levels of nesting", "Having any tests", "Using TypeScript", "Having multiple components"},
				Correct:     0,
				Explanation: "Deep nesting (more than 3-4 levels) makes navigation difficult and is a sign that structure needs simplification.",
			},
		},
	}
}

func getAntiPatternsLesson() models.Lesson {
	return models.Lesson{
		ID:          "anti-patterns",
		Title:       "Common Anti-Patterns to Avoid",
		Description: "Learn what NOT to do when organizing React projects",
		Duration:    time.Minute * 10,
		Content: []models.ContentSection{
			{
				Title:   "Dangerous Patterns",
				Type:    models.ContentTypeText,
				Content: "❌ Organizing by file type instead of feature\n❌ Deeply nested folders (more than 3-4 levels)\n❌ Generic component names (Card.jsx, Item.jsx)\n❌ God files (one file does everything)\n❌ Duplicate code across projects",
			},
		},
		Examples: []models.ProjectExample{
			{
				Name:        "Bad: Type-Based Organization",
				Description: "Organizing by file type instead of feature",
				IsGood:      false,
				Structure: models.FileNode{
					Name: "src",
					Type: models.NodeTypeDirectory,
					Children: []models.FileNode{
						{
							Name:     "components",
							Type:     models.NodeTypeDirectory,
							Category: models.CategoryComponent,
							Children: []models.FileNode{
								{Name: "LoginForm.jsx", Type: models.NodeTypeFile, Category: models.CategoryComponent},
								{Name: "UserProfile.jsx", Type: models.NodeTypeFile, Category: models.CategoryComponent},
							},
						},
						{
							Name:     "hooks",
							Type:     models.NodeTypeDirectory,
							Category: models.CategoryHook,
							Children: []models.FileNode{
								{Name: "useAuth.js", Type: models.NodeTypeFile, Category: models.CategoryHook},
								{Name: "useProfile.js", Type: models.NodeTypeFile, Category: models.CategoryHook},
							},
						},
					},
				},
				Explanation: "Related files are scattered across different folders, making features hard to understand and maintain.",
			},
		},
		Quiz: []models.QuizQuestion{
			{
				Question:    "What's wrong with having folders more than 4 levels deep?",
				Options:     []string{"Takes up disk space", "Hard to navigate and find files", "Causes build errors", "Nothing wrong"},
				Correct:     1,
				Explanation: "Deep nesting makes it difficult to navigate the codebase and understand the project structure at a glance.",
			},
			{
				Question:    "Why is organizing by file type (all components together) considered an anti-pattern?",
				Options:     []string{"It's slower", "Related files are scattered across folders", "It uses more memory", "It's newer"},
				Correct:     1,
				Explanation: "Type-based organization scatters related files across different folders, making features harder to understand and maintain.",
			},
			{
				Question:    "What's wrong with generic component names like 'Card.jsx'?",
				Options:     []string{"They're too short", "They don't describe the component's purpose", "They're invalid", "They're too common"},
				Correct:     1,
				Explanation: "Generic names don't convey the component's specific purpose. 'UserProfileCard.jsx' is much more descriptive than 'Card.jsx'.",
			},
		},
	}
}
