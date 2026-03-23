# Proposal: Universal Deployment Support

## Why
The current project is configured with a hardcoded Vite `base` path and hardcoded external asset URLs. This prevents the application from being deployed to a main domain, a different subdomain, or a different subpath without manual code changes.

## Goals
- Allow the application to be deployed anywhere (main domain, subdomain, or subpath) without code changes.
- Ensure all assets (images, icons) load correctly regardless of the deployment URL.
- Make external service assets (like Stripe Checkout images) dynamic based on the current environment.

## What Changes
1.  **Vite Configuration**: Update `vite.config.js` to use a relative base path (`./`). This allows the browser to resolve asset paths relative to the current location of `index.html`.
2.  **Dynamic Asset URLs**: Replace hardcoded GitHub-hosted image URLs in API logic with dynamic URLs generated from the current `window.location`.

## Impact
- **Portability**: The same build artifact can be deployed to any environment.
- **Maintenance**: No need to update the codebase when moving the project between hosting environments.
- **Reliability**: Assets will always load from the same domain as the app, reducing cross-origin issues.
