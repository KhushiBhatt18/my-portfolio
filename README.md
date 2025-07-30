# Portfolio Website

A modern, responsive portfolio website built with React, featuring dark/light mode toggle, smooth animations, and a beautiful UI.

## Features

### 🌙 Dark/Light Mode
- Toggle between dark and light themes
- Persistent theme preference (saved in localStorage)
- Smooth transitions between themes
- New color palette with gradients

### 🎨 Design & Animations
- Smooth animations using Framer Motion
- Responsive design for all devices
- Modern gradient color scheme
- Interactive hover effects
- Staggered animations for better UX

### 📱 Components
- **Hero Section**: Profile image with animated content
- **About Section**: Personal information with skill cards
- **Skills Section**: Comprehensive skill overview with progress bars
- **Projects Section**: Showcase of work
- **Experience Section**: Professional background
- **Contact Section**: Get in touch form
- **Navigation**: Smooth scrolling with theme toggle

### 🛠️ Technologies Used
- React 18
- Framer Motion (animations)
- Styled Components (styling)
- React Icons
- CSS Custom Properties (theming)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Customization

### Theme Colors
The color scheme can be customized by modifying the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #06b6d4;
  /* ... other variables */
}
```

### Adding Images
To add your own profile image:
1. Place your image in the `public` folder
2. Update the image path in the Hero and About components
3. Replace the placeholder initials with your actual image

### Content
Update the content in each component to reflect your personal information, skills, and projects.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE). 