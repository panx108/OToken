# OToken

OToken is a self-hosted AI token gateway for routing model requests, issuing scoped keys, controlling quota, and monitoring usage across multiple upstream providers.

## What It Provides

- Unified API gateway for common AI model protocols
- Token, quota, group, and channel management
- Usage logs, cost visibility, and routing telemetry
- Admin console with a dark futuristic OToken visual system
- Docker-based deployment path for local or server environments

## Local Development

Default frontend:

```bash
cd web/default
bun install
bun run dev
```

Backend:

```bash
go run main.go --port 3000
```

Docker Compose:

```bash
docker compose up -d
```

The default service listens on `http://localhost:3000`.

## Branding

The default interface has been rebranded as `OToken` with custom generated assets:

- `web/default/public/otoken-logo.png`
- `web/default/public/otoken-hero.png`
- `web/classic/public/otoken-logo.png`
- `web/classic/public/otoken-hero.png`

## License And Source

This project is a modified distribution based on [QuantumNous/new-api](https://github.com/QuantumNous/new-api), which is licensed under AGPL-3.0. Keep `LICENSE`, `NOTICE`, and `THIRD-PARTY-LICENSES.md` with distributions and deployments.
