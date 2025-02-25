import * as validators from './validators/index.js';
export class FormValidator {
    validators;
    asyncValidators;
    constructor() {
        this.validators = { ...validators };
        this.asyncValidators = {};
    }
    addValidator(name, validator) {
        this.validators[name] = validator;
    }
    addAsyncValidator(name, validator) {
        this.asyncValidators[name] = validator;
    }
    async validateForm(formData, schema) {
        const errors = [];
        const asyncTasks = [];
        for (const [field, rules] of Object.entries(schema)) {
            const value = formData[field];
            // Sync validation
            for (const rule of rules.filter(r => !r.async)) {
                const validator = this.validators[rule.type];
                if (validator && !validator(value, rule.options)) {
                    errors.push({
                        field,
                        message: rule.message || `Invalid ${field}`
                    });
                }
            }
            // Async validation
            const asyncRules = rules.filter(r => r.async);
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
    async validateAsync(field, value, rules) {
        const errors = [];
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
