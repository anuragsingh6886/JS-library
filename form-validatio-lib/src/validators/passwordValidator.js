function validatePassword(password) {
    // At least one uppercase letter, one lowercase letter, one digit, one special character, and minimum 8 characters
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
}

module.exports = validatePassword;