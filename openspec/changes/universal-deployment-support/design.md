# Design: Universal Deployment Support

## Architectural Context
The application is a Single Page Application (SPA) currently using hash-based or simple query parameter routing (e.g., `?thanks=...`). It does not use client-side router libraries (like `react-router-dom`) with nested paths, which simplifies asset resolution.

## Decisions

### 1. Relative `base` Path (`./`)
Vite's default is `/`, which works on a main domain. Setting it to a specific subpath works only for that subpath. Setting it to `./` makes all asset URLs relative.
- **Trade-off**: This only works because we don't have deep client-side routes (like `/user/profile/settings`). In such cases, relative assets would fail. For our current "landing page + form" structure, it's the most portable option.

### 2. Dynamic Asset URLs in Logic
External services like Stripe Checkout require a full URL for the image.
- **Old Strategy**: Hardcode the GitHub raw URL. This is brittle.
- **New Strategy**: Use `new URL('./path/to/img', window.location.href).href`. This constructs a full URL at runtime based on where the app is actually running.

## Alternatives Considered
- **Environment Variables**: Use `VITE_BASE_URL` for different builds. This requires separate builds for each environment, which contradicts the goal of universal portability.
- **Absolute URLs**: Prefix all assets with a global variable. This adds complexity to every image reference in JSX.
