# API POST Requests Documentation

This document details all data sent to the backend via POST requests, including all possible variants and field details.

## 1. POST `/buy/`

This endpoint is used to submit booking information and initiate a transaction. It is triggered when the user clicks the "Save my place" button in the booking form.

- **Source File:** `src/api/stripe.js`
- **Method:** `POST`
- **URL:** `${apiBaseUrl}/buy/` (where `apiBaseUrl` is defined in `import.meta.env.VITE_API`)
- **Headers:**
    - `Accept: application/json`
    - `Content-Type: application/json`

### Payload Structure

```json
{
  "name": "string",
  "last-name": "string",
  "price": number,
  "vip-code": "string",
  "phone": "string",
  "email": "string",
  "from-host": "string",
  "stripe-data": {
    "[ServiceName]": {
      "amount": 1,
      "description": "string",
      "price": number,
      "image_url": "string"
    }
  }
}
```

### Main Fields Detail

- **`name`**: First name of the guest. (e.g., `"John"`)
- **`last-name`**: Last name of the guest. (e.g., `"Doe"`)
- **`price`**: The price for the service. In the current implementation (`Form.jsx`), this is hardcoded to `0` for the "Save my place" action.
- **`vip-code`**: An optional code applied by the guest to validate special access or discounts.
- **`phone`**: Guest's phone number.
- **`email`**: Guest's email address.
- **`from-host`**: The full URL from which the request was sent (collected via `window.location.href`).
- **`stripe-data`**: A map where the key is the service name (e.g., `"One Way (Arriving)"`, `"Round Trip"`).
    - **`amount`**: Hardcoded to `1`.
    - **`description`**: A comma-separated string containing all data collected from the form inputs and selects.
    - **`price`**: The service price, matching the top-level `price`.
    - **`image_url`**: A full URL to the application logo used for display in the checkout.

### Dynamic `description` Field (Variants)

The `description` field in `stripe-data` is a collection of all form field values on the page that do NOT have the `no-collect` class. The name of each field is capitalized and hyphens are replaced with spaces.

#### Possible fields included in `description`:

| Input Name | Label in Description | Possible Values / Variant |
| :--- | :--- | :--- |
| `name` | Name | Guest's first name |
| `last-name` | Last name | Guest's last name |
| `passengers` | Passengers | `1` to `8` |
| `email` | Email | Guest's email |
| `phone` | Phone | Guest's phone number |
| `hotel` | Hotel | Selected hotel name or "other" |
| `hotel-name` | Hotel name | Custom hotel name (only if `hotel` is "other") |
| `arriving-date` | Arriving date | `YYYY-MM-DD` (only for Arriving/Round Trip) |
| `arriving-time` | Arriving time | `HH:MM` (only for Arriving/Round Trip) |
| `airline` | Airline | Arriving Airline name (only for Arriving/Round Trip) |
| `flight` | Flight | Arriving Flight number (only for Arriving/Round Trip) |
| `departing-date` | Departing date | `YYYY-MM-DD` (only for Departing/Round Trip) |
| `departing-time` | Departing time | `HH:MM` (only for Departing/Round Trip) |
| `airline` | Airline | Departing Airline name (only for Departing/Round Trip) |
| `flight` | Flight | Departing Flight number (only for Departing/Round Trip) |

**Note on duplicate labels:** If both Arriving and Departing forms are active (Round Trip), there will be two entries for "Airline" and "Flight" in the description string, appearing in the order they exist in the DOM (usually Arriving followed by Departing).

---

## 2. POST `/validate-vip-code/`

This endpoint validates if a VIP code provided by the guest is valid.

- **Source File:** `src/api/vip-code.js`
- **Method:** `POST`
- **URL:** `${apiBaseUrl}/validate-vip-code/`
- **Headers:**
    - `Content-Type: application/json`

### Payload Structure

```json
{
  "vip-code": "string"
}
```

### Main Fields Detail

- **`vip-code`**: The specific alphanumeric code entered by the user.

### Response Behavior

The backend is expected to return a JSON object with a `status` field.
- `{"status": "success"}`: The code is valid.
- `{"status": "error"}` (or any other status): The code is invalid.
