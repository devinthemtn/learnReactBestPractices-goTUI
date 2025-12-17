package main

import (
	"fmt"
	"log"
	"os"

	"react-best-practices-gui/internal/lessons"
	"react-best-practices-gui/internal/models"
)

func main() {
	log.Println("Starting lesson validation...")

	// Test lesson loading
	allLessons := lessons.GetAllLessons()
	if len(allLessons) == 0 {
		log.Fatal("No lessons loaded!")
	}

	fmt.Printf("Successfully loaded %d lessons:\n", len(allLessons))
	fmt.Println("=" + fmt.Sprintf("%50s", "="))

	// Validate each lesson
	for i, lesson := range allLessons {
		fmt.Printf("%d. %s\n", i+1, lesson.Title)

		// Check basic fields
		if lesson.ID == "" {
			fmt.Printf("   ❌ ERROR: Missing ID\n")
			os.Exit(1)
		}
		if lesson.Title == "" {
			fmt.Printf("   ❌ ERROR: Missing Title\n")
			os.Exit(1)
		}
		if lesson.Description == "" {
			fmt.Printf("   ❌ ERROR: Missing Description\n")
			os.Exit(1)
		}

		// Check content
		if len(lesson.Content) == 0 {
			fmt.Printf("   ❌ ERROR: No content sections\n")
			os.Exit(1)
		}

		fmt.Printf("   ✅ ID: %s\n", lesson.ID)
		fmt.Printf("   ✅ Content sections: %d\n", len(lesson.Content))
		fmt.Printf("   ✅ Quiz questions: %d\n", len(lesson.Quiz))
		fmt.Printf("   ✅ Examples: %d\n", len(lesson.Examples))
		fmt.Printf("   ✅ Duration: %v\n", lesson.Duration)

		// Validate content sections
		for j, section := range lesson.Content {
			if section.Title == "" && section.Content == "" {
				fmt.Printf("   ❌ ERROR: Content section %d is empty\n", j+1)
				os.Exit(1)
			}

			// Validate content type
			switch section.Type {
			case models.ContentTypeText, models.ContentTypeCode, models.ContentTypeTree,
				models.ContentTypePrinciple, models.ContentTypeExample:
				// Valid types
			default:
				fmt.Printf("   ❌ ERROR: Invalid content type: %s\n", section.Type)
				os.Exit(1)
			}
		}

		// Validate quiz questions
		for j, question := range lesson.Quiz {
			if question.Question == "" {
				fmt.Printf("   ❌ ERROR: Quiz question %d has no question text\n", j+1)
				os.Exit(1)
			}
			if len(question.Options) < 2 {
				fmt.Printf("   ❌ ERROR: Quiz question %d has insufficient options (%d)\n", j+1, len(question.Options))
				os.Exit(1)
			}
			if question.Correct < 0 || question.Correct >= len(question.Options) {
				fmt.Printf("   ❌ ERROR: Quiz question %d has invalid correct answer index (%d)\n", j+1, question.Correct)
				os.Exit(1)
			}
		}

		// Validate examples
		for j, example := range lesson.Examples {
			if example.Name == "" {
				fmt.Printf("   ❌ ERROR: Example %d has no name\n", j+1)
				os.Exit(1)
			}
			if example.Structure.Name == "" {
				fmt.Printf("   ❌ ERROR: Example %d has invalid structure\n", j+1)
				os.Exit(1)
			}

			// Validate file structure recursively
			if err := validateFileNode(&example.Structure, fmt.Sprintf("Example %d", j+1)); err != nil {
				fmt.Printf("   ❌ ERROR: %s\n", err)
				os.Exit(1)
			}
		}

		fmt.Println()
	}

	fmt.Println("🎉 All lessons validated successfully!")
	fmt.Println("✅ Data integrity check passed")
	fmt.Println("✅ Content structure is valid")
	fmt.Println("✅ Quiz questions are properly formatted")
	fmt.Println("✅ File examples have valid structures")

	// Test progress structure
	progress := models.Progress{
		CompletedLessons: make(map[string]bool),
		QuizScores:       make(map[string]int),
	}

	for _, lesson := range allLessons {
		progress.CompletedLessons[lesson.ID] = false
		progress.QuizScores[lesson.ID] = 0
	}

	fmt.Printf("✅ Progress tracking initialized for %d lessons\n", len(allLessons))

	log.Println("Validation completed successfully - GUI application should work correctly!")
}

func validateFileNode(node *models.FileNode, context string) error {
	if node.Name == "" {
		return fmt.Errorf("%s: FileNode has empty name", context)
	}

	// Validate node type
	switch node.Type {
	case models.NodeTypeFile, models.NodeTypeDirectory:
		// Valid types
	default:
		return fmt.Errorf("%s: Invalid node type: %s", context, node.Type)
	}

	// Validate file category if it's a file
	if node.Type == models.NodeTypeFile {
		switch node.Category {
		case models.CategoryComponent, models.CategoryHook, models.CategoryUtil,
			models.CategoryService, models.CategoryStore, models.CategoryType,
			models.CategoryConstant, models.CategoryStyle, models.CategoryConfig,
			models.CategoryTest, models.CategoryPage, models.CategoryFeature,
			models.CategoryPublic, models.CategoryGeneral:
			// Valid categories
		default:
			return fmt.Errorf("%s: Invalid file category: %s", context, node.Category)
		}
	}

	// Recursively validate children
	for i, child := range node.Children {
		childContext := fmt.Sprintf("%s -> %s[%d]", context, node.Name, i)
		if err := validateFileNode(&child, childContext); err != nil {
			return err
		}
	}

	return nil
}
