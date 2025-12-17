# macOS Setup Guide 🍎

This guide helps you set up and run the React Best Practices GUI application on macOS.

## Quick Start

### ✅ Prerequisites Check
```bash
# Check if you have the required tools
go version          # Should show Go 1.21+
make --version      # Should show GNU Make
xcode-select --version  # Should show command line tools
```

### 🚀 One-Command Setup
```bash
cd gui
./launch.sh
```

## Installation Requirements

### 1. 🛠️ Install Go (if not installed)
```bash
# Option A: Using Homebrew (recommended)
brew install go

# Option B: Download from official site
# Visit: https://golang.org/doc/install
# Download the .pkg installer for macOS
```

### 2. 🔧 Install Xcode Command Line Tools
```bash
# Required for CGO compilation
xcode-select --install

# Verify installation
xcode-select -p
# Should output: /Library/Developer/CommandLineTools
```

### 3. 📦 Install Make (if not available)
```bash
# Usually included with Xcode tools, but if needed:
brew install make
```

## Building the Application

### Standard Build Process
```bash
cd gui

# Install dependencies
make deps

# Build the application
make build

# The binary will be created at: build/react-gui
```

### Create macOS App Bundle
```bash
# Create a proper .app bundle for macOS
make bundle-darwin

# This creates: build/ReactBestPractices.app
# You can then drag this to Applications folder
```

## Running the Application

### Method 1: Using the Launcher (Recommended)
```bash
cd gui
./launch.sh
```

The launcher automatically:
- ✅ Detects macOS native GUI environment
- ✅ Builds the app if needed
- ✅ Provides helpful error messages
- ✅ Handles environment issues gracefully

### Method 2: Direct Binary Execution
```bash
cd gui
./build/react-gui
```

### Method 3: Running from Source
```bash
cd gui
make run
```

## App Bundle Installation

### Creating a Proper macOS App
```bash
# Build the app bundle
make bundle-darwin

# Install to Applications (optional)
cp -r build/ReactBestPractices.app /Applications/

# Or open directly
open build/ReactBestPractices.app
```

### App Bundle Structure
```
ReactBestPractices.app/
├── Contents/
│   ├── Info.plist          # App metadata
│   ├── MacOS/
│   │   └── ReactBestPractices  # Executable
│   └── Resources/          # App resources
```

## Troubleshooting

### 🚫 Common Issues on macOS

#### Issue: "ReactBestPractices cannot be opened because it is from an unidentified developer"
**Solution**:
```bash
# Remove quarantine attribute
xattr -d com.apple.quarantine build/react-gui

# Or for app bundle
xattr -d com.apple.quarantine build/ReactBestPractices.app
```

**Alternative**: System Preferences → Security & Privacy → General → "Open Anyway"

#### Issue: Command line tools missing
```bash
# Install Xcode command line tools
xcode-select --install

# If still issues, reset tools
sudo xcode-select --reset
sudo xcode-select --install
```

#### Issue: Go not found or wrong version
```bash
# Install/update Go with Homebrew
brew install go
# or
brew upgrade go

# Add to your shell profile (~/.zshrc or ~/.bash_profile)
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin:/usr/local/go/bin
```

#### Issue: Make not found
```bash
# Install make
brew install make

# Or use Xcode tools version
/usr/bin/make --version
```

#### Issue: CGO compilation errors
```bash
# Ensure Xcode tools are properly installed
sudo xcode-select --install
sudo xcode-select --switch /Library/Developer/CommandLineTools

# Clean and rebuild
make clean
make deps
make build
```

### 🔍 Diagnostic Commands

#### Check Your Environment
```bash
# Run environment check
cd gui
make platform

# Should show:
# OS: darwin
# Architecture: arm64 (or amd64)
# Go Version: go version go1.21+ darwin/arm64
# CGO Enabled: 1
```

#### Validate Installation
```bash
# Test without GUI (always works)
cd gui
make validate

# Should show:
# ✅ Successfully loaded 9 lessons
# ✅ All data structures are valid
# ✅ GUI application should work correctly in graphical environment
```

#### Test Display Detection
```bash
cd gui
go run cmd/test-display.go

# Should show:
# ✅ macOS detected - native GUI support available
# ✅ Will proceed to launch GUI (native platform)
```

### 🎯 Performance Optimization

#### For Apple Silicon (M1/M2) Macs
```bash
# Build native ARM64 binary (default)
make build

# Force x86_64 if needed (runs under Rosetta)
GOARCH=amd64 make build
```

#### Memory and Performance
```bash
# Monitor resource usage
Activity Monitor → search "react-gui"

# Or from terminal
top -pid $(pgrep react-gui)
```

### 🔐 Security Settings

#### Allow Unsigned Applications
```bash
# Temporarily disable Gatekeeper (not recommended for production)
sudo spctl --master-disable

# Re-enable after testing
sudo spctl --master-enable
```

#### Code Signing (for distribution)
```bash
# Sign the binary (requires developer certificate)
codesign -s "Developer ID Application: Your Name" build/react-gui

# Verify signature
codesign -v build/react-gui
```

## Development Setup

### IDE Configuration

#### Visual Studio Code
```json
// .vscode/settings.json
{
    "go.toolsManagement.checkForUpdates": "local",
    "go.useLanguageServer": true,
    "go.gopath": "/Users/yourusername/go"
}
```

#### GoLand/IntelliJ
- Set GOROOT to your Go installation
- Set GOPATH to your workspace
- Enable Go modules support

### Hot Reload Development
```bash
# Install entr for file watching
brew install entr

# Use development mode
make dev

# Or manual hot reload
find . -name "*.go" | entr -r make run-test
```

## Distribution

### Creating Release Builds
```bash
# Clean build for distribution
make clean
make build

# Create app bundle
make bundle-darwin

# Package for distribution
make package
```

### Homebrew Formula (Future)
```ruby
# Example homebrew formula structure
class ReactBestPracticesGui < Formula
  desc "Interactive GUI for learning React best practices"
  homepage "https://github.com/yourusername/react-best-practices"
  url "https://github.com/yourusername/react-best-practices/archive/v1.0.0.tar.gz"
  
  depends_on "go" => :build
  
  def install
    cd "gui" do
      system "make", "build"
      bin.install "build/react-gui"
    end
  end
end
```

## Integration with macOS

### Dock Integration
```bash
# App bundle will appear in Dock when launched
open build/ReactBestPractices.app

# Add to Dock permanently:
# Right-click app in Dock → Options → Keep in Dock
```

### Spotlight Search
```bash
# App bundle will be indexed by Spotlight
# Search for "React Best Practices" in Spotlight
```

### File Associations (Future Feature)
```xml
<!-- In Info.plist for handling .react files -->
<key>CFBundleDocumentTypes</key>
<array>
    <dict>
        <key>CFBundleTypeExtensions</key>
        <array>
            <string>react</string>
        </array>
        <key>CFBundleTypeName</key>
        <string>React Project File</string>
    </dict>
</array>
```

## Keyboard Shortcuts

### macOS-Specific Shortcuts
- `Cmd+Q` - Quit application
- `Cmd+W` - Close window
- `Cmd+M` - Minimize window  
- `Cmd+F` - Find (if implemented)
- `Cmd+,` - Preferences (if implemented)

### Application Shortcuts
- `Tab` - Navigate between UI elements
- `Space` - Select/activate buttons
- `Arrow Keys` - Navigate lists
- `Enter` - Confirm selections
- `Escape` - Cancel/go back

## Advanced Configuration

### Environment Variables
```bash
# Add to ~/.zshrc or ~/.bash_profile

# Go configuration
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin

# GUI-specific settings
export FYNE_THEME=light  # or dark
export FYNE_SCALE=1.0    # UI scaling
```

### Build Customization
```bash
# Custom build flags
go build -ldflags "-X main.version=custom" -o react-gui ./cmd/main.go

# With debugging symbols
go build -gcflags="-N -l" -o react-gui-debug ./cmd/main.go
```

## Success Indicators

You know everything is working correctly when:

✅ `make validate` passes
✅ `./launch.sh --test` shows all lessons loaded  
✅ `./launch.sh` opens the GUI application window
✅ You can navigate lessons and take quizzes
✅ No error messages about missing dependencies

## Getting Help

If you encounter issues:

1. **Check this guide** for macOS-specific solutions
2. **Run diagnostics**: `make platform` and `make validate`
3. **Check logs**: Look for error messages in Terminal
4. **Review main troubleshooting**: See `TROUBLESHOOTING.md`
5. **Test in isolation**: Use `go run cmd/test-display.go`

## Quick Reference Card

```bash
# Essential commands for macOS users
cd gui                          # Enter GUI directory
./launch.sh --test             # Validate (always safe)
./launch.sh                    # Launch GUI app
make build                     # Build binary
make bundle-darwin            # Create .app bundle
make validate                 # Check everything works
make platform                 # Show system info
```

---

**Happy Learning!** 🎉 Your macOS system is fully supported and the GUI application will provide an excellent learning experience for React best practices.