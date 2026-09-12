import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IconGrid, IconClose, IconShare, IconHeart, IconChevronLeft, IconChevronRight } from "./Icons";
import { allPhotosFlat } from "../data/listing";
import "./Lightbox.css";

// CONFIRMED behavior:
// - Opens at the specific photo that was clicked (not always #1).
// - Left/right arrow buttons navigate prev/next; counter shows "X of 43".
// - Grid icon returns to the Photo Tour scrollable view (confirmed twice
//   in the recording, at two different points).
// - X: never actually clicked in either recording. We close the overlay
//   entirely back to the listing page here, since some concrete behavior is
//   required for the page to function and "exit the gallery entirely" is
//   the universal convention for a close (X) control distinct from a grid
//   (thumbnails) control - see NOTES.md for this explicitly flagged assumption.
// - Explicit assignment requirement: keyboard Left/Right arrow navigation.
export default function Lightbox({
  index,
  onIndexChange,
  onBackToTour,
  onClose,
}: {
  index: number;
  onIndexChange: (i: number) => void;
  onBackToTour: () => void;
  onClose: () => void;
}) {
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const total = allPhotosFlat.length;
  const current = allPhotosFlat[index];

  const goNext = () => {
    if (index >= total - 1) return;
    setDirection("next");
    onIndexChange(index + 1);
  };
  const goPrev = () => {
    if (index <= 0) return;
    setDirection("prev");
    onIndexChange(index - 1);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") onBackToTour();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return createPortal(
    <div className="lightbox">
      <header className="lightbox__topbar">
        <button className="lightbox__icon-btn" onClick={onBackToTour} aria-label="Back to photo tour">
          <IconGrid size={18} />
        </button>
        <div className="lightbox__title-block">
          <h1>{current.sectionTitle}</h1>
        </div>
        <div className="lightbox__topbar-actions">
          <span className="lightbox__counter">
            {index + 1} of {total}
          </span>
          <button className="lightbox__icon-btn" aria-label="Share">
            <IconShare size={16} />
          </button>
          <button className="lightbox__icon-btn" aria-label="Save">
            <IconHeart size={16} />
          </button>
          <button className="lightbox__icon-btn" onClick={onClose} aria-label="Close">
            <IconClose size={20} />
          </button>
        </div>
      </header>

      <div className="lightbox__stage">
        <button
          className="lightbox__nav lightbox__nav--prev"
          onClick={goPrev}
          disabled={index <= 0}
          aria-label="Previous photo"
        >
          <IconChevronLeft size={20} />
        </button>

        <div className="lightbox__image-wrap">
          <img key={index} src={current.src} alt="" className={`lightbox__image lightbox__image--${direction}`} />
        </div>

        <button
          className="lightbox__nav lightbox__nav--next"
          onClick={goNext}
          disabled={index >= total - 1}
          aria-label="Next photo"
        >
          <IconChevronRight size={20} />
        </button>
      </div>
    </div>,
    document.body
  );
}
