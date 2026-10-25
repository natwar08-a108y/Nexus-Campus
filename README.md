# 🎓 Campus Pulse

### Your Campus. Your Events. Your Pulse.

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18" />
  <img src="https://img.shields.io/badge/Vite-Fast%20Builds-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/CSS-Responsive-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
  <img src="https://img.shields.io/badge/Backend-Not%20Required-2EA44F?style=for-the-badge" alt="No backend required" />
</p>

<p align="center">
  <strong>Discover events. Explore opportunities. Never miss a campus moment.</strong>
</p>

---

## ✨ Overview

**Campus Pulse** is a responsive, frontend-only college event discovery platform designed to keep students connected with everything happening on campus.

From exciting technical fests and hackathons to cultural celebrations and workshops, Campus Pulse makes it easy to discover upcoming events, explore event details, and save your favourites — all through a clean, modern interface.

No backend. No complicated setup. Just a seamless campus experience.

## 🚀 Features

| Feature | Description |
|---|---|
| 🎯 **Event Discovery** | Explore upcoming college events through an engaging landing page and event cards. |
| 🔎 **Smart Search** | Find events quickly using search and category filters. |
| 📋 **Event Details** | Open detailed event information in an interactive modal. |
| 🔖 **Bookmarks** | Save favourite events and access them later. |
| 📝 **Registrations** | Keep track of event registrations locally. |
| 🌗 **Theme Switching** | Enjoy light and dark modes, with system theme detection by default. |
| 💾 **Local Persistence** | Preserve bookmarks, registrations, and theme preferences using `localStorage`. |
| ⚡ **Loading States** | Display skeleton loaders and helpful empty states. |
| 📱 **Responsive Design** | Enjoy a smooth experience across mobile, tablet, and desktop screens. |
| ⌨️ **Keyboard Friendly** | Close event details using the `Esc` key or by clicking outside the modal. |

## 🛠️ Tech Stack

<p>
  <img src="https://skillicons.dev/icons?i=react,vite,js,html,css" alt="React, Vite, JavaScript, HTML and CSS" />
</p>

- **React 18** — Component-based user interface.
- **Vite** — Fast development server and production builds.
- **JavaScript** — Application logic, search, filtering, and state management.
- **CSS** — Responsive layouts, styling, and theme support.
- **LocalStorage API** — Persistent client-side preferences and saved data.
- **JSON** — Local event data stored in `src/data/events.json`.

## 📂 Project Structure

```text
Campus-Pulse/
├── public/
├── src/
│   ├── components/
│   │   ├── EventCard.jsx
│   │   └── EventModal.jsx
│   ├── data/
│   │   └── events.json
│   ├── App.jsx
│   ├── index.css
│   └── utils.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git (optional, for cloning the repository)

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/Campus-Pulse.git
cd Campus-Pulse
```

Replace `YOUR-USERNAME` with your GitHub username and adjust the repository name if necessary.

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to explore Campus Pulse.

## 📦 Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The generated production files will be available in the `dist/` directory.

## 🌐 Deployment

Campus Pulse can
