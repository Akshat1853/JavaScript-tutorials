// Arrays in javascript can hold different types of values like integers floats object etc
// so we have some dynamic types of arrays in javascript

let marks = [10, 40, 52, 37, 92];

// accessing an out od range index of an array in javascript returns undefined
console.log(marks[7]);

// Methods of array
marks.push(680);
marks.push(91);
console.log(marks);

marks.pop();
console.log(marks);

// Shift removes the element from the starting of the array
marks.shift();
console.log(marks);

// unshift adds a value to the starting of the array
marks.unshift(53);
console.log(marks);

// What happens if you don't pass any argument to the unshift method ?

// Ans: unshift() without arguments is a no-op (no operation) that returns the
// length of the array.

// Splice method

// The splice() method in JavaScript is used to add, remove, or replace elements in an array.
// It modifies the original array.

// Syntax : array.splice(start, deleteCount, item1, item2, ...)

// Parameters:

// start → Index where changes begin
// deleteCount → Number of elements to remove
// item1, item2, ... → Elements to add (optional)

// Removes 2 elements starting from index 4 and return it.
let removed = marks.splice(4, 2);
console.log(`Removed elements: ${removed}`);
console.log(marks);

// Adds two elements 68 and 50 starting from index 2
marks.splice(2, 0, 68, 50);
console.log(marks);

// Removes 2 elements and inserts 9, 8.
marks.splice(2, 2, 9, 8);
console.log(marks);

// Slice Method

// The slice() method in JavaScript is used to extract a portion of an array or string and
// return it as a new array/string — without modifying the original one.

// It also Supports negative indexing
// It is Used for copying arrays

// Syntax: array.slice(start, end)

// Parameters

// start → Index to begin extraction (inclusive)
// end → Index to stop extraction (exclusive)
// If end is not given → extracts till the end

let newMarks1 = marks.slice(1, 4);
console.log(newMarks1);

let newMarks2 = marks.slice(2);
console.log(newMarks2);

let newMarks3 = marks.slice(-3);
console.log(newMarks3);

// Which is faster slice or splice ?
// slice() is usually faster because it does not modify the original array.

// Reverse method

// Reverses the order of elements in an array. It mutates the original array

marks.reverse();
console.log(marks);

// Sort method

// Sorts elements of an array as strings by default.
// Syntax: array.sort(compareFunction)

// Ascending order
marks.sort((a, b) => a - b);
console.log(marks);

// Descending order
marks.sort((a, b) => b - a);
console.log(marks);

// Alphabetical sort
let names = ["banana", "apple", "cherry"];
names.sort();
console.log(names);

// sort objects by property
let users = [
  { name: "A", age: 30 },
  { name: "B", age: 20 },
];

users.sort((a, b) => a.age - b.age);
console.log(users);

// forEach() method

// It executes a function on each element
// ❌ Does NOT return a new array
// ❌ Cannot be chained
// ✅ Used for side effects (printing, updating, etc.)

let arr = [11, 62, 3, 4, 25];

arr.forEach(function (val) {
  console.log(val);
});

arr.forEach((num, i) => {
  arr[i] = num * 2;
  console.log(arr[i]);
});

// When to use

// ✔ Logging
// ✔ Printing
// ✔ DOM updates
// ✔ API calls
// ✔ Mutating original array

// Trap Question ⚠️
let res = [1, 2, 3].forEach((n) => n * 2);
console.log(res);
// ❌ Output: undefined

// Map Method

// Transforms every element and returns a new array of same length.

// Key Characteristics

// ✅ Returns new array
// ✅ Same length as original
// ❌ Does NOT mutate original
// ✅ Chainable
// ✅ Pure function

// Map sirf tab use krna hai jab aapko ek naya array bnana hai pichle array ke base pe
// Map dikhte hi sath man mein ek blank array bna liya kro
// Ab iske andar ka function jo jo return krega is array ke andar daalte rhna

let newArr = arr.map(() => {
  return 12;
});

console.log(newArr);

// Use case of Map:

// jab bhi aapko aisa koi casse dikh jaaye jaha par ek new array bnega and wo
// naaya array kuch values ko rakhega tab map lgega

// Filter Method

// Selects elements that satisfy a condition.

// Key Characteristics

// ✅ Returns new array
// ❌ Length may change
// ❌ Does NOT mutate original
// ✅ Chainable

let A = [1, 2, 3, 4, 5, 6, 7, 8];

let newA = A.filter((val) => {
  if (val > 4) return true;
});

console.log(newA);

// When to use

// ✔ Remove unwanted data
// ✔ Search results
// ✔ Conditional selection
// ✔ Validation

// Trap Question ⚠️
[1, 2, 3].filter((n) => n * 2);
// Output: [1,2,3]
// Why? Because non-zero values are truthy.

// Reduce function

// Reduces array into a single value (number, string, array, object).

// Syntax:

// array.reduce((accumulator, current, index, array) => {
//   return updatedAccumulator;
// }, initialValue);

let arr1 = [1, 2, 3, 4];

let sum = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

// Find method

// find() returns the first element that satisfies a condition.

// ❌ Does NOT return all matches
// ❌ Does NOT return index
// ❌ Does NOT mutate original array
// ✅ Returns the actual element
// ✅ Stops after first match

let arr2 = [5, 12, 8, 130, 44];
let found = arr2.find((num) => {
  return num > 10;
});

console.log(found); // 12

let obj = [
  { id: 1, key: 1 },
  { id: 2, key: 2 },
  { id: 3, key: 1 },
];

let va = obj.find((val) => {
  return val.key === 1;
});

console.log(va.id);

// Some Method

// some() checks if at least ONE element in the array satisfies a condition.

// ➡️ Returns true or false
// ➡️ Stops as soon as it finds a match
// ➡️ Does NOT mutate the original array

let arr3 = [1, 3, 5, 8];

let hasEven = arr3.some(n => n % 2 === 0);

console.log(hasEven); // true


let users2 = [
  {name: "A", active: false},
  {name: "B", active: false},
  {name: "C", active: true}
];

let hasActiveUser = users2.some(u => u.active);

console.log(hasActiveUser); // true


// Every Method

// every() checks whether ALL elements in an array satisfy a given condition.

// ➡️ Returns true or false
// ➡️ Stops as soon as a condition fails
// ➡️ Does NOT mutate the original array

let arr4 = [2, 4, 6, 8];

let allEven = arr4.every(n => n % 2 === 0);

console.log(allEven); // true

let users4 = [
  {name: "A", active: true},
  {name: "B", active: true},
  {name: "C", active: false}
];

let allActive = users4.every(u => u.active);

console.log(allActive); // false.


// Destructuring and Spread operator

// Array destructuring lets you extract values from an array and assign them to variables 
// in a clean, short way.

// Instead of this 👇

// let arr5 = [10, 20, 30];
// let a = arr5[0];
// let b = arr5[1];
// let c = arr5[2];

// You can write this 👇
// let [a, b, c] = [10, 20, 30];

let arr5 = [10, 20, 30, 40];
let [a, , c] = arr5;

console.log(a); // 10
console.log(c); // 30

// Using spread operator
let arr6 = [1, 2, 3, 4, 5];
let [first, second, ...rest] = arr6;

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3,4,5]




