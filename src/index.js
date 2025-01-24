const validateEmail = require('./validators/emailValidator');
const validatePhoneNumber = require('./validators/phoneNumberValidator');
const validateURL = require('./validators/urlValidator');
const validatePassword = require('./validators/passwordValidator.js');
const validateDate = require('./validators/dateValidator.js');
const validateCreditCard = require('./validators/creditCardValidator.js');
const validateUsername = require('./validators/usernameValidator.js');
const validateIPAddress = require('./validators/ipAddressValidator.js');

module.exports = {
    validateEmail,
    validatePhoneNumber,
    validateURL,
    validatePassword,
    validateDate,
    validateCreditCard,
    validateUsername,
    validateIPAddress
};