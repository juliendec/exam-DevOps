// TODO: Add here the function to validate

const isEmpty = (label) => !label || label.length === 0;

const isMinLenght = (label) => {
    if(!label) return false;
    if(label.length > 8) return true;
    return false;
};

exports.isEmpty = isEmpty;
exports.isMinLenght = isMinLenght;
