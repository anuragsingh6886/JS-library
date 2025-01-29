# Form-Validation-Library JS/TS

 - 🎉 A comprehensive TypeScript/JavaScript form validation library.

[![npm version](https://badge.fury.io/js/form-validation-lib-js.svg)](https://badge.fury.io/js/form-validation-lib-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

## Quick Start

```bash
npm install form-validation-lib-js

```

## Features
- 🚀 Zero dependencies
- 💪 TypeScript support
- ⚡ Tree-shakeable
- 🔄 Async validation
- 🎯 Custom validators

## Basic Usage

```javascript
import { validateEmail, validatePassword, validatePhone_IN } from 'form-validation-lib-js';

// Email validation
const isValidEmail = validateEmail('user@example.com'); // true

// Password validation
const isValidPassword = validatePassword('StrongPass1!'); // true

// Phone Number validation
const isValdPhone_IN = validatePhone_IN('+919876543210'); // true
```

## React Integration:
```javascript
import React, { useState } from 'react';
import { FormValidator } from 'form-validation-lib-js';

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const validator = new FormValidator();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationSchema = {
      email: [{ type: 'email', message: 'Invalid email' }],
      password: [{ type: 'password', message: 'Weak password' }]
    };

    const result = await validator.validateForm(formData, validationSchema);
    if (!result.isValid) {
      setErrors(result.errors.reduce((acc, error) => ({
        ...acc,
        [error.field]: error.message
      }), {}));
      return;
    }
    // Process form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
```

## Custom Validators

```javascript
const validator = new FormValidator();

// Add custom sync validator
validator.addValidator('username', (value: string) => {
  return /^[a-zA-Z0-9_]{3,16}$/.test(value);
});

// Add custom async validator
validator.addAsyncValidator('uniqueEmail', async (email: string) => {
  const response = await fetch(`/api/check-email?email=${email}`);
  const { isUnique } = await response.json();
  return isUnique;
});
```

## Available Validators:
 - `validateEmail`(email: string): boolean
 - `validatePassword`(password: string): boolean
 - `validatePhone`(phone: string): boolean
 - `validatePhone_AU`, `validatePhone_IN`, `validatePhone_UK`, `validatePhone_US`(phone: string): boolean
 - `validateDate`(date: string): boolean
 - `validateNumber`(value: string, options?: {min?: number, max?: number}): boolean
 - `validateURL`(url: string): boolean
 - `validateIPAddress`(ip: string): boolean
 - `validateCreditCard`(number: string): boolean

## TypeScript Support:

```typescript
import { ValidationSchema, ValidationResult } from 'form-validation-lib-js';

const schema: ValidationSchema = {
  email: [{ type: 'email' }],
  password: [{ type: 'password' }]
};
```

## Contribute
 - Show your ❤️ and support by giving a ⭐
 - Pull requests are welcome! See ([CONTRIBUTING.md](https://github.com/anuragsingh6886/form-validatio-lib/blob/main/CONTRIBUTING.md)) for guidelines.

## License:
MIT License - ([Anurag Singh](https://x.com/anurags_me)), see the ([LICENSE](https://github.com/anuragsingh6886/form-validatio-lib/blob/main/LICENSE)) file for details