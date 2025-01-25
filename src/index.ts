import { validateEmail } from './validators/emailValidator';
import { validatePhoneNumber } from './validators/phoneNumberValidator';
import { validateURL } from './validators/urlValidator';
import { validatePassword } from './validators/passwordValidator';
import { validateDate } from './validators/dateValidator';
import { validateCreditCardNumber } from './validators/creditCardValidator';
import { validateUsername } from './validators/usernameValidator';
import { validateIPAddress } from './validators/ipAddressValidator';

export interface ValidationRule {
  type: 'email' | 'phone' | 'url' | 'password' | 'date' | 'creditCard' | 'username' | 'ip';
  message?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface FieldValidation {
  field: string;
  rules: ValidationRule[];
}

class FormValidator {
  private validators = {
    email: validateEmail,
    phone: validatePhoneNumber,
    url: validateURL,
    password: validatePassword,
    date: validateDate,
    creditCard: validateCreditCardNumber,
    username: validateUsername,
    ip: validateIPAddress
  };

  validate(fields: Record<string, string>, rules: FieldValidation[]): ValidationResult {
    const errors: string[] = [];

    rules.forEach(({field, rules}) => {
      const value = fields[field];
      rules.forEach(rule => {
        if (!this.validators[rule.type](value)) {
          errors.push(rule.message || `Invalid ${field}`);
        }
      });
    });

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

export const formValidator = new FormValidator();

// individual validators
export {
    validateEmail,
    validatePhoneNumber,
    validateURL,
    validatePassword,
    validateDate,
    validateCreditCardNumber,
    validateUsername,
    validateIPAddress
};