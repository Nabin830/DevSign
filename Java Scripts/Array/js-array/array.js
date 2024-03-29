

let String = 'My String';
let myNumber = 25;

let array = [];
let array2 = new Array();

let numbers = [0,1,2,3,4,5,6,7,8,9,10];
let strings = ['a', 'b', 'c'];
let fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

// push/pop and shift/unshift

// push - append element to the last of an array
// fruits.push('mango', 'kiwi');

// pop - remove one element from the last index
// fruits.pop();

// unshift - add element to the first index of an array
// fruits.unshift('kiwi');

// shift -- remove one element from the first index
// fruits.shift();


// Array looping
// for..loop

// let length = numbers.length;
// let EvenNumbers = [];
// for (let i = 0; i < length; i++) {
//     if (numbers[i] % 2 == 0) {
//         EvenNumbers.push(numbers[i]);
//     }
// }

// for..of 
// let EvenNumbers = [];
// for (let number of numbers) {
//     if (number % 2 == 0) EvenNumbers.push(number);
// }

// forEach
// var EvenNumbers = [];

// numbers.forEach(isEven); // callback = isEven (element, index, array)

// function isEven (number, i) {
//     if (number % 2 == 0) EvenNumbers.push(number);
// }

// fruits.forEach((fruit, index) => {
//     console.log (index + '->' + fruit);
// });

// Filter

// let NewArray = [];
// for (let fruit of fruits) {
//     if (fruit.length <= 4) NewArray.push (fruit);
// // }

// let NewArray = [];
// NewArray = fruits.filter((fruit) => {
//     return fruit.length <= 4;
// });

// NewArray = fruits.filter ((fruit) => fruit.length <= 4);


// Problem
let word = 'cat';
let myArray = ['cat', 'dog', 'concat', 'white', 'blue'];

let matchArray = myArray.filter((element) => {
    return element.includes(word);
});

console.log (matchArray); // ['cat', 'concat']

// push/pop, shift/unshift
// for..loop, for..of, forEach, filter





