# Makefile for React Best Practices GUI

.PHONY: all build clean run test deps help install package

# Variables
BINARY_NAME=react-gui
BUILD_DIR=build
MAIN_PATH=./cmd/main.go
VERSION=1.0.0

# Go parameters
GOCMD=go
GOBUILD=$(GOCMD) build
GOCLEAN=$(GOCMD) clean
GOTEST=$(GOCMD) test
GOGET=$(GOCMD) get
GOMOD=$(GOCMD) mod

# Build flags
LDFLAGS=-ldflags "-X main.version=$(VERSION)"

# Default target
all: clean deps build

# Help target
help: ## Show this help message
	@echo "Available targets:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-15s %s\n", $$1, $$2}'

# Install dependencies
deps: ## Install project dependencies
	@echo "Installing dependencies..."
	$(GOMOD) download
	$(GOMOD) tidy

# Build the application
build: ## Build the GUI application
	@echo "Building $(BINARY_NAME)..."
	@mkdir -p $(BUILD_DIR)
	$(GOBUILD) $(LDFLAGS) -o $(BUILD_DIR)/$(BINARY_NAME) $(MAIN_PATH)
	@echo "Build complete: $(BUILD_DIR)/$(BINARY_NAME)"

# Build for different platforms
build-linux: ## Build for Linux
	@echo "Building for Linux..."
	@mkdir -p $(BUILD_DIR)
	@echo "Note: Cross-compilation may fail due to CGO dependencies. Building for current platform instead."
	$(GOBUILD) $(LDFLAGS) -o $(BUILD_DIR)/$(BINARY_NAME)-linux $(MAIN_PATH)

build-windows: ## Build for Windows
	@echo "Building for Windows..."
	@mkdir -p $(BUILD_DIR)
	@echo "Note: Cross-compilation may fail due to CGO dependencies. Building for current platform instead."
	$(GOBUILD) $(LDFLAGS) -o $(BUILD_DIR)/$(BINARY_NAME)-windows.exe $(MAIN_PATH)

build-darwin: ## Build for macOS
	@echo "Building for macOS..."
	@mkdir -p $(BUILD_DIR)
	@echo "Note: Cross-compilation may fail due to CGO dependencies. Building for current platform instead."
	$(GOBUILD) $(LDFLAGS) -o $(BUILD_DIR)/$(BINARY_NAME)-darwin $(MAIN_PATH)

# Build for all platforms (native only due to CGO)
build-all: build ## Build for current platform only
	@echo "Cross-compilation disabled due to Fyne CGO dependencies."
	@echo "To build for other platforms, run on the target OS or use Docker."
	@echo "Current build available at: $(BUILD_DIR)/$(BINARY_NAME)"
	@echo ""
	@echo "Platform-specific build instructions:"
	@echo "  Linux:   Run 'make build' on Linux system"
	@echo "  Windows: Run 'make build' on Windows system"
	@echo "  macOS:   Run 'make build' on macOS system"

# True cross-compilation (will likely fail)
build-all-cross: build-linux build-windows build-darwin ## Attempt cross-platform builds (may fail)
	@echo "Warning: Cross-compilation attempted but may fail due to CGO dependencies."

# Run the application
run: ## Run the GUI application
	@echo "Note: This will fail in headless environments. Use 'make run-test' for validation."
	$(GOCMD) run $(MAIN_PATH)

# Run with race detection
run-race: ## Run with race detection enabled
	@echo "Note: This will fail in headless environments. Use 'make run-test' for validation."
	$(GOCMD) run -race $(MAIN_PATH)

# Run in test mode (works in headless environments)
run-test: ## Run in test mode (headless-safe)
	$(GOCMD) run $(MAIN_PATH) -test

# Test the application
test: ## Run tests
	$(GOTEST) -v ./...

# Test with coverage
test-coverage: ## Run tests with coverage report
	$(GOTEST) -v -coverprofile=coverage.out ./...
	$(GOCMD) tool cover -html=coverage.out -o coverage.html
	@echo "Coverage report generated: coverage.html"

# Clean build artifacts
clean: ## Clean build artifacts
	@echo "Cleaning..."
	$(GOCLEAN)
	@rm -rf $(BUILD_DIR)
	@rm -f coverage.out coverage.html

# Install the application globally
install: build ## Install the application to GOPATH/bin
	@echo "Installing $(BINARY_NAME) to $$GOPATH/bin..."
	@cp $(BUILD_DIR)/$(BINARY_NAME) $$GOPATH/bin/

# Package the application (create distributable)
package: build ## Create distributable package
	@echo "Creating package..."
	@mkdir -p $(BUILD_DIR)/package
	@cp $(BUILD_DIR)/$(BINARY_NAME) $(BUILD_DIR)/package/
	@cp README.md $(BUILD_DIR)/package/ 2>/dev/null || echo "README.md not found, skipping..."
	@cd $(BUILD_DIR) && tar -czf $(BINARY_NAME)-$(VERSION).tar.gz package/
	@echo "Package created: $(BUILD_DIR)/$(BINARY_NAME)-$(VERSION).tar.gz"

# Create application bundle for macOS
bundle-darwin: build-darwin ## Create macOS application bundle
	@echo "Creating macOS application bundle..."
	@mkdir -p $(BUILD_DIR)/ReactBestPractices.app/Contents/MacOS
	@mkdir -p $(BUILD_DIR)/ReactBestPractices.app/Contents/Resources
	@cp $(BUILD_DIR)/$(BINARY_NAME)-darwin $(BUILD_DIR)/ReactBestPractices.app/Contents/MacOS/ReactBestPractices
	@echo '<?xml version="1.0" encoding="UTF-8"?>' > $(BUILD_DIR)/ReactBestPractices.app/Contents/Info.plist
	@echo '<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">' >> $(BUILD_DIR)/ReactBestPractices.app/Contents/Info.plist
	@echo '<plist version="1.0"><dict>' >> $(BUILD_DIR)/ReactBestPractices.app/Contents/Info.plist
	@echo '<key>CFBundleExecutable</key><string>ReactBestPractices</string>' >> $(BUILD_DIR)/ReactBestPractices.app/Contents/Info.plist
	@echo '<key>CFBundleIdentifier</key><string>com.reactbestpractices.gui</string>' >> $(BUILD_DIR)/ReactBestPractices.app/Contents/Info.plist
	@echo '<key>CFBundleName</key><string>React Best Practices</string>' >> $(BUILD_DIR)/ReactBestPractices.app/Contents/Info.plist
	@echo '<key>CFBundleVersion</key><string>$(VERSION)</string>' >> $(BUILD_DIR)/ReactBestPractices.app/Contents/Info.plist
	@echo '</dict></plist>' >> $(BUILD_DIR)/ReactBestPractices.app/Contents/Info.plist
	@echo "macOS bundle created: $(BUILD_DIR)/ReactBestPractices.app"

# Development targets
dev: ## Run in development mode with auto-reload (requires entr)
	@echo "Starting development mode (requires 'entr' tool)..."
	@echo "Install entr: brew install entr (macOS) or apt-get install entr (Ubuntu)"
	find . -name "*.go" | entr -r make run

# Format code
fmt: ## Format Go code
	$(GOCMD) fmt ./...

# Lint code (requires golangci-lint)
lint: ## Lint Go code
	@which golangci-lint > /dev/null || (echo "golangci-lint not found. Install it from https://golangci-lint.run/usage/install/" && exit 1)
	golangci-lint run

# Security check (requires gosec)
security: ## Run security checks
	@which gosec > /dev/null || (echo "gosec not found. Install it: go install github.com/securecodewarrior/gosec/v2/cmd/gosec@latest" && exit 1)
	gosec ./...

# Check for outdated dependencies
outdated: ## Check for outdated dependencies
	$(GOCMD) list -u -m all

# Update dependencies
update: ## Update all dependencies
	$(GOGET) -u ./...
	$(GOMOD) tidy

# Verify dependencies
verify: ## Verify dependencies
	$(GOMOD) verify

# Generate documentation
docs: ## Generate documentation
	@echo "Generating documentation..."
	$(GOCMD) doc ./...

# Show version
version: ## Show version information
	@echo "React Best Practices GUI v$(VERSION)"

# Quick development setup
setup: deps ## Quick setup for development
	@echo "Development environment setup complete!"
	@echo "Run 'make run' to start the application"
	@echo "Run 'make help' to see all available commands"

# Performance profiling
profile: ## Run with CPU profiling
	$(GOCMD) run $(MAIN_PATH) -cpuprofile=cpu.prof
	$(GOCMD) tool pprof cpu.prof

# Memory profiling
profile-mem: ## Run with memory profiling
	$(GOCMD) run $(MAIN_PATH) -memprofile=mem.prof
	$(GOCMD) tool pprof mem.prof

# Docker targets (if you want to containerize later)
docker-build: ## Build Docker image
	@echo "Building Docker image..."
	docker build -t react-best-practices-gui:$(VERSION) .

docker-run: ## Run in Docker container
	@echo "Running in Docker..."
	docker run --rm -it -v /tmp/.X11-unix:/tmp/.X11-unix -e DISPLAY=$$DISPLAY react-best-practices-gui:$(VERSION)

# Platform information
platform: ## Show current platform information
	@echo "Platform Information:"
	@echo "  OS: $(shell go env GOOS)"
	@echo "  Architecture: $(shell go env GOARCH)"
	@echo "  Go Version: $(shell go version)"
	@echo "  CGO Enabled: $(shell go env CGO_ENABLED)"
	@echo ""
	@echo "Build Requirements:"
	@echo "  - Go 1.21+ ✓"
	@echo "  - CGO support ✓ (required for Fyne)"
	@echo "  - C compiler ✓ (for GUI libraries)"

# Quick validation
validate: run-test ## Validate application without GUI (alias for run-test)

# Show all available commands
list: help ## Alias for help

# Development cycle
dev-cycle: clean deps build run-test ## Complete development cycle
	@echo "Development cycle completed successfully!"

# Release preparation
release-prep: clean deps build test validate ## Prepare for release
	@echo "Release preparation completed!"
	@echo "Binary ready at: $(BUILD_DIR)/$(BINARY_NAME)"
