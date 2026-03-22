# Project Context

## Purpose
A specialized web application for managing and booking airport transfers, specifically for the "Seema and Rohan Airport Transfers" wedding event. It provides a landing page for Cancun Concierge to facilitate transportation for guests between the airport and various hotels.

## Tech Stack
- **React 18**: Frontend framework (using Vite 4 for building).
- **JavaScript (JSX)**: Primary programming language.
- **Tailwind CSS 3**: Utility-first CSS framework for styling.
- **Sass (SASS/SCSS)**: For advanced styling logic.
- **Vite**: Modern build tool and development server.
- **SweetAlert2**: For interactive and styled alerts and notifications.
- **Prop-Types**: Runtime type checking for React props.

## Project Conventions

### Code Style
- **Functional Components**: Use React functional components with hooks.
- **Prop Validation**: Use `prop-types` for validating props in all reusable components.
- **Class Handling**: (Recommended per global rules) Use `clsx` for managing conditional class strings.
- **Naming**: Use `PascalCase` for React components and `camelCase` for variables, functions, and state.

### Architecture Patterns
- **Directory Structure**:
  - `src/api`: Dedicated modules for interacting with external services and backend endpoints.
  - `src/components`: Small, reusable UI components (e.g., input fields, select boxes, buttons).
  - `src/context`: React Context providers for global state management (e.g., VIP codes, loading states).
  - `src/sections`: Larger, page-level components that compose the landing page structure.
- **Global State**: Managed via Context API providers (`VipCodeContextProvider`, `LoadContextProvider`).

### Testing Strategy
Currently focuses on manual functional testing of the booking flow, including API integration and Stripe redirection.

### Git Workflow
- **Conventional Commits**: Follow the Conventional Commits format for all commit messages (e.g., `feat:`, `fix:`, `docs:`, `chore:`).
- **Deployment**: Integrated with GitHub Actions for automated deployment (configured in `.github/workflows/deploy.yml`).

## Domain Context
The application is designed for travel and hospitality coordination. It handles sensitive arrival and departure information for wedding guests and integrates with a transportation logistics backend.

## Important Constraints
- **Universal Portability**: The app must be deployable to main domains, subdomains, or subpaths (e.g., `/seema-and-rohan-airport-transfers/`) without code changes. This is achieved by using relative `base` paths in Vite configuration.
- **Responsive Design**: Must provide a seamless experience across mobile, tablet, and desktop devices.

## External Dependencies
- **Cancun Concierge API**: Backend for validating VIP codes, retrieving hotel lists, and fetching transport types.
- **Stripe**: Payment processing integration via a backend endpoint for handling transportation bookings.
