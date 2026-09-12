---
name: marketplace-architecture
description: Explain and review production-scale architecture for a vacation-rental marketplace without overbuilding the static clone.
---

# Marketplace architecture skill

Use this skill when documenting the production path for the clone or evaluating a proposed backend integration.

## Principles

- Keep the current Vite/React page focused on presentation and static reference parity.
- Put transactional truth in PostgreSQL; never treat search indexes or caches as booking authority.
- Keep API services stateless and scale them horizontally behind an API gateway.
- Use object storage plus a CDN for listing media; process and resize images asynchronously.
- Update search indexes from domain events and re-check availability transactionally during booking.
- Use idempotency keys for booking, payment, and webhook operations.
- Separate synchronous user flows from queues for indexing, notifications, analytics, and media processing.
- Make CI run typecheck, lint, tests, and production build before preview or production deployment.
- Attach secrets management, logs, metrics, traces, alerts, backups, and multi-zone failure planning to the deployment design.

## Expected output

When documenting or reviewing architecture, include:

1. A high-level diagram showing frontend, edge, gateway, domain services, storage, search, events, and delivery.
2. A short scaling rationale for each layer.
3. A clear boundary between the current static clone and production integrations.
4. Risks and follow-up decisions without implementing speculative infrastructure in the frontend repository.
