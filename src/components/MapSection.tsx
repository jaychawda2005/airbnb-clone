import { IconPin, IconMinus, IconPlus } from "./Icons";
import { listing } from "../data/listing";
import "./MapSection.css";

// STATIC IMAGE per explicit instruction: no Google Maps / Mapbox, not
// draggable, not zoomable. The reference itself renders an abstract
// stylized graphic (diagonal water shape + grid land pattern), not real map
// tiles, so we reproduce that same abstract graphic rather than substituting
// a real map provider.
export default function MapSection() {
  return (
    <div className="map-section">
      <h2>Where you&rsquo;ll be</h2>
      <p className="map-section__location">Candolim, Goa, India</p>

      <div className="map-section__frame" role="img" aria-label="Approximate location map, stylized">
        <svg viewBox="0 0 800 380" preserveAspectRatio="none" className="map-section__svg">
          <rect width="800" height="380" fill="#eef2ea" />
          <polygon points="0,0 420,0 0,380" fill="#bcd9ea" />
          {Array.from({ length: 16 }).map((_, r) =>
            Array.from({ length: 34 }).map((_, c) => (
              <rect
                key={`${r}-${c}`}
                x={c * 24}
                y={r * 24}
                width={23}
                height={23}
                fill="none"
                stroke="#dbe6d6"
                strokeWidth={1}
              />
            ))
          )}
        </svg>
        <div className="map-section__approx-circle" />
        <div className="map-section__pin">
          <IconPin size={36} />
        </div>

        <div className="map-section__zoom">
          <button type="button" aria-label="Zoom in" disabled>
            <IconPlus size={16} />
          </button>
          <button type="button" aria-label="Zoom out" disabled>
            <IconMinus size={16} />
          </button>
        </div>
      </div>

      <p className="map-section__caption">Exact location will be provided after booking.</p>

      <div className="map-section__neighbourhood">
        <h3>Neighbourhood highlights</h3>
        <p>{listing.neighbourhoodHighlight}</p>
        <button type="button" className="map-section__show-more">
          Show more <span aria-hidden="true">›</span>
        </button>
      </div>
    </div>
  );
}
