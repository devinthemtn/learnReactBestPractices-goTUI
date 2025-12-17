package main

import (
	"fmt"
	"os"
	"runtime"
)

func main() {
	fmt.Println("Display Detection Test")
	fmt.Println("=====================")

	// Show current environment
	fmt.Printf("Operating System: %s\n", runtime.GOOS)
	fmt.Printf("Architecture: %s\n", runtime.GOARCH)
	fmt.Printf("DISPLAY: '%s'\n", os.Getenv("DISPLAY"))
	fmt.Printf("WAYLAND_DISPLAY: '%s'\n", os.Getenv("WAYLAND_DISPLAY"))

	fmt.Println("\nDisplay Detection Logic:")

	// Test the detection logic
	hasDisplay := false

	// Check for native GUI platforms
	if runtime.GOOS == "darwin" {
		fmt.Println("✅ macOS detected - native GUI support available")
		hasDisplay = true
	} else if runtime.GOOS == "windows" {
		fmt.Println("✅ Windows detected - native GUI support available")
		hasDisplay = true
	} else {
		// Linux/Unix - check for display servers
		fmt.Println("🐧 Linux/Unix detected - checking for display servers...")

		if os.Getenv("DISPLAY") != "" {
			fmt.Printf("✅ X11 display found: %s\n", os.Getenv("DISPLAY"))
			hasDisplay = true
		}

		if os.Getenv("WAYLAND_DISPLAY") != "" {
			fmt.Printf("✅ Wayland display found: %s\n", os.Getenv("WAYLAND_DISPLAY"))
			hasDisplay = true
		}

		if !hasDisplay {
			fmt.Println("❌ No display server found")
		}
	}

	fmt.Println("\nResult:")
	if hasDisplay {
		fmt.Println("✅ GUI application should be able to run")
		fmt.Println("✅ Display environment is available")
	} else {
		fmt.Println("❌ GUI application cannot run - no display environment")
		fmt.Println("💡 Suggestions:")
		fmt.Println("   - Use SSH with X11 forwarding: ssh -X user@host")
		fmt.Println("   - Set up VNC or remote desktop")
		fmt.Println("   - Run in test mode: ./react-gui -test")
	}

	// Show what the main application would do
	fmt.Println("\nApplication Behavior:")
	if runtime.GOOS == "darwin" || runtime.GOOS == "windows" {
		fmt.Println("✅ Will proceed to launch GUI (native platform)")
	} else if os.Getenv("DISPLAY") != "" || os.Getenv("WAYLAND_DISPLAY") != "" {
		fmt.Println("✅ Will proceed to launch GUI (display server available)")
	} else {
		fmt.Println("❌ Will exit with error (no display server)")
	}
}
