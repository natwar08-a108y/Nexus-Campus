import { useEffect, useRef } from "react";
import { CATEGORY_COLORS, formatDate } from "../utils.js";

export default function EventModal({ event, saved, registered, onSave, onRegister, onClose }) {
  const closeRef = useRef(null);
  const date = formatDate(event.date);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={event.title}
        style={{ "--c": CATEGORY_COLORS[event.category] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-head">
          <button ref={closeRef} className="close" onClick={onClose} aria-label="Close details">×</button>
          <span className="tag">{event.category}</span>
          <h2>{event.title}</h2>
        </div>
        <div className="modal-body">
          <div className="facts">
            <div><small>Date</small><b>{date.full}</b></div>
            <div><small>Time</small><b>{event.time}</b></div>
            <div><small>Venue</small><b>{event.venue}</b></div>
            <div><small>Entry</small><b>{event.price} · {event.spots} spots</b></div>
          </div>
          <p>{event.description}</p>
          <p className="muted">Organised by {event.organizer}</p>
          <div className="actions">
            <button className={registered ? "btn done" : "btn"} onClick={() => onRegister(event.id)}>
              {registered ? "You’re going ✓" : "Register"}
            </button>
            <button className="btn ghost" onClick={() => onSave(event.id)}>
              {saved ? "Remove bookmark" : "Bookmark"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
