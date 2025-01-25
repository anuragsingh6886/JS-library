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
import { useState } from 'react';
import { validateEmail } from 'form-validation-lib-js';

const ValidForm = () => {

  const [formData, setFormData] = useState({
    email: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      return;
    }

    // Do something with the form data

  };

  return (
    <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ValidForm;
```

## Available Validators
 - Email [validateEmail]: Validates email format
 - Phone Number [validatePhoneNumber]: Validates international phone numbers
 - URL [validateURL]: Validates HTTP/HTTPS/FTP URLs
 - Password [validatePassword]: Ensures strong password (uppercase, lowercase, number, special char)
 - Date [validateDate]: Validates YYYY-MM-DD format
 - Credit Card [validateCreditCardNumber]: Validates 16-digit card numbers using Luhn algorithm
 - Username [validateUsername]: Validates alphanumeric usernames (3-16 characters)
 - IP Address [validateIPAddress]: Validates IPv4 addresses

## Author
- Anurag Singh ([@anuragsingh6886](https://www.linkedin.com/in/anuragsingh6886/))

