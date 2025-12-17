# Troubleshooting Guide

## React Structure Teacher - Common Issues and Solutions

This guide covers common issues you might encounter when building or running the React Structure Teacher application.

## WAILS Development Issues

### Issue: "package 'context' without types was imported"

**Problem:** This error occurs when WAILS cannot properly generate or find the JavaScript bindings for the Go backend.

**Solutions:**

1. **Ensure proper project structure:**
   ```bash
   make validate  # Check project structure
   ```

2. **Clean and rebuild:**
   ```bash
   make clean
   make setup
   make dev
   ```

3. **Manual binding generation:**
   ```bash
   wails generate module
   ```

4. **Check WAILS installation:**
   ```bash
   wails doctor
   wails version
   ```

### Issue: "No matching files found" for embed directive

**Problem:** The Go embed directive cannot find the `frontend/dist` directory.

**Solutions:**

1. **Create dist directory:**
   ```bash
   mkdir -p frontend/dist
   echo "# Build output will go here" > frontend/dist/.gitkeep
   ```

2. **Build frontend first:**
   ```bash
   cd frontend && npm run build
   ```

3. **Use setup target:**
   ```bash
   make setup
   ```

### Issue: "wails dev" fails to start

**Problem:** Development server cannot start due to various configuration issues.

**Solutions:**

1. **Check all prerequisites:**
   ```bash
   make check-deps
   ```

2. **Verify WAILS configuration:**
   ```bash
   cat wails.json
   ```

3. **Ensure frontend dependencies are installed:**
   ```bash
   cd frontend && npm install
   ```

4. **Try building first:**
   ```bash
   make build-dev
   ```

## Build Issues

### Issue: "Go module not found"

**Problem:** Go cannot find the required modules or dependencies.

**Solutions:**

1. **Update Go modules:**
   ```bash
   go mod tidy
   go mod download
   ```

2. **Check Go version:**
   ```bash
   go version  # Should be 1.21+
   ```

3. **Clear Go module cache:**
   ```bash
   go clean -modcache
   go mod download
   ```

### Issue: "npm install fails"

**Problem:** Node.js dependencies cannot be installed.

**Solutions:**

1. **Clear npm cache:**
   ```bash
   cd frontend
   rm -rf node_modules package-lock.json
   npm cache clean --force
   npm install
   ```

2. **Check Node.js version:**
   ```bash
   node --version  # Should be 16+
   npm --version
   ```

3. **Try different registry:**
   ```bash
   npm install --registry https://registry.npmjs.org/
   ```

### Issue: "Frontend build fails"

**Problem:** Vite or React build process encounters errors.

**Solutions:**

1. **Check for syntax errors:**
   ```bash
   cd frontend && npm run lint
   ```

2. **Clear Vite cache:**
   ```bash
   cd frontend
   rm -rf dist .vite node_modules
   npm install
   npm run build
   ```

3. **Check import paths:**
   - Ensure all imports use correct relative paths
   - Verify WAILS bindings are properly imported

## Runtime Issues

### Issue: "Application won't start"

**Problem:** Built application fails to launch.

**Solutions:**

1. **Check executable permissions (Unix/Linux):**
   ```bash
   chmod +x build/bin/react-structure-teacher*
   ```

2. **Run from command line to see errors:**
   ```bash
   ./build/bin/react-structure-teacher
   ```

3. **Verify all dependencies are included:**
   ```bash
   ldd build/bin/react-structure-teacher  # Linux
   otool -L build/bin/react-structure-teacher  # macOS
   ```

### Issue: "White screen or app doesn't load"

**Problem:** Application starts but shows blank screen.

**Solutions:**

1. **Check browser console (development):**
   - Open dev tools in the application
   - Look for JavaScript errors

2. **Verify asset embedding:**
   ```bash
   # Check if assets are properly embedded
   strings build/bin/react-structure-teacher | grep -i "html\|css\|js"
   ```

3. **Test with development build:**
   ```bash
   make build-dev  # Includes debug symbols
   ```

## Platform-Specific Issues

### Windows

**Issue: "Windows protected your PC"**
- Click "More info" then "Run anyway"
- Or sign the executable with a code signing certificate

**Issue: Build tools not found**
```bash
# Install build tools
choco install make
# Or use Windows Subsystem for Linux (WSL)
```

### macOS

**Issue: "App can't be opened"**
```bash
# Allow in System Preferences > Security & Privacy
# Or disable Gatekeeper temporarily
sudo spctl --master-disable
```

**Issue: Missing Xcode tools**
```bash
xcode-select --install
```

### Linux

**Issue: Missing system dependencies**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install build-essential libgtk-3-0 libwebkit2gtk-4.0-37

# CentOS/RHEL
sudo yum groupinstall "Development Tools"
sudo yum install gtk3-devel webkit2gtk3-devel
```

## Environment Issues

### Issue: Port conflicts (development)

**Problem:** Port 3000 is already in use.

**Solutions:**

1. **Kill existing process:**
   ```bash
   lsof -ti:3000 | xargs kill -9
   ```

2. **Change port in configuration:**
   ```bash
   # Edit frontend/vite.config.js
   # Change port from 3000 to another value
   ```

### Issue: Path issues

**Problem:** Import paths not resolving correctly.

**Solutions:**

1. **Check path aliases in vite.config.js:**
   ```javascript
   resolve: {
     alias: {
       '@': path.resolve(__dirname, './src'),
     },
   }
   ```

2. **Verify WAILS binding paths:**
   ```javascript
   // Should import from relative path
   import { GetBestPractices } from './wailsjs/go/main/App';
   ```

## Performance Issues

### Issue: Slow development server

**Solutions:**

1. **Exclude unnecessary files from watching:**
   ```javascript
   // In vite.config.js
   server: {
     watch: {
       ignored: ['**/node_modules/**', '**/build/**']
     }
   }
   ```

2. **Increase memory limit:**
   ```bash
   export NODE_OPTIONS="--max-old-space-size=4096"
   ```

### Issue: Large bundle size

**Solutions:**

1. **Analyze bundle:**
   ```bash
   cd frontend && npm run build -- --analyze
   ```

2. **Enable code splitting:**
   ```javascript
   // Use React.lazy for route-based splitting
   const Dashboard = React.lazy(() => import('./pages/Dashboard'));
   ```

## Debugging Tips

### Enable Debug Mode

1. **Development build with debug info:**
   ```bash
   make build-dev
   ```

2. **Enable verbose logging:**
   ```bash
   WAILS_DEBUG=1 make dev
   ```

### Common Debug Commands

```bash
# Check project status
make info

# Validate project structure
make validate

# Clean everything and start fresh
make clean && make setup

# Check all dependencies
make check-deps

# Show help with all available commands
make help
```

### Log Analysis

1. **Frontend logs:**
   - Open browser dev tools in the application
   - Check Console tab for errors
   - Check Network tab for failed requests

2. **Backend logs:**
   - Check terminal output during `make dev`
   - Look for Go panic messages or errors

3. **Build logs:**
   - Review output from `make build`
   - Check for compilation errors or warnings

## Getting Help

If you're still experiencing issues:

1. **Check the documentation:**
   - README.md for basic usage
   - DEVELOPMENT.md for detailed development info
   - INSTALL.md for installation guidance

2. **Verify your setup:**
   ```bash
   make info  # Shows system information
   ```

3. **Try a clean setup:**
   ```bash
   make clean
   make setup
   make dev
   ```

4. **Report issues with:**
   - Your operating system and version
   - Go version (`go version`)
   - Node.js version (`node --version`)
   - WAILS version (`wails version`)
   - Complete error messages
   - Steps to reproduce

## Quick Reference

### Most Common Solutions

1. **"It doesn't work" starter pack:**
   ```bash
   make clean
   make check-deps
   make setup
   make dev
   ```

2. **"Bindings not found" fix:**
   ```bash
   wails generate module
   # Or
   make generate
   ```

3. **"Build fails" reset:**
   ```bash
   make clean
   cd frontend && rm -rf node_modules package-lock.json
   make install
   make build
   ```

Remember: When in doubt, `make clean` and start fresh! 🧹