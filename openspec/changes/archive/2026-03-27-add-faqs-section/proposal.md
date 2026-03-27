# Proposal: Add FAQs Section

## Goal
Add a new, interactive "FAQs" section to the landing page, positioned before the footer. The section will follow the project's branding ($black, $white, $gold) and use an accordion-style interaction to display answers when questions are clicked.

## Scope
- Create a new `Faqs` section component.
- Create a reusable `FaqItem` component for DRY compliance.
- Implement the interactive accordion behavior using React state.
- Integrate the section into `src/App.jsx`.
- Ensure responsive design and alignment with existing branding.

## Relationships
- This change modifies `src/App.jsx` to include the new section.
- It introduces new files in `src/sections/` and `src/components/`.
- It depends on existing styling variables in `src/index.sass`.
