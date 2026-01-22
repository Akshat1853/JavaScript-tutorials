// Operators in JavaScript
// Arithmetic, comparison, logical, assignment, unary, ternary

// Arithmetic operators
// + - * / % ** 

// + can do concatenation and addition both

console.log(1 + 5); // ans : 6
console.log(1 + "5"); // ans : '15'

// - can only do substraction

console.log(51 - 1) // ans : 50
console.log("51" - 1); // ans : 50
console.log(12 / 2); // ans : 6
console.log(12 * 2); // ans: 24
console.log(12 % 2); // ans : 0

// ** exponentiation operator

// base ** power
console.log(2 ** 3) // ans : 8

// comparison operators
// ==, ===, !=, !==, >=, <=, <, >

// = means assignment operator
// == only checks the value and not type
// === checks both values and types

console.log(12 == 13) // false
console.log(12 == "12") // true
console.log(12 === "12") // false

// assignment operators

let e = 12;
e += 3;
e -= 11;
e *= 2;
e /= 2;
e %= 3;


// logical operators
// &&, ||, !

//  true && true , ans : true
//  false && true, ans : false
//  true && false, ans : false
//  false && false, ans : false

// true || true, ans : true
// false || true, ans : true
// true || false, ans: true
// false || false, ans : false

// unary operators
// + - ! typeof ++ --


// ternary operators
// ?:

// condition ? true hu ka code : false hui ka code

12 > 13 ? console.log("true") : console.log("false");


// instanceof 

// variable instanceof __

// instance of check krta hai ki jo variable ussse phle likha hai vo jo instanceof ke baad identity
// likhi hui hai vo uska part hai ya nhi

let a = 12;
console.log(a instanceof Number); // ans : false beacuse instanceof hamesha work krta hai reference
// values ke sath naa ki primitive values ke sath  aur 12 ek primitive value hai
// that's why ans is false

// [] {} () arrays objects and functions reference values hai to instanceof hamesha inke sath work
// krta hai, aur typeof hum mostly use krte hai primitive values ke sath

// Practice questions

let x = 10;
let y = 20;

if(x > 5 && y < 25) {
    console.log("A");
}
else{
    console.log("B");
}


let isAdmin = true;
let isLoggedIn = false;

if(isAdmin || isLoggedIn){
    console.log("Access Granted");
}
else{
    console.log("Access Denied");
}

let temp = 25;

if(!(temp <30)){
    console.log("Hot");
}
else{
    console.log("Cold");
}


let g = 0;

if(g){
    console.log("Truthy");
}
else{
    console.log("Falsy");
}


let score = 78;

let grade = score >= 90 ? "A" : score >=75 ? "B" : score >= 60 ? "C" : "Fail";

console.log(grade);

