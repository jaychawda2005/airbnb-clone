import ModalOverlay from "./ModalOverlay";
import { IconClose } from "./Icons";
import { listing } from "../data/listing";
import "./AmenitiesModal.css";

export default function AmenitiesModal({ onClose }: { onClose: () => void }) {
  return (
    <ModalOverlay onClose={onClose} labelledBy="amenities-modal-title" wide>
      <div className="amenities-modal__header">
        <button className="amenities-modal__close" onClick={onClose} aria-label="Close">
          <IconClose size={18} />
        </button>
        <h2 id="amenities-modal-title">What this place offers</h2>
      </div>
      <div className="amenities-modal__body">
        {listing.amenityCategories.map((cat) => (
          <div className="amenities-modal__category" key={cat.category}>
            <h3>{cat.category}</h3>
            <ul>
              {cat.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ModalOverlay>
  );
}
