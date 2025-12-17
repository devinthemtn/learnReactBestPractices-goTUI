package main

import (
	"flag"
	"fmt"
	"log"
	"os"

	"react-best-practices-tui/internal/ui"
	"react-best-practices-tui/internal/version"

	tea "github.com/charmbracelet/bubbletea"
)

func main() {
	// Define command-line flags
	var (
		showVersion = flag.Bool("version", false, "Show version information")
		showHelp    = flag.Bool("help", false, "Show help information")
	)

	flag.Parse()

	// Handle version flag
	if *showVersion {
		fmt.Println(version.GetVersionInfo())
		return
	}

	// Handle help flag
	if *showHelp {
		printHelp()
		return
	}

	// Initialize the application
	app := ui.NewApp()

	// Create the Bubble Tea program
	p := tea.NewProgram(app, tea.WithAltScreen())

	// Run the program
	if _, err := p.Run(); err != nil {
		log.Printf("Error running program: %v", err)
		fmt.Printf("Error: %v\n", err)
		os.Exit(1)
	}
}

func printHelp() {
	fmt.Printf(`%s

USAGE:
    react-tui [OPTIONS]

OPTIONS:
    -version    Show version information
    -help       Show this help message

DESCRIPTION:
    An interactive Terminal User Interface for learning React project
    structure best practices. Navigate through lessons, study examples,
    and test your knowledge with quizzes.

CONTROLS:
    ↑/k, ↓/j     Navigate up/down
    ←/h, →/l     Navigate left/right
    Enter        Select/confirm
    Esc/q        Go back
    ?            Show help
    t            Take quiz (in lessons)
    Ctrl+C       Quit

EXAMPLES:
    react-tui           # Start the interactive tutorial
    react-tui -version  # Show version information
    react-tui -help     # Show this help

Visit the lessons to learn about:
• Core principles of React project organization
• Top-level project structure best practices
• Source code organization patterns
• File naming conventions
• Colocation strategies
• Scaling techniques
• Common anti-patterns to avoid

`, version.GetShortVersion())
}
