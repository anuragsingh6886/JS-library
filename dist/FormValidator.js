"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.formValidator = exports.FormValidator = void 0;
const validators = __importStar(require("./validators"));
class FormValidator {
    validators;
    asyncValidators;
    constructor() {
        this.validators = { ...validators };
        this.asyncValidators = {};
    }
    // Add custom sync validator
    addValidator(name, validator) {
        this.validators[name] = validator;
    }
    // Add custom async validator
    addAsyncValidator(name, validator) {
        this.asyncValidators[name] = validator;
    }
    // Public validation method
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
exports.FormValidator = FormValidator;
exports.formValidator = new FormValidator();
