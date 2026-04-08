# Design Document: Wedding Transportation Updates

This change focuses on updating user-facing content and minor logic adjustments in the React application.

## System Overview
The application consists of several sections: Hero, Services, FAQs, and Form. 
- `src/api/hotels.js` handles data formatting for the hotel selection dropdown.
- `src/sections/hero.jsx` displays the main welcome message.
- `src/sections/faqs.jsx` manages a list of frequently asked questions.

## Proposed Changes

### 1. Hotel Options (`src/api/hotels.js`)
- The `getHotels` function currently appends a hardcoded "Another Hotel in Playa del Carmen" option.
- **Change:** Comment out the block that adds this "other" option.
- **Rationale:** Minimal code change that keeps the code present if needed in the future, while immediate removal satisfies the request.

### 2. Hero Content (`src/sections/hero.jsx`)
- The `<h1>` inside the `hero-image` div currently says "Complimentary transportation will be provided".
- **Change:** Replace with updated text including specific dates and deadlines.
- **Rationale:** Simple content update to provide guests with necessary timing details.

### 3. FAQ Content (`src/sections/faqs.jsx`)
- **FAQ 1 (Why book with us?):** Completely replace answer and question text.
- **FAQ 2 (What is included?):** Remove the `<li>` for taxes and fees.
- **FAQ 3 (How do I pay?):** Remove the entire FAQ object from the `faqs` array.
- **Rationale:** Aligns documentation with the wedding's official transportation arrangements.

## Design Trade-offs
- **Commenting out code:** While usually discouraged in production, the user specifically requested to comment the "other" hotel option rather than delete it.
- **Hardcoded Strings:** The application currently relies on hardcoded strings for content. While moving to a CMS or i18n file would be more robust, it's outside the scope of this content-only update.

## Validation Plan
- **Manual Verification:** Confirm the dropdown only shows the hotels from the API (minus "other").
- **Visual Check:** Verify the hero text is correctly rendered and fits within the UI.
- **FAQ Audit:** Ensure the FAQ section displays the correct updated questions and that the payment question is gone.
