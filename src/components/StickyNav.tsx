import { useEffect, useState } from "react";
import { listing } from "../data/listing";
import "./StickyNav.css";

const SECTIONS = [
  { id: "photos", label: "Photos" },
  { id: "amenities", label: "Amenities" },
  { id: "reviews", label: "Reviews" },
  { id: "location", label: "Location" },
];

// CONFIRMED: appears on scroll, with scrollspy active-tab underline that
// updates to match whichever section is currently in view.
export default function StickyNav({ visible }: { visible: boolean }) {
  const [active, setActive] = useState("photos");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={`sticky-nav${visible ? " sticky-nav--visible" : ""}`}>
      <div className="sticky-nav__inner">
        <nav className="sticky-nav__tabs">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              className={`sticky-nav__tab${active === s.id ? " sticky-nav__tab--active" : ""}`}
              onClick={() => scrollTo(s.id)}
              type="button"
            >
              {s.label}
            </button>
          ))}
        </nav>
        <div className="sticky-nav__summary">
          <span>
            {listing.reserve.currency}
            {listing.reserve.totalForStay.toLocaleString("en-IN")} for {listing.reserve.nightsCount} nights
          </span>
          <span className="sticky-nav__rating">★ {listing.rating.toFixed(2)} · {listing.reviewCount} reviews</span>
          <button className="sticky-nav__reserve" type="button">
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}
