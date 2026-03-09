// browser me page ke koi bhi harkat kre event raise hojayega
// kuch screen pe ho aur aapko reaction dena ho to aapko event handle krna aana chaiye

// Selecting h1 element from DOM
let h1 = document.querySelector("h1");

// Click event listener on h1
h1.addEventListener("click", function () {
  h1.style.color = "red"; // Changes color on click
});

// Selecting paragraph element
let p = document.querySelector("p");

// Named function so it can be removed later
function click() {
  p.style.color = "green";
}

// Adding click event
p.addEventListener("click", click);

// Removing event immediately (demonstration purpose)
p.removeEventListener("click", click);

// p.addEventListener("dblclick", function(){
//     p.style.color = "yellow";
// });

// Selecting first input element
let inp = document.querySelector("input");

// Input event fires on every keystroke
inp.addEventListener("input", function (evt) {
  // evt.data gives the last typed character
  if (evt.data !== null) {
    console.log(evt.data);
  }
});

// change event tab chalta hai jab aapka koi input select ya textarea me koi change hojaaye

// Selecting dropdown and heading
let sel = document.querySelector("select");
let device = document.querySelector("#device");

// Change event on select dropdown
sel.addEventListener("change", function (evt) {
  console.log(evt.target.value);
  device.textContent = `${evt.target.value} Device Selected`;
});

// Selecting h2 element for keyboard display
let h2 = document.querySelector("h2");

// Global keyboard event
window.addEventListener("keydown", function (dets) {
  // Special handling for space key
  if (dets.key === " ") {
    h2.textContent = "SPC";
  } else {
    h2.textContent = dets.key;
  }
});

// Custom file upload logic
let btn = document.querySelector("#btn");
let fileinput = document.querySelector("#fileinput");

// Trigger file input click programmatically
btn.addEventListener("click", function () {
  fileinput.click();
});

// When file is selected
fileinput.addEventListener("change", function (dets) {
  const file = dets.target.files[0];
  if (file) {
    btn.textContent = file.name; // Display file name
  }
});

// Whenever form is submitted page is reloaded

// Selecting form, inputs and main container
let form = document.querySelector("form");
let inputs = document.querySelectorAll("#formInp");
let main = document.querySelector("#main");

// Form submit event
form.addEventListener("submit", function (dets) {
  dets.preventDefault(); // Prevent page reload

  // Creating card container
  let card = document.createElement("div");
  card.classList.add("card");

  // Profile image wrapper
  let profile = document.createElement("div");
  profile.classList.add("profile");

  // Image element
  let img = document.createElement("img");
  img.setAttribute("src", inputs[0].value);

  // Text elements
  let h3 = document.createElement("h3");
  h3.textContent = inputs[1].value;

  let h5 = document.createElement("h5");
  h5.textContent = inputs[2].value;

  let p = document.createElement("p");
  p.textContent = inputs[3].value;

  // Appending elements
  profile.appendChild(img);
  card.appendChild(profile);
  card.appendChild(h3);
  card.appendChild(h5);
  card.appendChild(p);

  // Adding card to DOM
  main.appendChild(card);

  // Clearing form fields except submit button
  inputs.forEach(function (inp) {
    if (inp.type !== "submit") {
      inp.value = "";
    }
  });
});

let abcd = document.querySelector("#abcd");

abcd.addEventListener("mouseover", function () {
  abcd.style.backgroundColor = "yellow";
});

abcd.addEventListener("mouseout", function () {
  abcd.style.backgroundColor = "red";
});

// window.addEventListener("mousemove", function(dets){
//   abcd.style.top = dets.clientY + "px";
//   abcd.style.left = dets.clientX + "px";
// })



// Event bubbling and Capturing


// Jab bhi hum click krte hai ya koi bhi event raise krte hai to aapka jo event flow hai vo 2 phases
// mein chalta hai:

// phase 1: Event top level element se neeche ki taraf aayega (capture phase)
// phase 2: Event raised element se parent ki taraf jaayega (bubble phase)

// aur phle hamesha phase 1 hoti hai par vo by default off hoti hai, agar hum usee on krde to phle
// phase 1 ka answer milega



// Event bubbling

// Jispe event aayega agar uspe listener nhi hua to hamara event uske parent pe listener dhundega
// aur aesa krte krte upar ki taraf move krega

// but agar usko listener mil bhi gya tabhi bhi vo upar parent ke listeners dhundega hi aur unhe
// chalayega hi

// button does not have an event listener but when we click on it this will run because nav is parent
// of button. agar button pe listener hota tab dono chalege

document.querySelector("#nav").addEventListener("click", function () {
  alert("Clicked");
});

// Event Delegation is a pattern used to handle events efficiently by attaching a single event listener 
// to a parent element instead of adding listeners to multiple similar child elements, and 
// then identifying the actual source of the event using the event.target property.
document.querySelector("ul").addEventListener("click", function (evt) {
  evt.target.classList.toggle("lt");
});

let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", function () {
  console.log("button clicked");
});

c.addEventListener("click", function () {
  console.log("c Clicked");
});

b.addEventListener("click", function () {
  console.log("b Clicked");
});

a.addEventListener("click", function () {
  console.log("a Clicked");
});


// Event Capturing

// Event capturing basicaly means aapne jaha bhi kisi event ko occur kra pattern niche se upar ki taraf
// nhi upar se niche ki taraf aayega.

// event capturing or phase 1 ko activate krne ke liye kisi bhi listener ke last me function ke curly
// braches ke baad , lgake true likh dege to capturing on hojayegi aur phase 1 chalega

let d = document.querySelector(".d");
let e = document.querySelector(".e");
let f = document.querySelector(".f");
let btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", function () {
  console.log("button clicked");
}, true);

d.addEventListener("click", function () {
  console.log("d Clicked");
});

e.addEventListener("click", function () {
  console.log("e Clicked");
}, true);

f.addEventListener("click", function () {
  console.log("f Clicked");
});