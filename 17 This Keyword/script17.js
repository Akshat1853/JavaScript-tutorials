// this keyword special keyword hai kyuki jaise ki baaki saare keyword ki valye ya nature same rehta hai this
// ki value ya nature badal jaata hai is baat se ki aap usey kaha use kr rhe ho

// global scope
console.log(this); // global scope me this ki value hai window

// function scope me bhi this ki value window hoti hai
function ab() {
  console.log(this);
}

ab();

// method ke ander this ki value hoti hai pura object
// agar method humne () => {} arrow function se bnaya to this ki value obj nhi hogi window hojayegi
// function inside function method = window
// arrow function inside function method = object

// Arrow function hamesha this ki value apne parent se lete hai
let obj = {
  name: "harsh",
  sayName: function () {
    console.log(this);
  },
};

obj.sayName();

// Event listener pe add event listener ke ander this hamehsa vhi hoga jispe aapka add event listener lga hai
// means h1

// document.querySelector("h1").addEventListener("click", function () {
//   console.log(this);
// });

// classes me this ki value blank obj hoti hai jab aap usko new keyword ke sath call krte ho
class ABCD {
  a = 12;

  constructor() {
    console.log("heyhey");
    this.a = 12;
  }
}

let val = new ABCD();

// Call, Apply, Bind
// These methods are used to control what the value of "this" will be when a function is executed.

/* ---------------------------------------------------
   CALL METHOD
---------------------------------------------------*/

// call() invokes the function immediately
// The first argument sets the value of "this"
// The remaining arguments are passed individually

let obj1 = {
  name: "akshat",
};

function abc(a, b, c) {
  // "this" will refer to the object passed in call()
  console.log("Value of this:", this);

  // normal parameters passed to the function
  console.log("Arguments:", a, b, c);
}

// Here we explicitly set "this" to obj1
// And pass arguments individually
abc.call(obj1, 1, 2, 3);

/* ---------------------------------------------------
   APPLY METHOD
---------------------------------------------------*/

// apply() also invokes the function immediately
// The first argument sets the value of "this"
// The difference: arguments are passed as an ARRAY

let obj2 = {
  name: "akshat",
};

function abc2(a, b, c) {
  console.log("Value of this:", this);
  console.log("Arguments:", a, b, c);
}

// Here "this" becomes obj2
// Arguments are passed as an array
abc2.apply(obj2, [1, 2, 3]);

/* ---------------------------------------------------
   BIND METHOD
---------------------------------------------------*/

// bind() does NOT execute the function immediately
// Instead it RETURNS a new function
// In that new function, "this" is permanently bound to the provided object

let obj3 = {
  name: "akshat",
};

function abc3(a, b, c) {
  console.log("Value of this:", this);
  console.log("Arguments:", a, b, c);
}

// bind() returns a new function where "this" is set to obj3
// Arguments can also be preset here
let fnc = abc3.bind(obj3, 1, 2, 3);

// Function will run only when we call fnc()
fnc();



let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
  users: [],
  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },
  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
  },
  addUser: function () {
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });

    form.reset();
    this.renderui();
  },
  renderui: function () {
    document.querySelector(".users").innerHTML = "";
    this.users.forEach((user) => {
      const card = document.createElement("div");
      card.className =
        "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition";

      // Image
      const img = document.createElement("img");
      img.className =
        "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
      img.src = user.photo;
      img.alt = "User Photo";
      card.appendChild(img);

      // Name
      const name = document.createElement("h2");
      name.className = "text-2xl font-bold mb-1 text-blue-700";
      name.textContent = user.username;
      card.appendChild(name);

      // Role
      const role = document.createElement("p");
      role.className = "text-purple-500 mb-2 font-medium";
      role.textContent = user.role;
      card.appendChild(role);

      // Description
      const desc = document.createElement("p");
      desc.className = "text-gray-700 text-center";
      desc.textContent = user.bio;
      card.appendChild(desc);

      // Finally, append the card wherever needed
      document.querySelector(".users").appendChild(card);
    });
  },
  removeUser: function () {},
};

userManager.init();
