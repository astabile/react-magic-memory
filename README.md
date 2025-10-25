# 🎴 Magic Match - Memory Card Game

A beautiful, interactive memory card game built with React. Test your memory by matching pairs of magical items in this fun and engaging game!

## 🌐 Live Demo

**[Play the Game Here!](https://astabile-react-magic-memory.netlify.app/)** 🎮

Try it out: [https://astabile-react-magic-memory.netlify.app/](https://astabile-react-magic-memory.netlify.app/)

## ✨ Features

- **Smooth Card Flip Animations** - Cards flip with elegant CSS transitions
- **Game Logic** - Smart turn tracking and match detection
- **Victory Detection** - Automatic game completion detection with celebration message
- **Turn Counter** - Track your performance with a move counter
- **Responsive Design** - Fully mobile-optimized with adaptive layouts
- **New Game Function** - Start fresh anytime with shuffled cards
- **Prevent Invalid Moves** - Can't click the same card twice or click during comparison

## 🎮 How to Play

1. Click the "New Game" button to start
2. Click on any card to reveal the magical item
3. Click on another card to find its match
4. If the cards match, they stay flipped
5. If they don't match, they flip back after 1 second
6. Continue until all pairs are found
7. Try to complete the game in as few turns as possible!

## 🛠️ Technologies Used

- **React** - UI library for building the interface
- **React Hooks** - useState and useEffect for state management
- **CSS3** - Custom animations and responsive design
- **Create React App** - Project scaffolding and build tools

## 🚀 Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/astabile/react-magic-memory.git
```

2. Navigate to the project directory
```bash
cd react-magic-memory
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## 📱 Responsive Design

The game is fully responsive and adapts to different screen sizes:

- **Desktop** (>768px): 4-column grid layout
- **Tablet** (≤768px): 3-column grid layout
- **Mobile** (≤480px): 3-column grid with optimized spacing
- **Small Mobile** (≤360px): 2-column grid layout

## 🎯 Game Features

### Core Functionality
- Randomized card shuffling on each new game
- Unique ID generation for each card
- State management for:
  - Card selection tracking
  - Match detection
  - Turn counting
  - Disabled state during comparisons

### User Experience
- Visual feedback for flipped cards
- Smooth animations and transitions
- Responsive touch targets for mobile
- Game completion message
- Clean, modern UI design

## 📦 Build for Production

Create an optimized production build:

```bash
npm run build
```

The build folder will contain the optimized app ready for deployment.

## 🚢 Deployment

This app is deployed on **Netlify**: [https://astabile-react-magic-memory.netlify.app/](https://astabile-react-magic-memory.netlify.app/)

### Deploy Your Own

You can easily deploy this app to various platforms:

#### Netlify (Recommended)
1. Sign up for a free account at [Netlify](https://www.netlify.com/)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `build`
6. Click "Deploy site"

#### Vercel
1. Sign up at [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Vercel will auto-detect Create React App settings
4. Click "Deploy"

#### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json: `"homepage": "https://astabile.github.io/react-magic-memory"`
3. Add scripts: 
   - `"predeploy": "npm run build"`
   - `"deploy": "gh-pages -d build"`
4. Run: `npm run deploy`

## 🔧 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner in interactive watch mode

## 🎨 Customization

You can easily customize the game by:
- Adding more card images in `public/img/`
- Modifying the `cardImages` array in `src/App.js`
- Adjusting colors and styles in the CSS files
- Changing the grid layout in `src/components/SingleCard.css`

## 📝 Future Enhancements

Potential features to add:
- Difficulty levels (more cards)
- Timer mode
- High score leaderboard
- Sound effects
- Multiple themes
- Multiplayer mode
- Progressive Web App (PWA) capabilities

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Card images from fantasy/magic theme assets
- Built with Create React App
- Inspired by classic memory card games

---

**Made with ❤️ and React**
