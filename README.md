# Clinic Lab Info Page

A modern, responsive information page built with Next.js 15, React 19, and Tailwind CSS v4. This project features a clean, minimalist design with dark mode support, matching the styling of the cliniclab-portal reference project.

## Features

- 🎨 Modern UI with glassmorphism effects
- 🌓 Dark mode support with theme toggle
- 📱 Fully responsive design
- ⚡ Built with Next.js 15 and React 19
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS v4 with oklch color system
- 🧩 shadcn/ui components (New York style)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles with Tailwind CSS v4
│   ├── layout.tsx       # Root layout with fonts and theme
│   └── page.tsx         # Main page component
├── components/
│   └── ui/              # Reusable UI components (Button, Card, Input, Label)
├── lib/
│   └── utils.ts         # Utility functions (cn helper)
└── cliniclab-portal/    # Reference project (for styling reference only)
```

## Styling

The project uses:
- **Tailwind CSS v4** with oklch color system
- **Poppins** font for sans-serif text
- **Geist Mono** font for monospace text
- Custom CSS variables for theming
- Dark mode support via CSS classes

## Components

All UI components are built using shadcn/ui patterns and are located in `components/ui/`:
- `Button` - Versatile button component with multiple variants
- `Card` - Card container with header, content, and footer
- `Input` - Styled input field
- `Label` - Form label component

## Theme Toggle

The page includes a theme toggle button in the bottom-right corner that switches between light and dark modes. The preference is saved to localStorage.

## Reference

The `cliniclab-portal` directory is kept for reference only and should not be modified. It contains the original portal implementation that this project's styling is based on.



