// ======================================================
// TASKS
// 1. Create new cards
// 2. Save card data to localStorage
// 3. Load cards from localStorage
// 4. Handle stack movement buttons
// 5. Handle filters (future feature)
// ======================================================

// ======================================================
// ADD SAMPLE CARDS ONLY IF LOCAL STORAGE IS EMPTY
// ======================================================

const sampleCards = [
  {
    imageUrl: "https://randomuser.me/api/portraits/women/65.jpg",
    fullName: "Fatima Uma",
    homeTown: "Singapore",
    purpose: "Business meeting",
    selected: "important",
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/men/45.jpg",
    fullName: "Arjun Mehta",
    homeTown: "Mumbai",
    purpose: "Project discussion",
    selected: "urgent",
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    fullName: "Sophia Carter",
    homeTown: "London",
    purpose: "Client onboarding",
    selected: "emergency",
  },
];

// Only add sample data if storage is empty
if (!localStorage.getItem("tasks")) {
  localStorage.setItem("tasks", JSON.stringify(sampleCards));
}

// ======================================================
// SELECT IMPORTANT DOM ELEMENTS
// ======================================================

let addNote = document.querySelector("#add-note");
let formContainer = document.querySelector(".form-container");
let closeForm = document.querySelector(".closeForm");

const stack = document.querySelector(".stack");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");

const form = document.querySelector("form");

const imageUrlInput = form.querySelector(
  "input[placeholder='https://example.com/photo.jpg']",
);

const fullNameInput = form.querySelector(
  "input[placeholder='Enter full name']",
);

const homeTownInput = form.querySelector(
  "input[placeholder='Enter home town']",
);

const purposeInput = form.querySelector(
  "input[placeholder='e.g., Quick appointment note']",
);

const categoryRadios = form.querySelectorAll("input[name='category']");

const submitButton = form.querySelector(".submit-btn");

// ======================================================
// SAVE CARD DATA TO LOCAL STORAGE
// ======================================================

function saveToLocalStorage(obj) {
  let oldTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  oldTasks.push(obj);

  localStorage.setItem("tasks", JSON.stringify(oldTasks));
}

// ======================================================
// APP CONTAINER
// ======================================================

const app = document.querySelector(".app");

// ======================================================
// OPEN FORM MODAL
// ======================================================

addNote.addEventListener("click", function () {
  formContainer.style.display = "flex";

  app.style.display = "none";
});

// ======================================================
// CLOSE FORM MODAL
// ======================================================

closeForm.addEventListener("click", function () {
  formContainer.style.display = "none";

  app.style.display = "flex";
});

// ======================================================
// FORM SUBMIT EVENT
// ======================================================

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const imageUrl = imageUrlInput.value.trim();
  const fullName = fullNameInput.value.trim();
  const homeTown = homeTownInput.value.trim();
  const purpose = purposeInput.value.trim();

  let selected = false;

  categoryRadios.forEach(function (cat) {
    if (cat.checked) {
      selected = cat.value;
    }
  });

  // =========================
  // VALIDATION
  // =========================

  if (imageUrl === "") {
    alert("Please enter an image URL.");
    return;
  }

  if (fullName === "") {
    alert("Please enter your full name.");
    return;
  }

  if (homeTown === "") {
    alert("Please enter your home town.");
    return;
  }

  if (purpose === "") {
    alert("Please enter the purpose.");
    return;
  }

  if (!selected) {
    alert("Please select a category.");
    return;
  }

  // =========================
  // SAVE CARD
  // =========================

  saveToLocalStorage({
    imageUrl,
    fullName,
    purpose,
    homeTown,
    selected,
  });

  alert("Form submitted successfully!");

  form.reset();

  formContainer.style.display = "none";

  app.style.display = "flex";

  showCards();
});

// ======================================================
// DISPLAY CARDS
// ======================================================

function showCards() {
  stack.innerHTML = "";

  let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  allTasks.forEach((task) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Avatar image
    const avatar = document.createElement("img");
    avatar.src = task.imageUrl;
    avatar.alt = "profile";
    avatar.classList.add("avatar");

    // Name
    const name = document.createElement("h2");
    name.textContent = task.fullName;

    // Home town
    const hometownInfo = document.createElement("div");
    hometownInfo.classList.add("info");

    const hometownLabel = document.createElement("span");
    hometownLabel.textContent = "Home town";

    const hometownValue = document.createElement("span");
    hometownValue.textContent = task.homeTown;

    hometownInfo.appendChild(hometownLabel);
    hometownInfo.appendChild(hometownValue);

    // Purpose
    const bookingsInfo = document.createElement("div");
    bookingsInfo.classList.add("info");

    const bookingsLabel = document.createElement("span");
    bookingsLabel.textContent = "Purpose";

    const bookingsValue = document.createElement("span");
    bookingsValue.textContent = task.purpose;

    bookingsInfo.appendChild(bookingsLabel);
    bookingsInfo.appendChild(bookingsValue);

    // Buttons
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");

    const callBtn = document.createElement("button");
    callBtn.classList.add("call");
    callBtn.innerHTML = `<i class="ri-phone-line"></i> Call`;

    const msgBtn = document.createElement("button");
    msgBtn.classList.add("msg");
    msgBtn.textContent = "Message";

    buttonsDiv.appendChild(callBtn);
    buttonsDiv.appendChild(msgBtn);

    // Append all elements
    card.appendChild(avatar);
    card.appendChild(name);
    card.appendChild(hometownInfo);
    card.appendChild(bookingsInfo);
    card.appendChild(buttonsDiv);

    stack.appendChild(card);
  });

  updateStack();
}

// show cards on page load
showCards();

// ======================================================
// STACK VISUAL EFFECT
// ======================================================

function updateStack() {
  const cards = document.querySelectorAll(".stack .card");

  cards.forEach((card, index) => {
    card.style.zIndex = cards.length - index;

    card.style.transform = `translateY(${index * 10}px) scale(${1 - index * 0.02})`;

    card.style.opacity = `${1 - index * 0.05}`;
  });
}

// ======================================================
// STACK CONTROLS
// ======================================================

// Move last card to top
upBtn.addEventListener("click", function () {
  let lastChild = stack.lastElementChild;

  if (lastChild) {
    stack.insertBefore(lastChild, stack.firstElementChild);

    updateStack();
  }
});

// Move first card to bottom
downBtn.addEventListener("click", function () {
  let firstChild = stack.firstElementChild;

  if (firstChild) {
    stack.appendChild(firstChild);

    updateStack();
  }
});
