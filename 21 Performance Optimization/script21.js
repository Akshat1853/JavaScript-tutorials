// Debouncing

// aap koi action kr rhe ho aur aap ye nhi chaahte har action pe kucch ho, jab bhi mere actions ke beech
// koi specific gap aajaye to phir reaction perform ho, ise khte hai debouncing.

// debounce ek technique hai jisme function tabhi execute hota hai
// jab ek certain delay tak koi new event trigger na ho

// use case:
// search bar typing -> har key press pe API call nahi karni
// instead, user rukne ke baad hi call ho

function debounce(fnc, delay) {
  let timer; // ye timer id store karega (setTimeout ka)

  // ye function return hota hai jo actual me call hoga
  return function (...args) {
    // agar already koi timer chal raha hai to usko cancel kar do
    // taki previous function call execute na ho
    clearTimeout(timer);

    // naya timer set karo
    timer = setTimeout(() => {
      // delay ke baad actual function call hoga
      fnc(...args);
    }, delay);
  };
}

let input = document.querySelector("input");

// input event har key press pe trigger hota hai
input.addEventListener(
  "input",

  // debounce lagaya hai taki function immediately na chale
  debounce(function (dets) {
    // dets = event object (input event ka data)
    console.log(dets);
  }, 1000), // 1000ms = 1 second delay
);

// Flow samjho:
// user typing start karta hai
// har key press pe debounce function call hota hai
// previous timer cancel ho jata hai
// jab user 1 sec tak kuch nahi type karta
// tab hi fnc execute hota hai

// Key points:
// unnecessary calls ko reduce karta hai
// performance improve karta hai
// mainly search bars, resize events, scroll events me use hota hai







// throttle

// inteval par chalunga, action agar hota rha and ek interval bataya to utne interval me aapka event chalega.

// throttle ek technique hai jisme function ek fixed interval ke baad hi execute hota hai
// chahe event kitni bhi baar trigger ho

// difference from debounce:
// debounce -> last call execute karta hai (after delay)
// throttle -> fixed interval pe execute karta hai (continuous control)

function throttle(fnc, delay) {
  let timer = 0; // last execution ka timestamp store karega

  return function (...args) {
    let now = Date.now(); // current time (ms me)

    // check karo ki last execution ke baad delay pass hua ya nahi
    if (now - timer >= delay) {
      // agar delay pass ho gaya -> function run karo
      timer = now; // last execution time update karo
      fnc(...args);
    }
  };
}

input.addEventListener(
  "input",

  // throttle lagaya hai taki function fixed interval pe hi chale
  throttle(function () {
    console.log("ran");
  }, 1000), // har 1 second me max 1 baar chalega
);

// Flow samjho:
// user continuously type kar raha hai
// har key press pe event trigger hota hai
// lekin function sirf tab chalega jab last run ke baad 1 sec ho gaya ho

// Example:
// typing fast:
// 0ms -> run
// 200ms -> ignore
// 500ms -> ignore
// 1000ms -> run again

// Key points:
// rate limit karta hai function calls ko
// performance optimize karta hai
// scroll, resize, mousemove events me use hota hai







// Lazy Loading

// intersection se hum ye bta skte hai ki jo hmari screen hai, us screen ke ander jo bhi aaye, mtlb koi element
// agar screen ke niche hai hum use observe kr rhe hai jab bhi vo screen pe aaye ya aane wala ho hum koi action
// perform kra ske

// Step 1: Select all images from the DOM
// querySelectorAll returns a NodeList (like an array)
let imgs = document.querySelectorAll("img");

// Step 2: Create an IntersectionObserver
// This API watches elements and tells us when they enter/leave the viewport
const observer = new IntersectionObserver(
  function (entries, observer) {
    // 'entries' is an array of all observed elements
    // Each entry contains info about visibility of one element

    entries.forEach(function (entry) {
      // Step 3: Check if the element is visible in viewport
      // isIntersecting = true → element is visible
      if (entry.isIntersecting) {
        // Step 4: Get the actual image element
        const img = entry.target;

        // Step 5: Replace placeholder with real image
        // data-src contains the actual image URL
        img.src = img.dataset.src;

        // Step 6: Add 'loaded' class to apply CSS (fade-in effect)
        img.classList.add("loaded");

        // Step 7: Stop observing this image (optimization)
        // No need to track it again once loaded
        observer.unobserve(img);
      }
    });
  },
  {
    // root: null → means viewport is the root
    root: null,

    // threshold: 0.1 → trigger when 10% of image is visible
    threshold: 0.1,
  }
);

// Step 8: Attach observer to each image
// This starts watching all images
imgs.forEach(function (img) {
  observer.observe(img);
});




// code spliting
const btn = document.querySelector("button");

btn.addEventListener("click", async function(){
    let heavy = await import("./heavy.js");
    heavy.veryHeavy();
});




// Avoiding unnecessary reflows and repaints

// jab aap kai baar changes krte ho like new element add krdia yaa css change krdi to pure web page ke dom tree
// ko change krna padta hai to isse hmari website laggy hojati hai ya slow hojati hai isi cheez ko react solve
// krta hai using virtual dom. similar something we will see here in javascript.

let ul = document.querySelector("ul");

// this will make website laggy
// for(let i = 0; i < 100; i++)
// {
//     const li =document.createElement("li");
//     li.textContent = i;
//     ul.appendChild(li);
// }
// total 100 changes

// instead we use
// this will book space in memory(RAM)
const space = document.createDocumentFragment();

for(let i = 0; i < 100; i++)
{
    const li =document.createElement("li");
    li.textContent = i;
    space.appendChild(li);
}

// 1 change
ul.appendChild(space);