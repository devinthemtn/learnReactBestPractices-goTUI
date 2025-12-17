package main

// BestPracticesData contains all the educational content
type BestPracticesData struct {
	CorePrinciples    []Principle        `json:"corePrinciples"`
	FolderStructure   FolderStructure    `json:"folderStructure"`
	NamingConventions []NamingConvention `json:"namingConventions"`
	AntiPatterns      []AntiPattern      `json:"antiPatterns"`
	QuizQuestions     []QuizQuestion     `json:"quizQuestions"`
}

// Principle represents a core React project structure principle
type Principle struct {
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Examples    []string `json:"examples"`
}

// FolderStructure represents the recommended folder hierarchy
type FolderStructure struct {
	Root Folder `json:"root"`
}

// Folder represents a directory in the project structure
type Folder struct {
	Name        string   `json:"name"`
	Description string   `json:"description"`
	Required    bool     `json:"required"`
	Children    []Folder `json:"children,omitempty"`
}

// NamingConvention defines naming rules for different file types
type NamingConvention struct {
	Type        string   `json:"type"`
	Convention  string   `json:"convention"`
	Examples    []string `json:"examples"`
	Description string   `json:"description"`
}

// AntiPattern represents common mistakes to avoid
type AntiPattern struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	BadExample  string `json:"badExample"`
	GoodExample string `json:"goodExample"`
	Impact      string `json:"impact"`
}

// QuizQuestion for interactive learning
type QuizQuestion struct {
	Question    string   `json:"question"`
	Options     []string `json:"options"`
	Correct     int      `json:"correct"`
	Explanation string   `json:"explanation"`
}

// Lesson represents an interactive learning module
type Lesson struct {
	ID          int            `json:"id"`
	Title       string         `json:"title"`
	Description string         `json:"description"`
	Content     string         `json:"content"`
	Quiz        []QuizQuestion `json:"quiz"`
}

// ProjectStructure represents a user's project structure for validation
type ProjectStructure struct {
	Name    string   `json:"name"`
	Folders []string `json:"folders"`
	Files   []string `json:"files"`
}

// ValidationResult contains the results of structure validation
type ValidationResult struct {
	Score       int               `json:"score"`
	MaxScore    int               `json:"maxScore"`
	Percentage  float64           `json:"percentage"`
	Grade       string            `json:"grade"`
	Issues      []ValidationIssue `json:"issues"`
	Suggestions []string          `json:"suggestions"`
}

// ValidationIssue represents a specific problem found in the project structure
type ValidationIssue struct {
	Type       string `json:"type"`
	Message    string `json:"message"`
	Severity   string `json:"severity"` // "error", "warning", "info"
	Suggestion string `json:"suggestion"`
}

// Template represents a project structure template
type Template struct {
	Name        string           `json:"name"`
	Description string           `json:"description"`
	ProjectSize string           `json:"projectSize"` // "small", "medium", "large"
	Structure   ProjectStructure `json:"structure"`
}

// Progress tracks user's learning progress
type Progress struct {
	LessonsCompleted []int       `json:"lessonsCompleted"`
	QuizScores       []QuizScore `json:"quizScores"`
	TotalScore       int         `json:"totalScore"`
}

// QuizScore represents the result of a quiz attempt
type QuizScore struct {
	LessonID      int     `json:"lessonId"`
	Score         int     `json:"score"`
	MaxScore      int     `json:"maxScore"`
	Percentage    float64 `json:"percentage"`
	TimestampUnix int64   `json:"timestampUnix"`
}

// CodeExample represents a code snippet with explanation
type CodeExample struct {
	Title       string `json:"title"`
	Language    string `json:"language"`
	Code        string `json:"code"`
	Description string `json:"description"`
	IsGood      bool   `json:"isGood"` // true for good example, false for bad
}

// InteractiveExample allows users to explore project structures
type InteractiveExample struct {
	Name        string     `json:"name"`
	Description string     `json:"description"`
	Structure   []FileNode `json:"structure"`
	Explanation string     `json:"explanation"`
	Type        string     `json:"type"` // "good", "bad", "comparison"
}

// FileNode represents a file or folder in an interactive tree
type FileNode struct {
	Name        string     `json:"name"`
	Type        string     `json:"type"` // "file" or "folder"
	Description string     `json:"description,omitempty"`
	Children    []FileNode `json:"children,omitempty"`
	IsExpanded  bool       `json:"isExpanded,omitempty"`
}

// Tip represents a helpful tip or best practice
type Tip struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Category    string `json:"category"` // "naming", "structure", "performance", etc.
	Priority    string `json:"priority"` // "high", "medium", "low"
}

// ChecklistItem for project structure validation
type ChecklistItem struct {
	ID          string `json:"id"`
	Description string `json:"description"`
	Category    string `json:"category"`
	Required    bool   `json:"required"`
	Checked     bool   `json:"checked"`
}

// ProjectAnalysis contains detailed analysis of a project structure
type ProjectAnalysis struct {
	ProjectName      string           `json:"projectName"`
	ValidationResult ValidationResult `json:"validationResult"`
	Recommendations  []string         `json:"recommendations"`
	Strengths        []string         `json:"strengths"`
	Weaknesses       []string         `json:"weaknesses"`
	Complexity       string           `json:"complexity"` // "simple", "moderate", "complex"
}
