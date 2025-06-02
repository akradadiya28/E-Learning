# E-Learning

This project is built using Next.js with Tailwind CSS and TypeScript.

# 🛠 Git & GitHub Workflow for E-Learning Project

This document defines how we (a 2-member team) will collaborate on the E-Learning project using GitHub (private repo).

---

## 🔀 Branching Strategy

### 🔹 Main Branches:
- `main` → Production-ready, stable code only.
- `dev` → Optional: Integration branch for tested features.

### 🔹 Feature Branches:
Every new feature, bugfix, or UI change must be done in a separate branch.

**Naming convention:**

| Type      | Branch Name Example            |
|-----------|--------------------------------|
| Feature   | `feature/login-page`           |
| Bug Fix   | `bugfix/navbar-overlap`        |
| UI Task   | `ui/footer-style-update`       |
| Testing   | `test/api-auth-tests`          |

---

## 📦 Workflow Steps

### Step 1: Pull latest changes
```bash
git checkout main
git pull origin main
```

### Step 2: Create new feature branch
```bash
git checkout -b feature/your-task-name
```

### Step 3: Do your work, commit often
```bash
git add .
git commit -m "Your message"
```

### Step 4: Push your branch
```bash
git push origin feature/your-task-name
```

