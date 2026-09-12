# Vacation-rental marketplace architecture

This diagram describes a production-scale target architecture for the vacation-rental marketplace represented by this clone. The current Vite app is the web presentation layer; the services and platform components below are the scale-out path for a real marketplace.

```mermaid
flowchart TB
  traveler[Guest or host browser] --> edge[DNS + CDN + WAF\nTLS, bot protection, rate limits]
  edge --> web[Web app\nVite/React static assets\nSSR shell can be added for SEO]
  web --> api[API gateway / BFF\nAuth, validation, throttling]

  subgraph services[Domain services: stateless and horizontally scalable]
    listing[Listing service\nproperties, photos, amenities]
    search[Search service\navailability and ranking]
    booking[Booking service\nholds, idempotency, pricing]
    payments[Payments service\nprovider webhooks, refunds]
    reviews[Reviews service\nmoderation and ratings]
    messaging[Messaging service\nnotifications and host/guest chat]
  end

  api --> listing
  api --> search
  api --> booking
  api --> payments
  api --> reviews
  api --> messaging

  subgraph data[Data and asynchronous processing]
    postgres[(PostgreSQL\ntransactional source of truth)]
    redis[(Redis\nsessions, rate limits, hot reads, locks)]
    opensearch[(OpenSearch\nlisting and geo search index)]
    objects[(Object storage\noriginals, resized photos, documents)]
    bus[[Event bus / queue\nbooking, search, media, notifications]]
    workers[Workers\nimage processing, indexing, emails, analytics]
  end

  listing --> postgres
  listing --> objects
  listing --> bus
  search --> opensearch
  search --> redis
  booking --> postgres
  booking --> redis
  booking --> bus
  payments --> postgres
  payments --> bus
  reviews --> postgres
  reviews --> bus
  messaging --> postgres
  messaging --> bus
  bus --> workers
  workers --> objects
  workers --> opensearch
  workers --> messaging

  subgraph platform[Delivery and operations]
    repo[GitHub repository]
    ci[CI pipeline\ntypecheck, lint, tests, build]
    deploy[Deployment platform\npreview environments + production]
    observe[Observability\nlogs, metrics, traces, alerts]
    secrets[Secret manager\nkeys, database credentials]
  end

  repo --> ci --> deploy --> edge
  services -. telemetry .-> observe
  workers -. telemetry .-> observe
  deploy -. runtime config .-> secrets

  classDef client fill:#fff4f5,stroke:#ff385c,color:#222
  classDef service fill:#f2f7ff,stroke:#4f76b8,color:#222
  classDef data fill:#f4faf3,stroke:#5b8c5a,color:#222
  classDef platform fill:#fff8e8,stroke:#b27a19,color:#222
  class traveler,edge,web client
  class listing,search,booking,payments,reviews,messaging service
  class postgres,redis,opensearch,objects,bus,workers data
  class repo,ci,deploy,observe,secrets platform
```

## Scaling strategy

- **Frontend:** immutable hashed assets are served from the CDN. The app is stateless, so traffic scales at the edge without adding web-server coordination.
- **Backend:** the API gateway routes to independently scalable stateless domain services. Idempotency keys protect booking and payment retries.
- **Storage:** PostgreSQL owns transactional data such as reservations and payments. Redis handles short-lived coordination and hot reads. Object storage keeps media outside the database.
- **Search:** listing and geo-search reads use OpenSearch, updated asynchronously from domain events. PostgreSQL remains authoritative for availability and booking confirmation.
- **Async work:** an event bus isolates image resizing, indexing, email, notifications, and analytics from user-facing request latency.
- **Deployment:** GitHub changes run through typecheck, lint, tests, and build. Every change can get a preview deployment; production is promoted from a successful build with managed secrets and observability attached.
- **Reliability:** services can scale independently, queues provide back-pressure, Redis locks reduce double-booking races, and database backups plus multi-zone deployment protect the source of truth.

## Current clone boundary

The submitted clone intentionally keeps the listing page static and local: listing content is in `src/data/listing.ts`, images are in `public/images`, and Vite serves the React UI. The production components in the diagram are the integration boundary for turning those local reads into a real marketplace without changing the visual contract of the page.
