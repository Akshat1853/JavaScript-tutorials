// koi bhi code js me line by line chalega aur ye natural pattern hai ki code line by line chale, but
// kabhi kabhi kabhi aise cases aate hai jaha par code wait krta hai and utni der mein agla code chal jaata hai

// Example
console.log("hey1");
console.log("hey2");
setTimeout(() => {
  console.log("hey3");
}, 1000);

console.log("hey4");

// Sync Async
// aisa code jo line by line chale hota hai sync code
// aise code jo jab chalne ke liye ready hojaye tab chale hota hai async code

function kuchDerBaadChalunga(fnc) {
  setTimeout(fnc, Math.floor(Math.random() * 20) * 1000);
}

// ek function ko agar aap ek aur function bhej dete ho parameter mein to wo parameter wala function kehlata hai
// callback function

// this function being passed is called callback function
kuchDerBaadChalunga(function () {
  console.log("hey");
});





// Example of CallBack Chaining(callback Hell)

// This function simulates fetching a user's profile from a server
// username -> the username we want to search
// cb -> callback function that will run after data is fetched

function profileLekarAao(username, cb) {
  console.log("Fetching Profile Data..."); // message shown immediately

  // setTimeout is used to simulate an API delay (2 seconds)
  setTimeout(() => {
    // after 2 seconds the callback function is executed
    // and profile data is passed to it
    cb({ _id: 12122, username, age: 26, email: "huihui@hui.com" });
  }, 2000);
}

// This function simulates fetching all posts of a user
// id -> user id required to fetch posts
// cb -> callback that runs after posts are fetched

function saarePostLekarAao(id, cb) {
  console.log("Fetching Posts Data..."); // message printed immediately

  // simulate server delay (3 seconds)
  setTimeout(() => {
    // after 3 seconds posts are returned using callback
    cb({ _id: id, posts: ["hey", "hello", "good morning"] });
  }, 3000);
}

// This function simulates fetching saved posts of a user
// id -> user id
// cb -> callback that runs after saved posts are fetched

function savedPostsNikaalo(id, cb) {
  console.log("Fetching saved posts...");

  // simulate API delay
  setTimeout(() => {
    // return saved posts through callback
    cb({ _id: id, saved: [1, 2, 3, 4, 45, 7, 232] });
  }, 3000);
}

// Starting the flow by fetching profile data
// "harsh" is passed as the username

profileLekarAao("harsh", function (profileData) {
  // this runs after profile data is fetched (after 2 seconds)
  console.log(profileData);

  // now we use the profile's _id to fetch posts
  saarePostLekarAao(profileData._id, function (posts) {
    // this runs after posts are fetched
    console.log(posts);

    // now we fetch saved posts using the same user id

    savedPostsNikaalo(profileData._id, function (saved) {
      // this runs after saved posts are fetched
      console.log(saved);
    });
  });
});






// In today's time, instead of callbacks we use modern solution like Promises and Async/Await.

// Promise: aap ek promise bnate ho jo ki 2 states mein se ek state me jaa skta hai and wo yaa to resolve
// hoga ya to reject hoga ab wo kya hoga ye to time btayeega kyuki promise async code hota hai
// par hume dono ke liye code likhna padta hai.

// Promise 3 states me ho sakta hai:
// 1. pending  -> initial state (task chal raha hai)
// 2. fulfilled -> resolve ho gaya (success)
// 3. rejected -> error aa gaya

// Promise banate waqt hume ek function dena padta hai
// jisme do parameters hote hain: resolve aur reject

// resolve -> jab operation successful ho
// reject -> jab operation fail ho

// 3 seconds tak pr ki state rhegi pending, after 3 seconds future me 2 state hoskti hai resolve ya reject
let pr = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 10);
    if (rn > 5) {
      resolve("resolved with " + rn);
    } else {
      reject("rejected with " + rn);
    }
  }, 3000);
});

// agar resolve hua to then chalega aur agar reject hua to catch chalega, then aur catch dono apne function
// accept krte hai. resolve krte waqt agar koi value bheji to then ke function me aaayegi aur agar reject krte
// time koi value bheji to wo catch ke function me aayegi
pr.then(function (val) {
  console.log(val);
}).catch(function (val) {
  console.log(val);
});








// Async Await Example
// Async/Await is a modern way to handle Promises in JavaScript.
// It makes asynchronous code look like synchronous code, which makes it easier to read.

// A promise is being created here
// The promise will either resolve or reject after 3 seconds

let pr2 = new Promise(function (resolve, reject) {
  // setTimeout is used to simulate an asynchronous task (like an API call)
  setTimeout(() => {
    // generate a random number between 0 and 19
    let rn = Math.floor(Math.random() * 20);

    // if the random number is greater than 5 the promise resolves (success)
    if (rn > 5) {
      resolve("resolved2 with " + rn);
    }

    // otherwise the promise rejects (failure)
    else {
      reject("rejected2 with " + rn);
    }
  }, 3000); // delay of 3 seconds
});

// async keyword makes a function asynchronous
// inside an async function we can use the await keyword
// await is used to wait for a Promise to finish.
// When a function is declared with async, it automatically returns a Promise.

async function abcd(val) {
  // try-catch is used to handle errors when using await
  // similar to .then() and .catch() in promises

  try {
    // await pauses the execution of this function
    // until the promise pr2 is resolved or rejected

    let result = await pr2;

    // if the promise resolves, the resolved value is stored in val
    console.log(result);
  } catch (err) {
    // if the promise rejects, the error is caught here
    console.log(err);
  }
}

// calling the async function
// this will start the process

abcd();






// Fetch API + HTTP Basics

// JavaScript me ek inbuilt function hota hai fetch()
// fetch() ka use server ya kisi API se data lene ke liye hota hai.
// fetch ke andar hum URL dete hain, fetch us URL par request bhejta hai
// aur response lekar aata hai.

// fetch promise-based hota hai, isliye isko use karne ke 2 tarike hote hain:
// 1. .then() / .catch()
// 2. async / await

// JSON : JavaScript Object Notation
// JSON ek format hai jisme server se data bheja aur receive kiya jata hai.
// Yeh objects jaisa dikhta hai but actually ek string format hota hai.

fetch("https://randomuser.me/api/?results=5")
  .then(function (rawData) {
    // jab fetch request complete hoti hai to hume response milta hai
    // lekin response directly readable format me nahi hota

    // response ko JSON format me convert karna padta hai
    // .json() bhi ek promise return karta hai

    return rawData.json(); // .json() also returns a Promise This is why we need another .then().
  })

  .then((data) => {
    // ab data properly parsed JSON object ban chuka hai

    // randomuser API se 5 users ka data aata hai
    // results ek array hai jisme user objects hote hain

    // yaha hum first user ka first name print kar rahe hain

    console.log(data.results[0].name.first);
  })

  .catch(function (err) {
    // agar request fail ho jaye (network error, server error etc.)
    // to catch block execute hota hai

    console.log(err);
  });

// Same code using Async Await

//   async function getUsers() {
//   try {
//     let res = await fetch("https://randomuser.me/api/?results=5");
//     let data = await res.json();

//     console.log(data.results[0].name.first);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getUsers();
