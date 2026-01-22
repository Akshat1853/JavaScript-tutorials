// var let and const

// jab bhi hum variable ko var se bnate hai to wo window me add hota hai 
// aur function scoped hota hai means pure function me khi bhi use ho skta hai
// var ko phirse se declare kr skte ho aur error nhi aayega, but let ko redeclare nhi kr skte

// gives no error
var a = 15;
var a = 23;

// gives error
// let b = 25;
// let b = 96;

// ways to declare and initialize the variables

a = 12;  // one way
var a = 12; // second way


// scope

// global scope
var c = 21

// functional scope
// d can be used anywhere inside the function.
function abcd() {
    if(true)
    {
        var d = 22;
    }
}

// block scope, valid for let and const variables but not for var
// since var are functional scoped and a block is not a function therefore this e variable
// declared inside this block is not restricted to this block only but can be used anywhere
// in the whole program, whereas the let declared inside it will be restricted to be used only
// inside the block.
{
    var e = 24
    let block = 51;
}


// Reassignment and redeclaration

// redeclaration is possible with var but not with let

var f = 32;
var f = 20;

let b = 32;
// let b = 20;



// Temporal dead zone

// when we do this :

// console.log(g);
// let g = 2;

// it will give error like : 
// Uncaught ReferenceError: Cannot access 'g' before initialization
// but according to logic and comparing with other languages the error should be like :
// Uncaught ReferenceError: g is not defined

// so temporal dead zone utna area hai jitne mein js ko pata to hai ki 
// variable exist krta hai but vo aapko us area me variable ka acces nhi de skta ya value 
// nhi de skta

// kul milane aapke variable declare krne se phle uske upar jitna area hai vo temporal dead zone
// hai uss variable ka

// temporal dead zone var ke liye nhi hota





// Hoisting impact per type

// hoisting -> ek varibale ko jab js me bnate hai to vo do hisso me tuth jata hai and uska
// declare part upar chala jata hai aur uska initialization part neeche rhe jaata hai

// for var

// example
// var h = 24;

// split like
// var h;
// h = 24;

// this works and shows undefined
console.log(i);
var i = 13;

// because in the background it is working like this,
// var i;
// console.log(i);
// i = 13;

// for let
 
// if we write :
// console.log(j);
// let j = 14;

// then in the background it will not work like var because Variables declared 
// with let (and const) exist in a Temporal Dead Zone from the start of their scope 
// until the declaration line is executed. var don't have temporal dead zone

// var is hoisted and initialized to undefined
// let is hoisted but NOT initialized

// What actually happens:
// j is hoisted to the top of the block
// j is in the TDZ
// Accessing j before initialization throws an error



// practice question:

// 1.
var x = 1;
{
    var x = 2;
}
console.log(x); 

//  ans = 2

// 2.
let sample = 10;
{
    let sample = 20;
    console.log("Inside: ", sample);
}
console.log("Outside: ", sample);

// ans = Inside: 20  Outside:  10


// why const allow changing object property

const person = {name : "Harsh"};
person.name = "Akshat"; // allowed
// person = {}; // not allowed

// if you want that that you cannot change your object properties like above you are able to do
// then you can use Object.freeze()