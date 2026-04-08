# Tasks: Wedding Transportation Updates

Ordered list of tasks to implement and verify the wedding transportation updates.

## Phase 1: Preparation
- [x] Verify existing code state (already done)
- [x] Establish manual test baseline (run local dev if possible)

## Phase 2: Implementation

### Hotel List
- [x] Comment out the "Another Hotel in Playa del Carmen" option in `src/api/hotels.js`.

### Hero Section
- [x] Update hero text in `src/sections/hero.jsx` with the new messaging including dates and deadlines.

### FAQ Updates
- [x] Update the first FAQ item in `src/sections/faqs.jsx` ("WHY SHOULD I BOOK...").
- [x] Remove the taxes/fees bullet from the second FAQ item in `src/sections/faqs.jsx` ("WHAT IS INCLUDED...").
- [x] Remove the entire fourth FAQ item from `src/sections/faqs.jsx` ("HOW DO I PAY...").

## Phase 3: Validation
- [x] Verify that the "Another Hotel" option is no longer visible in the hotel dropdown.
- [x] Confirm the hero section displays the updated 3nd message with correct dates.
- [x] Perform a full audit of the FAQ section to ensure all requested removals and updates are applied.
- [x] Verify that the application builds correctly without linting errors.
