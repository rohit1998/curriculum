console.log("Hello World!");

function add7(num){
    return num+7;
};
console.log("10 + 7 =", add7(10));

const multiply = function(a,b){
    return a*b;
};
console.log("10 * 7 =", multiply(10,7));

const capitalize = (str) => {
    upper_case = str.toUpperCase()
    lower_case = str.toLowerCase()
    return upper_case[0]+lower_case.slice(1)
}
console.log("abc capital is", capitalize("abc"));

const lastLetter = str =>  str.slice(-1)
console.log("abc last letter is", lastLetter("abc"));
