// Scope means ki aaap apne created variables and functions ko kha tak use kr skte ho

// Function Scope: function ke andar hi use ho skti hai
// Global Scope: poore code mein khi bhi use ho skti hai
// Block Scope: {} curly braces mein hi use ho skti hai

// agar aapka code kisi bhi {} ke andar nhi hai it means ki uska scope global hai

// Execution context

// js sbse phle jaise hi aapka function dekhta hai sbse phle js bnata hai execution context
// ye ek process hai jo  ki do different phases me chalta hai, memory phase and doosre ka naam hai
// execution phase

// An Execution Context is the environment in which JavaScript code is evaluated and executed.

// It contains:

// Variables
// Functions
// Scope
// The value of this

// Think of it like a box where JavaScript runs code.
// Every time JS executes code, it creates an execution context.

// Example:

let ab = 10;

function test() {
  let b = 20;
}

test();

// Here two execution contexts are created:

// 1. Global Execution Context
// 2. Function Execution Context

// Types of Execution Context

// There are three types.

// 1. Global Execution Context (GEC)

// This is created when the JavaScript file first runs.
// There is only ONE global execution context.

// It does two things:

// Creates the global object
// Sets this to the global object

// In browser:
// this === window

// Example:

console.log(this);

// Output: Window object

// Variables declared with var attach to window.

var a = 10;
console.log(window.a); // 10

// But:

let b = 20;
console.log(window.b); // undefined

// 2. Function Execution Context

// Every time a function is called, a new execution context is created.

// Example:

function greet() {
  let msg = "Hello";
}

greet();

// When greet() runs:

// A new execution context is created
// Variables and parameters are stored inside it

// 3. Eval Execution Context (Rare)

// Created when using eval().
// Example:

eval("let x = 10");

// But eval is rarely used.

// Phases of Execution Context

// Every execution context has two phases.

// 1️⃣ Creation Phase (Memory Allocation)
// 2️⃣ Execution Phase (Code Execution)

// Creation Phase

// Before running the code, JavaScript scans the entire code.

// During this phase:

// Memory is allocated
// Variables are initialized
// Functions are stored

// This is where hoisting happens.

// Example:

console.log(abc);
var abc = 5;

// During creation phase:
// a : undefined

// Execution phase:
// a : 5

// Output: undefined

// What Happens in Creation Phase

// Three main things happen.

// 1. Variable Environment

// Memory is allocated for variables.

// Example:

// var a = 10;
// var b = 20;

// Creation phase:

// a : undefined
// b : undefined

// 2. Function Hoisting

// Functions are stored completely in memory.

// Example:

greet();

function greet() {
  console.log("Hello");
}

// Works because function is already stored during creation phase.

// 3. this binding

// this value is determined.
// In global context:
// this = window

// Execution Phase

// Now JavaScript runs the code line by line.

// Example:

// var a = 10;
// var b = 20;

// Execution phase updates memory:

// a : 10
// b : 20

// Execution Stack (Call Stack)

// JavaScript uses a stack to manage execution contexts.

// It is called:

// Call Stack
// Execution Stack
// Program Stack

// Example
function one() {
  two();
}

function two() {
  console.log("Hello");
}

one();

// Execution order:

// Global Execution Context
//         ↓
// one()
//         ↓
// two()

// Stack representation:

// | two() |
// | one() |
// | GEC   |

// Lexical Scoping and Dynamic Scoping : JS follows Lexical Scoping

// Lexical scoping means that the scope of a variable is determined by the location of the variable in the source code.
// In simple words:

// A function can access variables from where it was defined, not where it is called.
// JavaScript uses lexical scoping.

let c = 12;

function abcde() {
  console.log(c);
}

function defg() {
  let c = 14;
  abcde();
}

defg();

// because js is lexically scoped so here answer is 12, had js been dynamically scoped then ans would have been 14

// Dynamic scoping determines variables based on the function call stack, not where the function is defined.
// Meaning:

// A function looks for variables in the calling function.
// Most modern languages do NOT use dynamic scoping.

// Example of Dynamic Scoping

let x = 10;

function print() {
  console.log(x);
}

function test1() {
  let x = 20;
  print();
}

test1();

// If using Dynamic Scoping Output would be 20 Because print() was called inside test().

// Closures definition and how variables are preserved

// closures hote hai function jo ki kisi parent function ke andar ho aur andar waala function
// return ho raha ho and returning function use kre parent function ki koi value

function abcdef() {
  let a = 12;

  return function () {
    console.log(a);
  };
}

let fnc = abcdef();
fnc();

// jab humne abcdef() ko chalaya memory stack me abcdef() ayya aur exection context bna, a variable bna
// aur ek function return hogya jo humne fnc ke ander save kra liya aur abcded() function memory se hatt gya
// ab agar parent function abcdef() hi hat gya to a bhi hatt gya hoga, to technically jo ander wala returning
// function tha jo ki humne fnc ke ander save kra liya to hum jab use chalayege yaani fnc() ko,
// to a ki value undefined print honi chaiye kyuki a to delete ho chuka hai but it prints 12.

// ye sach hai function ke khatam hone pe aapke function and uske variables khtam hojate hai par jab bhi
// closures banta hai to aapka function aur uske variables ka ek backlink(copy) bnaya jata hai aur uska name hai
// [[enviornment]]

function countForMe() {
  let c = 0;

  return function () {
    c++;
    console.log(c);
  };
}

let fnc1 = countForMe();
fnc1(); // prints 1
fnc1(); // prints 2
fnc1(); // prints 3

let fnc2 = countForMe();
fnc2(); // prints 1
fnc2(); // prints 2
fnc2(); // prints 3
fnc2(); // prints 4
fnc2(); // prints 5
fnc2(); // prints 6

// parent function jab bhi chalaoge a new variable will be created and returning function apne variable ko yaad
// rhega, returning function fnc1 and fnc2 me hai unke pass apne dono ke alag alag c hai.

// Encapsulation example

function clickLimiter() {
  let click = 0;

  return function () {
    if (click < 5) {
      click++;
      console.log(`clicked : ${click} times`);
    } else {
      console.log("LIMIT EXCEEDED, TRY AGAIN AFTER SOME TIME");
    }
  };
}

let func = clickLimiter();
func();
func();
func();
func();
func();
func();

// click is a private varibale you cannot change it outside


// Creating a toaster
function createToaster(config) {

  const parent = document.querySelector(".parent");

  // set position once
  parent.classList.add(
    config.positionX === "right" ? "right-5" : "left-5",
    config.positionY === "bottom" ? "bottom-5" : "top-5"
  );

  return function (str) {
    let div = document.createElement("div");
    div.textContent = str;

    div.className = `inline-block ${
      config.theme === "dark"
        ? "bg-gray-800 text-white"
        : "bg-gray-100 text-black"
    } px-6 py-3 rounded shadow-lg pointer-events-none`;

    parent.appendChild(div);

    setTimeout(() => {
      parent.removeChild(div);
    }, config.duration * 1000);
  };
}

let toaster = createToaster({
  positionX: "right",
  positionY: "bottom",
  theme: "dark",
  duration: 3,
});

toaster("Download Done");

setTimeout(() => {
  toaster("Harsh accepted your request");
}, 2000);