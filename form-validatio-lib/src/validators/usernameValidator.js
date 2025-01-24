function validateUsername(username) {
    // Alphanumeric characters, underscores, 3 to 16 characters
    const re = /^[a-zA-Z0-9_]{3,16}$/;
    return re.test(username);
}

module.exports = validateUsername;