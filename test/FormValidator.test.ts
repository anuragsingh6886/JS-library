import { FormValidator } from '../src/FormValidator';
import type { ValidationSchema } from '../src/types';

describe('FormValidator', () => {
    let validator: FormValidator;

    beforeEach(() => {
        validator = new FormValidator();
    });

    test('should create instance', () => {
        expect(validator).toBeInstanceOf(FormValidator);
    });

    test('should validate form with sync validators', async () => {
        const formData = {
            email: 'test@example.com',
            password: 'StrongPass1!'
        };

        const schema: ValidationSchema = {
            email: [{ type: 'email' }],
            password: [{ type: 'password' }]
        };

        const result = await validator.validateForm(formData, schema);
        expect(result.isValid).toBe(true);
        expect(result.errors).toHaveLength(0);
    });

    test('should fail validation for invalid data', async () => {
        // Add custom validators first
        validator.addValidator('email', (value: string) =>
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        );

        validator.addValidator('password', (value: string) =>
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)
        );

        const formData = {
            email: 'invalid-email',
            password: 'weak'
        };

        const schema: ValidationSchema = {
            email: [{
                type: 'email',
                message: 'Invalid email'
            }],
            password: [{
                type: 'password',
                message: 'Weak password'
            }]
        };

        const result = await validator.validateForm(formData, schema);

        expect(result.isValid).toBe(false);
        expect(result.errors).toEqual([
            { field: 'email', message: 'Invalid email' },
            { field: 'password', message: 'Weak password' }
        ]);
    });

    test('should handle custom sync validators', async () => {
        validator.addValidator('customCheck', (value: string) => value === 'valid');

        const formData = {
            field: 'valid'
        };

        const schema: ValidationSchema = {
            field: [{ type: 'customCheck', message: 'Custom validation failed' }]
        };

        const result = await validator.validateForm(formData, schema);
        expect(result.isValid).toBe(true);
    });

    test('should handle async validators', async () => {
        validator.addAsyncValidator('asyncCheck', async (value: string) => {
            return new Promise(resolve => {
                setTimeout(() => resolve(value === 'valid'), 100);
            });
        });

        const formData = {
            field: 'valid'
        };

        const schema: ValidationSchema = {
            field: [{ type: 'asyncCheck', message: 'Async validation failed', async: true }]
        };

        const result = await validator.validateForm(formData, schema);
        expect(result.isValid).toBe(true);
    });

    test('should handle multiple validators per field', async () => {
        const formData = {
            password: 'Password123!'
        };

        const schema: ValidationSchema = {
            password: [
                { type: 'required', message: 'Required' },
                { type: 'password', message: 'Invalid password' }
            ]
        };

        const result = await validator.validateForm(formData, schema);
        expect(result.isValid).toBe(true);
    });
});