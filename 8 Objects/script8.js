// Objects in JavaScript

// An object is a collection of key–value pairs.

let obj = {
  name: "harsh",
  age: 26,
  khaana: "kadi chawal",
  email: "test@test.com",
};

let aa = "name";

console.log(obj[aa]);
console.log(obj.age);
console.log(obj.khaana);

// Nested Object
const user = {
  name: "Harsh",
  address: {
    city: "Bhopal",
    pin: 462001,
    locations: {
      lat: 23.2,
      lng: 77.4,
    },
  },
};

// object destructuring
let { lat, lng } = user.address.locations;
console.log(`Lat: ${lat}, Lng: ${lng}`);

// Printing key and value using the for in loop
for (let key in obj) {
  console.log(`Key: ${key}, Value: ${obj[key]}`);
}

// Object.keys()

// jab bhi hume apne object ki keys ka ek array bnana ho tab object.keys ka use hota hai

console.log(Object.keys(obj));

// Object.entries

// Object.entries() converts an object into an array of key–value pairs.

// Returns
// 👉 An array of arrays:
// [[key1, value1], [key2, value2], ...]

let user1 = {
  name: "Akshat",
  age: 21,
  city: "Delhi",
};

let entries = Object.entries(user1);
console.log(entries);

// Output
// [
//   ["name", "Akshat"],
//   ["age", 21],
//   ["city", "Delhi"]
// ]

let obj2 = {
    name: "Akshat",
    age: 21,
    email: "akshat@gmail.com",
};

// Object.assign is used for copying object and add some modifications also
let obj3 = Object.assign({aura: Infinity}, obj2);
console.log(obj3);


// Deep clone

// A deep clone creates a completely independent copy of an object — 
// including all nested objects & arrays.

// Why Shallow Copy Fails
let obj4 = {
  name: "A",
  address: { city: "Delhi" }
};

let obj5 = { ...obj4 }; // shallow copy

obj5.address.city = "Mumbai";

console.log(obj4.address.city); // Mumbai 

// Because nested objects are still shared.


// Most common way to do deep cloning is using the JSON
let obj6 = {
  name: "B",
  address: { city: "Delhi" }
};

let obj7 = JSON.parse(JSON.stringify(obj6));
obj7.address.city = "Mumbai";

console.log(obj6.address.city);


// Explanation: 
// Stringify krne se object string bnjata hai aur koi refernce vgera nhi bachta aur phir dubara
// string ko object parse krne se bna dete hai to koi refernce game nhi bachta aur ek new copy 
// creater hoti hai

// Other way to do deep cloning is structuredClone() Method
let obj8 = structuredClone(obj6);
obj8.address.city = "Chandigarh";
console.log(obj6.address.city);


// Optional chaining

// Optional chaining (?.) lets you safely access deeply nested properties without throwing an 
// error if something is null or undefined.

// Instead of crashing ❌, it returns undefined ✅.

// Without Optional Chaining (Error-prone)
let newUser = {};
// console.log(newUser.address.city); // ❌ TypeError

// With Optional Chaining
console.log(newUser.address?.city); // undefined