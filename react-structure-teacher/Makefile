# React Structure Teacher Makefile
# Comprehensive build system for the WAILS React application

.PHONY: help setup install build dev clean test lint format check-deps generate dist all
.DEFAULT_GOAL := help

# Variables
APP_NAME := react-structure-teacher
BUILD_DIR := build
FRONTEND_DIR := frontend
GO_FILES := $(shell find . -name "*.go" -type f -not -path "./build/*" -not -path "./frontend/*")
FRONTEND_FILES := $(shell find $(FRONTEND_DIR)/src -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.css")

# Colors for output
RED := \033[31m
GREEN := \033[32m
YELLOW := \033[33m
BLUE := \033[34m
MAGENTA := \033[35m
CYAN := \033[36m
WHITE := \033[37m
RESET := \033[0m

# Help target
help: ## Show this help message
	@echo "$(CYAN)React Structure Teacher Build System$(RESET)"
	@echo ""
	@echo "$(YELLOW)Available targets:$(RESET)"
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  $(GREEN)%-15s$(RESET) %s\n", $$1, $$2}' $(MAKEFILE_LIST)
	@echo ""

# Prerequisites check
check-deps: ## Check if all required tools are installed
	@echo "$(BLUE)🔍 Checking prerequisites...$(RESET)"
	@which go >/dev/null 2>&1 || (echo "$(RED)❌ Go is not installed. Please install Go 1.21 or later.$(RESET)" && exit 1)
	@which node >/dev/null 2>&1 || (echo "$(RED)❌ Node.js is not installed. Please install Node.js 16 or later.$(RESET)" && exit 1)
	@which wails >/dev/null 2>&1 || (echo "$(RED)❌ WAILS is not installed. Run: go install github.com/wailsapp/wails/v2/cmd/wails@latest$(RESET)" && exit 1)
	@echo "$(GREEN)✅ All prerequisites are installed$(RESET)"

# Setup project for development
setup: check-deps ## Setup project for first-time development
	@echo "$(BLUE)🚀 Setting up project for development...$(RESET)"
	@echo "$(YELLOW)Installing Go dependencies...$(RESET)"
	@go mod tidy
	@echo "$(YELLOW)Installing frontend dependencies...$(RESET)"
	@cd $(FRONTEND_DIR) && npm install
	@echo "$(YELLOW)Creating necessary directories...$(RESET)"
	@mkdir -p $(BUILD_DIR)
	@mkdir -p $(FRONTEND_DIR)/dist
	@echo "$(YELLOW)Initializing WAILS project...$(RESET)"
	@wails init -n react-structure-teacher -t go || echo "$(YELLOW)⚠️  Project already initialized$(RESET)"
	@echo "$(GREEN)✅ Project setup complete! Run 'make dev' to start development.$(RESET)"

# Install dependencies
install: check-deps ## Install Go and Node.js dependencies
	@echo "$(BLUE)📦 Installing dependencies...$(RESET)"
	@echo "$(YELLOW)Installing Go dependencies...$(RESET)"
	@go mod tidy
	@echo "$(YELLOW)Installing frontend dependencies...$(RESET)"
	@cd $(FRONTEND_DIR) && npm install
	@echo "$(GREEN)✅ Dependencies installed$(RESET)"

# Generate WAILS bindings
generate: ## Generate WAILS JS bindings
	@echo "$(BLUE)🔗 Generating WAILS bindings...$(RESET)"
	@wails generate module || echo "$(YELLOW)⚠️  Bindings generation skipped (will be done during build)$(RESET)"
	@echo "$(GREEN)✅ Bindings generated$(RESET)"

# Development server
dev: install ## Start development server with hot reload
	@echo "$(BLUE)🚀 Starting development server...$(RESET)"
	@echo "$(YELLOW)Note: If this is your first run, use 'make setup' first$(RESET)"
	@wails dev

# Clean build artifacts
clean: ## Clean all build artifacts and dependencies
	@echo "$(BLUE)🧹 Cleaning build artifacts...$(RESET)"
	@rm -rf $(BUILD_DIR)/
	@rm -rf $(FRONTEND_DIR)/dist/
	@rm -rf $(FRONTEND_DIR)/node_modules/
	@rm -rf vendor/
	@go clean -cache
	@echo "$(GREEN)✅ Clean complete$(RESET)"

# Lint Go code
lint-go: ## Lint Go code
	@echo "$(BLUE)🔍 Linting Go code...$(RESET)"
	@if which golangci-lint >/dev/null 2>&1; then \
		golangci-lint run; \
	else \
		echo "$(YELLOW)⚠️  golangci-lint not installed, using go vet instead$(RESET)"; \
		go vet ./...; \
	fi

# Lint frontend code
lint-frontend: ## Lint frontend code
	@echo "$(BLUE)🔍 Linting frontend code...$(RESET)"
	@cd $(FRONTEND_DIR) && npm run lint

# Lint all code
lint: lint-go lint-frontend ## Lint both Go and frontend code

# Format Go code
format-go: ## Format Go code
	@echo "$(BLUE)✨ Formatting Go code...$(RESET)"
	@go fmt ./...
	@if which goimports >/dev/null 2>&1; then \
		goimports -w $(GO_FILES); \
	fi

# Format frontend code
format-frontend: ## Format frontend code
	@echo "$(BLUE)✨ Formatting frontend code...$(RESET)"
	@cd $(FRONTEND_DIR) && npm run format 2>/dev/null || echo "$(YELLOW)⚠️  No format script found, skipping...$(RESET)"

# Format all code
format: format-go format-frontend ## Format both Go and frontend code

# Test Go code
test-go: ## Run Go tests
	@echo "$(BLUE)🧪 Running Go tests...$(RESET)"
	@go test -v ./...

# Test frontend code
test-frontend: ## Run frontend tests
	@echo "$(BLUE)🧪 Running frontend tests...$(RESET)"
	@cd $(FRONTEND_DIR) && npm test 2>/dev/null || echo "$(YELLOW)⚠️  No tests found, skipping...$(RESET)"

# Run all tests
test: test-go test-frontend ## Run all tests

# Build for development
build-dev: install ## Build application for development
	@echo "$(BLUE)🔨 Building for development...$(RESET)"
	@wails build -debug
	@echo "$(GREEN)✅ Development build complete$(RESET)"

# Build for production
build: install ## Build application for production
	@echo "$(BLUE)🔨 Building for production...$(RESET)"
	@wails build
	@if [ -d "$(BUILD_DIR)/bin" ]; then \
		echo "$(GREEN)✅ Build completed successfully!$(RESET)"; \
		echo "$(CYAN)📂 Build artifacts:$(RESET)"; \
		ls -la $(BUILD_DIR)/bin/; \
		if [ "$(shell uname)" != "Windows_NT" ]; then \
			chmod +x $(BUILD_DIR)/bin/*; \
			echo "$(GREEN)✅ Made binaries executable$(RESET)"; \
		fi; \
	else \
		echo "$(RED)❌ Build failed!$(RESET)"; \
		exit 1; \
	fi

# Build for multiple platforms
dist: install ## Build for multiple platforms (Windows, macOS, Linux)
	@echo "$(BLUE)🌍 Building for multiple platforms...$(RESET)"
	@echo "$(YELLOW)Building for Windows (amd64)...$(RESET)"
	@wails build -platform windows/amd64 -o $(APP_NAME)-windows-amd64.exe
	@echo "$(YELLOW)Building for macOS (amd64)...$(RESET)"
	@wails build -platform darwin/amd64 -o $(APP_NAME)-macos-amd64
	@echo "$(YELLOW)Building for macOS (arm64)...$(RESET)"
	@wails build -platform darwin/arm64 -o $(APP_NAME)-macos-arm64
	@echo "$(YELLOW)Building for Linux (amd64)...$(RESET)"
	@wails build -platform linux/amd64 -o $(APP_NAME)-linux-amd64
	@echo "$(GREEN)✅ Multi-platform build complete$(RESET)"
	@echo "$(CYAN)📂 Distribution files:$(RESET)"
	@ls -la $(BUILD_DIR)/bin/

# Run the built application
run: build ## Build and run the application
	@echo "$(BLUE)🚀 Running application...$(RESET)"
	@./$(BUILD_DIR)/bin/$(APP_NAME)

# Quick development cycle
quick: ## Quick build and run for development
	@echo "$(BLUE)⚡ Quick development build...$(RESET)"
	@wails build -debug && ./$(BUILD_DIR)/bin/$(APP_NAME)

# Validate project structure (self-check)
validate: ## Validate this project's structure against its own best practices
	@echo "$(BLUE)🔍 Validating project structure...$(RESET)"
	@echo "$(CYAN)Checking Go project structure:$(RESET)"
	@test -f go.mod || (echo "$(RED)❌ Missing go.mod$(RESET)" && exit 1)
	@test -f main.go || (echo "$(RED)❌ Missing main.go$(RESET)" && exit 1)
	@test -f wails.json || (echo "$(RED)❌ Missing wails.json$(RESET)" && exit 1)
	@echo "$(CYAN)Checking frontend structure:$(RESET)"
	@test -f $(FRONTEND_DIR)/package.json || (echo "$(RED)❌ Missing package.json$(RESET)" && exit 1)
	@test -f $(FRONTEND_DIR)/src/App.jsx || (echo "$(RED)❌ Missing App.jsx$(RESET)" && exit 1)
	@test -d $(FRONTEND_DIR)/src/components || (echo "$(RED)❌ Missing components directory$(RESET)" && exit 1)
	@test -d $(FRONTEND_DIR)/src/pages || (echo "$(RED)❌ Missing pages directory$(RESET)" && exit 1)
	@echo "$(GREEN)✅ Project structure is valid$(RESET)"

# Install development tools
install-tools: ## Install additional development tools
	@echo "$(BLUE)🛠️  Installing development tools...$(RESET)"
	@echo "$(YELLOW)Installing golangci-lint...$(RESET)"
	@go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest
	@echo "$(YELLOW)Installing goimports...$(RESET)"
	@go install golang.org/x/tools/cmd/goimports@latest
	@echo "$(GREEN)✅ Development tools installed$(RESET)"

# Show project information
info: ## Show project information and status
	@echo "$(CYAN)📋 React Structure Teacher - Project Information$(RESET)"
	@echo ""
	@echo "$(YELLOW)Project:$(RESET)     $(APP_NAME)"
	@echo "$(YELLOW)Go Version:$(RESET)  $(shell go version 2>/dev/null | awk '{print $$3}' || echo 'Not installed')"
	@echo "$(YELLOW)Node Version:$(RESET) $(shell node --version 2>/dev/null || echo 'Not installed')"
	@echo "$(YELLOW)WAILS Version:$(RESET) $(shell wails version 2>/dev/null || echo 'Not installed')"
	@echo ""
	@echo "$(YELLOW)Go Files:$(RESET)     $(words $(GO_FILES))"
	@echo "$(YELLOW)Frontend Files:$(RESET) $(words $(FRONTEND_FILES))"
	@echo ""
	@if [ -d "$(BUILD_DIR)" ]; then \
		echo "$(YELLOW)Build Status:$(RESET) $(GREEN)Built$(RESET)"; \
		echo "$(YELLOW)Build Size:$(RESET)   $(shell du -sh $(BUILD_DIR) 2>/dev/null | cut -f1 || echo 'Unknown')"; \
	else \
		echo "$(YELLOW)Build Status:$(RESET) $(RED)Not built$(RESET)"; \
	fi

# Complete build and test pipeline
all: clean install lint test build ## Run complete build and test pipeline
	@echo "$(GREEN)🎉 All tasks completed successfully!$(RESET)"
	@echo ""
	@echo "$(CYAN)📖 Next steps:$(RESET)"
	@echo "   $(WHITE)1. Test the application:$(RESET) make run"
	@echo "   $(WHITE)2. Create distribution:$(RESET) make dist"
	@echo "   $(WHITE)3. Start development:$(RESET) make dev"

# Watch for changes and rebuild (requires entr or similar)
watch: ## Watch for changes and rebuild automatically
	@echo "$(BLUE)👀 Watching for changes...$(RESET)"
	@if which entr >/dev/null 2>&1; then \
		find . -name "*.go" -o -name "*.js" -o -name "*.jsx" -o -name "*.css" | entr -r make quick; \
	else \
		echo "$(RED)❌ 'entr' not found. Install it to enable file watching.$(RESET)"; \
		echo "$(YELLOW)   On macOS: brew install entr$(RESET)"; \
		echo "$(YELLOW)   On Linux: apt-get install entr$(RESET)"; \
		exit 1; \
	fi

# Create release package
release: dist ## Create release package with documentation
	@echo "$(BLUE)📦 Creating release package...$(RESET)"
	@mkdir -p $(BUILD_DIR)/release
	@cp -r $(BUILD_DIR)/bin/* $(BUILD_DIR)/release/
	@cp README.md $(BUILD_DIR)/release/
	@cp -r docs $(BUILD_DIR)/release/ 2>/dev/null || true
	@cd $(BUILD_DIR) && tar -czf react-structure-teacher-release.tar.gz release/
	@echo "$(GREEN)✅ Release package created: $(BUILD_DIR)/react-structure-teacher-release.tar.gz$(RESET)"

# Update dependencies
update: ## Update all dependencies
	@echo "$(BLUE)⬆️  Updating dependencies...$(RESET)"
	@echo "$(YELLOW)Updating Go dependencies...$(RESET)"
	@go get -u ./...
	@go mod tidy
	@echo "$(YELLOW)Updating frontend dependencies...$(RESET)"
	@cd $(FRONTEND_DIR) && npm update
	@echo "$(GREEN)✅ Dependencies updated$(RESET)"
