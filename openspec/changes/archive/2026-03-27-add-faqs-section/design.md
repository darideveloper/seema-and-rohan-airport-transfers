# Design: FAQs Section

## Overview
The FAQs section will be implemented as a React functional component. It will contain a list of FAQ items, each represented by a card-like component that expands to show the answer when the question is clicked.

## Component Structure
- `Faqs` (src/sections/faqs.jsx): Main section container, responsible for rendering the title (using `Subtitle` component) and the list of FAQ items.
- `FaqItem` (src/components/faq-item.jsx): Individual FAQ item, handles its own open/closed state for the accordion effect.

## Interactions
- **Click to Expand/Collapse**: Clicking a question card will toggle the visibility of the answer.
- **Visual Feedback**: The SVG arrow (from the HTML provided) will rotate or change state to indicate expansion.

## Styling
- **Branding**: Use `$black`, `$white`, and `$gold` for colors.
- **Typography**: Follow `Cormorant Garamond` for headings and text.
- **Layout**: Use Tailwind CSS for a responsive grid or list layout.
- **Accessibility**: Ensure cards are accessible via keyboard and have appropriate ARIA attributes.

## Data Structure
The FAQs data will be stored as an array of objects within `src/sections/faqs.jsx` (or a separate data file if it grows too large).
```javascript
const faqs = [
  {
    question: "WHY SHOULD I BOOK WITH CANCUN CONCIERGE?",
    answer: "..." // Can be a string or a React node (e.g., if it contains a list)
  },
  // ...
]
```
