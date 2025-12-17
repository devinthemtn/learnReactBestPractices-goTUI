package models

import "time"

// Lesson represents a single learning module
type Lesson struct {
	ID          string
	Title       string
	Description string
	Content     []ContentSection
	Examples    []ProjectExample
	Quiz        []QuizQuestion
	Completed   bool
	Duration    time.Duration
}

// ContentSection represents a section within a lesson
type ContentSection struct {
	Title   string
	Content string
	Type    ContentType
}

// ContentType defines the type of content
type ContentType string

const (
	ContentTypeText      ContentType = "text"
	ContentTypeCode      ContentType = "code"
	ContentTypeTree      ContentType = "tree"
	ContentTypePrinciple ContentType = "principle"
	ContentTypeExample   ContentType = "example"
)

// ProjectExample represents a React project structure example
type ProjectExample struct {
	Name        string
	Description string
	Structure   FileNode
	IsGood      bool // true for good examples, false for anti-patterns
	Explanation string
}

// FileNode represents a file or directory in a project structure
type FileNode struct {
	Name        string
	Type        NodeType
	Children    []FileNode
	Description string
	IsHighlight bool // for highlighting important files/folders
	Category    FileCategory
}

// NodeType defines whether it's a file or directory
type NodeType string

const (
	NodeTypeFile      NodeType = "file"
	NodeTypeDirectory NodeType = "directory"
)

// FileCategory categorizes files for color coding and organization
type FileCategory string

const (
	CategoryComponent FileCategory = "component"
	CategoryHook      FileCategory = "hook"
	CategoryUtil      FileCategory = "util"
	CategoryService   FileCategory = "service"
	CategoryStore     FileCategory = "store"
	CategoryType      FileCategory = "type"
	CategoryConstant  FileCategory = "constant"
	CategoryStyle     FileCategory = "style"
	CategoryConfig    FileCategory = "config"
	CategoryTest      FileCategory = "test"
	CategoryPage      FileCategory = "page"
	CategoryFeature   FileCategory = "feature"
	CategoryPublic    FileCategory = "public"
	CategoryGeneral   FileCategory = "general"
)

// QuizQuestion represents a quiz question
type QuizQuestion struct {
	Question    string
	Options     []string
	Correct     int
	Explanation string
}

// Progress tracks user's learning progress
type Progress struct {
	CompletedLessons map[string]bool
	QuizScores       map[string]int
	TotalTime        time.Duration
	LastAccessed     time.Time
}

// AppState represents the current state of the application
type AppState string

const (
	StateMenu       AppState = "menu"
	StateLessons    AppState = "lessons"
	StateLessonView AppState = "lesson_view"
	StateQuiz       AppState = "quiz"
	StateTree       AppState = "tree"
	StateReference  AppState = "reference"
	StateHelp       AppState = "help"
)
