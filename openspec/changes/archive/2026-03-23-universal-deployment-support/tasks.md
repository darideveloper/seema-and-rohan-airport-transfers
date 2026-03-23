# Tasks: Universal Deployment Support

## Configuration
- [x] Update `vite.config.js` to set `base: './'`.
- [x] Verify local development server still resolves assets correctly.

## API & Logic
- [x] Refactor `src/api/stripe.js` to generate `serviceImage` dynamically using `new URL('./imgs/logo.png', window.location.href).href`.
- [x] Confirm no other hardcoded URLs exist in the `src/api/` folder.

## Validation
- [x] Run a production build (`npm run build`).
- [x] Inspect the generated `dist/index.html` to ensure asset paths are relative (e.g., `./assets/...`).
- [x] Manually test the booking flow and verify the Stripe redirection receives the correct dynamic image URL.
