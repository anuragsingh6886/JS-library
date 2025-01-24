function validatePhoneNumber(phoneNumber) {
    const re = /^\+?[1-9]\d{1,14}$/;
    return re.test(String(phoneNumber));
}

module.exports = validatePhoneNumber;