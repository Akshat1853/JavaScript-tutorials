// suppose i want to print Hello on the console but i do not want to print it immediately
// but i want to print it after 10 seconds then in this case we use setTimeOut() function

// setTimeOut() function accepts a function and time in miliseconds as arguments
// setTimeOut will run the argument function after time provided in miliseconds

let tm = setTimeout(() => {
  console.log("Hello");
}, 5000);

// suppose i want to keep printing Hello after every 2 seconds then in that case
// we use setInterval() function which accepts same parameter also works in same way
// just here it will keep running after every t seconds which are provided as arguments

let It = setInterval(() => {
  console.log("Hello");
}, 2000);

// clearTimeOut and clearInterval functions are used to remove the timeOuts and intervals we have set
clearInterval(It);
clearTimeout(tm);

let count = 10;

let interval = setInterval(function () {
  if (count >= 0) {
    console.log(count);
    count--;
  } else {
    clearInterval(interval);
  }
}, 1000);

// Download progress bar
let count2 = 0;
let seconds = 5;

let progress = document.querySelector(".progress-bar");
let precentText = document.querySelector("#precentText");

let intv = setInterval(
  function () {
    if (count2 <= 99) {
      count2++;
      progress.style.width = `${count2}%`;
      precentText.textContent = `${count2}%`;
    } else {
      document.querySelector("h2").textContent = "Downloaded.";
      clearInterval(intv);
    }
  },
  (seconds * 1000) / 100,
);


/* Auto hide alert banner after 3 seconds */

let alertBanner = document.querySelector("#alertBanner");

setTimeout(function () {
  alertBanner.style.opacity = "0";

  setTimeout(function () {
    alertBanner.style.display = "none";
  }, 500);
}, 3000);
