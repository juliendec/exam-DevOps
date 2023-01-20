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

const haveANumber = (label) => {
    if (!label) return false;
    var format = /[0-9]/;
    return format.test(label);
};

exports.isEmpty = isEmpty;
exports.isMinLenght = isMinLenght;
exports.haveSpecialChar = haveSpecialChar;
exports.haveANumber = haveANumber;
