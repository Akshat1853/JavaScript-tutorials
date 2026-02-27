// DOM Manipulation

// Most Important Things to learn are :

// 1. HTML se Element select krna
// 2. Text Badalna
// 3. CSS Change krna
// 4. Attributes
// 5. Event Listners

// HTML SE ELEMENTS SELECT KRNE KE WAYS -------------------

// here we are showing this h1 node in the console
let abcd = document.getElementById("abcd");
// document → represents the entire HTML document
// getElementById → selects ONE element with matching id
// returns → a single DOM element (or null if not found)

console.dir(abcd);
// console.dir → shows the DOM element as a JavaScript object
// helpful to inspect properties, methods, and prototype chain

// sometimes when we do console.log an node then it might show it as a tag
// at that time use console.dir then it will show this node in a format
// where we are able to see the technical properties of this node

// What is console.dir() ?

// Ans: console.dir() is a debugging method in JavaScript used to display the properties of an object in an interactive,
// expandable list—especially useful when inspecting DOM elements or complex objects.

// What console.dir() Does

// Prints an object as a JavaScript object tree
// Shows all enumerable properties and methods
// Lets you expand/collapse nested values in the browser console
// Unlike console.log(), it does not render HTML

// it has an array like structure
let abcde = document.getElementsByClassName("abcde");
// getElementsByClassName → selects ALL elements with given class
// returns → HTMLCollection (array-like, NOT real array)
// live collection → auto-updates if DOM changes

console.dir(abcde);

// Most commonly used and recommended way
let QS = document.querySelector("h1");
// querySelector → selects FIRST matching element
// accepts CSS selectors (tag, class, id, attribute, combinations)

console.dir(QS);

// An array like structure but not array
let QSAll = document.querySelectorAll("h1");
// querySelectorAll → selects ALL matching elements
// returns → NodeList (can use forEach)
// static collection → does NOT auto-update

console.dir(QSAll);

// TEXT BADALNE KE WAYS ---------------------------------------

let h1 = document.querySelector("h1");
// selecting first h1 element in the document

h1.textContent = "Hello Akshat kaise ho";
// textContent → sets or gets ALL text (including hidden text)
// fastest method
// does NOT parse HTML

console.dir(h1);

let h2 = document.getElementById("abcd2");
// selecting element with id="abcd2"

h2.innerHTML = "<i>hey</>";
// innerHTML → inserts HTML inside element
// parses tags and modifies DOM structure
// security risk if user input is used (XSS)

console.dir(h2);

let h3 = document.getElementById("abcd3");
// selecting element with id="abcd3"

h3.innerText = "hello mera name akshat hai";
// innerText → changes only VISIBLE text
// respects CSS (display:none)
// slower than textContent

console.dir(h3);

// ATTRIBUTE MANIPULATION ---------------------------------

// An attribute is a name–value pair used to provide additional information about an HTML element.
// <img src="logo.png" alt="Company Logo" width="200">

// In this img tag attributes are = src, alt, width
// Some built in attributes are = id, class, href, src, title, value,
// boolean atrributes that don't require any values are = disabled, checked, readonly, required

let a1 = document.querySelector("a");
// selecting first anchor tag

a1.href = "https://www.google.com";
// href here is a PROPERTY (not attribute)
// directly modifies the live DOM object
// browser auto-converts to absolute URL

console.dir(a1);

let a2 = document.querySelector("a");
// selecting anchor tag again

a2.setAttribute("href", "https://www.youtube.com");
// setAttribute → modifies HTML attribute
// works with strings only

console.dir(a2);

console.log(a2.getAttribute("href"));
// getAttribute → returns attribute value as written in HTML

let a3 = document.querySelector("a");
// selecting anchor tag

a3.removeAttribute("href");
// removes the attribute completely from element
// element still exists but loses behavior

console.dir(a3);

// DYNAMIC DOM MANIPULATION ----------------------------------------

let h4 = document.createElement("h1");
// createElement → creates element in memory
// NOT added to DOM yet

h4.textContent = "Hello sir";
// adding text to newly created element

document.body.appendChild(h4);
// appendChild → adds element at END of body
// element now becomes part of DOM

let h5 = document.createElement("h1");
// creating another h1 dynamically

h5.textContent = "Hey main bahar se aaya hu";

document.querySelector("body").prepend(h5);
// prepend → adds element at START of body

// document.querySelector("body").removeChild(h5);
// removeChild → removes a specific child element from parent

// STYLE UPDATES VIA .style AND classList (add, remove, toggle)

let h6 = document.querySelector("h1");
// selecting first h1 again

h6.style.color = "white";
// .style → inline CSS
// overrides external and internal CSS

h6.style.backgroundColor = "purple";
// CSS properties written in camelCase

h6.style.fontFamily = "Gilroy";

h6.style.textTransform = "capitalize";
// textTransform → CSS property applied via JS

let h7 = document.getElementById("abcd3");
// selecting third h1

h7.classList.add("hulu");
// classList.add → adds class without removing existing ones

h7.classList.remove("hulu");
// classList.remove → removes specified class

h7.classList.toggle("hulu");
// toggle → adds class if not present
// removes class if already present




// SOME IMPORTANT QUESTIONS

// 1️⃣ What is DOM?

// DOM (Document Object Model) is a programming interface that represents an HTML document as a 
// tree of objects, where each part of the page is treated as a node that 
// JavaScript can access, modify, add, or remove.

// 📌 In simple words:

// DOM is the bridge between HTML and JavaScript.



// 2️⃣ How does DOM represent the HTML structure?

// The DOM represents HTML as a tree structure, called the DOM Tree.

// The entire document is the root node
// Every HTML tag becomes an element node
// Text inside elements becomes text nodes
// Attributes belong to element nodes

// Example:
// <html>
//   <body>
//     <h1>Hello</h1>
//   </body>
// </html>

// DOM Tree:
// Document
//  └── html (Element)
//      └── body (Element)
//          └── h1 (Element)
//              └── "Hello" (Text)



// 3️⃣ Types of nodes in the DOM Tree

// The main types of DOM nodes are:

// Document Node – represents the entire HTML document
// Element Node – represents HTML elements (<div>, <h1>, <a>, etc.)
// Text Node – represents text inside elements
// Attribute Node – represents attributes of elements (id, class, etc.)
// Comment Node – represents HTML comments

// 📌 Most commonly used:
// 👉 Document Node, Element Node, Text Node



// 4️⃣ Difference between Element Node and Text Node

// Element Node	                    Text Node

// Represents HTML tags	            Represents text inside tags
// Can have attributes	            Cannot have attributes
// Can have child nodes	            Cannot have child nodes
// Example: <p>	                    Example: "Hello"




// 6️⃣ What does getElementsByClassName() return? Is it an array?

// getElementsByClassName() returns an HTMLCollection.

// ❌ It is NOT a real array
// ✅ It is an array-like object

// Properties:

// Indexed access ([0])
// Has length
// Live collection (auto-updates if DOM changes)
// ❌ Does NOT support array methods like map, filter



// 7️⃣ Difference between innerText, textContent, and 

// Property	              innerText	      textContent	      innerHTML

// Includes hidden text	  ❌ No	        ✅ Yes	            ✅ Yes
// Parses HTML	          ❌ No	        ❌ No	            ✅ Yes
// Performance	          Slow	          Fastest	           Medium
// Returns HTML	          ❌ No	        ❌ No	            ✅ Yes



// 8️⃣ When should you use textContent instead of innerText?

// You should use textContent instead of innerText when:

// You want better performance
// You want all text, including hidden text
// You don’t care about CSS styling
// You are extracting or updating raw text

// 📌 Interview one-liner:

// Use textContent when you need fast and accurate text without layout calculations.