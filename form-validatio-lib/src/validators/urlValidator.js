function validateURL(url) {
    const re = /^(ftp|http|https):\/\/[^ "]+$/;
    return re.test(String(url).toLowerCase());
}

module.exports = validateURL;