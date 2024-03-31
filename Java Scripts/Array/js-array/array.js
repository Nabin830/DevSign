

// // let String = 'My String';
// // let myNumber = 25;

// // let array = [];
// // let array2 = new Array();

// let numbers = [0,1,2,3,4,5,6,7,8,9,10];
// let strings = ['a', 'b', 'c'];
// let fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

// // push/pop and shift/unshift

// // push - append element to the last of an array
// // fruits.push('mango', 'kiwi');

// // pop - remove one element from the last index
// // fruits.pop();

// // unshift - add element to the first index of an array
// // fruits.unshift('kiwi');

// // shift -- remove one element from the first index
// // fruits.shift();


// // Array looping
// // for..loop

// // let length = numbers.length;
// // let EvenNumbers = [];
// // for (let i = 0; i < length; i++) {
// //     if (numbers[i] % 2 == 0) {
// //         EvenNumbers.push(numbers[i]);
// //     }
// // }

// // for..of 
// // let EvenNumbers = [];
// // for (let number of numbers) {
// //     if (number % 2 == 0) EvenNumbers.push(number);
// // }

// // forEach
// // var EvenNumbers = [];

// // numbers.forEach(isEven); // callback = isEven (element, index, array)
// // function isEven (number, i) {
// //     if (number % 2 == 0) EvenNumbers.push(number);
// // }

// // fruits.forEach((fruit, index) => {
// //     console.log (index + '->' + fruit);
// // });

// // Filter

// // let NewArray = [];
// // for (let fruit of fruits) {
// //     if (fruit.length <= 4) NewArray.push (fruit);
// // // }

// // let NewArray = [];
// // NewArray = fruits.filter((fruit) => {
// //     return fruit.length <= 4;
// // });

// // NewArray = fruits.filter ((fruit) => fruit.length <= 4);


// // Problem
// // let word = 'cat';
// // let myArray = ['cat', 'dog', 'concat', 'white', 'blue'];

// // let matchArray = myArray.filter((element) => {
// //     return element.includes(word);
// // });

// // console.log (matchArray); // ['cat', 'concat']

// // push/pop, shift/unshift
// // for..loop, for..of, forEach, filter
// //   map()
// let myNumber = [1,4,9];

// let sqrRoot =numbers.map(myFunction);
// let myFunction = function(element){
// return Math.sqrt(element);
// }
// confirm.console.log((sqrRoot));


// // // every


// // let StudentAge = [ 12,17,78,54,34,23,15]
// // let result = StudentAge.every((age) =>
// // {
// //     if(age > 18) return age;
// // })





// // console.log(result)


// // some

// let StudentAge = [ 12,17,78,54,34,23,15]
// let result = StudentAge.some((age) =>
// {
//     if(age > 18) return age;
// })
// console.log(result) //true



// let UserAge = [ 15,24,32,18,28,16]
// let result2 = UserAge.find(() =>{
//     if(age > 18) return age;
// })
// console.log(age); //1














//array methords

//concat
// let arr1 =[2,4,6]
// let arr2 = [0,7,9]
// let arr3 =[]

// arr3.concat(arr1,arr2)

// // includes

// let fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];
// console.log(fruits.includes('apple'))


// //indec off
// console.log(fruits.indexOf('orange'))


// //join
// console.log(fruits.join()) //converted into strings


// //reverse
// console.log(fruits.reverse())


// //slice

// console.log(fruits.slice(0,-1))


// //splice
// let months =['JAN','FEB','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
// let myArray=months.splice(2,1,'MAR')
// confirm.log(myArray)

//sort
let fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];
let numbers=[9,1,2,8,4,6,5,7,3,0]
console.log(numbers.sort())



let sortedArray = numbers.sort((a,b) => {
    return a-b




})// return -1 =ab    1 =ba   o = equal


let sortedstringsArray = fruits.sort((a,b) => {
    if (a<b) return -1;
    else if (a>b) return 1;
    else return 0

})



let ProblemArray = [-1,2,-4,-6,2,3,4,2,5,8,2,7,1]

let newArray = []
let array1 = []
let array2 = []
ProblemArray.filter((positive) => {
    if (positive > 0) return positive;
}
).forEach((ele) => {
    if(ele == 2){
        array1.push(ele)
    }else{
        array2.push(ele)
    }
})
  newArray = newArray.concat(array1,array2)
console.log(newArray)



