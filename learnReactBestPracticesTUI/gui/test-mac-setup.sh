#!/bin/bash

# macOS Setup Verification Script for React Best Practices GUI
# This script verifies that your Mac is ready to run the GUI application

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
BOLD='\033[1m'
NC='\033[0m' # No Color

# Function to print colored output
print_header() {
    echo -e "\n${BOLD}${BLUE}=== $1 ===${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Initialize counters
CHECKS_PASSED=0
CHECKS_FAILED=0
TOTAL_CHECKS=0

# Function to run a check
run_check() {
    local name="$1"
    local command="$2"
    local success_msg="$3"
    local failure_msg="$4"
    local fix_msg="$5"

    TOTAL_CHECKS=$((TOTAL_CHECKS + 1))

    if eval "$command" >/dev/null 2>&1; then
        print_success "$success_msg"
        CHECKS_PASSED=$((CHECKS_PASSED + 1))
        return 0
    else
        print_error "$failure_msg"
        if [[ -n "$fix_msg" ]]; then
            print_info "Fix: $fix_msg"
        fi
        CHECKS_FAILED=$((CHECKS_FAILED + 1))
        return 1
    fi
}

# Start verification
echo -e "${BOLD}${BLUE}"
echo "╔════════════════════════════════════════════════════════════╗"
echo "║           React Best Practices GUI - macOS Setup           ║"
echo "║                    Verification Script                     ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

print_info "Checking if your Mac is ready to run the GUI application..."

# Check 1: Operating System
print_header "Operating System Check"
if [[ "$(uname)" == "Darwin" ]]; then
    print_success "macOS detected: $(sw_vers -productName) $(sw_vers -productVersion)"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    print_error "This script is designed for macOS only"
    print_info "Current OS: $(uname)"
    exit 1
fi
TOTAL_CHECKS=$((TOTAL_CHECKS + 1))

# Check 2: Architecture
print_header "Architecture Check"
ARCH=$(uname -m)
if [[ "$ARCH" == "arm64" ]]; then
    print_success "Apple Silicon (M1/M2) detected - native performance"
elif [[ "$ARCH" == "x86_64" ]]; then
    print_success "Intel Mac detected - full compatibility"
else
    print_warning "Unknown architecture: $ARCH"
fi
CHECKS_PASSED=$((CHECKS_PASSED + 1))
TOTAL_CHECKS=$((TOTAL_CHECKS + 1))

# Check 3: Go Installation
print_header "Go Programming Language"
run_check "Go" \
    "go version" \
    "Go is installed: $(go version 2>/dev/null)" \
    "Go is not installed or not in PATH" \
    "Install with: brew install go"

# Check Go version if installed
if command -v go >/dev/null 2>&1; then
    GO_VERSION=$(go version | grep -o 'go[0-9]\+\.[0-9]\+' | head -1)
    GO_MAJOR=$(echo $GO_VERSION | cut -d. -f1 | sed 's/go//')
    GO_MINOR=$(echo $GO_VERSION | cut -d. -f2)

    if [[ $GO_MAJOR -gt 1 || ($GO_MAJOR -eq 1 && $GO_MINOR -ge 21) ]]; then
        print_success "Go version is compatible (need 1.21+)"
    else
        print_warning "Go version $GO_VERSION may be too old (need 1.21+)"
        print_info "Update with: brew upgrade go"
    fi
fi

# Check 4: Xcode Command Line Tools
print_header "Development Tools"
run_check "Xcode Tools" \
    "xcode-select -p" \
    "Xcode command line tools installed: $(xcode-select -p 2>/dev/null)" \
    "Xcode command line tools not installed" \
    "Install with: xcode-select --install"

# Check 5: Make
print_header "Build Tools"
run_check "Make" \
    "make --version" \
    "Make is available: $(make --version 2>/dev/null | head -1)" \
    "Make is not available" \
    "Usually included with Xcode tools, or install with: brew install make"

# Check 6: Git (optional but helpful)
print_header "Version Control"
run_check "Git" \
    "git --version" \
    "Git is available: $(git --version 2>/dev/null)" \
    "Git is not available (optional)" \
    "Install with: brew install git"

# Check 7: Homebrew (optional but helpful)
print_header "Package Manager"
if command -v brew >/dev/null 2>&1; then
    print_success "Homebrew is installed: $(brew --version | head -1)"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    print_warning "Homebrew not installed (optional but recommended)"
    print_info "Install from: https://brew.sh"
fi
TOTAL_CHECKS=$((TOTAL_CHECKS + 1))

# Check 8: CGO Support
print_header "CGO Support"
if command -v go >/dev/null 2>&1; then
    CGO_ENABLED=$(go env CGO_ENABLED 2>/dev/null)
    if [[ "$CGO_ENABLED" == "1" ]]; then
        print_success "CGO is enabled (required for GUI)"
        CHECKS_PASSED=$((CHECKS_PASSED + 1))
    else
        print_error "CGO is disabled"
        print_info "CGO is required for Fyne GUI framework"
    fi
else
    print_error "Cannot check CGO (Go not available)"
fi
TOTAL_CHECKS=$((TOTAL_CHECKS + 1))

# Check 9: GUI Environment
print_header "GUI Environment"
print_success "macOS native GUI environment available"
print_info "No additional display server configuration needed"
CHECKS_PASSED=$((CHECKS_PASSED + 1))
TOTAL_CHECKS=$((TOTAL_CHECKS + 1))

# Check 10: Directory Structure
print_header "Project Structure"
if [[ -f "go.mod" && -f "Makefile" && -d "cmd" && -d "internal" ]]; then
    print_success "Project structure looks correct"
    CHECKS_PASSED=$((CHECKS_PASSED + 1))
else
    print_error "Project structure incomplete"
    print_info "Make sure you're running this from the gui/ directory"
    print_info "Required: go.mod, Makefile, cmd/, internal/"
fi
TOTAL_CHECKS=$((TOTAL_CHECKS + 1))

# Security Check
print_header "Security Settings"
QUARANTINE_CHECK=$(xattr -l react-gui 2>/dev/null | grep com.apple.quarantine || true)
if [[ -f "build/react-gui" ]]; then
    if [[ -z "$QUARANTINE_CHECK" ]]; then
        print_success "No quarantine attributes on binary"
    else
        print_warning "Binary may be quarantined by macOS"
        print_info "Remove with: xattr -d com.apple.quarantine build/react-gui"
    fi
else
    print_info "Binary not built yet - will check after build"
fi

# Try to build and test
print_header "Build Test"
if [[ -f "Makefile" ]]; then
    print_info "Attempting to build the application..."

    if make build >/dev/null 2>&1; then
        print_success "Build completed successfully!"
        CHECKS_PASSED=$((CHECKS_PASSED + 1))

        # Test the binary
        if [[ -f "build/react-gui" ]]; then
            print_info "Testing application validation..."
            if ./build/react-gui -test >/dev/null 2>&1; then
                print_success "Application validation passed!"
                CHECKS_PASSED=$((CHECKS_PASSED + 1))
            else
                print_error "Application validation failed"
                CHECKS_FAILED=$((CHECKS_FAILED + 1))
            fi
            TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
        fi
    else
        print_error "Build failed"
        print_info "Try: make clean && make deps && make build"
        CHECKS_FAILED=$((CHECKS_FAILED + 1))
    fi
else
    print_error "Makefile not found"
    print_info "Make sure you're in the gui/ directory"
    CHECKS_FAILED=$((CHECKS_FAILED + 1))
fi
TOTAL_CHECKS=$((TOTAL_CHECKS + 1))

# Final Results
print_header "Verification Results"

echo -e "\n${BOLD}Summary:${NC}"
echo -e "Total Checks: $TOTAL_CHECKS"
echo -e "${GREEN}Passed: $CHECKS_PASSED${NC}"
echo -e "${RED}Failed: $CHECKS_FAILED${NC}"

PASS_RATE=$((CHECKS_PASSED * 100 / TOTAL_CHECKS))
echo -e "Pass Rate: ${PASS_RATE}%"

echo -e "\n${BOLD}System Status:${NC}"
if [[ $CHECKS_FAILED -eq 0 ]]; then
    echo -e "${GREEN}🎉 EXCELLENT! Your Mac is fully ready to run the GUI application!${NC}"
    echo -e "${GREEN}✅ All systems go - you can run the application without issues${NC}"
elif [[ $PASS_RATE -ge 80 ]]; then
    echo -e "${YELLOW}⚠️  MOSTLY READY - Minor issues that should be fixed${NC}"
    echo -e "${BLUE}ℹ️  The application will likely work, but fixing the issues will improve experience${NC}"
else
    echo -e "${RED}❌ NOT READY - Several critical issues need to be resolved${NC}"
    echo -e "${RED}🔧 Please fix the failed checks before running the application${NC}"
fi

echo -e "\n${BOLD}Next Steps:${NC}"
if [[ $CHECKS_FAILED -eq 0 ]]; then
    echo -e "${GREEN}🚀 Ready to launch!${NC}"
    echo "   ./launch.sh              # Launch the GUI application"
    echo "   ./launch.sh --test       # Run validation mode"
    echo "   make run                 # Run directly from source"
elif [[ $PASS_RATE -ge 80 ]]; then
    echo -e "${YELLOW}🔧 Fix minor issues first:${NC}"
    echo "   1. Address any failed checks above"
    echo "   2. Run this script again to verify"
    echo "   3. Launch with: ./launch.sh"
else
    echo -e "${RED}🛠️  Setup required:${NC}"
    echo "   1. Install missing dependencies (see errors above)"
    echo "   2. Run this script again"
    echo "   3. When all checks pass, launch with: ./launch.sh"
fi

echo -e "\n${BOLD}Quick Commands:${NC}"
echo "   ./launch.sh --test       # Safe validation (always works)"
echo "   ./launch.sh             # Full GUI launch"
echo "   make validate           # Data validation"
echo "   make platform           # System information"

echo -e "\n${BOLD}Need Help?${NC}"
echo "   📖 Read: MACOS_SETUP.md"
echo "   🔧 See: TROUBLESHOOTING.md"
echo "   🧪 Test: go run cmd/test-display.go"

# Exit with appropriate code
if [[ $CHECKS_FAILED -eq 0 ]]; then
    exit 0
else
    exit 1
fi
