// data types

// 1. primitive data types - aisi sari values jinko copy karne par tumhe ek reak copy mil jaye 
// 2. reference data types - inko copy karne pe real copy nhi milegi but aapko reference 
// milega parent ka

// primitive types - string, number, boolean, null undefined, symbol, bigInt
// reference types - arrays [], objects {}, functions ()

let a = [1, 2, 3];
let b = a;

b.pop(); // when we do this value from a is also removed beacuse we don't have a real 
// copy of a in b but a reference of a in b so when we do something in whether a or b changes will
// happen in both a and b not in a single copy because a real copy doesn't exist
a.pop();


// 3 ways to make strings in javascript

// ' ' - single quotes
// " " - double quotes
// ` ` - backticks

// NULL - means jaan bhujh kr value nhi di aur usko null krdiya

// undefined - mtlb ki variable bnaya aur value nhi di aur usey value jo by 
// default mili hai wo hai undefined

// NULL vs UNDEFINED

// jab bhi aaap javscript me koi bhi variable create krte ho aur usko value nhi dete hai to default
// value jo assign hoti hai vo hoti hai undefined

let x;
console.log(x); // undefined
let y = null;
console.log(y); // null

// symbol - unique immutable value 
// future me hum koi library use karenge ab is case mein un libraries mein kai baar kuch aisi fields
// hoti hai jinse similar hum bhi bna dete hai aur galti se humaari bnai hui fields uss 
// library ki original fields ko change kr deti hai 

let sheryjs = {
    uid : 12,
    model : "harsh"
}

sheryjs.uid = 1;

// ab is problem ko solve krne ke liye hum use krte hai symbol 

let u1 = Symbol("uid");
let u2 = Symbol("uid");

console.log(u1 === u2); // false // means they are different

sheryjs[u1] = "001";

console.log(sheryjs);

// how to create a big int
let c = 99999999n;  
console.log(c);


// Dynamic typing -> JS me dynamic typing hai static typing nhi hai. Dynamic typing means hai ki
// aap data ko change kr skte ho kyuki yaha oar dynamic types hai

// static typing is better according for coding practices.

let d = 12;
d = true;
d = "harsh";
d = [];
d = null;
d = undefined;

// typeof quirks (eg., typeof null === 'object' )

console.log(typeof 12);
console.log(typeof "harsh");
console.log(typeof []); // ans: object
console.log(typeof ' ');
console.log(typeof NaN) // NaN full form -is not a number and it's type is number.

// Why NaN is a number ?  typeof NaN === 'number' // true

// NaN javascript me ek failed number operation hai means ek aesa mathematical operation jo ho
// nhi skta like 2 multiply by harsh

console.log(NaN === NaN) // false
console.log([] + []) // ans : ''
console.log('' + ""); // ans : ''
console.log(1 + "1"); // ans : '11'
console.log(1 == "1"); // ans : true
console.log(1 === "1") // ans : false
console.log(typeof null) // ans : object


// Type coercion (== vs ===)

// concept hai jisme aapka ek type automatically convert hojayega

console.log("5" + 1); // ans : '51' because  + do concatenation why ? because agar operation
// me ek bhi operand string hai to JS assumes ki aaapko concatenation krana hai to vo dusre 
// values ko bhi convert krdega string me

console.log("5" - 1) // ans : 4 because + can do concatenation and addition but - only do 
// subtraction to string aur number to substract ho nhi skte aur string aur string bhi substract
// nhi ho skte lekin number number substract ho skte hai to JS string ko number me subtract kr degi


// Truthy vs falsy values

// 0 false "" null defined NaN document.all ye sari values falsy hai baaki sari truthy hai

// how to check if any value if truth or false ?
// just put !! in front of any value in the console and you can check


// predict the result

console.log(true + false); // ans : 1
console.log(null + 1) // ans: 1
console.log(5 + "5"); // ans: '55'
console.log(!!undefined); // ans: false


