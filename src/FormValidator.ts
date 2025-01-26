import type { ValidationError, ValidationRule, ValidatorFunction, AsyncValidatorFunction, ValidationResult, ValidationSchema } from './types.js';
import * as validators from './validators/index.js';

export class FormValidator {
    private validators: Record<string, ValidatorFunction>;
    private asyncValidators: Record<string, AsyncValidatorFunction>;

    constructor() {
        this.validators = { ...validators };
        this.asyncValidators = {};
    }

    addValidator(name: string, validator: ValidatorFunction): void {
        this.validators[name] = validator;
    }

    addAsyncValidator(name: string, validator: AsyncValidatorFunction): void {
        this.asyncValidators[name] = validator;
    }

    async validateForm(formData: Record<string, any>, schema: ValidationSchema): Promise<ValidationResult> {
        const errors: ValidationError[] = [];
        const asyncTasks: Promise<ValidationError[]>[] = [];

        for (const [field, rules] of Object.entries(schema)) {
            const value = formData[field];

            // Sync validation
            for (const rule of (rules as ValidationRule[]).filter(r => !r.async)) {
                const validator = this.validators[rule.type];
                if (validator && !validator(value, rule.options)) {
                    errors.push({
                        field,
                        message: rule.message || `Invalid ${field}`
                    });
                }
            }

            // Async validation
            const asyncRules = (rules as ValidationRule[]).filter(r => r.async);
            if (asyncRules.length) {
                asyncTasks.push(this.validateAsync(field, value, asyncRules));
            }
        }

        const asyncErrors = await Promise.all(asyncTasks);
        return {
            isValid: errors.length === 0 && asyncErrors.flat().length === 0,
            errors: [...errors, ...asyncErrors.flat()]
        };
    }

    private async validateAsync(
        field: string,
        value: any,
        rules: ValidationRule[]
    ): Promise<ValidationError[]> {
        const errors: ValidationError[] = [];

        for (const rule of rules) {
            const validator = this.asyncValidators[rule.type];
            if (validator && !(await validator(value, rule.options))) {
                errors.push({
                    field,
                    message: rule.message || `Invalid ${field}`
                });
            }
        }
        return errors;
    }
}