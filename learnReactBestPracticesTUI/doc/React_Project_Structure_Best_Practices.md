# React Project Structure & Filesystem Best Practices

## TL;DR (Quick Reference)

**Core Principles:**
- **Consistency** - Use the same patterns across all projects
- **Scalability** - Structure should support growth from 10 to 1000+ files
- **Discoverability** - Developers should find files quickly and intuitively
- **Separation of Concerns** - Group by feature/domain, not by file type

**Recommended Top-Level Structure:**
```
project-root/
├── public/           # Static assets (images, fonts, index.html)
├── src/              # All source code
│   ├── components/   # Reusable UI components
│   ├── pages/        # Page-level components (routes)
│   ├── features/     # Feature-specific modules
│   ├── hooks/        # Custom React hooks
│   ├── utils/        # Helper functions and utilities
│   ├── services/     # API calls and external integrations
│   ├── store/        # State management (Redux, Context, etc.)
│   ├── types/        # TypeScript types/interfaces (if using TS)
│   ├── constants/    # App-wide constants and config
│   ├── styles/       # Global styles and theme
│   ├── App.jsx       # Root application component
│   └── index.jsx     # Application entry point
├── doc/              # Documentation folder (recommended for medium+ projects)
│   ├── README.md     # Documentation index
│   ├── api/          # API documentation
│   ├── guides/       # How-to guides
│   └── architecture.md # Technical documentation
├── .env              # Environment variables (DO NOT COMMIT SECRETS)
├── .gitignore        # Files to exclude from git
├── package.json      # Dependencies and scripts
└── README.md         # Essential project overview (keep at root)
```

**Golden Rules:**
1. **One component per file** - Makes code easier to find and maintain
2. **Colocate related files** - Keep component styles, tests, and utilities nearby
3. **Use index files sparingly** - Only for clean public APIs, not to hide complexity
4. **Name files clearly** - `UserProfileCard.jsx` is better than `Card.jsx`
5. **Avoid deep nesting** - If folders are more than 3-4 levels deep, reconsider structure
6. **Organize documentation** - Use `doc/` folder for detailed docs, keep README.md at root

**Naming Conventions:**
- **Components:** PascalCase (`UserProfile.jsx`, `NavigationBar.jsx`)
- **Utilities/Hooks:** camelCase (`formatDate.js`, `useAuth.js`)
- **Constants:** SCREAMING_SNAKE_CASE (`API_BASE_URL.js`, `MAX_RETRY_ATTEMPTS.js`)
- **Folders:** kebab-case or lowercase (`user-profile/`, `components/`, `utils/`)

---

## Table of Contents

1. [Top-Level Project Organization](#1-top-level-project-organization)
2. [Inside `src/` - The Heart of Your Application](#2-inside-src---the-heart-of-your-application)
   - [`components/` - Reusable UI Components](#components---reusable-ui-components)
   - [`pages/` or `views/` - Route-Level Components](#pages-or-views---route-level-components)
   - [`features/` - Feature-Based Organization](#features---feature-based-organization-recommended-for-larger-apps)
   - [`hooks/` - Custom React Hooks](#hooks---custom-react-hooks)
   - [`utils/` or `helpers/` - Utility Functions](#utils-or-helpers---utility-functions)
   - [`services/` or `api/` - External Integration Layer](#services-or-api---external-integration-layer)
   - [`store/` - State Management](#store---state-management)
   - [`types/` or `interfaces/` - TypeScript Definitions](#types-or-interfaces---typescript-definitions-if-using-typescript)
   - [`constants/` - Application-Wide Constants](#constants---application-wide-constants)
   - [`styles/` or `theme/` - Global Styles and Theming](#styles-or-theme---global-styles-and-theming)
3. [File Naming Conventions](#3-file-naming-conventions)
4. [Colocation - Keep Related Files Together](#4-colocation---keep-related-files-together)
5. [Index Files - Use Sparingly](#5-index-files---use-sparingly)
6. [Avoid Deep Nesting](#6-avoid-deep-nesting)
7. [Environment Variables & Secrets](#7-environment-variables--secrets)
8. [Documentation Organization & Best Practices](#8-documentation-organization--best-practices)
9. [JSDoc for Type Safety & Documentation](#9-jsdoc-for-type-safety--documentation)
10. [Git Best Practices](#10-git-best-practices)
11. [Scaling Considerations](#11-scaling-considerations)
12. [Testing Structure](#12-testing-structure)
13. [Common Anti-Patterns to Avoid](#13-common-anti-patterns-to-avoid)
14. [Tooling & Automation](#14-tooling--automation)
15. [Example: Well-Structured React Project](#15-example-well-structured-react-project)

---

## Detailed Guidelines

### 1. Top-Level Project Organization

The root of your project should be clean and organized. Avoid clutter at the top level.

#### Required Folders:

**`public/`**
- Contains static assets served directly without processing
- Examples: favicon, index.html, robots.txt, manifest.json
- Images that don't need optimization
- External libraries loaded via `<script>` tags

**`src/`**
- **All application source code lives here**
- This is where you spend 99% of your development time
- Organized by function/feature, not file type

**`doc/` or `docs/`** *(Recommended for medium+ projects)*
- Comprehensive project documentation
- API documentation, guides, architecture decisions
- Keeps root directory clean and documentation organized
- GitHub Pages compatible (use `docs/` for automatic publishing)

#### Configuration Files (Root Level):

Keep these at the root, but keep them minimal:
- `package.json` - Dependencies and scripts
- `.gitignore` - Version control exclusions
- `.env` / `.env.local` - Environment variables (never commit secrets!)
- `README.md` - Essential project overview (keep at root for GitHub visibility)
- `vite.config.js` / `webpack.config.js` - Build configuration
- `eslint.config.js` / `.eslintrc` - Linting rules

**Note:** Keep the main `README.md` at the project root for GitHub/GitLab visibility, but move detailed documentation into the `doc/` folder for better organization.
- `tsconfig.json` - TypeScript configuration (if using TS)

**Avoid:** Creating dozens of config files at the root. Use `.config/` folder for complex setups.

---

### 2. Inside `src/` - The Heart of Your Application

#### **`components/`** - Reusable UI Components

This folder contains components that are used in multiple places across your app.

**Organization:**
```
src/components/
├── ui/                  # Generic UI elements
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── Modal.jsx
│   └── Card.jsx
├── layout/              # Layout components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Sidebar.jsx
│   └── PageWrapper.jsx
└── shared/              # Shared business components
    ├── UserAvatar.jsx
    ├── LoadingSpinner.jsx
    └── ErrorBoundary.jsx
```

**Best Practices:**
- Components here should be **reusable** - used in 2+ places
- Components should be **generic** - not tied to specific features
- Each component gets its own file
- If a component has associated styles/tests, use a folder:
  ```
  components/ui/Button/
  ├── Button.jsx
  ├── Button.module.css
  └── Button.test.jsx
  ```

---

#### **`pages/` or `views/`** - Route-Level Components

This folder contains components that represent entire pages/routes.

**Organization:**
```
src/pages/
├── HomePage.jsx
├── LoginPage.jsx
├── DashboardPage.jsx
├── UserProfilePage.jsx
└── NotFoundPage.jsx
```

**Best Practices:**
- One page component per route
- Page components **orchestrate** smaller components
- Page components should be thin - delegate logic to hooks/services
- Name clearly indicates what page it is (`UserProfilePage` not just `Profile`)

**Routing Example:**
```javascript
// App.jsx
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/login" element={<LoginPage />} />
</Routes>
```

---

#### **`features/`** - Feature-Based Organization (Recommended for Larger Apps)

For medium-to-large applications, organize by **feature/domain** instead of file type.

**Organization:**
```
src/features/
├── auth/
│   ├── components/
│   │   ├── LoginForm.jsx
│   │   └── SignupForm.jsx
│   ├── hooks/
│   │   └── useAuth.js
│   ├── services/
│   │   └── authService.js
│   ├── store/
│   │   └── authSlice.js
│   └── index.js          # Public API for this feature
├── user-profile/
│   ├── components/
│   │   ├── ProfileCard.jsx
│   │   └── EditProfileForm.jsx
│   ├── hooks/
│   │   └── useUserProfile.js
│   └── services/
│       └── profileService.js
└── dashboard/
    ├── components/
    ├── hooks/
    └── utils/
```

**Why This Matters:**
- **Encapsulation** - Everything related to "auth" lives in one place
- **Scalability** - Easy to add new features without cluttering root folders
- **Team Collaboration** - Multiple developers can work on different features without conflicts
- **Code Splitting** - Easier to lazy-load entire features

**When to Use:**
- Projects with 5+ distinct feature areas
- Teams with 3+ developers
- Apps expected to grow significantly

---

#### **`hooks/`** - Custom React Hooks

Reusable hooks that encapsulate stateful logic.

**Organization:**
```
src/hooks/
├── useAuth.js           # Authentication hook
├── useFetch.js          # Data fetching hook
├── useLocalStorage.js   # localStorage abstraction
├── useDebounce.js       # Debounce input
└── useWindowSize.js     # Responsive design helper
```

**Best Practices:**
- Prefix all hooks with `use` (React convention)
- One hook per file
- Document parameters and return values
- Keep hooks focused on a single responsibility

**Example:**
```javascript
// useLocalStorage.js
export function useLocalStorage(key, initialValue) {
  // Implementation here
}
```

---

#### **`utils/` or `helpers/`** - Utility Functions

Pure functions that don't depend on React or application state.

**Organization:**
```
src/utils/
├── formatters/
│   ├── formatDate.js
│   ├── formatCurrency.js
│   └── formatPhoneNumber.js
├── validators/
│   ├── validateEmail.js
│   └── validatePassword.js
├── calculations/
│   └── calculateTax.js
└── stringHelpers.js
```

**Best Practices:**
- Functions should be **pure** (same input = same output)
- No side effects (don't modify external state)
- Well-tested (easy to unit test pure functions)
- Group related utilities into subfolders

**Example:**
```javascript
// formatDate.js
export function formatDate(date, format = 'MM/DD/YYYY') {
  // Implementation
}
```

---

#### **`services/` or `api/`** - External Integration Layer

Handles API calls, third-party integrations, and external data sources.

**Organization:**
```
src/services/
├── api/
│   ├── apiClient.js      # Axios/fetch configuration
│   ├── authApi.js        # Auth-related endpoints
│   ├── userApi.js        # User-related endpoints
│   └── productApi.js     # Product-related endpoints
├── firebase/
│   └── firebaseService.js
└── localStorage/
    └── storageService.js
```

**Best Practices:**
- Centralize API configuration (base URL, headers, interceptors)
- Group related endpoints together
- Abstract third-party libraries (easier to swap later)
- Handle errors consistently

**Example:**
```javascript
// userApi.js
import apiClient from './apiClient';

export const userApi = {
  getUser: (id) => apiClient.get(`/users/${id}`),
  updateUser: (id, data) => apiClient.put(`/users/${id}`, data),
  deleteUser: (id) => apiClient.delete(`/users/${id}`)
};
```

---

#### **`store/`** - State Management

Contains Redux slices, Context providers, Zustand stores, or other state management.

**Organization (Redux Toolkit Example):**
```
src/store/
├── index.js             # Store configuration
├── slices/
│   ├── authSlice.js
│   ├── userSlice.js
│   └── cartSlice.js
└── middleware/
    └── logger.js
```

**Organization (Context API Example):**
```
src/store/
├── AuthContext.jsx
├── ThemeContext.jsx
└── UserContext.jsx
```

**Best Practices:**
- Keep state as local as possible (lift up only when needed)
- Use descriptive action names
- Organize by domain/feature, not by action type
- Document state shape and usage

---

#### **`types/` or `interfaces/`** - TypeScript Definitions (If Using TypeScript)

**Organization:**
```
src/types/
├── user.ts
├── product.ts
├── api.ts
└── common.ts
```

**Best Practices:**
- Define shared types here
- Component-specific types can live with the component
- Use meaningful names (`User` not `UserType`)

---

#### **`constants/`** - Application-Wide Constants

**Organization:**
```
src/constants/
├── apiEndpoints.js
├── routes.js
├── errorMessages.js
└── config.js
```

**Best Practices:**
- Use SCREAMING_SNAKE_CASE for constants
- Group related constants
- Avoid magic strings/numbers scattered in code

**Example:**
```javascript
// apiEndpoints.js
export const API_BASE_URL = process.env.REACT_APP_API_URL;
export const ENDPOINTS = {
  AUTH: '/auth',
  USERS: '/users',
  PRODUCTS: '/products'
};
```

---

#### **`styles/` or `theme/`** - Global Styles and Theming

**Organization:**
```
src/styles/
├── global.css           # Global CSS reset, base styles
├── variables.css        # CSS custom properties
├── theme.js             # Theme configuration (colors, spacing, etc.)
└── mixins.scss          # Reusable SCSS mixins (if using SCSS)
```

**Best Practices:**
- Keep component-specific styles colocated with components
- Global styles should be minimal
- Use CSS modules or styled-components for scoped styles
- Define design tokens (colors, spacing, typography) in one place

---

### 3. File Naming Conventions

Consistency in naming makes projects easier to navigate.

#### **Components: PascalCase**
- `UserProfile.jsx`
- `NavigationBar.jsx`
- `ProductCard.jsx`

**Why:** Matches JSX syntax (`<UserProfile />`)

---

#### **Hooks: camelCase with `use` prefix**
- `useAuth.js`
- `useFetch.js`
- `useLocalStorage.js`

**Why:** React convention for hooks

---

#### **Utils/Services: camelCase**
- `formatDate.js`
- `apiClient.js`
- `storageService.js`

**Why:** Standard JavaScript convention for functions/modules

---

#### **Constants: SCREAMING_SNAKE_CASE**
- `API_BASE_URL`
- `MAX_RETRY_ATTEMPTS`
- `DEFAULT_TIMEOUT`

**Why:** Signals immutability and global scope

---

#### **Folders: kebab-case or lowercase**
- `user-profile/`
- `components/`
- `utils/`

**Why:** Avoids case-sensitivity issues across operating systems

---

### 4. Colocation - Keep Related Files Together

**Bad (Scattered Files):**
```
src/
├── components/
│   └── Button.jsx
├── styles/
│   └── Button.css
├── tests/
│   └── Button.test.jsx
└── hooks/
    └── useButton.js
```

**Good (Colocated Files):**
```
src/components/Button/
├── Button.jsx
├── Button.module.css
├── Button.test.jsx
└── useButton.js
```

**Why:**
- Easier to find related files
- Easier to delete features (remove one folder)
- Reduces cognitive load (don't hunt across folders)

---

### 5. Index Files - Use Sparingly

**Good Use Case:**
```
src/components/ui/index.js
```
```javascript
// Clean public API
export { Button } from './Button';
export { Input } from './Input';
export { Modal } from './Modal';
```

**Usage:**
```javascript
import { Button, Input, Modal } from '@/components/ui';
```

**Bad Use Case:**
```
src/components/ui/Button/index.js
```
```javascript
export { default } from './Button';
```

**Why This Is Bad:**
- Every file named `index.js` looks the same in editor tabs
- Harder to search for files
- Doesn't provide meaningful abstraction

**When to Use Index Files:**
- Exporting multiple related items from a folder
- Creating a clean public API for a feature
- Never just to re-export a single default

---

### 6. Avoid Deep Nesting

**Bad (Too Deep):**
```
src/components/dashboard/widgets/charts/line-chart/components/Tooltip.jsx
```

**Good (Flatter):**
```
src/features/dashboard/
├── components/
│   ├── LineChart.jsx
│   ├── ChartTooltip.jsx
│   └── WidgetContainer.jsx
```

**Why:**
- Import paths become unwieldy
- File structure becomes hard to understand
- Signals over-engineering

**Rule of Thumb:** If you're 4+ folders deep, reconsider your structure.

---

### 7. Environment Variables & Secrets

**Use `.env` Files:**
```
REACT_APP_API_URL=https://api.example.com
REACT_APP_GOOGLE_ANALYTICS_ID=UA-XXXXX-Y
```

**Best Practices:**
- Prefix with `REACT_APP_` for Create React App (or `VITE_` for Vite)
- **Never commit `.env` to git** (add to `.gitignore`)
- Use `.env.example` to document required variables
- Use different `.env.local`, `.env.development`, `.env.production` for different environments

**`.gitignore` Entry:**
```
.env
.env.local
.env.*.local
```

**`.env.example` (Safe to Commit):**
```
REACT_APP_API_URL=
REACT_APP_GOOGLE_ANALYTICS_ID=
```

---

### 8. Documentation Organization & Best Practices

#### **Documentation Structure Options**

**Option 1: Root-Level (Small Projects)**
```
project-root/
├── README.md          # Essential - always at root
├── CHANGELOG.md       # Version history
├── CONTRIBUTING.md    # How to contribute
├── LICENSE.md         # Project license
└── src/
```

**Option 2: `doc/` or `docs/` Folder (Recommended for Medium+ Projects)**
```
project-root/
├── README.md          # Keep essential README at root
├── doc/              # or docs/ - all other documentation
│   ├── architecture.md
│   ├── api/
│   │   ├── endpoints.md
│   │   └── authentication.md
│   ├── guides/
│   │   ├── deployment.md
│   │   ├── testing.md
│   │   └── troubleshooting.md
│   ├── decisions/     # Architecture Decision Records (ADRs)
│   └── CHANGELOG.md
├── .env.example
└── src/
```

#### **Benefits of Using a `doc/` Folder**
- **Organization**: Keeps documentation separate from code
- **Scalability**: Easy to organize into subdirectories as project grows  
- **Discoverability**: Clear, expected location for all documentation
- **Industry Standard**: Widely adopted pattern (GitHub Pages uses `docs/`)

#### **Essential Documentation Files**

**Root Level (Always Required):**

**`README.md`** - Project overview and quick start
```markdown
# Project Name

## Description
Brief description of what this project does.

## Quick Start
1. `npm install`
2. Copy `.env.example` to `.env` and fill in values
3. `npm start`

## Documentation
For detailed documentation, see the [doc/](./doc/) folder:
- [Architecture Overview](./doc/architecture.md)
- [API Documentation](./doc/api/)
- [Deployment Guide](./doc/guides/deployment.md)

## Available Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
```

**`.env.example`** - Template for environment variables (no secrets!)
```env
# API Configuration
REACT_APP_API_BASE_URL=https://api.example.com
REACT_APP_ENVIRONMENT=development

# Feature Flags
REACT_APP_ENABLE_ANALYTICS=true
```

**Documentation Folder (For Larger Projects):**

**`doc/architecture.md`** - System design and technical decisions
**`doc/api/`** - API documentation and examples
**`doc/guides/`** - How-to guides and tutorials
**`doc/decisions/`** - Architecture Decision Records (ADRs)

#### **Documentation Best Practices**

**✅ Do:**
- Keep README.md at project root (GitHub/GitLab default)
- Use `doc/` or `docs/` for additional documentation
- Include code examples in documentation
- Keep documentation up-to-date with code changes
- Use clear, descriptive file names
- Organize by topic/feature, not document type

**❌ Don't:**
- Scatter documentation files randomly in project root
- Put sensitive information in documentation
- Create documentation that duplicates code comments
- Use generic names like `notes.md` or `stuff.md`

#### **Documentation File Naming Conventions**
```
doc/
├── README.md              # Overview of documentation
├── architecture.md        # System architecture
├── getting-started.md     # Detailed setup guide
├── api/
│   ├── README.md          # API overview
│   ├── user-endpoints.md  # Specific API sections
│   └── auth-flow.md
├── guides/
│   ├── deployment.md      # kebab-case for multi-word
│   ├── testing-strategy.md
│   └── code-style.md
└── troubleshooting.md     # Common issues and solutions
```

---

### 9. JSDoc for Type Safety & Documentation

JSDoc provides excellent type safety and documentation for JavaScript projects, especially when TypeScript isn't an option. It offers compile-time type checking and better IDE support.

#### **Why Use JSDoc?**
- **Type Safety**: Catch type errors during development without TypeScript
- **Better IDE Support**: Autocomplete, refactoring, and error detection
- **Self-Documenting Code**: Types serve as inline documentation
- **Gradual Adoption**: Add types incrementally to existing projects
- **Build-Time Checking**: Use TypeScript compiler to validate JSDoc types

#### **Basic Type Annotations**

**Function Parameters and Return Types:**
```javascript
/**
 * Formats a user's display name
 * @param {Object} user - The user object
 * @param {string} user.firstName - User's first name
 * @param {string} user.lastName - User's last name
 * @param {boolean} [user.showMiddle=false] - Whether to include middle name
 * @returns {string} The formatted display name
 */
function formatUserName(user) {
  return `${user.firstName} ${user.lastName}`;
}
```

**Variable Type Definitions:**
```javascript
/**
 * @typedef {Object} ApiResponse
 * @property {boolean} success - Whether the request succeeded
 * @property {string} message - Response message
 * @property {*} [data] - Optional response data
 */

/** @type {ApiResponse} */
const response = await fetchUserData();

/** @type {string[]} */
const userIds = ['user-1', 'user-2', 'user-3'];

/** @type {Map<string, User>} */
const userCache = new Map();
```

#### **React Component Type Definitions**

**Functional Components:**
```javascript
/**
 * @typedef {Object} ButtonProps
 * @property {string} text - Button text
 * @property {'primary'|'secondary'|'danger'} [variant='primary'] - Button style variant
 * @property {boolean} [disabled=false] - Whether button is disabled
 * @property {function(): void} onClick - Click handler function
 * @property {React.ReactNode} [children] - Child elements
 */

/**
 * Reusable Button component
 * @param {ButtonProps} props - Component props
 * @returns {React.JSX.Element}
 */
function Button({ text, variant = 'primary', disabled = false, onClick, children }) {
  return (
    <button 
      className={`btn btn-${variant}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children || text}
    </button>
  );
}
```

**Custom Hooks:**
```javascript
/**
 * @typedef {Object} UseApiResult
 * @property {*} data - The fetched data
 * @property {boolean} loading - Loading state
 * @property {Error|null} error - Error object if request failed
 * @property {function(): void} refetch - Function to refetch data
 */

/**
 * Custom hook for API data fetching
 * @param {string} url - API endpoint URL
 * @param {Object} [options] - Fetch options
 * @returns {UseApiResult}
 */
function useApi(url, options = {}) {
  // Hook implementation...
}
```

#### **Complex Type Definitions**

**Nested Objects and Arrays:**
```javascript
/**
 * @typedef {Object} Address
 * @property {string} street - Street address
 * @property {string} city - City name
 * @property {string} state - State/province
 * @property {string} zipCode - Postal code
 */

/**
 * @typedef {Object} User
 * @property {string} id - Unique user identifier
 * @property {string} email - User's email address
 * @property {string} name - Full name
 * @property {Address} address - User's address
 * @property {string[]} roles - Array of user roles
 * @property {Object<string, any>} preferences - User preferences object
 * @property {Date} createdAt - Account creation date
 */

/**
 * Process multiple users
 * @param {User[]} users - Array of user objects
 * @returns {Promise<User[]>} Processed users
 */
async function processUsers(users) {
  // Implementation...
}
```

#### **Generic Types and Utilities**

**Generic Functions:**
```javascript
/**
 * @template T
 * @param {T[]} array - Array to get first element from
 * @returns {T|undefined} First element or undefined
 */
function getFirst(array) {
  return array[0];
}

/**
 * @template K,V
 * @param {Object<K,V>} obj - Object to get entries from
 * @returns {Array<[K,V]>} Array of key-value pairs
 */
function getEntries(obj) {
  return Object.entries(obj);
}
```

#### **Setting Up Type Checking**

**1. Install TypeScript (for type checking only):**
```bash
npm install --save-dev typescript
```

**2. Create `jsconfig.json` or `tsconfig.json`:**
```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "noEmit": true,
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "jsx": "react-jsx",
    "strict": true,
    "baseUrl": "src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "build"]
}
```

**3. Add Type Checking Scripts:**
```json
{
  "scripts": {
    "type-check": "tsc --noEmit",
    "type-check:watch": "tsc --noEmit --watch"
  }
}
```

**4. VS Code Settings (`.vscode/settings.json`):**
```json
{
  "typescript.preferences.checkJs": true,
  "javascript.preferences.checkJs": true,
  "typescript.validate.enable": true,
  "javascript.validate.enable": true
}
```

#### **Best Practices for JSDoc**

**✅ Do:**
- Define complex types with `@typedef` at the top of files
- Use specific types instead of generic `Object` or `*`
- Document all function parameters and return values
- Use optional parameters syntax `[param=default]`
- Create separate `.d.ts` files for shared types in large projects
- Use `@template` for generic functions
- Add descriptions that explain the "why", not just the "what"

**❌ Don't:**
- Skip type annotations for public functions
- Use `any` or `*` unless absolutely necessary
- Forget to update JSDoc when changing function signatures
- Over-document obvious things (e.g., `@param {string} name - The name`)
- Mix JSDoc and TypeScript in the same project inconsistently

#### **Common JSDoc Tags**

```javascript
/**
 * @param {type} name - Description
 * @returns {type} Description
 * @throws {ErrorType} When this error occurs
 * @example
 * // Usage example
 * const result = myFunction('input');
 * 
 * @since 1.2.0
 * @deprecated Use newFunction() instead
 * @see {@link https://example.com} Related documentation
 * @todo Implement caching mechanism
 * @author John Doe <john@example.com>
 */
```

#### **Integration with Build Tools**

**ESLint Configuration:**
```json
{
  "extends": ["eslint:recommended"],
  "plugins": ["jsdoc"],
  "rules": {
    "jsdoc/check-param-names": "error",
    "jsdoc/check-tag-names": "error",
    "jsdoc/check-types": "error",
    "jsdoc/require-param": "error",
    "jsdoc/require-param-description": "error",
    "jsdoc/require-returns": "error"
  }
}
```

Using JSDoc effectively gives you most of the benefits of TypeScript while keeping the simplicity of JavaScript. It's especially valuable for teams transitioning to stronger typing or working with JavaScript-only codebases.

---

### 10. Git Best Practices

**`.gitignore` Essentials:**
```
# Dependencies
node_modules/

# Environment variables
.env
.env.local
.env.*.local

# Build output
build/
dist/

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
```

**Commit Messages:**
- Use present tense ("Add feature" not "Added feature")
- Be descriptive but concise
- Reference issue numbers when applicable

**Examples:**
```
Add user authentication with Firebase
Fix navigation bug on mobile devices
Refactor API service to use axios interceptors
Update README with setup instructions
```

---

### 11. Scaling Considerations

As your project grows, you may need to adapt structure:

#### **Small Projects (< 20 components):**
```
src/
├── components/
├── pages/
├── utils/
├── App.jsx
└── index.jsx
```

#### **Medium Projects (20-100 components):**
```
src/
├── components/
├── pages/
├── hooks/
├── utils/
├── services/
├── store/
├── App.jsx
└── index.jsx
```

#### **Large Projects (100+ components):**
```
src/
├── features/           # Feature-based organization
│   ├── auth/
│   ├── dashboard/
│   └── user-profile/
├── components/         # Only shared components
├── hooks/              # Only shared hooks
├── utils/              # Only shared utilities
├── services/
├── store/
├── App.jsx
└── index.jsx
```

**Key Principle:** Start simple, refactor as you grow. Don't over-engineer for scale you haven't reached yet.

---

### 12. Testing Structure

**Colocate Tests with Components:**
```
src/components/Button/
├── Button.jsx
├── Button.test.jsx
└── Button.module.css
```

**Alternative: Mirror `src/` in `tests/`:**
```
tests/
├── components/
│   └── Button.test.jsx
├── utils/
│   └── formatDate.test.js
└── services/
    └── apiClient.test.js
```

**Best Practice:** Colocation is preferred (easier to find and maintain), but use separate `tests/` folder if your team prefers or if your test framework requires it.

---

### 13. Common Anti-Patterns to Avoid

#### **❌ Organizing by File Type Instead of Feature**
```
src/
├── components/        # ALL components
├── containers/        # ALL containers
├── reducers/          # ALL reducers
└── actions/           # ALL actions
```
**Problem:** As the app grows, these folders become dumping grounds with 100+ files.

**Solution:** Organize by feature/domain instead.

---

#### **❌ Deeply Nested Folders**
```
src/components/pages/dashboard/widgets/charts/LineChart.jsx
```
**Problem:** Import paths become ridiculous, hard to navigate.

**Solution:** Keep nesting to 3-4 levels max.

---

#### **❌ Generic Component Names**
```
components/Card.jsx
components/List.jsx
components/Item.jsx
```
**Problem:** Which card? Which list? Names provide no context.

**Solution:** Be specific: `ProductCard.jsx`, `UserList.jsx`, `CartItem.jsx`

---

#### **❌ God Files (One File Does Everything)**
```
utils.js          // 2000 lines of random functions
helpers.js        // 1500 lines of unrelated code
```
**Problem:** Hard to find anything, impossible to maintain.

**Solution:** Split into focused, single-responsibility files.

---

#### **❌ Duplicate Code Across Projects**
```
project-a/src/utils/formatDate.js
project-b/src/utils/formatDate.js
project-c/src/utils/formatDate.js
```
**Problem:** Bug fixes and updates need to happen in 3 places.

**Solution:** Create shared utility libraries, publish internal npm packages, or use monorepos.

---

### 14. Tooling & Automation

**Use Linters and Formatters:**
- **ESLint** - Catch bugs and enforce code quality
- **Prettier** - Automatically format code consistently
- **Husky** - Run checks before commits (lint, format, test)

**Path Aliases:**
Instead of:
```javascript
import Button from '../../../components/ui/Button';
```

Use:
```javascript
import Button from '@/components/ui/Button';
```

**Configuration (jsconfig.json or tsconfig.json):**
```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/components/*": ["components/*"],
      "@/utils/*": ["utils/*"],
      "@/services/*": ["services/*"]
    }
  }
}
```

---

### 15. Example: Well-Structured React Project

```
my-react-app/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Button.module.css
│   │   │   │   └── Button.test.jsx
│   │   │   ├── Input/
│   │   │   └── Modal/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Sidebar.jsx
│   │   └── shared/
│   │       ├── LoadingSpinner.jsx
│   │       └── ErrorBoundary.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   └── DashboardPage.jsx
│   ├── features/
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   └── store/
│   │   └── user-profile/
│   │       ├── components/
│   │       ├── hooks/
│   │       └── services/
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useFetch.js
│   │   └── useLocalStorage.js
│   ├── utils/
│   │   ├── formatters/
│   │   │   ├── formatDate.js
│   │   │   └── formatCurrency.js
│   │   └── validators/
│   │       └── validateEmail.js
│   ├── services/
│   │   ├── api/
│   │   │   ├── apiClient.js
│   │   │   ├── authApi.js
│   │   │   └── userApi.js
│   │   └── firebase/
│   │       └── firebaseService.js
│   ├── store/
│   │   ├── index.js
│   │   └── slices/
│   │       ├── authSlice.js
│   │       └── userSlice.js
│   ├── constants/
│   │   ├── apiEndpoints.js
│   │   └── routes.js
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   ├── App.jsx
│   └── index.jsx
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

---

## Summary: Key Takeaways

1. **Consistency is King** - Pick conventions and stick to them across all projects
2. **Organize by Feature, Not File Type** - Especially for larger apps
3. **Keep It Flat** - Avoid deep nesting beyond 3-4 levels
4. **Colocate Related Files** - Components, styles, and tests belong together
5. **Name Clearly** - `UserProfileCard.jsx` > `Card.jsx`
6. **Use Path Aliases** - Clean up import statements
7. **Document Everything** - README, .env.example, code comments where needed
8. **Start Simple, Scale Smart** - Don't over-engineer for problems you don't have yet
9. **Leverage Tooling** - ESLint, Prettier, and path aliases save time and prevent bugs
10. **Never Commit Secrets** - Use .env files and keep them out of git

---

## Additional Resources

- [React Docs: File Structure](https://react.dev/learn/thinking-in-react#step-1-break-the-ui-into-a-component-hierarchy)
- [Bulletproof React (GitHub)](https://github.com/alan2207/bulletproof-react) - Opinionated React architecture guide
- [React Folder Structure (FreeCodeCamp)](https://www.freecodecamp.org/news/a-better-way-to-structure-react-projects/)
- [Scaling React Apps (Kent C. Dodds)](https://kentcdodds.com/blog/colocation)

---

**Document Version:** 1.0  
**Last Updated:** December 17, 2025  
**Author:** Spencer Kittle & Thomas Koefod 
**Purpose:** General best practices for React project structure and filesystem organization
