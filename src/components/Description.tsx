import { useState } from "react";
import { listing } from "../data/listing";
import "./Description.css";

// Description "Show more"/"Show less": reported functional by the client,
// not independently observed being clicked in the footage. Implemented as a
// simple truncation toggle since it's low-risk and consistent with the
// reported behavior, not an invented feature.
export default function Description() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="description">
      <p className="description__translation">
        Some info has been automatically translated. <button type="button">Show original</button>
      </p>

      <div className={`description__text${expanded ? "" : " description__text--clamped"}`}>
        {(expanded ? listing.description.full : listing.description.short)
          .split("\n\n")
          .map((para, i) => (
            <p key={i}>{para}</p>
          ))}
      </div>

      <button className="description__toggle" type="button" onClick={() => setExpanded((v) => !v)}>
        {expanded ? "Show less" : "Show more"} <span aria-hidden="true">›</span>
      </button>
    </div>
  );
}
