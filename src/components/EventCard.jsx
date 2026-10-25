import { CATEGORY_COLORS, formatDate } from "../utils.js";

export default function EventCard({ event, saved, onSave, onOpen }) {
  const date = formatDate(event.date);

  return (
    <div className="card-wrap" style={{ "--c": CATEGORY_COLORS[event.category] }}>
      <button className="card" onClick={() => onOpen(event)} aria-label={`Open details for ${event.title}`}>
        <div className="stub">
          <b>{date.day}</b>
          <span>{date.month}</span>
        </div>
        <div className="card-body">
          <span className="tag">{event.category}</span>
          <h3>{event.title}</h3>
          <div className="sub">
            <span>{date.weekday}, {event.time}</span>
            <span>{event.venue}</span>
          </div>
          <div className="foot">
            <span>{event.price}</span>
            <em>by {event.organizer}</em>
          </div>
        </div>
      </button>
      <button
        className="bookmark"
        aria-pressed={saved}
        aria-label={saved ? "Remove bookmark" : "Bookmark event"}
        onClick={() => onSave(event.id)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z" />
        </svg>
      </button>
    </div>
  );
}
