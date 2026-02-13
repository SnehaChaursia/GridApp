# Grid App

## 🔗 Live Demo
[https://your-vercel-link.vercel.app](https://grid-app-alpha.vercel.app/)

## 🚀 Tech Stack
- React.js 
- Tailwind
- Deployed on Vercel

## 🎮 Features
- 3x3 interactive grid
- Click to increment numbers
- Ripple Rule A:
  - If number divisible by 3 → right box -1
- Ripple Rule B:
  - If number divisible by 5 → below box +2
- Locked state:
  - Number ≥ 15 → turns red and becomes non-clickable
  - Locked boxes cannot be modified by neighbors
- Edge-safe logic (no crashes on borders)

## 🧠 Logic Handling
- Grid stored as 2D state
- Immutable state updates
- Guard checks for:
  - Last column
  - Bottom row
  - Locked boxes


## 📦 Installation

```bash
npm install
npm run dev
