const reverseString = function(string) {
    const arr = string.split('')
    const reverseArr = arr.reverse()
    const reverseString = reverseArr.join('')
    return reverseString
};

// Do not edit below this line
module.exports = reverseString;
