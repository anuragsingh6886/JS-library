# Form Validation Library

A lightweight JavaScript library for common form field validations.

## Installation

```bash
npm install form-validatio-lib

```

## Testing

```bash
npm test

```

## Usage

```javascript
const {
    validateEmail,
    validatePhoneNumber,
    validateURL,
    validatePassword,
    validateDate,
    validateCreditCard,
    validateUsername,
    validateIPAddress
} = require('form-validatio-lib');

// Examples
validateEmail('user@example.com');       // true
validatePhoneNumber('+1234567890');      // true
validatePassword('StrongP@ssw0rd');      // true
validateURL('https://example.com');      // true
```

## Available Validators
 - Email: Validates email format
 - Phone Number: Validates international phone numbers
 - URL: Validates HTTP/HTTPS/FTP URLs
 - Password: Ensures strong password (uppercase, lowercase, number, special char)
 - Date: Validates YYYY-MM-DD format
 - Credit Card: Validates 16-digit card numbers using Luhn algorithm
 - Username: Validates alphanumeric usernames (3-16 characters)
 - IP Address: Validates IPv4 addresses