# GitHub Actions Workflows

This directory contains CI/CD workflows for the Instant Resume landing page.

## Workflows Overview

### 1. `ci.yml` - Main CI Pipeline
**Triggers:** Push and Pull Requests to main/develop/master branches

**Checks:**
- ✅ TypeScript type checking
- ✅ ESLint linting (zero warnings allowed)
- ✅ Next.js build verification
- ✅ Security audit (npm audit)
- ✅ Dependency validation
- ✅ Node.js version compatibility (18, 20, 22)
- ✅ Code quality checks (console.log, TODO/FIXME detection)

**Purpose:** Comprehensive testing to catch bugs before merging.

---

### 2. `quality-gate.yml` - Quality Gate
**Triggers:** Pull Requests and pushes to main branches

**Checks:**
- Quick type check
- Lint validation
- Build verification
- Bundle size reporting

**Purpose:** Fast feedback loop for PRs with quality metrics.

---

### 3. `pre-commit-checks.yml` - Pre-commit Validation
**Triggers:** Pull Requests (opened/synchronized)

**Checks:**
- package.json validation
- Common mistakes detection
- Large files warning
- Quick type and lint checks

**Purpose:** Catch common errors early before code review.

---

## Workflow Status

You can view the status of all workflows in the **Actions** tab of your GitHub repository.

## Running Checks Locally

Before pushing, you can run these checks locally:

```bash
# Run all checks (recommended before committing)
npm run ci

# Run individual checks
npm run typecheck  # TypeScript check
npm run lint       # ESLint
npm run build      # Build test

# Auto-fix linting issues
npm run lint:fix
```

## Requirements

- Node.js 18, 20, or 22
- npm (comes with Node.js)
- All dependencies installed (`npm ci`)

## Troubleshooting

### Build fails
- Check for TypeScript errors: `npm run typecheck`
- Verify all imports are correct
- Check Next.js configuration

### Lint fails
- Run `npm run lint:fix` to auto-fix issues
- Check ESLint configuration
- Ensure code follows Next.js best practices

### Security audit fails
- Review vulnerabilities: `npm audit`
- Update packages: `npm update`
- Check for critical issues that need immediate attention

