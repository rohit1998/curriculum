const repeatString = function(stringToRepeat, repeatCount) {
    if (repeatCount <0){
        return "ERROR";
    }
    let repeatedString = "";
    for (let i=0;i<repeatCount;i++){
        // console.log(i);
        repeatedString += stringToRepeat;
    }
    return repeatedString;
};

// console.log(repeatString('abc',3))

// Do not edit below this line
module.exports = repeatString;
