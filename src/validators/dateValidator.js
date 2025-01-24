function validateDate(date) {
    // Validates date in YYYY-MM-DD format
    const re = /^\d{4}-\d{2}-\d{2}$/;
    return re.test(date);
}

module.exports = validateDate;