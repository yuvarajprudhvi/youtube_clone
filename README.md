# YouTube Clone

A modern, responsive YouTube clone built with React, TypeScript, and Tailwind CSS. 
This project demonstrates best practices in React development, state management, and responsive design.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean and modern interface that closely resembles YouTube
- **Video Playback**: Video player with thumbnail previews
- **Navigation**: Full navigation system with sidebar and mobile navigation
- **Comments**: Comment system with the ability to add new comments
- **Categories**: Video categorization system
- **Related Videos**: Suggested videos based on current video
- **State Management**: Global state management using Zustand
- **TypeScript**: Full TypeScript support for better development experience

## 🛠️ Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- React Router DOM
- Zustand (State Management)
- Lucide React (Icons)
- Vite (Build Tool)

## 📦 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Category/       # Category-related components
│   ├── Comments/       # Comment system components
│   ├── Layout/         # Layout components (Navbar, Sidebar)
│   └── Video/          # Video-related components
├── data/               # Mock data and constants
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── store/              # Global state management
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/youtube-clone.git
   ```

2. **Install dependencies**
   ```bash
   cd youtube-clone
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📱 Responsive Design

The application is fully responsive with specific optimizations for:
- Mobile devices (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

Key responsive features:
- Mobile navigation bar
- Collapsible sidebar
- Adaptive video grid
- Responsive video player
- Mobile-optimized search

## 🔑 Key Components

- `App.tsx`: Main application component
- `Navbar.tsx`: Top navigation bar
- `Sidebar.tsx`: Main navigation sidebar
- `VideoGrid.tsx`: Video display grid
- `VideoPlayer.tsx`: Video playback component
- `Comments.tsx`: Comment system

## 🎯 Best Practices

- Component-based architecture
- Custom hooks for reusable logic
- TypeScript for type safety
- Responsive design patterns
- State management with Zustand
- Code splitting and lazy loading
- Consistent file and folder structure
- Clean and maintainable code

## 🔄 State Management

Global state is managed using Zustand with the following stores:
- Video state
- UI state (sidebar, search)
- User preferences

## 📱 Mobile Optimization

- Touch-friendly interface
- Mobile-first navigation
- Optimized video playback
- Responsive images
- Performance optimizations

## 🛠️ Development

### Prerequisites
- Node.js 16+
- npm or yarn

### Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Design inspired by YouTube
- Icons from Lucide React
- Images from Unsplash
