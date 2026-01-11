# Recipe Recommender Frontend

A modern React-based web application for discovering and recommending recipes based on ingredients you have on hand.

## Overview

The Recipe Recommender is a single-page application that helps users find delicious recipes based on the ingredients they have available. The app features a clean, intuitive interface with smooth navigation between the landing page and recommendations page.

## ✨ Features

- **Landing Page**: Introduction to the app with "How it Works" information
- **Ingredient Input**: Easily enter the ingredients you have available
- **Recipe Recommendations**: Get personalized recipe suggestions
- **Responsive Navigation**: Seamless routing between pages using React hooks
- **Clean UI**: Professional design with organized components

## 🛠 Tech Stack

- **React 19**: Modern UI framework with hooks
- **Vite 7**: Lightning-fast build tool and dev server with HMR
- **CSS3**: Custom styling for responsive design
- **ESLint**: Code quality and consistency enforcement
- **Node.js**: JavaScript runtime

## 📁 Project Structure

```
src/
├── App.jsx                          # Root application component
├── main.jsx                         # Entry point
├── assets/
│   ├── header.css                   # Header navigation styles
│   └── header.jsx                   # Header component with navigation
├── components/
│   ├── IngredientInput.jsx          # Form for inputting ingredients
│   ├── RecipeCard.jsx               # Individual recipe display card
│   └── RecipeList.jsx               # Container for recipe listings
├── pages/
│   ├── home.jsx                     # Landing page with routing logic
│   ├── recommendations.jsx          # Recipe recommendations page
│   └── style.css                    # Page-specific styles
├── App.jsx                          # Main app wrapper
├── index.html                       # HTML template
└── main.jsx                         # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher) or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend/recipies
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Development

Start the development server with hot module reloading:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the application for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Code Quality

Run ESLint to check code quality:
```bash
npm run lint
```

Fix ESLint issues automatically (where possible):
```bash
npm run lint -- --fix
```

## 🧭 Navigation & Routing

The application uses React's `useState` hook for client-side routing. The routing logic is implemented in `home.jsx`:

- **Home Page**: Landing page with introduction
- **Recommendations Page**: Recipe recommendations based on user input

### User Flow

1. User lands on the Home page
2. User clicks "Get Started" button to navigate to Recommendations
3. User enters ingredients in the Recommendations page
4. User can click "Find your Recipe" in the header to return to Home

## 🧩 Component Guide

### Header Component (`src/assets/header.jsx`)
- Navigation header displayed on all pages
- "Recipe Recommander" title
- "Find your Recipe" button for navigation
- Accepts `onRecipeListClick` prop for navigation callback

### IngredientInput Component (`src/components/IngredientInput.jsx`)
- Form component for entering ingredients
- Used on the Recommendations page

### RecipeCard Component (`src/components/RecipeCard.jsx`)
- Displays individual recipe information
- Part of the recipe listings

### RecipeList Component (`src/components/RecipeList.jsx`)
- Container component for displaying multiple recipes

## 💡 Development Guidelines

### Code Style
- Follow ESLint rules configured in the project
- Use meaningful variable and function names
- Keep components focused and reusable
- Add comments for complex logic

### Adding New Features
1. Create components in the appropriate folder
2. Follow existing naming conventions
3. Ensure ESLint passes: `npm run lint`
4. Test in development mode: `npm run dev`
5. Update this README if adding significant features

### Best Practices
- Use functional components with hooks
- Keep state management simple (useState)
- Separate concerns between components
- Test navigation flows
- Keep CSS organized by component

## 🔧 Configuration Files

- **vite.config.js**: Vite build configuration
- **eslint.config.js**: ESLint rules and settings
- **package.json**: Dependencies and scripts
- **index.html**: HTML template

## 📦 Dependencies

### Production
- `react`: ^19.2.0 - UI library
- `react-dom`: ^19.2.0 - DOM rendering

### Development
- `vite`: ^7.2.4 - Build tool
- `@vitejs/plugin-react`: ^5.1.1 - React integration
- `eslint`: ^9.39.1 - Code linting
- `eslint-plugin-react-hooks`: ^7.0.1 - React hooks linting
- `eslint-plugin-react-refresh`: ^0.4.24 - Fast refresh support

## 🚧 Future Enhancements

- [ ] Integration with recipe API for dynamic data
- [ ] Advanced filtering and search capabilities
- [ ] User preferences and favorites system
- [ ] Recipe difficulty levels and ratings
- [ ] Nutritional information display
- [ ] User authentication (if needed)
- [ ] Shopping list generation

## 🤝 Contributing

1. Create a new branch for your feature
2. Make your changes and test thoroughly
3. Run `npm run lint` to ensure code quality
4. Update documentation if needed
5. Create a pull request with a clear description

## 📝 Notes for Team Members

- This is a frontend-only application. Backend integration will be required for dynamic recipe data
- The app currently uses local state management with React hooks
- All styling is custom CSS (no CSS framework)
- HMR (Hot Module Replacement) is enabled for faster development
- ESLint is configured and enforced in development

## 🐛 Troubleshooting

**Port Already in Use**
```bash
# Kill the process on port 5173 or use a different port
npm run dev -- --port 3000
```

**Dependencies Issues**
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

**ESLint Errors**
```bash
# Fix issues automatically
npm run lint -- --fix
```

## 📞 Support

For questions or issues:
1. Check existing issues in the repository
2. Review the code comments and documentation
3. Contact the development team
4. Create a detailed issue with steps to reproduce

---

**Last Updated**: January 2026
**Version**: 0.0.0
