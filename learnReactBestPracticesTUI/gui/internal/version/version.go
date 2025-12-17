package version

import (
	"fmt"
	"runtime"
)

const (
	Version   = "1.0.0"
	BuildDate = "2024-12-28"
	AppName   = "React Best Practices TUI"
)

// GetVersionInfo returns formatted version information
func GetVersionInfo() string {
	return fmt.Sprintf(`%s v%s
Build Date: %s
Go Version: %s
OS/Arch: %s/%s

A Terminal User Interface for learning React project structure best practices.
Built with ❤️  using Bubble Tea framework.`,
		AppName,
		Version,
		BuildDate,
		runtime.Version(),
		runtime.GOOS,
		runtime.GOARCH)
}

// GetShortVersion returns just the version number
func GetShortVersion() string {
	return fmt.Sprintf("%s v%s", AppName, Version)
}
