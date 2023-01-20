// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const isMinLenght = (label) => {
    if (!label) return false;
    if (label.length > 8) return true;
    return false;
};

const haveSpecialChar = (label) => {
    if (!label) return false;
    var format = /[!@#$%^&*]/;
    return format.test(label);
};

exports.isEmpty = isEmpty;
exports.isMinLenght = isMinLenght;
exports.haveSpecialChar = haveSpecialChar;
