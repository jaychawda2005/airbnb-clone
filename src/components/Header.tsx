import { IconHouse, IconSearch, IconGlobe, IconMenu } from "./Icons";
import "./Header.css";

// STATIC: none of the header controls were observed performing an action in
// either recording. Rendered as real buttons/links (for accessibility) but
// without any wired behavior, per instruction not to invent functionality
// that wasn't observed.
export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__logo" href="#" aria-label="Airbnb home" onClick={(e) => e.preventDefault()}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path
              d="M16 2c1 0 1.8.5 2.4 1.5.6 1 6.8 11.4 8.7 15.5 1 2.2 1.5 3.9 1.5 5.3 0 4-3.1 7.2-7 7.2-2.2 0-4.3-1-5.6-2.7-1.3 1.7-3.4 2.7-5.6 2.7-3.9 0-7-3.2-7-7.2 0-1.4.5-3.1 1.5-5.3C6.8 14.9 13 4.5 13.6 3.5 14.2 2.5 15 2 16 2z"
              fill="#FF385C"
            />
          </svg>
          <span>airbnb</span>
        </a>

        <button className="site-header__search" type="button" aria-label="Start your search">
          <span className="site-header__search-item site-header__search-item--icon">
            <IconHouse size={18} />
            Anywhere
          </span>
          <span className="site-header__divider" />
          <span className="site-header__search-item">Anytime</span>
          <span className="site-header__divider" />
          <span className="site-header__search-item site-header__search-item--muted">Add guests</span>
          <span className="site-header__search-btn">
            <IconSearch size={16} />
          </span>
        </button>

        <div className="site-header__right">
          <a className="site-header__host-link" href="#" onClick={(e) => e.preventDefault()}>
            Become a host
          </a>
          <button className="icon-btn" aria-label="Choose a language">
            <IconGlobe size={18} />
          </button>
          <button className="icon-btn icon-btn--menu" aria-label="Main menu">
            <IconMenu size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
