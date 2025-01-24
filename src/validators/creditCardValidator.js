function validateCreditCardNumber(creditCardNumber) {
    // Basic Luhn Algorithm implementation
    const re = /^\d{16}$/;
    if (!re.test(creditCardNumber)) return false;

    let sum = 0;
    for (let i = 0; i < creditCardNumber.length; i++) {
        let intVal = parseInt(creditCardNumber.substr(i, 1));
        if (i % 2 === 0) {
            intVal *= 2;
            if (intVal > 9) intVal -= 9;
        }
        sum += intVal;
    }
    return (sum % 10) === 0;
}

module.exports = validateCreditCardNumber;