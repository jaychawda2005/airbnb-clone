# Build status (partial delivery)

This is the in-progress code for the Airbnb listing-page clone. Packaged on request
before the full deliverable set was finished.

## Done
- Vite + React + TypeScript app, all sections of the listing page built:
  Header, hero Photo Grid, Title/Share/Save, guest-favourite meta, Description,
  Sleeping arrangements, Amenities grid + confirmed-functional "Show all
  amenities" modal, Reserve card (static dates/guests, functional Reserve
  tooltip), static two-month Calendar, Reviews + rating bars + "Show all
  reviews" modal, static abstract Map, Host section, Things to Know, Nearby
  Stays carousel (confirmed functional pagination), sticky secondary nav with
  scrollspy.
- Photo Tour (full-page overlay) and Lightbox (single-photo viewer), both
  driven by URL query params (?modal=PHOTO_TOUR_SCROLLABLE&modalItem=...),
  matching the exact pattern observed in the reference's browser chrome.
  Click-to-exact-index opening, prev/next arrows, keyboard Left/Right
  navigation, grid-icon return to tour, X close.
- All images are real photos extracted directly from the two reference
  recordings you provided (hero grid, Photo Tour sections, nearby-stay
  thumbnails) - not stock placeholders.
- Amenities modal and Reviews modal both verified: open, internal scroll,
  X-close, Escape-close with focus returned to the trigger element.
- Visual QA pass against reference stills found and fixed 9 real bugs:
  element ordering, a sticky-nav layout bug, pagination math, a duplicate-
  image index bug, wrong total photo count, a systematic image-cropping
  bleed bug affecting 4 hero images, a 3-iteration lightbox sizing fix, a
  page-width bug (max-width + padding double-counted under border-box,
  leaving the whole page narrower than the reference), and a full rebuild of
  the "Guest favourite" badge (was a single messy icon; reference actually
  uses two mirrored laurel branches flanking the text inside a bordered
  horizontal card with rating/reviews alongside it).
- A further content-accuracy pass against additional native-resolution
  reference frames caught: the real description text (exact wording +
  emojis, previously I'd written generic placeholder copy), the confirmed
  text-fade-to-white truncation style on the collapsed description (not a
  hard cutoff), "1 double bed" not "1 queen bed" in Where You'll Sleep, and
  two amenities (Carbon monoxide alarm, Smoke alarm) that the reference shows
  as explicitly NOT present via strikethrough text + a slashed icon - I'd
  originally omitted this distinction entirely.

## Not done (explicitly out of scope per your instruction)
- PROMPTS.md, production-scale architecture diagram, sub-agent/skill config
  files, NOTES.md - you said you don't need these.

## Run it
```
npm install
npm run dev
```
