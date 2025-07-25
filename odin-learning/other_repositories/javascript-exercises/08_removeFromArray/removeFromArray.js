const removeFromArray = function(arr, ...removeElements) {
    let i=0;
    while (i<arr.length){
        if (removeElements.includes(arr[i])){
            arr.splice(i,1);
        } else {
            i++;
        }
    }
    return arr;
};
// removeFromArray([11,12,13],12)
// Do not edit below this line
module.exports = removeFromArray;
