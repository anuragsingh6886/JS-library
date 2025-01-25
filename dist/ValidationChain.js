"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationChain = void 0;
const validators_1 = require("./validators");
class ValidationChain {
    value;
    errors = [];
    constructor(value) {
        this.value = value;
    }
    required() {
        if (!this.value)
            this.errors.push('Field is required');
        return this;
    }
    email() {
        if (!(0, validators_1.validateEmail)(this.value)) {
            this.errors.push('Invalid email format');
        }
        return this;
    }
    minLength(min) {
        if (this.value.length < min) {
            this.errors.push(`Minimum length is ${min}`);
        }
        return this;
    }
    matches(pattern) {
        if (!pattern.test(this.value)) {
            this.errors.push('Pattern does not match');
        }
        return this;
    }
    getErrors() {
        return this.errors;
    }
    isValid() {
        return this.errors.length === 0;
    }
}
exports.ValidationChain = ValidationChain;
