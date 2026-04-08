# Proposal: Wedding Transportation Updates (2026-04-08)

Update the airport transfer application to reflect new wedding-specific transportation details for Seema & Rohan's wedding. This includes simplifying hotel options, updating hero messaging, and refining the FAQ content to align with the complimentary nature of the service.

## Goals
- Simplify hotel selection to focus on the primary wedding hotel (Edition).
- Update hero messaging with specific dates and deadlines.
- Refine FAQ content for accuracy and relevance to the official wedding plan.

## Proposed Changes

### Hotel Selection
- Comment out the "Another Hotel in Playa del Carmen" (Other) option in `src/api/hotels.js`.
- Do not add explicit API response filtering (as per user instruction).

### Hero Section
- Update the text over the hero photo in `src/sections/hero.jsx` to: “Complimentary transportation will be provided between May 20th and May 26th. Kindly submit your flight details by May 15th to ensure seamless coordination.”

### FAQ Section
- Update "WHY SHOULD I BOOK WITH CANCUN CONCIERGE?" with new wording emphasizing its status as the official transportation provider.
- Remove the point "A single rate inclusive of all taxes and fees" from "WHAT IS INCLUDED...".
- Completely remove the FAQ "HOW DO I PAY FOR MY TRANSPORTATION?".

## Impact
- **User Experience:** Clearer information for wedding guests regarding dates and the official transportation provider.
- **Architecture:** Minimal impact; purely content and configuration changes.
- **Data Flow:** No changes to data flow, although the hardcoded "other" hotel option is disabled.
