export * from './validators/index.js';
export * from './types.js';
import { FormValidator } from './FormValidator.js';

// Create default instance
export const formValidator = new FormValidator();
export { FormValidator };