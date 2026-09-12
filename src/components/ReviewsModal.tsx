import ModalOverlay from "./ModalOverlay";
import { IconClose, IconStar } from "./Icons";
import { listing } from "../data/listing";
import "./ReviewsModal.css";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function ReviewsModal({ onClose }: { onClose: () => void }) {
  return (
    <ModalOverlay onClose={onClose} labelledBy="reviews-modal-title" wide>
      <div className="reviews-modal__header">
        <button className="reviews-modal__close" onClick={onClose} aria-label="Close">
          <IconClose size={18} />
        </button>
        <h2 id="reviews-modal-title">
          <IconStar size={16} /> {listing.rating.toFixed(2)} · {listing.reviewCount} reviews
        </h2>
      </div>
      <div className="reviews-modal__body">
        {listing.reviews.map((r) => (
          <div className="reviews-modal__card" key={r.name}>
            <div className="reviews-modal__card-head">
              <div className="reviews-modal__avatar">{initials(r.name)}</div>
              <div>
                <strong>{r.name}</strong>
                <div className="reviews-modal__meta">{r.meta}</div>
              </div>
            </div>
            <p>{r.text}</p>
          </div>
        ))}
      </div>
    </ModalOverlay>
  );
}
