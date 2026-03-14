// ----------------------------
// Constructor Function Example
// ----------------------------

function CreateBiscuits(name, price, qnt, company, category) {
  // 'this' refers to the new object that will be created using 'new'
  ((this.name = name),
    (this.price = price),
    (this.qnt = qnt),
    (this.company = company),
    (this.category = category));
}

// Creating objects using the constructor function
let bisc1 = new CreateBiscuits("Oreo", 10, 5, "Cadbury", "Chocolate");
let bisc2 = new CreateBiscuits("Fantasy", 20, 3, "Parle", "Chocolate filled");

console.log(bisc1);
console.log(bisc2);

// Hume seekhna hai factories banana, mtlb ki aap ek baar blueprint bana do ki har object kaise dikhega and hum
// log naye naye objects with different value bna paayege, yhi upar upar se poora kaam hai OOPS mein
// Above comment ka matlab:
// Constructor function ek blueprint ki tarah kaam karta hai jisse hum multiple objects create kar sakte hain.


// ----------------------------
// Another Constructor Function
// ----------------------------

function CreatePencil(name, price, color, company) {
  // Properties of pencil object
  this.name = name;
  this.price = price;
  this.color = color;
  this.company = company;
}

// Creating objects
let pencil1 = new CreatePencil("Natraaj", 10, "black");
let pencil2 = new CreatePencil("Doms", 10, "red");

// agar tumhara constructor function koi field apne prototype par attach krle to us constructor se bnne wale
// sbhi new instances yaani ki objects ke pass wo field automatically chali jaati hai
// Explanation:
// Prototype par jo methods add hote hain wo sabhi objects share karte hain.
// Isse har object me method ki alag copy nahi banti (memory efficient).

CreatePencil.prototype.write = function (text) {
  // Creating an h1 element
  let h1 = document.createElement("h1");

  // Text jo likhna hai
  h1.textContent = text;

  // Pencil ke color se text color set hoga
  h1.style.color = this.color;

  console.log(h1);

  // Page par add karna
  document.body.append(h1);
};

console.log(pencil1);
console.log(pencil2);


// ----------------------------
// Classes in JavaScript
// ----------------------------
// Classes ES6 syntax hai jo internally prototypes hi use karti hai.

class CreatePen {
  constructor(name, company, price, color) {
    // Constructor automatically call hota hai jab new object banate hain
    this.name = name;
    this.company = company;
    this.price = price;
    this.color = color;
  }

  // Method to remove written text of same color
  erase() {
    document.querySelectorAll("h1").forEach((ele) => {
      if (ele.style.color === this.color) {
        ele.remove();
      }
    });
  }

  // Method to write text
  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;

    document.body.appendChild(h1);
  }
}

// Creating objects from class
let p1 = new CreatePen("Trimax", "renolds", 55, "black");
let p2 = new CreatePen("Flow Gel", "renolds", 20, "red");


// ----------------------------
// User Class
// ----------------------------

class User {
  constructor(name, address, username, email) {
    // Basic user details
    this.name = name;
    this.address = address;
    this.username = username;
    this.email = email;
  }

  // Method for writing text
  write(text) {
    let h1 = document.createElement("h1");

    // Showing username with message
    h1.textContent = `${this.name} : ${text}`;
  }
}


// ----------------------------
// Class Inheritance
// ----------------------------

class Admin extends User {
  constructor(name, address, username, email) {
    // super() parent class ka constructor call karta hai
    super(name, address, username, email);

    // Extra property only for admin
    this.role = "admin";
  }

  // Admin can remove all messages
  remove() {
    document.querySelectorAll("h1").forEach((elem) => {
      elem.remove();
    });
  }
}

// Creating user objects
let u1 = new User("Harsh", "Bhopal", "async123", "hey@heyhey.com");
let u2 = new User("Harshita", "Delhi", "Harshitaaaaaaa", "hey2@heyhey.com");

// Creating admin object
let a = new Admin("admin1", "India", "adminnn", "a@a.a");


// ----------------------------
// Prototypal inheritance
// ----------------------------

// ek object hai aap chaaho to uski sari props/ methods ko inherit kra dete ho doosre object mein

let coffee = {
  color: "dark",

  // Method inside object
  drink: function () {
    console.log("gut gut gut");
  },
};

// Object.create() ek naya object banata hai jiska prototype coffee object hota hai
let arabiataCoffee = Object.create(coffee);

// New property added to the new object
arabiataCoffee.taste = "bitter";

// Method inherited from coffee
arabiataCoffee.drink();

console.log(arabiataCoffee);
