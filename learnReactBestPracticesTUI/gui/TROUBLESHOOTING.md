# Troubleshooting Guide 🔧

This guide helps resolve common issues when building and running the React Best Practices GUI application.

## Quick Diagnostics

### 🚀 Fast Health Check
```bash
# Test if everything is working
./launch.sh --test

# Should output:
# ✅ Successfully loaded 9 lessons
# ✅ All data structures are valid
# ✅ GUI application should work correctly in graphical environment
```

### 🏗️ Build Test
```bash
# Test build system
make build

# Should create: build/react-gui
```

## Common Issues & Solutions

### 1. Build Issues

#### ❌ `make: command not found`
**Problem**: Make is not installed

**Solution**:
```bash
# macOS
brew install make

# Ubuntu/Debian
sudo apt-get install build-essential

# CentOS/RHEL
sudo yum install make

# Or build directly:
go build -o build/react-gui ./cmd/main.go
```

#### ❌ `go: command not found`
**Problem**: Go is not installed or not in PATH

**Solution**:
```bash
# Check Go installation
go version

# If not installed, visit: https://golang.org/doc/install
# Or use package manager:

# macOS
brew install go

# Ubuntu/Debian
sudo apt-get install golang-go

# Ensure GOPATH is set:
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin
```

#### ❌ `package fyne.io/fyne/v2 not found`
**Problem**: Fyne dependency not downloaded

**Solution**:
```bash
# Clean and reinstall dependencies
go clean -modcache
go mod tidy
go mod download

# Or force reinstall
rm go.sum
go mod tidy
```

#### ⚠️ `ld: warning: ignoring duplicate libraries: '-lobjc'`
**Problem**: macOS linker warning (harmless)

**Status**: This is a known warning on macOS and can be safely ignored. The application will work correctly.

### 2. Runtime Issues

#### ❌ `No display server detected`
**Problem**: Trying to run GUI in headless environment

**Solutions**:

**Option A - Use Test Mode**:
```bash
./launch.sh --test
# or
./build/react-gui -test
```

**Option B - SSH with X11 Forwarding**:
```bash
# From client machine:
ssh -X username@hostname
./launch.sh
```

**Option C - Use VNC/Remote Desktop**:
```bash
# Install VNC server on remote machine
# Connect with VNC client
# Then run normally
```

**Option D - Force Launch** (not recommended):
```bash
./launch.sh --force
```

#### ❌ `panic: runtime error: invalid memory address or nil pointer dereference`
**Problem**: GUI initialization failure

**Debug Steps**:
```bash
# 1. Verify data integrity
./build/react-gui -test

# 2. Check environment
echo "DISPLAY=$DISPLAY"
echo "WAYLAND_DISPLAY=$WAYLAND_DISPLAY"

# 3. Try simple Fyne test
go run cmd/test.go  # (if available)

# 4. Run with debugging
go run -race cmd/main.go -test
```

**Common Causes**:
- Missing GUI libraries
- Insufficient permissions
- Corrupted lesson data (run test mode first)

#### ❌ `Killed: 9`
**Problem**: Process killed by system (usually in headless environment)

**Solution**: This typically happens when trying to create GUI windows without a display server. Use test mode or ensure proper GUI environment.

### 3. Display Issues

#### ❌ Window doesn't appear
**Checklist**:
```bash
# 1. Verify display
echo $DISPLAY
xdpyinfo  # Should show display info

# 2. Test X11
xclock &  # Should show a clock
pkill xclock

# 3. Check permissions
xhost +local:  # Allow local connections

# 4. Try different display
export DISPLAY=:0
./launch.sh
```

#### ❌ Window appears but is blank/corrupted
**Solutions**:
```bash
# Update graphics drivers
# Try software rendering:
export LIBGL_ALWAYS_SOFTWARE=1
./launch.sh

# Reset window manager
# Restart display server
```

#### ❌ High DPI scaling issues
**Solutions**:
```bash
# Force DPI scaling
export GDK_SCALE=2
export GDK_DPI_SCALE=0.5

# Or set in desktop environment settings
```

### 4. Performance Issues

#### ❌ Slow startup or laggy interface
**Solutions**:
```bash
# 1. Check system resources
top
free -h

# 2. Close other applications
# 3. Try software rendering if using integrated graphics:
export LIBGL_ALWAYS_SOFTWARE=1

# 4. Reduce window size
# 5. Update graphics drivers
```

#### ❌ High memory usage
**Debug**:
```bash
# Monitor memory usage
./build/react-gui &
PID=$!
watch -n 1 "ps -p $PID -o pid,vsz,rss,pcpu,pmem,cmd"
```

### 5. Platform-Specific Issues

#### 🍎 macOS Issues

**Problem**: App won't start due to security settings
```bash
# Allow unsigned binary
xattr -d com.apple.quarantine build/react-gui

# Or create app bundle
make bundle-darwin
open build/ReactBestPractices.app
```

**Problem**: Missing development tools
```bash
# Install Xcode command line tools
xcode-select --install
```

#### 🐧 Linux Issues

**Problem**: Missing GUI libraries
```bash
# Ubuntu/Debian
sudo apt-get install libgl1-mesa-dev xorg-dev

# CentOS/RHEL
sudo yum install mesa-libGL-devel libX11-devel

# Arch Linux
sudo pacman -S libgl libx11
```

**Problem**: Wayland compatibility
```bash
# Force X11 mode
export GDK_BACKEND=x11
export QT_QPA_PLATFORM=xcb
./launch.sh
```

#### 🪟 Windows Issues

**Problem**: Windows Defender blocking execution
- Add exception for the build directory
- Or temporarily disable real-time protection during development

**Problem**: Missing Visual C++ Redistributables
- Install Microsoft Visual C++ Redistributable packages
- Or build with static linking

### 6. Development Issues

#### ❌ Hot reload not working
```bash
# Install entr for development mode
# macOS
brew install entr

# Ubuntu/Debian
sudo apt-get install entr

# Then use
make dev
```

#### ❌ Tests failing
```bash
# Run comprehensive validation
go run cmd/validate.go

# Run Go tests
go test ./...

# Check race conditions
go test -race ./...
```

#### ❌ Linter errors
```bash
# Install golangci-lint
go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest

# Fix formatting
go fmt ./...

# Run linter
make lint
```

## Debug Mode & Logging

### Enable Verbose Logging
```bash
# Set debug environment
export FYNE_DEBUG=1
export GODEBUG=cgocheck=2

# Run with verbose output
./build/react-gui 2>&1 | tee debug.log
```

### Performance Profiling
```bash
# CPU profiling
go run -cpuprofile=cpu.prof cmd/main.go -test
go tool pprof cpu.prof

# Memory profiling
go run -memprofile=mem.prof cmd/main.go -test
go tool pprof mem.prof
```

### Trace Analysis
```bash
# Generate trace
go run -trace=trace.out cmd/main.go -test
go tool trace trace.out
```

## Environment Verification Script

Create this script to verify your environment:
```bash
#!/bin/bash
echo "=== Environment Check ==="
echo "OS: $(uname -s)"
echo "Architecture: $(uname -m)"
echo "Go version: $(go version 2>/dev/null || echo 'NOT INSTALLED')"
echo "Make version: $(make --version 2>/dev/null | head -1 || echo 'NOT INSTALLED')"
echo "Display: ${DISPLAY:-'NOT SET'}"
echo "Wayland: ${WAYLAND_DISPLAY:-'NOT SET'}"

echo -e "\n=== GUI Test ==="
if command -v xclock >/dev/null 2>&1; then
    echo "X11 tools available"
else
    echo "X11 tools missing"
fi

echo -e "\n=== Build Test ==="
cd gui
if make build >/dev/null 2>&1; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
fi

echo -e "\n=== Data Test ==="
if ./build/react-gui -test >/dev/null 2>&1; then
    echo "✅ Data validation passed"
else
    echo "❌ Data validation failed"
fi
```

## Getting Help

### 🔍 Self-Diagnosis
1. Run `./launch.sh --test` first
2. Check the build with `make build`
3. Verify your environment matches the requirements
4. Look for similar issues in this troubleshooting guide

### 📋 Bug Report Template
When reporting issues, include:

```
**Environment:**
- OS: [e.g., macOS 14.2, Ubuntu 22.04]
- Go version: [go version output]
- Display: [echo $DISPLAY output]

**Build Information:**
- Build command used: [e.g., make build]
- Build output: [paste any error messages]

**Runtime Information:**
- Command run: [e.g., ./launch.sh]
- Error message: [complete error output]
- Test mode result: [./launch.sh --test output]

**Steps to Reproduce:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Expected Behavior:**
[What should happen]

**Actual Behavior:**
[What actually happens]
```

### 🆘 Emergency Recovery

If everything breaks:
```bash
# Nuclear option - clean slate
cd gui
make clean
rm -rf build/
rm go.sum
go clean -modcache
go mod tidy
make deps
make build
./launch.sh --test
```

### ✅ Success Indicators

You know everything is working when:
- ✅ `make build` completes without errors
- ✅ `./launch.sh --test` shows all lessons loaded
- ✅ `./build/react-gui --help` shows usage information
- ✅ In GUI environment: application window appears and lessons are navigable

## Prevention Tips

### 🛡️ Best Practices
1. **Always test in headless mode first**: `./launch.sh --test`
2. **Use the launcher script**: `./launch.sh` instead of direct binary execution
3. **Keep dependencies updated**: `make update` periodically
4. **Verify environment before building**: Check Go, Make, and GUI availability
5. **Use version control**: Commit working states before making changes

### 🔄 Regular Maintenance
```bash
# Weekly maintenance routine
make clean
make deps
make build
make test
./launch.sh --test
```

Remember: The GUI application is designed to work reliably in proper GUI environments. Most issues stem from environment configuration rather than application bugs.