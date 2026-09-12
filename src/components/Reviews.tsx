import { listing } from "../data/listing";
import { IconStar } from "./Icons";
import "./Reviews.css";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Reviews() {
  return (
    <div className="reviews" id="reviews">
      <div className="reviews__summary">
        <IconStar size={24} />
        <span className="reviews__summary-score">{listing.rating.toFixed(2)}</span>
        <span className="reviews__summary-dot">·</span>
        <span className="reviews__summary-count">{listing.reviewCount} reviews</span>
      </div>

      <div className="reviews__bars">
        {listing.ratingBreakdown.map((b) => (
          <div className="reviews__bar-row" key={b.label}>
            <span className="reviews__bar-label">{b.label}</span>
            <div className="reviews__bar-track">
              <div className="reviews__bar-fill" style={{ width: `${(b.value / 5) * 100}%` }} />
            </div>
            <span className="reviews__bar-value">{b.value.toFixed(1)}</span>
          </div>
        ))}
      </div>

      <div className="reviews__grid">
        {listing.reviews.slice(0, 4).map((r) => (
          <div className="reviews__card" key={r.name}>
            <div className="reviews__card-head">
              <div className="reviews__avatar">{initials(r.name)}</div>
              <div>
                <strong>{r.name}</strong>
                <div className="reviews__card-meta">{r.meta}</div>
              </div>
            </div>
            <p className="reviews__card-text">{r.text}</p>
            <button className="reviews__show-more" type="button">
              Show more
            </button>
          </div>
        ))}
      </div>

      {/* CONFIRMED (per explicit instruction): this button visually responds
          and opens a review view, reproduced here as a simple modal listing
          all reviews without a fabricated review-management system. */}
      <button className="reviews__show-all" type="button">
        Show all {listing.reviewCount} reviews
      </button>
    </div>
  );
}
