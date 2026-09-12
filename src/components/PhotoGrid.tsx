import { IconGrid } from "./Icons";
import { heroPhotoRefs, flatIndexForSectionPosition } from "../data/listing";
import "./PhotoGrid.css";

const HERO_IMAGES = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
  "/images/hero-4.jpg",
  "/images/hero-5.jpg",
];

// CONFIRMED: clicking "Show all photos" opens the Photo Tour at the top.
// CONFIRMED: clicking any individual hero photo opens the tour/lightbox at
// that photo's position, not always photo #1.
export default function PhotoGrid({
  onOpenTour,
  onOpenLightbox,
}: {
  onOpenTour: () => void;
  onOpenLightbox: (photoIndex: number) => void;
}) {
  const heroIndexInFlat = heroPhotoRefs.map((ref) =>
    flatIndexForSectionPosition(ref.sectionId, ref.position)
  );

  return (
    <div className="photo-grid">
      <button
        className="photo-grid__tile photo-grid__tile--main"
        onClick={() => onOpenLightbox(heroIndexInFlat[0])}
        aria-label="Open photo 1 in gallery"
      >
        <img src={HERO_IMAGES[0]} alt="Living area" />
      </button>
      <div className="photo-grid__side">
        {HERO_IMAGES.slice(1).map((src, i) => (
          <button
            key={src}
            className="photo-grid__tile"
            onClick={() => onOpenLightbox(heroIndexInFlat[i + 1])}
            aria-label={`Open photo ${i + 2} in gallery`}
          >
            <img src={src} alt="" />
            {i === 3 && (
              <span
                className="photo-grid__show-all"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenTour();
                }}
              >
                <IconGrid size={16} />
                Show all photos
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
