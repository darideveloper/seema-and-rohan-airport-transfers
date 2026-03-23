# config Specification

## Purpose
TBD - created by archiving change universal-deployment-support. Update Purpose after archive.
## Requirements
### Requirement: Asset Resolution
The application MUST resolve all static assets (JS, CSS, images) relative to its deployment location.

#### Scenario: Subpath Deployment
- **Given** the application is deployed at `https://example.com/seema-and-rohan-airport-transfers/`
- **When** the browser loads `index.html`
- **Then** asset paths must be requested as `https://example.com/seema-and-rohan-airport-transfers/assets/...`

#### Scenario: Main Domain Deployment
- **Given** the application is deployed at `https://my-domain.com/`
- **When** the browser loads `index.html`
- **Then** asset paths must be requested as `https://my-domain.com/assets/...`

