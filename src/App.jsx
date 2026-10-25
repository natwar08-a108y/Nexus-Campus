import { useCallback, useEffect, useMemo, useState } from "react";
import rawEvents from "./data/events.json";
import EventCard from "./components/EventCard.jsx";
import EventModal from "./components/EventModal.jsx";
import { CATEGORIES, readStorage, writeStorage } from "./utils.js";

const toggleId = (list, id) => (list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);

export default function App() {
  const [events, setEvents] = useState(null); // null = loading
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [onlySaved, setOnlySaved] = useState(false);
  const [saved, setSaved] = useState(() => readStorage("cp:saved", []));
  const [registered, setRegistered] = useState(() => readStorage("cp:registered", []));
  const [theme, setTheme] = useState(() => readStorage("cp:theme", null)); // "light" | "dark" | null
  const [selected, setSelected] = useState(null);

  // Simulate loading the events from an API
  useEffect(() => {
    const t = setTimeout(() => {
      setEvents([...rawEvents].sort((a, b) => a.date.localeCompare(b.date)));
    }, 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (theme) document.documentElement.setAttribute("data-theme", theme);
    writeStorage("cp:theme", theme);
  }, [theme]);

  const isDark = theme
    ? theme === "dark"
    : window.matchMedia("(prefers-color-scheme: dark)").matches;

  const saveEvent = (id) => {
    const next = toggleId(saved, id);
    setSaved(next);
    writeStorage("cp:saved", next);
  };

  const register = (id) => {
    const next = toggleId(registered, id);
    setRegistered(next);
    writeStorage("cp:registered", next);
  };

  const closeModal = useCallback(() => setSelected(null), []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (events ?? []).filter(
      (e) =>
        (category === "All" || e.category === category) &&
        (!onlySaved || saved.includes(e.id)) &&
        `${e.title} ${e.venue} ${e.organizer} ${e.category}`.toLowerCase().includes(q)
    );
  }, [events, query, category, onlySaved, saved]);

  const clearFilters = () => {
    setQuery("");
    setCategory("All");
    setOnlySaved(false);
  };

  const hasFilters = query || category !== "All" || onlySaved;
  const noSavedYet = onlySaved && !query && category === "All";

  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <div className="logo"><i /> Campus Pulse</div>
          <button
            className="icon-btn"
            aria-pressed={onlySaved}
            onClick={() => setOnlySaved(!onlySaved)}
          >
            Saved {saved.length > 0 && <span className="count">{saved.length}</span>}
          </button>
          <button
            className="icon-btn"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <h1>Find what’s happening on campus</h1>
          <p>Hackathons, open mics, workshops and match days from every club. Pick a few and save them for later.</p>
          <a className="btn link-btn" href="#events">Browse events</a>
        </div>
      </section>

      <main className="wrap" id="events">
        <div className="tools">
          <input
            type="search"
            className="search"
            placeholder="Search by event, club or venue"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search events"
          />
          <div className="chips" role="group" aria-label="Filter by category">
            {CATEGORIES.map((c) => (
              <button key={c} className="chip" aria-pressed={category === c} onClick={() => setCategory(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {events && (
          <div className="meta" aria-live="polite">
            <span>
              {visible.length} {visible.length === 1 ? "event" : "events"}
            </span>
            {hasFilters && (
              <button className="chip" onClick={clearFilters}>Clear filters</button>
            )}
          </div>
        )}

        {!events ? (
          <div className="grid" aria-busy="true" aria-label="Loading events">
            {[...Array(6)].map((_, i) => <div className="skeleton" key={i} />)}
          </div>
        ) : visible.length === 0 ? (
          <div className="empty">
            <h2>{noSavedYet ? "No saved events yet" : "No events match"}</h2>
            <p>
              {noSavedYet
                ? "Tap the bookmark on any event to keep it here."
                : "Try a different word or pick another category."}
            </p>
            <button className="btn" onClick={clearFilters}>Show all events</button>
          </div>
        ) : (
          <div className="grid">
            {visible.map((e) => (
              <EventCard
                key={e.id}
                event={e}
                saved={saved.includes(e.id)}
                onSave={saveEvent}
                onOpen={setSelected}
              />
            ))}
          </div>
        )}
      </main>

      <footer>
        <div className="wrap">
          Campus Pulse is Your Event Planner ✅
        </div>
      </footer>

      {selected && (
        <EventModal
          event={selected}
          saved={saved.includes(selected.id)}
          registered={registered.includes(selected.id)}
          onSave={saveEvent}
          onRegister={register}
          onClose={closeModal}
        />
      )}
    </>
  );
}
