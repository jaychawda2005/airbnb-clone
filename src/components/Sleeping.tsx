import { listing } from "../data/listing";
import "./Sleeping.css";

export default function Sleeping() {
  return (
    <div className="sleeping">
      <h2>Where you&rsquo;ll sleep</h2>
      <div className="sleeping__cards">
        {listing.sleepingArrangements.map((s) => (
          <div className="sleeping__card" key={s.room}>
            <div className="sleeping__image">
              <img src={s.image} alt={s.room} />
            </div>
            <strong>{s.room}</strong>
            <span>{s.detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
