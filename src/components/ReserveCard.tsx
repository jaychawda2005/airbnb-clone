import { useState } from "react";
import { listing } from "../data/listing";
import { IconChevronDown } from "./Icons";
import "./ReserveCard.css";

// Per explicit instruction: check-in/checkout and guests are STATIC display
// values, not editable controls. Reserve button is CONFIRMED to show a
// floating "You won't be charged yet" tooltip on click and nothing further
// (no real booking flow) - that's the only wired behavior here.
export default function ReserveCard() {
  const [showToast, setShowToast] = useState(false);
  const r = listing.reserve;

  const handleReserve = () => {
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 2200);
  };

  return (
    <div className="reserve-card">
      <div className="reserve-card__promo">
        <span className="reserve-card__promo-icon" aria-hidden="true">
          🏷️
        </span>
        <div className="reserve-card__promo-text">
          {r.promoText} <u>{r.promoTermsText}</u>
        </div>
        <button className="reserve-card__claim" type="button">
          Claim
        </button>
      </div>

      <div className="reserve-card__box">
        <div className="reserve-card__price-row">
          <span className="reserve-card__price">
            {r.currency}
            {r.totalForStay.toLocaleString("en-IN")}
          </span>{" "}
          for {r.nightsCount} nights
        </div>

        <div className="reserve-card__fields">
          <div className="reserve-card__field">
            <label>CHECK-IN</label>
            <div>{r.checkIn}</div>
          </div>
          <div className="reserve-card__field">
            <label>CHECKOUT</label>
            <div>{r.checkOut}</div>
          </div>
          <div className="reserve-card__field reserve-card__field--full">
            <label>GUESTS</label>
            <div className="reserve-card__guests-row">
              <span>{r.guestsLabel}</span>
              <IconChevronDown size={16} />
            </div>
          </div>
        </div>

        <p className="reserve-card__cancellation">{r.cancellationText}</p>

        <div className="reserve-card__reserve-wrap">
          <button className="reserve-card__reserve-btn" type="button" onClick={handleReserve}>
            Reserve
          </button>
          {showToast && <div className="reserve-card__toast">You won&rsquo;t be charged yet</div>}
        </div>

        <p className="reserve-card__caption">You won&rsquo;t be charged yet</p>
      </div>

      <a className="reserve-card__report" href="#" onClick={(e) => e.preventDefault()}>
        Report this listing
      </a>
    </div>
  );
}
