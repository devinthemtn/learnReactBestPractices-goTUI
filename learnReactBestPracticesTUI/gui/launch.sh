#!/bin/bash

# React Best Practices GUI Launcher
# This script helps launch the GUI application with proper environment detection

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BINARY_PATH="$SCRIPT_DIR/build/react-gui"
BINARY_NAME="react-gui"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if binary exists
check_binary() {
    if [[ ! -f "$BINARY_PATH" ]]; then
        print_error "Binary not found at $BINARY_PATH"
        print_status "Building application..."

        if command -v make >/dev/null 2>&1; then
            cd "$SCRIPT_DIR"
            make build
            if [[ $? -eq 0 ]]; then
                print_success "Build completed successfully"
            else
                print_error "Build failed"
                exit 1
            fi
        else
            print_error "Make not found. Please install make or build manually with:"
            echo "  cd $SCRIPT_DIR && go build -o build/react-gui ./cmd/main.go"
            exit 1
        fi
    fi
}

# Function to detect display environment
detect_display() {
    local has_display=false

    # Check for X11
    if [[ -n "$DISPLAY" ]]; then
        print_status "X11 display detected: $DISPLAY"
        has_display=true
    fi

    # Check for Wayland
    if [[ -n "$WAYLAND_DISPLAY" ]]; then
        print_status "Wayland display detected: $WAYLAND_DISPLAY"
        has_display=true
    fi

    # Check for macOS (Darwin)
    if [[ "$(uname)" == "Darwin" ]]; then
        print_status "macOS detected - native GUI available"
        has_display=true
    fi

    # Check for Windows (MINGW/MSYS/Cygwin)
    if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" || "$OSTYPE" == "win32" ]]; then
        print_status "Windows detected - native GUI available"
        has_display=true
    fi

    return $([ "$has_display" = true ] && echo 0 || echo 1)
}

# Function to show usage
show_usage() {
    echo "React Best Practices GUI Launcher"
    echo ""
    echo "USAGE:"
    echo "  $0 [OPTIONS]"
    echo ""
    echo "OPTIONS:"
    echo "  -h, --help     Show this help message"
    echo "  -t, --test     Run in test mode (headless validation)"
    echo "  -v, --version  Show version information"
    echo "  -f, --force    Force launch even without display detection"
    echo "  --build        Build the application and exit"
    echo ""
    echo "EXAMPLES:"
    echo "  $0              # Launch GUI application"
    echo "  $0 --test       # Validate lessons without GUI"
    echo "  $0 --build      # Build application"
    echo "  $0 --force      # Force launch (skip display check)"
}

# Function to run test mode
run_test() {
    print_status "Running in test mode..."
    "$BINARY_PATH" -test
}

# Function to show version
show_version() {
    "$BINARY_PATH" -version
}

# Function to build only
build_only() {
    print_status "Building application..."
    cd "$SCRIPT_DIR"
    make build
    print_success "Build completed"
}

# Function to launch GUI
launch_gui() {
    local force_launch=$1

    if [[ "$force_launch" != "true" ]]; then
        if ! detect_display; then
            print_error "No graphical display environment detected!"
            print_warning "This is a GUI application that requires a display server."
            echo ""
            print_status "Available options:"
            echo "  1. Run on a system with X11, Wayland, or native GUI support"
            echo "  2. Use SSH with X11 forwarding: ssh -X username@hostname"
            echo "  3. Use VNC or other remote desktop solution"
            echo "  4. Run in test mode: $0 --test"
            echo "  5. Force launch anyway: $0 --force"
            echo ""
            exit 1
        fi
    else
        print_warning "Forcing launch without display detection"
    fi

    print_status "Launching React Best Practices GUI..."
    print_status "Press Ctrl+C to quit the application"

    # Launch the application
    "$BINARY_PATH"
}

# Main script logic
main() {
    local test_mode=false
    local force_launch=false
    local build_only_flag=false

    # Parse command line arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            -h|--help)
                show_usage
                exit 0
                ;;
            -t|--test)
                test_mode=true
                shift
                ;;
            -v|--version)
                check_binary
                show_version
                exit 0
                ;;
            -f|--force)
                force_launch=true
                shift
                ;;
            --build)
                build_only_flag=true
                shift
                ;;
            *)
                print_error "Unknown option: $1"
                show_usage
                exit 1
                ;;
        esac
    done

    # Check if binary exists (and build if needed)
    check_binary

    # Execute based on flags
    if [[ "$build_only_flag" == "true" ]]; then
        build_only
    elif [[ "$test_mode" == "true" ]]; then
        run_test
    else
        launch_gui "$force_launch"
    fi
}

# Show banner
echo "=============================================="
echo "  React Best Practices - GUI Application"
echo "  Learn React project structure interactively"
echo "=============================================="
echo ""

# Run main function with all arguments
main "$@"
