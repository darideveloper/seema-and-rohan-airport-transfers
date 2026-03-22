# Spec: API Dynamic Assets Capability

## MODIFIED Requirements

### External Dynamic Asset URLs
All external service calls that require image URLs must construct those URLs at runtime based on the current environment.

#### Scenario: Stripe Image URL Construction
- **Given** the application is running at `https://wedding-site.com/`
- **When** the `submitStripe` function is called
- **Then** the `serviceImage` variable must be `https://wedding-site.com/imgs/logo.png`

#### Scenario: Subpath Stripe Image URL Construction
- **Given** the application is running at `https://cancunconciergedmc.com/transfers/`
- **When** the `submitStripe` function is called
- **Then** the `serviceImage` variable must be `https://cancunconciergedmc.com/transfers/imgs/logo.png`
