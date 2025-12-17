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
		getDocumentationLesson(),
		getJSDocLesson(),
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
						{Name: "doc", Type: models.NodeTypeDirectory, Category: models.CategoryPublic, IsHighlight: true},
						{Name: "src", Type: models.NodeTypeDirectory, Category: models.CategoryGeneral, IsHighlight: true},
						{Name: ".env", Type: models.NodeTypeFile, Category: models.CategoryConfig},
						{Name: ".gitignore", Type: models.NodeTypeFile, Category: models.CategoryConfig},
						{Name: "package.json", Type: models.NodeTypeFile, Category: models.CategoryConfig, IsHighlight: true},
						{Name: "README.md", Type: models.NodeTypeFile, Category: models.CategoryConfig},
						{Name: "vite.config.js", Type: models.NodeTypeFile, Category: models.CategoryConfig},
					},
				},
				Explanation: "Clean separation between source code, static assets, documentation, and configuration files.",
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

func getDocumentationLesson() models.Lesson {
	return models.Lesson{
		ID:          "documentation-organization",
		Title:       "Documentation Organization",
		Description: "Learn how to organize project documentation effectively",
		Duration:    time.Minute * 12,
		Content: []models.ContentSection{
			{
				Title:   "Why Documentation Organization Matters",
				Type:    models.ContentTypeText,
				Content: "Good documentation organization is as important as code organization:\n• Helps new developers get started quickly\n• Reduces time spent searching for information\n• Makes project maintenance easier\n• Improves team collaboration\n• Creates a professional project impression",
			},
			{
				Title:   "The Two-Tier Documentation Strategy",
				Type:    models.ContentTypePrinciple,
				Content: "1. ESSENTIAL INFO AT ROOT - Keep README.md at project root with install instructions and quick start\n2. DETAILED DOCS IN DOC FOLDER - Use 'doc/' or 'docs/' folder for comprehensive documentation\n3. CLEAR NAMING - Use descriptive filenames so developers know what each document contains\n4. ORGANIZED STRUCTURE - Group related documentation into subdirectories",
			},
			{
				Title:   "What Goes in README.md (Root Level)",
				Type:    models.ContentTypeExample,
				Content: "✅ Project title and brief description\n✅ Installation/setup instructions\n✅ Quick start guide\n✅ Basic usage examples\n✅ Link to detailed documentation\n✅ License and contribution info\n\n❌ Detailed API documentation\n❌ Architecture explanations\n❌ Troubleshooting guides\n❌ Change logs",
			},
			{
				Title:   "What Goes in doc/ Folder",
				Type:    models.ContentTypeExample,
				Content: "✅ API documentation and examples\n✅ Architecture and design decisions\n✅ Detailed setup and deployment guides\n✅ Troubleshooting and FAQ\n✅ Contributing guidelines\n✅ Change logs and release notes\n✅ User guides and tutorials",
			},
		},
		Examples: []models.ProjectExample{
			{
				Name:        "Good: Organized Documentation Structure",
				Description: "Clear separation between essential and detailed documentation",
				IsGood:      true,
				Structure: models.FileNode{
					Name: "project-root",
					Type: models.NodeTypeDirectory,
					Children: []models.FileNode{
						{Name: "README.md", Type: models.NodeTypeFile, Category: models.CategoryGeneral},
						{Name: ".env.example", Type: models.NodeTypeFile, Category: models.CategoryConfig},
						{
							Name:     "doc",
							Type:     models.NodeTypeDirectory,
							Category: models.CategoryGeneral,
							Children: []models.FileNode{
								{Name: "README.md", Type: models.NodeTypeFile, Category: models.CategoryGeneral},
								{Name: "architecture.md", Type: models.NodeTypeFile, Category: models.CategoryGeneral},
								{Name: "deployment.md", Type: models.NodeTypeFile, Category: models.CategoryGeneral},
								{
									Name:     "api",
									Type:     models.NodeTypeDirectory,
									Category: models.CategoryGeneral,
									Children: []models.FileNode{
										{Name: "endpoints.md", Type: models.NodeTypeFile, Category: models.CategoryGeneral},
										{Name: "authentication.md", Type: models.NodeTypeFile, Category: models.CategoryGeneral},
									},
								},
								{
									Name:     "guides",
									Type:     models.NodeTypeDirectory,
									Category: models.CategoryGeneral,
									Children: []models.FileNode{
										{Name: "getting-started.md", Type: models.NodeTypeFile, Category: models.CategoryGeneral},
										{Name: "troubleshooting.md", Type: models.NodeTypeFile, Category: models.CategoryGeneral},
									},
								},
							},
						},
						{Name: "src", Type: models.NodeTypeDirectory, Category: models.CategoryGeneral},
						{Name: "package.json", Type: models.NodeTypeFile, Category: models.CategoryConfig},
					},
				},
				Explanation: "Essential README.md stays at root for GitHub visibility, while detailed docs are organized in the doc/ folder with clear naming and structure.",
			},
			{
				Name:        "Bad: Documentation Scattered at Root",
				Description: "Documentation files mixed with code at project root",
				IsGood:      false,
				Structure: models.FileNode{
					Name: "project-root",
					Type: models.NodeTypeDirectory,
					Children: []models.FileNode{
						{Name: "README.md", Type: models.NodeTypeFile, Category: models.CategoryGeneral},
						{Name: "API_DOCS.md", Type: models.NodeTypeFile, Category: models.CategoryGeneral},
						{Name: "SETUP.md", Type: models.NodeTypeFile, Category: models.CategoryGeneral},
						{Name: "notes.md", Type: models.NodeTypeFile, Category: models.CategoryGeneral},
						{Name: "deployment_guide.txt", Type: models.NodeTypeFile, Category: models.CategoryGeneral},
						{Name: "TROUBLESHOOTING.md", Type: models.NodeTypeFile, Category: models.CategoryGeneral},
						{Name: "src", Type: models.NodeTypeDirectory, Category: models.CategoryGeneral},
						{Name: "package.json", Type: models.NodeTypeFile, Category: models.CategoryConfig},
					},
				},
				Explanation: "Root directory is cluttered with documentation files, making it hard to find code-related files and navigate the project.",
			},
		},
		Quiz: []models.QuizQuestion{
			{
				Question:    "What should be kept in the root-level README.md file?",
				Options:     []string{"Complete API documentation", "Installation instructions and quick start", "Detailed architecture explanations", "All project documentation"},
				Correct:     1,
				Explanation: "The root README.md should contain essential information like installation instructions and quick start guide, while detailed documentation goes in the doc/ folder.",
			},
			{
				Question:    "What is the main benefit of using a 'doc/' folder for detailed documentation?",
				Options:     []string{"It makes the repository larger", "It keeps the root directory clean and organized", "It hides documentation from users", "It makes documentation harder to find"},
				Correct:     1,
				Explanation: "A doc/ folder keeps the project root clean while organizing detailed documentation in a discoverable location. This is an industry standard pattern.",
			},
		},
	}
}

func getJSDocLesson() models.Lesson {
	return models.Lesson{
		ID:          "jsdoc-type-safety",
		Title:       "JSDoc for Type Safety & Documentation",
		Description: "Learn how to use JSDoc for type definitions and documentation in JavaScript React projects",
		Duration:    time.Minute * 15,
		Content: []models.ContentSection{
			{
				Title:   "Why JSDoc Matters for React Projects",
				Type:    models.ContentTypeText,
				Content: "JSDoc provides type safety and documentation for JavaScript projects without requiring TypeScript:\n• Type safety and error catching during development\n• Better IDE support with autocomplete and refactoring\n• Self-documenting code that serves as inline documentation\n• Gradual adoption - add types incrementally\n• Build-time type checking using TypeScript compiler",
			},
			{
				Title:   "Basic JSDoc Type Annotations",
				Type:    models.ContentTypeExample,
				Content: "Function with typed parameters and return:\n/**\n * Formats a user's display name\n * @param {Object} user - The user object\n * @param {string} user.firstName - User's first name\n * @param {string} user.lastName - User's last name\n * @returns {string} The formatted display name\n */\nfunction formatUserName(user) {\n  return `${user.firstName} ${user.lastName}`;\n}",
			},
			{
				Title:   "Variable Type Definitions",
				Type:    models.ContentTypeExample,
				Content: "Defining types for variables and collections:\n/** @type {string[]} */\nconst userIds = ['user-1', 'user-2'];\n\n/** @type {Map<string, User>} */\nconst userCache = new Map();\n\n/** @typedef {Object} ApiResponse\n * @property {boolean} success\n * @property {string} message\n * @property {*} [data] - Optional response data\n */",
			},
			{
				Title:   "React Component JSDoc Patterns",
				Type:    models.ContentTypeExample,
				Content: "Typing React components and props:\n/**\n * @typedef {Object} ButtonProps\n * @property {string} text - Button text\n * @property {'primary'|'secondary'} [variant='primary']\n * @property {function(): void} onClick - Click handler\n */\n\n/**\n * Reusable Button component\n * @param {ButtonProps} props\n * @returns {React.JSX.Element}\n */\nfunction Button({ text, variant = 'primary', onClick }) {\n  return <button className={`btn-${variant}`} onClick={onClick}>{text}</button>;\n}",
			},
			{
				Title:   "Setting Up Type Checking",
				Type:    models.ContentTypePrinciple,
				Content: "1. INSTALL TYPESCRIPT - npm install --save-dev typescript\n2. CREATE CONFIG - Add jsconfig.json or tsconfig.json with checkJs: true\n3. ADD SCRIPTS - Include 'type-check': 'tsc --noEmit' in package.json\n4. CONFIGURE EDITOR - Enable TypeScript validation in VS Code settings",
			},
		},
		Examples: []models.ProjectExample{
			{
				Name:        "Good: Well-Documented Component with JSDoc",
				Description: "Component with comprehensive JSDoc type annotations",
				IsGood:      true,
				Structure: models.FileNode{
					Name:     "UserProfile.jsx",
					Type:     models.NodeTypeFile,
					Category: models.CategoryComponent,
					Children: []models.FileNode{
						{Name: "// JSDoc type definitions", Type: models.NodeTypeFile, Category: models.CategoryGeneral},
						{Name: "// @typedef ButtonProps", Type: models.NodeTypeFile, Category: models.CategoryGeneral},
						{Name: "// @param {ButtonProps} props", Type: models.NodeTypeFile, Category: models.CategoryGeneral},
						{Name: "// @returns {React.JSX.Element}", Type: models.NodeTypeFile, Category: models.CategoryGeneral},
					},
				},
				Explanation: "JSDoc provides clear type definitions, parameter documentation, and return types, making the component self-documenting and enabling better IDE support.",
			},
			{
				Name:        "Bad: Undocumented Component Without Types",
				Description: "Component lacking type information and documentation",
				IsGood:      false,
				Structure: models.FileNode{
					Name:     "UserProfile.jsx",
					Type:     models.NodeTypeFile,
					Category: models.CategoryComponent,
					Children: []models.FileNode{
						{Name: "// No type information", Type: models.NodeTypeFile, Category: models.CategoryGeneral},
						{Name: "// No parameter documentation", Type: models.NodeTypeFile, Category: models.CategoryGeneral},
						{Name: "// No return type specified", Type: models.NodeTypeFile, Category: models.CategoryGeneral},
						{Name: "// Unclear prop expectations", Type: models.NodeTypeFile, Category: models.CategoryGeneral},
					},
				},
				Explanation: "Without JSDoc, developers must guess prop types and expected behavior, leading to runtime errors and poor developer experience.",
			},
		},
		Quiz: []models.QuizQuestion{
			{
				Question:    "What is the main benefit of using JSDoc in JavaScript React projects?",
				Options:     []string{"It compiles to smaller bundles", "It provides type safety and better IDE support", "It automatically generates CSS", "It replaces the need for testing"},
				Correct:     1,
				Explanation: "JSDoc provides type safety, better autocomplete, error detection, and serves as inline documentation, all without requiring TypeScript migration.",
			},
			{
				Question:    "Which JSDoc tag is used to define the type of a variable?",
				Options:     []string{"@param", "@type", "@returns", "@typedef"},
				Correct:     1,
				Explanation: "The @type tag is used to specify the type of a variable, e.g., /** @type {string[]} */ const names = [];",
			},
			{
				Question:    "How do you enable type checking for JSDoc annotations?",
				Options:     []string{"Install a special JSDoc compiler", "Add checkJs: true to tsconfig.json and run tsc --noEmit", "Use a different file extension", "JSDoc doesn't support type checking"},
				Correct:     1,
				Explanation: "You can use TypeScript's compiler with checkJs: true in tsconfig.json and run 'tsc --noEmit' to type-check JSDoc annotations without generating output files.",
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
