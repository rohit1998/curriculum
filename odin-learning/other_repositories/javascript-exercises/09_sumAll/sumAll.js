const sumAll = function(start, end) {
    if (!(Number.isInteger(start) && start > 0)){
        console.log('1', typeof(start), start);
        return "ERROR";
    } else if (!(Number.isInteger(end) && end > 0)){
        console.log('2');
        return "ERROR";
    } else {
        if (start>end){
            [start,end] = [end,start];
        }
        const startSum = start*(start+1)/2;
        const endSum = end*(end+1)/2;
        return endSum-startSum+start;
    }
};
console.log(sumAll(123, 1));
// Do not edit below this line
module.exports = sumAll;
