import { useState } from "react";
import { listing } from "../data/listing";
import {
  IconKitchen,
  IconWifi,
  IconWorkspace,
  IconParking,
  IconPool,
  IconHotTub,
  IconPets,
  IconCamera,
  IconCarbonMonoxide,
  IconSmokeAlarm,
} from "./Icons";
import AmenitiesModal from "./AmenitiesModal";
import "./Amenities.css";

const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  kitchen: IconKitchen,
  wifi: IconWifi,
  workspace: IconWorkspace,
  parking: IconParking,
  pool: IconPool,
  hottub: IconHotTub,
  pets: IconPets,
  camera: IconCamera,
  co: IconCarbonMonoxide,
  smoke: IconSmokeAlarm,
};

// CONFIRMED functional: "Show all N amenities" opens a categorized modal.
// CONFIRMED visual detail: two safety items (carbon monoxide alarm, smoke
// alarm) are shown as explicitly NOT present, with strikethrough text and a
// slashed icon, rather than being omitted from the list entirely.
export default function Amenities() {
  const [open, setOpen] = useState(false);

  return (
    <div className="amenities" id="amenities">
      <h2>What this place offers</h2>
      <div className="amenities__grid">
        {listing.amenitiesPreview.map((a) => {
          const Icon = ICONS[a.icon];
          return (
            <div className={`amenities__item${a.available === false ? " amenities__item--unavailable" : ""}`} key={a.label}>
              <span className="amenities__icon-wrap">
                <Icon size={26} />
                {a.available === false && <span className="amenities__slash" aria-hidden="true" />}
              </span>
              <span>{a.label}</span>
            </div>
          );
        })}
      </div>
      <button className="amenities__show-all" type="button" onClick={() => setOpen(true)}>
        Show all {listing.amenitiesTotal} amenities
      </button>

      {open && <AmenitiesModal onClose={() => setOpen(false)} />}
    </div>
  );
}
