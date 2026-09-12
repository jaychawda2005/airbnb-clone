import { IconCalendarBlocked, IconSearchDoc, IconShield } from "./Icons";
import { listing } from "../data/listing";
import "./ThingsToKnow.css";

export default function ThingsToKnow() {
  const t = listing.thingsToKnow;
  return (
    <div className="things-to-know">
      <h2>Things to know</h2>
      <div className="things-to-know__grid">
        <div className="things-to-know__col">
          <IconCalendarBlocked size={26} />
          <h3>Cancellation policy</h3>
          {t.cancellation.lines.map((l) => (
            <p key={l}>{l}</p>
          ))}
          <button type="button">Learn more</button>
        </div>
        <div className="things-to-know__col">
          <IconSearchDoc size={26} />
          <h3>House rules</h3>
          {t.houseRules.lines.map((l) => (
            <p key={l}>{l}</p>
          ))}
          <button type="button">Learn more</button>
        </div>
        <div className="things-to-know__col">
          <IconShield size={26} />
          <h3>Safety &amp; property</h3>
          {t.safety.lines.map((l) => (
            <p key={l}>{l}</p>
          ))}
          <button type="button">Learn more</button>
        </div>
      </div>
    </div>
  );
}
