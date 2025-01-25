export declare class ValidationChain {
    private value;
    private errors;
    constructor(value: any);
    required(): ValidationChain;
    email(): ValidationChain;
    minLength(min: number): ValidationChain;
    matches(pattern: RegExp): ValidationChain;
    getErrors(): string[];
    isValid(): boolean;
}
