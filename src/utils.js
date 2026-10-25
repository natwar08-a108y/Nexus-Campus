export const CATEGORY_COLORS = {
  Tech: "#2f5bea",
  Music: "#c026d3",
  Sports: "#0d9488",
  Arts: "#e11d48",
  Career: "#d97706",
  Culture: "#7c3aed",
};

export const CATEGORIES = ["All", ...Object.keys(CATEGORY_COLORS)];

export function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return {
    day: d.getDate(),
    month: d.toLocaleString("en-US", { month: "short" }),
    weekday: d.toLocaleString("en-US", { weekday: "long" }),
    full: d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }),
  };
}

// localStorage can throw (private mode, blocked storage), so always guard it
export function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

export function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore */
  }
}
