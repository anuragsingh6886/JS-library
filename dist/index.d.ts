export * from './validators';
export * from './FormValidator';
export * from './ValidationChain';
export * from './types';
import { ValidationChain } from './ValidationChain';
export declare const validate: (value: any) => ValidationChain;
