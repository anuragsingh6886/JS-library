export * from './validators';
export * from './types';
export { FormValidator, formValidator } from './FormValidator';
export { ValidationChain } from './ValidationChain';
import { ValidationChain } from './ValidationChain';
export declare const validate: (value: any) => ValidationChain;
