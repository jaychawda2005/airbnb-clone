import { useState } from "react";
import { listing } from "../data/listing";
import { IconChevronLeft, IconChevronRight, IconStar } from "./Icons";
import "./NearbyStays.css";

const VISIBLE = 5;
const TOTAL = listing.nearbyStays.length; // 8, confirmed via recording
const PAGE_COUNT = Math.ceil(TOTAL / VISIBLE); // confirmed exactly 2 pages for 8 items

// CONFIRMED functional (re-verified against a second frame-by-frame pass):
// exactly 2 pages, page 2's window is clamped to show the last 5 items
// (overlapping the tail of page 1) rather than shifting by a full 5, so
// there's never a half-empty row. Cards themselves do not navigate anywhere
// on click (confirmed static).
export default function NearbyStays() {
  const [page, setPage] = useState(0); // 0-indexed internally, displayed as 1/2

  const startIndex = page === 0 ? 0 : TOTAL - VISIBLE;
  const visibleStays = listing.nearbyStays.slice(startIndex, startIndex + VISIBLE);

  return (
    <div className="nearby-stays">
      <div className="nearby-stays__header">
        <h2>More stays nearby</h2>
        <div className="nearby-stays__nav">
          <span className="nearby-stays__page">
            {page + 1} / {PAGE_COUNT}
          </span>
          <button
            type="button"
            aria-label="Previous stays"
            disabled={page === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
          >
            <IconChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next stays"
            disabled={page === PAGE_COUNT - 1}
            onClick={() => setPage((p) => Math.min(PAGE_COUNT - 1, p + 1))}
          >
            <IconChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="nearby-stays__grid">
        {visibleStays.map((s) => (
          <div className="nearby-stays__card" key={s.name} tabIndex={0}>
            <div className="nearby-stays__image">
              <img src={s.image} alt="" />
            </div>
            <div className="nearby-stays__title">{s.name}</div>
            <div className="nearby-stays__meta">
              {listing.reserve.currency}
              {s.price.toLocaleString("en-IN")}
              <span className="nearby-stays__dot">·</span>
              <IconStar size={11} /> {s.rating.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
