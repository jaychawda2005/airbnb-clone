import { IconShare, IconHeart } from "./Icons";
import { listing } from "../data/listing";
import "./ListingTitle.css";

// Share/Save: UNCONFIRMED in the recordings (no click demonstrated). Rendered
// as real, focusable controls with no wired behavior.
export default function ListingTitle() {
  return (
    <div className="listing-title">
      <h1>{listing.title}</h1>
      <div className="listing-title__actions">
        <button className="listing-title__action" type="button">
          <IconShare size={18} />
          Share
        </button>
        <button className="listing-title__action" type="button">
          <IconHeart size={18} />
          Save
        </button>
      </div>
    </div>
  );
}
