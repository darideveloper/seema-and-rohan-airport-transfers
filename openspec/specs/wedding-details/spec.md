# wedding-details Specification

## Purpose
TBD - created by archiving change wedding-transportation-updates. Update Purpose after archive.
## Requirements
### Requirement: Simplified Hotel Selection
The hotel selection dropdown MUST NOT include an "other" hotel option.

#### Scenario: No "Other" Hotel Option
- **Given** a guest is on the transportation form
- **When** the guest opens the hotel dropdown
- **Then** the "Another Hotel in Playa del Carmen" (or "Other") option MUST NOT be visible

### Requirement: Wedding Hero Messaging
The hero section MUST display specific transportation dates and submission deadlines.

#### Scenario: Updated Hero Text
- **Given** a guest lands on the transportation portal
- **When** the hero section is visible
- **Then** the text must be: "Complimentary transportation will be provided between May 20th and May 26th. Kindly submit your flight details by May 15th to ensure seamless coordination."

