# Cross-Platform Compilation Guide 🌍

This guide explains how to build the React Best Practices GUI application for different operating systems.

## Overview

The GUI application uses **Fyne framework**, which requires **CGO** (C bindings) for native GUI support. This means cross-compilation is more complex than pure Go applications.

## Quick Reference

| Target Platform | Build Command | Requirements |
|----------------|---------------|-------------|
| **Current OS** | `make build` | Go 1.21+, CGO enabled |
| **All Platforms** | `make build-all` | Native builds only |
| **Docker Build** | `make docker-build` | Docker installed |
| **Validation** | `make run-test` | Works everywhere |

## Platform-Specific Instructions

### 🖥️ Building on Your Current Platform

**Recommended approach** - Build on the target platform:

```bash
# Works on any platform
make build

# Validate the build
make run-test
```

### 🐧 Linux Builds

**On Linux system:**
```bash
# Install dependencies
sudo apt-get install libgl1-mesa-dev xorg-dev  # Ubuntu/Debian
sudo yum install mesa-libGL-devel libX11-devel # CentOS/RHEL

# Build
make build
# Creates: build/react-gui
```

**Cross-compile to Linux (limited success):**
```bash
# May work from macOS with proper toolchain
CGO_ENABLED=1 GOOS=linux GOARCH=amd64 go build -o build/react-gui-linux ./cmd/main.go
```

### 🍎 macOS Builds

**On macOS system:**
```bash
# Install Xcode command line tools
xcode-select --install

# Build
make build
# Creates: build/react-gui

# Create app bundle
make bundle-darwin
# Creates: build/ReactBestPractices.app
```

**Cross-compile to macOS:**
```bash
# Generally not possible due to CGO requirements
# Use macOS system or VM
```

### 🪟 Windows Builds

**On Windows system:**
```bash
# Install Go for Windows
# Install TDM-GCC or similar C compiler

# Build
make build
# Creates: build/react-gui.exe
```

**Cross-compile to Windows:**
```bash
# From Linux with MinGW
sudo apt-get install gcc-mingw-w64
CGO_ENABLED=1 GOOS=windows GOARCH=amd64 CC=x86_64-w64-mingw32-gcc go build -o build/react-gui-windows.exe ./cmd/main.go

# From macOS with brew
brew install mingw-w64
CGO_ENABLED=1 GOOS=windows GOARCH=amd64 CC=x86_64-w64-mingw32-gcc go build -o build/react-gui-windows.exe ./cmd/main.go
```

## Docker-Based Cross-Compilation

### Multi-Platform Docker Build

Create `Dockerfile.cross`:
```dockerfile
# Multi-stage build for cross-compilation
FROM golang:1.21-alpine AS base
RUN apk add --no-cache gcc musl-dev

# Linux build
FROM base AS linux-build
WORKDIR /app
COPY . .
RUN CGO_ENABLED=1 GOOS=linux GOARCH=amd64 go build -o react-gui-linux ./cmd/main.go

# You can add more stages for other platforms
```

**Build with Docker:**
```bash
# Build Linux version in Docker
docker build -f Dockerfile.cross --target linux-build -t react-gui-linux .
docker create --name temp-container react-gui-linux
docker cp temp-container:/app/react-gui-linux ./build/
docker rm temp-container
```

### Complete Cross-Compilation Setup

**1. Create build environment:**
```bash
# Create cross-compilation workspace
mkdir cross-build
cd cross-build

# Set up for multiple targets
export CGO_ENABLED=1
```

**2. Install cross-compilers:**
```bash
# Ubuntu/Debian - Windows cross-compiler
sudo apt-get install gcc-mingw-w64

# macOS - Windows cross-compiler
brew install mingw-w64
```

**3. Build for each platform:**
```bash
# Windows from Linux/macOS
CC=x86_64-w64-mingw32-gcc GOOS=windows GOARCH=amd64 go build -o react-gui-windows.exe

# Linux from macOS (with appropriate toolchain)
CC=gcc GOOS=linux GOARCH=amd64 go build -o react-gui-linux

# Native build
go build -o react-gui-native
```

## Alternative: GitHub Actions

### Automated Multi-Platform Builds

Create `.github/workflows/build.yml`:
```yaml
name: Multi-Platform Build

on: [push, pull_request]

jobs:
  build:
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
    
    runs-on: ${{ matrix.os }}
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up Go
      uses: actions/setup-go@v3
      with:
        go-version: 1.21
    
    - name: Install Linux dependencies
      if: matrix.os == 'ubuntu-latest'
      run: sudo apt-get update && sudo apt-get install -y libgl1-mesa-dev xorg-dev
    
    - name: Install macOS dependencies
      if: matrix.os == 'macos-latest'
      run: |
        # Xcode command line tools usually pre-installed on GitHub Actions
        echo "macOS dependencies ready"
    
    - name: Build
      working-directory: gui
      run: |
        go mod download
        make build
    
    - name: Test
      working-directory: gui
      run: make run-test
    
    - name: Upload artifacts
      uses: actions/upload-artifact@v3
      with:
        name: react-gui-${{ matrix.os }}
        path: gui/build/react-gui*
```

## Troubleshooting Cross-Compilation

### Common Issues

#### ❌ `build constraints exclude all Go files`
**Cause:** Missing CGO support for target platform
**Solution:** 
- Build on target platform instead
- Use Docker with proper toolchain
- Install cross-compilation toolchain

#### ❌ `C compiler not found`
**Cause:** Missing C compiler for target platform
**Solution:**
```bash
# Install appropriate compiler
# For Windows targets:
brew install mingw-w64           # macOS
sudo apt-get install gcc-mingw-w64  # Linux

# Set CC environment variable
export CC=x86_64-w64-mingw32-gcc
```

#### ❌ `undefined: syscall.Syscall`
**Cause:** Platform-specific code not available for target
**Solution:** Build on native platform or use proper build tags

### CGO Cross-Compilation Requirements

**For each target platform, you need:**

1. **Cross-compiler toolchain**
2. **Target platform headers/libraries**  
3. **CGO_ENABLED=1**
4. **Proper CC environment variable**

### Verification Commands

```bash
# Check CGO support
go env CGO_ENABLED

# Check available compilers
which gcc
which x86_64-w64-mingw32-gcc  # Windows cross-compiler

# Test cross-compilation capability
CGO_ENABLED=1 GOOS=windows CC=x86_64-w64-mingw32-gcc go env

# Validate build
./build/react-gui -test
```

## Recommended Workflows

### 1. 🎯 Simple Development
```bash
# Build for your current platform only
make build
make run-test
```

### 2. 🏗️ Multi-Platform Distribution
```bash
# Option A: Use CI/CD (GitHub Actions)
git push  # Triggers multi-platform builds

# Option B: Build on each target OS
# - Build on Linux machine → Linux binary
# - Build on Windows machine → Windows .exe  
# - Build on macOS machine → macOS binary + .app bundle
```

### 3. 🐳 Docker-Based Development
```bash
# Build Linux version in container
make docker-build
make docker-run
```

## Distribution Strategy

### Recommended Approach

1. **Native Builds**: Build on each target platform
2. **GitHub Releases**: Use CI/CD for automatic multi-platform releases
3. **Package Managers**: Consider Homebrew (macOS), Chocolatey (Windows), APT/RPM (Linux)

### File Structure for Distribution
```
releases/
├── v1.0.0/
│   ├── react-gui-linux-amd64
│   ├── react-gui-windows-amd64.exe
│   ├── react-gui-darwin-amd64
│   ├── ReactBestPractices.app.zip     # macOS bundle
│   └── checksums.txt
```

## Summary

- ✅ **Current platform builds**: Always work with `make build`
- ⚠️ **Cross-compilation**: Possible but complex due to CGO
- 🎯 **Recommended**: Build on target platforms or use CI/CD
- 🐳 **Docker**: Good for Linux builds from any platform
- 🔄 **GitHub Actions**: Best for automated multi-platform releases

For most use cases, building on the current platform with `make build` is sufficient and most reliable.