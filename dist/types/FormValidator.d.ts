import type { ValidatorFunction, AsyncValidatorFunction, ValidationResult, ValidationSchema } from './types.js';
export declare class FormValidator {
    private validators;
    private asyncValidators;
    constructor();
    addValidator(name: string, validator: ValidatorFunction): void;
    addAsyncValidator(name: string, validator: AsyncValidatorFunction): void;
    validateForm(formData: Record<string, any>, schema: ValidationSchema): Promise<ValidationResult>;
    private validateAsync;
}
