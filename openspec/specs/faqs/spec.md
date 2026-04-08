# faqs Specification

## Purpose
TBD - created by archiving change add-faqs-section. Update Purpose after archive.
## Requirements
### Requirement: Interactive FAQs
The FAQs section MUST allow guests to view answers by clicking on a specific question.

#### Scenario: Expanding an FAQ Item
- **Given** the FAQs section is visible
- **When** a guest clicks on an FAQ question card
- **Then** the answer for that question must be displayed
- **And** any other open FAQ items should remain as they are (unless specified otherwise)
- **And** the question card must show visual feedback that it is expanded (e.g., arrow rotation)

### Requirement: Branded Styling
The FAQs section MUST match the project's visual identity using the established color palette and typography.

#### Scenario: Visual Consistency
- **Given** the `index.sass` defines `$black`, `$white`, and `$gold`
- **Then** the FAQs section must use these colors for backgrounds, borders, and text
- **And** it must use the `Cormorant Garamond` font for all text

### Requirement: Data Integrity
The FAQs section MUST display the specific information provided in the HTML source.

#### Scenario: FAQ Content Update
- **Given** the content for FAQ items is:
    1. WHY SHOULD I BOOK WITH CANCUN CONCIERGE? Cancun Concierge DMC has been selected as the official transportation provider for Seema & Rohan’s wedding to ensure safety, coordination, and a seamless experience for all guests. Booking with us guarantees reliable service, personalized airport assistance, and full alignment with the wedding’s transportation plan.
    2. WHAT IS INCLUDED WITH CANCUN CONCIERGE'S TRANSPORTATION SERVICE? (Removing the point: A single rate inclusive of all taxes and fees)
    3. HOW DO I FIND CANCUN CONCIERGE ONCE I'M READY TO LEAVE THE AIRPORT? ...
    4. WHAT DO I NEED TO DO IF MY FLIGHT IS DELAYED OR CANCELLED? ...
- **Then** the FAQ section must render each of these items accurately
- **And** the "HOW DO I PAY FOR MY TRANSPORTATION?" item MUST NOT be present

