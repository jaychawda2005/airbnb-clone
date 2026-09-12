import { useEffect } from "react";
import { createPortal } from "react-dom";
import { IconClose, IconShare, IconHeart, IconChevronLeft } from "./Icons";
import { listing, photoTourSections, allPhotosFlat } from "../data/listing";
import "./PhotoTour.css";

// CONFIRMED behavior:
// - Vertically scrolling full-page view, sections in the observed order.
// - Sticky thumbnail strip of all sections.
// - Clicking any photo opens the Lightbox at that exact photo (not always #1).
// - Layout pattern: one large photo + two smaller photos, repeating per section.
export default function PhotoTour({
  onClose,
  onOpenLightbox,
}: {
  onClose: () => void;
  onOpenLightbox: (flatIndex: number) => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const scrollToSection = (id: string) => {
    document.getElementById(`tour-section-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return createPortal(
    <div className="photo-tour">
      <header className="photo-tour__topbar">
        <button className="photo-tour__icon-btn" onClick={onClose} aria-label="Back">
          <IconChevronLeft size={18} />
        </button>
        <h1>Photo tour</h1>
        <div className="photo-tour__topbar-actions">
          <button className="photo-tour__icon-btn" aria-label="Share">
            <IconShare size={16} /> Share
          </button>
          <button className="photo-tour__icon-btn" aria-label="Save">
            <IconHeart size={16} /> Save
          </button>
          <button className="photo-tour__icon-btn photo-tour__close" onClick={onClose} aria-label="Close photo tour">
            <IconClose size={20} />
          </button>
        </div>
      </header>

      <div className="photo-tour__thumbstrip">
        {photoTourSections.map((s) => (
          <button key={s.id} className="photo-tour__thumb" onClick={() => scrollToSection(s.id)}>
            <img src={s.images[0]} alt="" />
            <span>{s.title}</span>
          </button>
        ))}
      </div>

      <div className="photo-tour__body">
        {photoTourSections.map((section) => {
          const sectionStartIndex = allPhotosFlat.findIndex(
            (p) => p.sectionId === section.id
          );
          return (
            <section id={`tour-section-${section.id}`} className="photo-tour__section" key={section.id}>
              <div className="photo-tour__section-info">
                <h2>{section.title}</h2>
                {section.caption && <p>{section.caption}</p>}
              </div>
              <div className="photo-tour__section-photos">
                {section.images.map((src, i) => (
                  <button
                    key={i}
                    className={`photo-tour__photo${i === 0 ? " photo-tour__photo--large" : ""}`}
                    onClick={() => onOpenLightbox(sectionStartIndex + i)}
                  >
                    <img src={src} alt={`${section.title} ${i + 1}`} />
                  </button>
                ))}
              </div>
            </section>
          );
        })}
      </div>
      <p className="photo-tour__count-note">{listing.title} · {allPhotosFlat.length} photos</p>
    </div>,
    document.body
  );
}
