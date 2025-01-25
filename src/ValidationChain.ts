import { validateEmail, validatePassword, validatePhoneNumber } from './validators';

export class ValidationChain {
    private value: any;
    private errors: string[] = [];

    constructor(value: any) {
        this.value = value;
    }

    required(): ValidationChain {
        if (!this.value) this.errors.push('Field is required');
        return this;
    }

    email(): ValidationChain {
        if (!validateEmail(this.value)) {
            this.errors.push('Invalid email format');
        }
        return this;
    }

    minLength(min: number): ValidationChain {
        if (this.value.length < min) {
            this.errors.push(`Minimum length is ${min}`);
        }
        return this;
    }

    matches(pattern: RegExp): ValidationChain {
        if (!pattern.test(this.value)) {
            this.errors.push('Pattern does not match');
        }
        return this;
    }

    getErrors(): string[] {
        return this.errors;
    }

    isValid(): boolean {
        return this.errors.length === 0;
    }
}