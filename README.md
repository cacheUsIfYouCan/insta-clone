# Instagram Clone

A modern Instagram clone built with React

## 📋 Features

- Like and comment functionality
- User following system
- Mobile design

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Modern web browser

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/instagram-clone.git
cd instagram-clone
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```bash
cp .env.example .env
```
Edit the `.env` file with your configuration details.

4. Start the development server
```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend framework

## 🌳 Branching Strategy

Our project follows a structured branching strategy to maintain organization and clarity in our development workflow.

### Main Branches

- `main` - Production branch containing stable releases
- `develop` - Main development branch where features are integrated

### Branch Naming Convention

All branches should follow these prefix conventions:

| Prefix | Purpose | Example |
|--------|---------|---------|
| `feature/` | New features | `feature/photo-filters` |
| `bugfix/` | Bug fixes | `bugfix/login-validation` |
| `hotfix/` | Urgent production fixes | `hotfix/server-crash` |
| `release/` | Release preparation | `release/v1.2.0` |
| `docs/` | Documentation updates | `docs/api-guide` |

### Branch Workflow

1. **Feature Development**
   ```bash
   # Create a new feature branch
   git checkout develop
   git checkout -b feature/new-feature-#
   
   # After development is complete
   git pull origin develop
   git checkout develop
   git merge feature/new-feature
   ```

2. **Bug Fixes**
   ```bash
   # Create a bug fix branch
   git checkout develop
   git checkout -b bugfix/issue-description
   ```

3. **Hotfixes**
   ```bash
   # Create a hotfix branch from main
   git checkout main
   git checkout -b hotfix/critical-fix
   
   # After fixing, merge to both main and develop
   git checkout main
   git merge hotfix/critical-fix
   git checkout develop
   git merge hotfix/critical-fix
   ```

### Branch Lifecycle

1. Create branch from `develop`
2. Develop and commit changes
3. Push branch to remote
4. Create Pull Request
5. Code review and approval
6. Merge to `develop`

## 📝 License



## 👥 Authors

- 

## 🙏 Acknowledgments

- Instagram for inspiration
- React community for excellent documentation

## ⚠️ Known Issues
