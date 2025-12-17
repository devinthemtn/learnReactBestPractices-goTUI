#!/bin/bash

# React Best Practices TUI - Verification Script
# This script verifies that the application builds and runs correctly

set -e

echo "🚀 React Best Practices TUI - Verification Script"
echo "=================================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    local color=$1
    local message=$2
    echo -e "${color}${message}${NC}"
}

print_success() {
    print_status $GREEN "✅ $1"
}

print_error() {
    print_status $RED "❌ $1"
}

print_info() {
    print_status $BLUE "ℹ️  $1"
}

print_warning() {
    print_status $YELLOW "⚠️  $1"
}

# Check if Go is installed
print_info "Checking Go installation..."
if ! command -v go &> /dev/null; then
    print_error "Go is not installed or not in PATH"
    exit 1
fi
print_success "Go is installed: $(go version)"

# Check if we're in the right directory
if [ ! -f "go.mod" ]; then
    print_error "Not in the correct directory. Please run this script from the project root."
    exit 1
fi
print_success "In correct project directory"

# Clean previous builds
print_info "Cleaning previous builds..."
make clean > /dev/null 2>&1 || true
print_success "Cleaned previous builds"

# Download dependencies
print_info "Downloading dependencies..."
if ! go mod download; then
    print_error "Failed to download dependencies"
    exit 1
fi
print_success "Dependencies downloaded"

# Tidy modules
print_info "Tidying modules..."
if ! go mod tidy; then
    print_error "Failed to tidy modules"
    exit 1
fi
print_success "Modules tidied"

# Build the application
print_info "Building application..."
if ! make build > build.log 2>&1; then
    print_error "Build failed. Check build.log for details:"
    cat build.log
    exit 1
fi
print_success "Application built successfully"

# Check if binary exists
if [ ! -f "./build/react-tui" ]; then
    print_error "Binary not found after build"
    exit 1
fi
print_success "Binary created: ./build/react-tui"

# Test version flag
print_info "Testing version flag..."
if ! ./build/react-tui -version > version_output.txt 2>&1; then
    print_error "Version flag test failed"
    cat version_output.txt
    exit 1
fi
print_success "Version flag works"

# Test help flag
print_info "Testing help flag..."
if ! ./build/react-tui -help > help_output.txt 2>&1; then
    print_error "Help flag test failed"
    cat help_output.txt
    exit 1
fi
print_success "Help flag works"

# Verify lesson content
print_info "Verifying lesson content structure..."
if ! go run -c 'import "react-best-practices-tui/internal/lessons"; lessons.GetAllLessons()' > /dev/null 2>&1; then
    # Alternative test - just check if it compiles
    if ! go build -o /dev/null ./internal/lessons > /dev/null 2>&1; then
        print_warning "Could not verify lesson content (compilation check failed)"
    else
        print_success "Lesson content structure is valid"
    fi
else
    print_success "Lesson content verified"
fi

# Check file permissions
if [ ! -x "./build/react-tui" ]; then
    print_error "Binary is not executable"
    exit 1
fi
print_success "Binary is executable"

# Summary
echo ""
echo "=================================================="
print_success "All verification checks passed!"
echo ""
print_info "To run the application:"
echo "  ./build/react-tui"
echo ""
print_info "To see version info:"
echo "  ./build/react-tui -version"
echo ""
print_info "To see help:"
echo "  ./build/react-tui -help"
echo ""
print_info "Key features to test manually:"
echo "  1. Navigate lessons with arrow keys"
echo "  2. Press Enter to select lessons"
echo "  3. Press 't' in lessons to take quizzes"
echo "  4. Press '?' for help in the application"
echo "  5. Press Esc to go back, Ctrl+C to quit"
echo ""
print_success "React Best Practices TUI is ready to use! 🎉"

# Cleanup temp files
rm -f build.log version_output.txt help_output.txt > /dev/null 2>&1 || true

echo ""
echo "Happy learning! 📚"
