export interface ValidationRule {
    type: string;
    message?: string;
    options?: Record<string, any>;
    async?: boolean;
}

export interface ValidationError {
    field: string;
    message: string;
}

export interface ValidationResult {
    isValid: boolean;
    errors: ValidationError[];
}

export interface ValidationSchema {
    [field: string]: ValidationRule[];
}

export type ValidatorFunction = (value: any, options?: any) => boolean; // eslint-disable-line
export type AsyncValidatorFunction = (value: any, options?: any) => Promise<boolean>; // eslint-disable-line