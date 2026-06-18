# Company Frontend Application

A modern, responsive educational institution frontend built with React and Vite. This application showcases courses, campus tours, admissions, and more with beautiful animations and smooth user experience.

## 🚀 Technologies Used

### Core Framework
- **React** (v19.2.6) - A JavaScript library for building user interfaces with components
- **Vite** (v8.0.12) - Next generation frontend build tool with instant HMR (Hot Module Replacement)
- **React Router DOM** (v7.15.1) - Client-side routing and navigation

### Styling & Animation
- **Tailwind CSS** (v4.3.0) - Utility-first CSS framework for rapid UI development
- **Tailwind CSS Vite** (v4.3.0) - Vite integration for Tailwind CSS
- **Framer Motion** (v12.40.0) - Production-ready motion library for React animations and gestures

### UI Components & Effects
- **React Icons** (v5.6.0) - Popular icon library with comprehensive icon sets
- **React Typed** (v2.0.12) - Typing animation library for text effects
- **React Countup** (v6.5.3) - Number counter animation component
- **Lottie React** (v2.4.1) - Render Lottie animations in React
- **React Toastify** (v11.1.0) - Toast notifications for user feedback

### Development Tools
- **ESLint** (v10.3.0) - JavaScript linter for code quality
- **ESLint Plugin React Hooks** - ESLint rules for React Hooks
- **ESLint Plugin React Refresh** - ESLint rules for React Refresh
- **Vite React Plugin** (v6.0.1) - React support for Vite
- **TypeScript** (@types packages) - Type definitions for React and React DOM

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── AdmissionForm.jsx      # Admission application form
│   │   ├── CampusTour.jsx         # Campus image carousel
│   │   ├── CourseCard.jsx         # Individual course display
│   │   ├── Footer.jsx             # Application footer
│   │   ├── Hero.jsx               # Hero section
│   │   ├── Mouse.jsx              # Custom mouse cursor
│   │   ├── Navbar.jsx             # Navigation bar
│   │   ├── ThemeSwitcher.jsx      # Dark/Light theme toggle
│   │   └── WelcomeScreen.jsx      # Welcome page
│   ├── context/                   # React Context for state management
│   ├── pages/
│   │   └── Home.jsx               # Main home page
│   ├── App.jsx                    # Root component
│   ├── App.css                    # Application styles
│   ├── index.css                  # Global styles
│   ├── main.jsx                   # Application entry point
│   └── assets/                    # Static assets
├── public/                        # Static files
├── vite.config.js                 # Vite configuration
├── eslint.config.js               # ESLint configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── index.html                     # HTML template
├── package.json                   # Project dependencies
└── README.md                      # This file
```

## 🎯 Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Enhanced user experience with Framer Motion and Lottie
- **Dark/Light Theme** - Theme switcher component for user preference
- **Interactive Carousel** - Campus tour image gallery with navigation
- **Form Validation** - Admission form with client-side validation and loading states
- **Toast Notifications** - User-friendly feedback with React Toastify
- **Icon System** - Comprehensive icon support with React Icons
- **Type Safety** - TypeScript type definitions for development
- **Code Quality** - ESLint configured for consistent code standards

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AkshitaGupta97/Golf_comp/tree/main/frontend
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🏃 Running the Application

### Development Server
```bash
npm run dev
```
This starts the Vite development server with HMR at `http://localhost:5173`

### Build for Production
```bash
npm run build
```
Creates optimized production build in the `dist` folder

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing

### Lint Code
```bash
npm run lint
```
Runs ESLint to check code quality and standards

## 🎨 Customization

### Theme Configuration
- Colors, spacing, and typography are managed through Tailwind CSS
- Custom theme variables are defined in CSS custom properties (--accent, --text, --surface, etc.)
- Use the `ThemeSwitcher` component to toggle between themes

### Adding New Components
1. Create a new `.jsx` file in `src/components/`
2. Import it in the relevant page or component
3. Add any required styles using Tailwind classes

### Animation
- Use Framer Motion for complex animations
- Use React Typed for text animations
- Use Lottie React for pre-built animations

## 🚨 Code Quality

The project uses ESLint to maintain code quality with rules for:
- React best practices
- React Hooks usage
- React Refresh compatibility

Run `npm run lint` to check for issues and ensure code standards compliance.

## 🤝 Contributing

When contributing to this project:
1. Follow the existing code style
2. Run `npm run lint` before committing
3. Ensure responsive design across all breakpoints
4. Test animations and interactions across browsers

## 📝 License

This project is part of the Company's educational platform.
