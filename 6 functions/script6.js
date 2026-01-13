// Functions in JavaScript

function HNY() {
  console.log("Happy New Year");
}
console.log(HNY());

// Saving fucntions in a variable is called function expressions
// function expressions run only when you call them
let abcd = function good() {
  console.log("I am good");
};
console.log(abcd());

// fat Arrow function
let fnc = () => {
  console.log("Hjheheh");
};
fnc();

// default parameters v1 and v2
function add(v1 = 0, v2 = 0) {
  console.log(v1 + v2);
}

// arguments 1, 2, 5, 9
console.log(add(1, 2));
console.log(add(5, 9));

// Jab argumetns kai saare ho to hume utne hi parameters banane padege, issey bachne ke liye hum
// rest a use krte hai ...
// agar ... function ke parameter space mein lge to wo rest operator khlata hai
// agar ... arrays aur objects mein lge to wo spread operator hai

function ex1(...val) {
  console.log(val);
}
ex1(1, 2, 3, 4, 5, 6, 7, 8);

function ex2(a, b, c, ...val2) {
  console.log(a, b, c, val2);
}
ex2(1, 2, 3, 4, 5, 6, 7, 8);


// First class functions in JavaScript

// means those functions jinhe value ki tarah treat kra jaa ske, mtlb aap unhe variables me save
// kr skte ho and functions me bhi pass kr skte ho

// it is just a concept ki functions ko value ki tarah treat kra jaa skta hai

function fcf(val){
    val();
}

fcf(function (){
    console.log("Heyyyy");
})


// Higher order functions 

// means those functions jo ki return kre ek function yaa phir accept kre ek function apne
// parameter me. so fcf upar ek higher order function hai


// Pure vs Impure functions

// pure function ek aesa function jo ki bahaar ki value ko na badle
// Impure function ek aesa function jo ki bahaar ki value ko badal de


let a = 12;

function pureExample(){
    console.log("Heyyy heyy");
}

function ImpureExample(){
    a++;
}


// Closures in JavaScript

// ek function jo ki return kre ek aur function aur jo returning function hai vo use kre parent
// function ka koi variable

function ClosureExample()
{
    let a = 10;
    return function(){
        console.log(a);
    }
}

// Legixal Scoping in JavaScript

// Lexical scoping (also known as static scoping) is a core mechanism in JavaScript where the 
// accessibility of variables is determined by their physical location within the source code
// at the time of writing (or compile-time), not by how or when the functions are called at runtime. 

function  LexicalScopingExample(){
    let a = 12;
    
    function defg(){
        let b = 13;

        function ghij(){
            let c = 14;
        }
    }
}


// IIFE (Immediately invoked function expressions)

// An IIFE is a function that is defined and executed immediately after it’s created.

// It’s commonly used to:

// Create a private scope
// Avoid polluting the global namespace
// Run setup/initialization code once.

(function () {
  console.log("I run immediately!");
})();


// Hoisting differences between function declaration and function expressions

// Cannot do Hoisting in function expressions
// Can do Hoisting in function declaration or function statements

// Runs fine
declarationExample();

function declarationExample(){
    console.log("Calling before writing function")
}


// Uncaught ReferenceError: Cannot access 'ab' before initialization
// ab();

// let ab = function (){
//     console.log("Calling before writing function")
// }



//  Use rest paramter to accept any number of scores and return the total score
function getScores(...val){
    let total = 0;

    val.forEach(function (val){
        total += val;
    });
    return total;
}

console.log(getScores(10, 12, 15, 18));

