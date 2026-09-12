import { listing } from "../data/listing";
import { IconLaurelBranch, IconUmbrella, IconFan, IconDoor } from "./Icons";
import "./ListingMeta.css";

const HIGHLIGHT_ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  umbrella: IconUmbrella,
  fan: IconFan,
  door: IconDoor,
};

export default function ListingMeta() {
  return (
    <div className="listing-meta">
      <p className="listing-meta__summary">{listing.guestsSummary}</p>

      <div className="listing-meta__favourite">
        <div className="listing-meta__favourite-badge">
          <IconLaurelBranch size={20} />
          <span>
            Guest
            <br />
            favourite
          </span>
          <IconLaurelBranch size={20} flip />
        </div>
        <span className="listing-meta__favourite-sub">One of the most loved homes on Airbnb, according to guests</span>
        <div className="listing-meta__divider" />
        <div className="listing-meta__rating-value">
          <div>{listing.rating.toFixed(2)}</div>
          <div className="listing-meta__stars" aria-hidden="true">
            {"★★★★★"}
          </div>
        </div>
        <div className="listing-meta__divider" />
        <div className="listing-meta__reviews">
          {listing.reviewCount}
          <br />
          Reviews
        </div>
      </div>

      <div className="listing-meta__host">
        <div className="listing-meta__host-avatar" aria-hidden="true">
          MH
        </div>
        <div>
          <strong>Hosted by {listing.host.name}</strong>
          <div className="listing-meta__host-sub">{listing.host.yearsHosting} years hosting</div>
        </div>
      </div>

      <div className="listing-meta__highlights">
        {listing.highlights.map((h) => {
          const Icon = HIGHLIGHT_ICONS[h.icon];
          return (
            <div className="listing-meta__highlight" key={h.title}>
              <Icon size={26} />
              <div>
                <strong>{h.title}</strong>
                <p>{h.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
