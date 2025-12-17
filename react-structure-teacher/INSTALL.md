# Installation Guide

## React Structure Teacher Installation Guide

This guide will walk you through installing and setting up React Structure Teacher on your system.

## System Requirements

### Minimum Requirements
- **Operating System**: Windows 10+, macOS 10.14+, or Linux (Ubuntu 18.04+ or equivalent)
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 500MB free space
- **Display**: 1024x768 minimum resolution

### Development Requirements (if building from source)
- **Go**: Version 1.21 or later
- **Node.js**: Version 16 or later
- **Make**: Build automation tool
- **Git**: Version control system

## Installation Methods

### Method 1: Download Pre-built Binary (Recommended)

1. **Download the appropriate binary for your system:**
   - Windows: `react-structure-teacher-windows-amd64.exe`
   - macOS (Intel): `react-structure-teacher-macos-amd64`
   - macOS (Apple Silicon): `react-structure-teacher-macos-arm64`
   - Linux: `react-structure-teacher-linux-amd64`

2. **Make executable (macOS/Linux only):**
   ```bash
   chmod +x react-structure-teacher-*
   ```

3. **Run the application:**
   ```bash
   # Windows
   react-structure-teacher-windows-amd64.exe
   
   # macOS/Linux
   ./react-structure-teacher-macos-amd64
   # or
   ./react-structure-teacher-linux-amd64
   ```

### Method 2: Build from Source

#### Step 1: Install Prerequisites

**Install Go:**
```bash
# Download from https://golang.org/dl/
# Or use package managers:

# macOS (Homebrew)
brew install go

# Linux (Ubuntu/Debian)
sudo apt update && sudo apt install golang-go

# Verify installation
go version
```

**Install Node.js:**
```bash
# Download from https://nodejs.org/
# Or use package managers:

# macOS (Homebrew)
brew install node

# Linux (Ubuntu/Debian)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

**Install WAILS:**
```bash
go install github.com/wailsapp/wails/v2/cmd/wails@latest

# Verify installation
wails version
```

**Install Make:**
```bash
# macOS (usually pre-installed, or with Xcode tools)
xcode-select --install

# Linux (Ubuntu/Debian)
sudo apt install make

# Windows (using Chocolatey)
choco install make

# Windows (using Scoop)
scoop install make
```

#### Step 2: Clone and Build

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd react-structure-teacher
   ```

2. **Check prerequisites:**
   ```bash
   make check-deps
   ```

3. **Build the application:**
   ```bash
   # Quick build
   make build
   
   # Or complete build with tests
   make all
   ```

4. **Run the application:**
   ```bash
   make run
   ```

## Platform-Specific Instructions

### Windows

1. **Download** the Windows executable
2. **Extract** if it's in a zip file
3. **Double-click** the executable or run from Command Prompt/PowerShell
4. **Allow** Windows Defender if prompted (first-time run)

**Note:** You may see a "Windows protected your PC" warning. Click "More info" then "Run anyway" if you trust the source.

### macOS

1. **Download** the appropriate macOS binary (Intel or Apple Silicon)
2. **Open Terminal** and navigate to the download location
3. **Make executable:**
   ```bash
   chmod +x react-structure-teacher-macos-*
   ```
4. **Run the application:**
   ```bash
   ./react-structure-teacher-macos-*
   ```

**Note:** You may need to allow the app in System Preferences > Security & Privacy if macOS blocks it.

### Linux

1. **Download** the Linux binary
2. **Make executable:**
   ```bash
   chmod +x react-structure-teacher-linux-amd64
   ```
3. **Run:**
   ```bash
   ./react-structure-teacher-linux-amd64
   ```

**Dependencies:** Most Linux distributions should work out of the box. If you encounter issues, ensure you have:
- `libgtk-3-0`
- `libwebkit2gtk-4.0-37`

Install on Ubuntu/Debian:
```bash
sudo apt update
sudo apt install libgtk-3-0 libwebkit2gtk-4.0-37
```

## Verification

After installation, verify everything works:

1. **Launch the application**
2. **Check the Dashboard loads**
3. **Navigate to different sections:**
   - Lessons
   - Structure Explorer  
   - Validator
   - Quiz
4. **Try the interactive features**

## Troubleshooting

### Common Issues

**"Command not found" errors:**
- Ensure the binary has execute permissions: `chmod +x filename`
- Check you're in the correct directory
- Use `./filename` instead of just `filename`

**"App can't be opened" on macOS:**
- Go to System Preferences > Security & Privacy
- Allow the app under the General tab
- Or run: `sudo spctl --master-disable` (not recommended for security)

**Missing dependencies on Linux:**
```bash
# Install required libraries
sudo apt update
sudo apt install libgtk-3-0 libwebkit2gtk-4.0-37
```

**Build failures (source installation):**
```bash
# Clean and retry
make clean
make check-deps
make install
make build
```

**Port conflicts (development):**
- Default port is 3000
- Kill conflicting processes: `lsof -ti:3000 | xargs kill -9`
- Or change port in `frontend/vite.config.js`

### Getting Help

1. **Check the logs:** Look at terminal output for error messages
2. **Verify prerequisites:** Run `make check-deps` (source builds)
3. **Review documentation:** Check README.md and DEVELOPMENT.md
4. **Check system compatibility:** Ensure your OS version is supported

### Performance Tips

**For better performance:**
- Close unnecessary applications
- Ensure adequate free RAM (4GB+)
- Use SSD storage if available
- Keep the application window at reasonable size

**For development:**
- Use `make dev` for hot reload during development
- Use `make quick` for fast iteration cycles
- Monitor resource usage during development

## Uninstallation

### Binary Installation
Simply delete the executable file and any shortcuts you created.

### Source Installation
```bash
# Remove build artifacts
make clean

# Remove the entire directory
cd ..
rm -rf react-structure-teacher
```

## Updates

### Binary Installation
1. Download the new version
2. Replace the old executable
3. Run the new version

### Source Installation
```bash
# Pull latest changes
git pull origin main

# Rebuild
make clean
make build
```

## Security Considerations

- **Download only from trusted sources**
- **Verify checksums** if provided
- **Run in a sandboxed environment** if unsure
- **Keep your system updated** for best compatibility

## Next Steps

After successful installation:

1. **Start with the Dashboard** to get an overview
2. **Complete the first lesson** to understand the interface  
3. **Explore the Structure Examples** to see best practices
4. **Try the Validator** with your own projects
5. **Take quizzes** to test your knowledge

## Support

For installation issues:
- Check this guide first
- Review error messages carefully
- Search for similar issues in the documentation
- Report bugs with detailed system information

---

**Enjoy learning React best practices! 🚀**