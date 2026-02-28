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