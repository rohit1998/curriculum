// let fruits = ["Apple", "Banana", "Cherry"];

// console.log(fruits[0]);
// console.log(fruits[fruits.length-1]);

// fruits.push("Orange");
// fruits.shift()
// console.log(fruits);

// for (let fruit of fruits){
//     console.log(fruit);
// }

// const capitalFruits = fruits.map(x => x.toUpperCase());
// console.log('capitalFruits',capitalFruits);
// const fivePlusLetterFruits = fruits.filter(x => x.length>5);
// console.log('fivePlusLetterFruits',fivePlusLetterFruits);
// const allFruits = fruits.reduce((allString, x) => allString+x, "");
// console.log('allFruits',allFruits);

const camelize = (kebabCase) =>{
    console.log(kebabCase);
    kebabCaseArr = kebabCase.split('');
    const camelCaseArr = kebabCaseArr.reduce((camelCaseString, x) => camelCaseString.at(-1)=='-'?camelCaseString+x.toUpperCase():camelCaseString+x, "");
    const camelCase = camelCaseArr.replace(/-/g, '');
    console.log(camelCase);
    return camelCase
}

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');

const filterRange = (arr,a,b) => {
    let boundedArr = arr.filter(x => x>=a);
    boundedArr = boundedArr.filter(x => x<=b);
    return boundedArr;
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);

const filterRangeInPlace = (arr,a,b) => {
    let i=0;
    while(i<arr.length){
        if (arr[i]<a || arr[i]>b){
            arr.splice(i,1);
        } else{
            i++;
        }
    }
}

arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr)

arr = [5, 2, 1, -10, 8];
arr.sort().reverse()
console.log(arr)

const copySorted = (arr) =>{
    let sorted = arr.slice()
    sorted.sort();
    return sorted;
}
arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(arr, sorted);

const shuffle = (arr) => {
    const n = arr.length
    for(let i=0;i<n;i++){
        nCandiates = n-i;
        selectedIndex = Math.floor(Math.random()*nCandiates);
        // console.log(i,nCandiates, selectedIndex);
        let tmp = arr[n-i-1];
        arr[n-i-1] = arr[selectedIndex];
        arr[selectedIndex] = tmp;
    }
}
arr = [1,2,3];
shuffle(arr)
console.log(arr)
shuffle(arr)
console.log(arr)
shuffle(arr)

const unique = (strings) => {
    const uniqueStrings = [];
    for (string of strings){
        if (!(uniqueStrings.includes(string))){
            uniqueStrings.push(string);
        }
    }
    return uniqueStrings;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(strings));

