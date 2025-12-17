# React Best Practices TUI Makefile

# Variables
BINARY_NAME=react-tui
BUILD_DIR=./build
CMD_DIR=./cmd
GO_FILES=$(shell find . -name '*.go' -type f)

# Default target
.PHONY: all
all: build

# Build the application
.PHONY: build
build:
	@echo "Building $(BINARY_NAME)..."
	@mkdir -p $(BUILD_DIR)
	go build -o $(BUILD_DIR)/$(BINARY_NAME) $(CMD_DIR)
	@echo "Build complete: $(BUILD_DIR)/$(BINARY_NAME)"

# Run the application directly
.PHONY: run
run:
	@echo "Running React Best Practices TUI..."
	go run $(CMD_DIR)/main.go

# Build and run
.PHONY: start
start: build
	@echo "Starting $(BINARY_NAME)..."
	$(BUILD_DIR)/$(BINARY_NAME)

# Clean build artifacts
.PHONY: clean
clean:
	@echo "Cleaning build artifacts..."
	rm -rf $(BUILD_DIR)
	go clean

# Install dependencies
.PHONY: deps
deps:
	@echo "Installing dependencies..."
	go mod download
	go mod tidy

# Format code
.PHONY: fmt
fmt:
	@echo "Formatting code..."
	go fmt ./...

# Lint code
.PHONY: lint
lint:
	@echo "Linting code..."
	@if command -v golangci-lint >/dev/null 2>&1; then \
		golangci-lint run; \
	else \
		echo "golangci-lint not installed, skipping lint check"; \
		echo "Install with: go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest"; \
	fi

# Vet code
.PHONY: vet
vet:
	@echo "Vetting code..."
	go vet ./...

# Run tests (if any)
.PHONY: test
test:
	@echo "Running tests..."
	go test -v ./...

# Check code quality
.PHONY: check
check: fmt vet lint test

# Install the binary to GOPATH/bin
.PHONY: install
install:
	@echo "Installing $(BINARY_NAME) to GOPATH/bin..."
	go install $(CMD_DIR)

# Build for multiple platforms
.PHONY: build-all
build-all:
	@echo "Building for multiple platforms..."
	@mkdir -p $(BUILD_DIR)

	# Linux AMD64
	GOOS=linux GOARCH=amd64 go build -o $(BUILD_DIR)/$(BINARY_NAME)-linux-amd64 $(CMD_DIR)

	# Linux ARM64
	GOOS=linux GOARCH=arm64 go build -o $(BUILD_DIR)/$(BINARY_NAME)-linux-arm64 $(CMD_DIR)

	# macOS AMD64
	GOOS=darwin GOARCH=amd64 go build -o $(BUILD_DIR)/$(BINARY_NAME)-darwin-amd64 $(CMD_DIR)

	# macOS ARM64 (Apple Silicon)
	GOOS=darwin GOARCH=arm64 go build -o $(BUILD_DIR)/$(BINARY_NAME)-darwin-arm64 $(CMD_DIR)

	# Windows AMD64
	GOOS=windows GOARCH=amd64 go build -o $(BUILD_DIR)/$(BINARY_NAME)-windows-amd64.exe $(CMD_DIR)

	@echo "Multi-platform build complete!"

# Create release package
.PHONY: package
package: build-all
	@echo "Creating release packages..."
	@mkdir -p $(BUILD_DIR)/releases

	# Create tarballs for Unix-like systems
	cd $(BUILD_DIR) && tar -czf releases/$(BINARY_NAME)-linux-amd64.tar.gz $(BINARY_NAME)-linux-amd64
	cd $(BUILD_DIR) && tar -czf releases/$(BINARY_NAME)-linux-arm64.tar.gz $(BINARY_NAME)-linux-arm64
	cd $(BUILD_DIR) && tar -czf releases/$(BINARY_NAME)-darwin-amd64.tar.gz $(BINARY_NAME)-darwin-amd64
	cd $(BUILD_DIR) && tar -czf releases/$(BINARY_NAME)-darwin-arm64.tar.gz $(BINARY_NAME)-darwin-arm64

	# Create zip for Windows
	cd $(BUILD_DIR) && zip releases/$(BINARY_NAME)-windows-amd64.zip $(BINARY_NAME)-windows-amd64.exe

	@echo "Release packages created in $(BUILD_DIR)/releases/"

# Show help
.PHONY: help
help:
	@echo "React Best Practices TUI - Available Commands:"
	@echo ""
	@echo "  make build      Build the application"
	@echo "  make run        Run the application directly (no build)"
	@echo "  make start      Build and run the application"
	@echo "  make clean      Clean build artifacts"
	@echo "  make deps       Install and tidy dependencies"
	@echo "  make fmt        Format Go code"
	@echo "  make lint       Lint code (requires golangci-lint)"
	@echo "  make vet        Vet Go code"
	@echo "  make test       Run tests"
	@echo "  make check      Run fmt, vet, lint, and test"
	@echo "  make install    Install binary to GOPATH/bin"
	@echo "  make build-all  Build for multiple platforms"
	@echo "  make package    Create release packages"
	@echo "  make help       Show this help message"
	@echo ""
	@echo "Quick start:"
	@echo "  make run        # Run immediately"
	@echo "  make start      # Build then run"

# Development workflow
.PHONY: dev
dev: deps fmt vet run

# Rebuild when Go files change (requires entr or inotify-tools)
.PHONY: watch
watch:
	@if command -v entr >/dev/null 2>&1; then \
		echo "Watching for changes... (press Ctrl+C to stop)"; \
		find . -name '*.go' | entr -r make run; \
	else \
		echo "entr not installed. Install with: brew install entr (macOS) or apt-get install entr (Ubuntu)"; \
	fi
