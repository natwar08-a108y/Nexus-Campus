# Campus Pulse

A responsive frontend website where students browse upcoming college events, search and filter them by category, open full details and bookmark favourites. No backend needed.

## Features
- Landing page with navbar, hero and event cards
- Event details modal (closes with Esc or a click outside)
- Loading skeletons and empty states
- Search plus category filters
- Bookmarks, registrations and theme saved in `localStorage`
- Light and dark mode (follows the system until you toggle it)
- Responsive on mobile and desktop

## Tech
React 18, Vite, plain CSS. Event data lives in `src/data/events.json`.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages
Build the project, then publish the `dist/` folder (for example with the `gh-pages` package or a GitHub Actions workflow). `vite.config.js` already uses `base: "./"`, so it works from any repository name.

## Project structure
```
src/
  App.jsx                 page layout, state, filtering
  components/
    EventCard.jsx
    EventModal.jsx
  data/events.json        sample events
  utils.js                dates, colours, safe localStorage helpers
  index.css               all styles
```
