// Local storage basically aapke browser me data store krke rakhta hai chahe browser band bhi hojaye
// data rhega stored, basically browser ka database hota hai local storage.

// Local Storage stores data in the browser permanently until the user deletes it manually.
// It is not sent to the server.
// Data is stored as key-value pairs.
// storage size is around 5MB


// session storage on the other hand is bit different, so if you save data in session storage and you
// close that up so what happens is aapka vo data delete ho jata hai

// Session Storage is similar to Local Storage but data is deleted when the browser tab closes.
// It only lasts for the session.
// storage size is around 5MB.
// Local Storage and Session Storage store only strings, to store objest you have to use JSON.stringify


// Cookies can handle less data than local storage and session storage
// Cookies are small pieces of data stored in browser and sent to the server with every HTTP request.

// They are mainly used for:
// Authentication
// Tracking users
// Saving preferences

// A cookie is stored as a key-value pair.
// storage size of cookie is around 4KB.
// cookies are less secure.
// Cookies can expire if their expiry is set.



// When to Use What

// Use Case	                Best Choice
// Login Authentication	    Cookies
// User Preferences	        Local Storage
// Temporary Data	        Session Storage
// Shopping Cart	        Local Storage



// Local Storage

// How to store in localStorage
localStorage.setItem("name", "harsh");
localStorage.setItem("name1", "Akshat");

// How to fetch items from localStorage
let val = localStorage.getItem("name");
console.log(val);

// How to delete item from localStorage
localStorage.removeItem("name");

// How to update items from localStorage
localStorage.setItem("name1", "Vaibhav");



// Session Storage

// Storing Data
sessionStorage.setItem("username", "Akshat");

// Getting Data
let userr = sessionStorage.getItem("username");
console.log(userr);

// Removing Data
sessionStorage.removeItem("username");

// Clearing Storage
sessionStorage.clear();



// Cookies

// Creating a Cookie
document.cookie = "username=Akshat";

// Cookie With Expiration Date
document.cookie = "username=Akshat; expires=Fri, 31 Dec 2027 12:00:00 UTC";

// Reading Cookies
console.log(document.cookie);

// Updating a Cookie
document.cookie = "username=John";

// Deleting a Cookie
document.cookie = "username=Akshat; expires=Thu, 01 Jan 1970 00:00:00 UTC";



// Important Notes
// Local Storage and Session Storage store only strings

// if you store objects:
localStorage.setItem("user", {name:"Akshat"});

// It will not work correctly.

// Correct way:
localStorage.setItem("user", JSON.stringify({name:"Akshat"}));

// Retrieve:
let user = JSON.parse(localStorage.getItem("user"));
console.log(user);


