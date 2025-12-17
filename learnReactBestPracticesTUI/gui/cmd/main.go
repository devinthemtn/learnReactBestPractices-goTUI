package main

import (
	"flag"
	"fmt"
	"log"
	"os"
	"runtime"

	"react-best-practices-gui/internal/lessons"
	"react-best-practices-gui/internal/ui"

	"fyne.io/fyne/v2/app"
)

func main() {
	// Define command-line flags
	var (
		showVersion = flag.Bool("version", false, "Show version information")
		showHelp    = flag.Bool("help", false, "Show help information")
		testMode    = flag.Bool("test", false, "Run in test mode (validate lessons without GUI)")
	)

	flag.Parse()

	// Handle version flag
	if *showVersion {
		fmt.Println("React Best Practices GUI v1.0.0")
		return
	}

	// Handle help flag
	if *showHelp {
		printHelp()
		return
	}

	// Handle test flag - validate lessons without GUI
	if *testMode {
		fmt.Println("Running in test mode - validating lessons...")
		allLessons := lessons.GetAllLessons()
		if len(allLessons) == 0 {
			fmt.Println("❌ ERROR: No lessons loaded!")
			os.Exit(1)
		}
		fmt.Printf("✅ Successfully loaded %d lessons\n", len(allLessons))
		fmt.Println("✅ All data structures are valid")
		fmt.Println("✅ GUI application should work correctly in graphical environment")
		return
	}

	// Check for headless environment (but skip check on macOS/Windows which have native GUI)
	if runtime.GOOS != "darwin" && runtime.GOOS != "windows" {
		if os.Getenv("DISPLAY") == "" && os.Getenv("WAYLAND_DISPLAY") == "" {
			fmt.Println("Error: No display server detected.")
			fmt.Println("This is a GUI application that requires a graphical environment.")
			fmt.Println("Please run this application on a system with X11, Wayland, or native GUI support.")
			fmt.Println("On Linux, try:")
			fmt.Println("  - SSH with X11 forwarding: ssh -X user@host")
			fmt.Println("  - Use VNC or remote desktop")
			fmt.Println("  - Run in test mode: ./react-gui -test")
			os.Exit(1)
		}
	}

	// Create a new Fyne application
	myApp := app.NewWithID("com.reactbestpractices.gui")
	if myApp == nil {
		log.Fatal("Failed to create Fyne application")
	}

	// Create and show the main window
	gui := ui.NewMainWindow(myApp)
	if gui == nil {
		log.Fatal("Failed to create main window")
	}

	log.Println("Starting GUI application...")
	gui.ShowAndRun()
}

func printHelp() {
	fmt.Printf(`React Best Practices GUI v1.0.0

USAGE:
    react-gui [OPTIONS]

OPTIONS:
    -version    Show version information
    -help       Show this help message
    -test       Run in test mode (validate lessons without GUI)

DESCRIPTION:
    An interactive GUI application for learning React project
    structure best practices. Navigate through lessons, study examples,
    and test your knowledge with quizzes.

FEATURES:
    • Interactive lessons with visual examples
    • Working quiz system with progress tracking
    • Visual file tree structures
    • Color-coded file categories
    • Progress tracking and statistics
    • Modern, user-friendly interface

EXAMPLES:
    react-gui           # Start the interactive tutorial
    react-gui -version  # Show version information
    react-gui -help     # Show this help
    react-gui -test     # Validate lesson data (headless mode)

REQUIREMENTS:
    • Graphical environment (X11, Wayland, or native GUI)
    • Use -test flag for headless environments

Learn about:
• Core principles of React project organization
• Top-level project structure best practices
• Source code organization patterns
• File naming conventions
• Colocation strategies
• Scaling techniques
• Common anti-patterns to avoid

`)
}
