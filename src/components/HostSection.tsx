import { listing } from "../data/listing";
import "./HostSection.css";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function HostSection() {
  const h = listing.host;
  return (
    <div className="host-section">
      <h2>Meet your host</h2>
      <div className="host-section__layout">
        <div className="host-section__card">
          <div className="host-section__avatar">
            {initials(h.name)}
            {h.verified && <span className="host-section__badge">✓</span>}
          </div>
          <strong>{h.name}</strong>
          <span className="host-section__role">Host</span>
          <div className="host-section__stats">
            <div>
              <strong>{h.reviews.toLocaleString("en-IN")}</strong>
              <span>Reviews</span>
            </div>
            <div>
              <strong>{h.rating.toFixed(2)} ★</strong>
              <span>Rating</span>
            </div>
            <div>
              <strong>{h.yearsHosting}</strong>
              <span>Years hosting</span>
            </div>
          </div>
        </div>

        <div className="host-section__cohosts">
          <h3>Co-Hosts</h3>
          <div className="host-section__cohost-grid">
            {h.coHosts.map((name) => (
              <div className="host-section__cohost" key={name}>
                <div className="host-section__cohost-avatar">{initials(name)}</div>
                <span>{name}</span>
              </div>
            ))}
          </div>

          <h3 className="host-section__details-title">Host details</h3>
          <p>Response rate: {h.responseRate}</p>
          <p>Responds {h.responseTime}</p>

          <button className="host-section__message-btn" type="button">
            Message host
          </button>
        </div>
      </div>
    </div>
  );
}
