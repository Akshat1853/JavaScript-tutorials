// Design Patterns in JavaScript



// Module Pattern

// Module pattern ek design pattern hai jisme hum appna code ek self executing function ke ander rakhte hai,
// taaki variables aur functions private rhe

// Iske ander se hum sirf wahi cheezein return krte hai jo bahar use krni hai

// Is pattern ka main fayda hai data hiding (encapsulation) aur clean structure taaki code secure,
// reusable aur manageable ban ske

// Module pattern me hum jo bhi cheeze bnayege vo ek IIFE ke ander bnayegge vo private hojata hai aur IIFE ke
// ander se return krna hota hai ek object, apko jo jo bahar access krna hai vo us object ke ander daldo

// IIFE
let Bank = (function () {
  let bankBalance = 12000;

  function checkBalance() {
    console.log(bankBalance);
  }

  function setBalance(val) {
    bankBalance = val;
  }

  function withdraw(val) {
    if (val <= bankBalance) {
      bankBalance -= val;
      console.log(bankBalance);
    }
  }

  return {
    checkBalance,
    setBalance,
    withdraw,
  };
})();

Bank.checkBalance();
Bank.withdraw(10000);
Bank.setBalance(15000);





// Revealing Module Pattern

// isme bas ek faraq aata hai ki jab aap object bhejte ho to aap jo bhej rhe ho usko kis naame se behjna hai
// ye aap decide kr skte ho baaki module pattern me jis name se tha usi name se bhej skte ho bs itna faraq hai

// jaise ki hum upar wale function me checkBalance withdrawn vegra bhej rhe the to hum unka name change krke
// bhi bhej skte the like

// // return {
//     check: checkBalance,
//     set: setBalance,
//     draw: withdraw,
//   };





// Factory function pattern

// Ek function bnate ho jo objects create krta hai (factory = object bnane ki machine)

// Factory Function pattern ek aisa design pattern hai jisme hum ek simple fucntion likhte hai jo naye objects
// bnakr return krta hai, bina class ya new keyword use kiye

// Is pattern ka main idea hai -> object creation ko ek fucntion ke through control karna.

// Har baar jab tum factory function call krte ho, tumhe ek naya object milta hai jisme apne methods aur
// (agar chaho to) private data ho skta hai.

// Yeh pattern specially useful hai jab tumhe ek type ke bahot sare objects chaiye, jaise users, products,
// tasks, etc.

function createProduct(name, price) {
  let stock = 10;

  return {
    name,
    price,
    checkStock() {
      console.log(stock);
    },
    buy(qty) {
      if (qty <= stock) {
        stock -= qty;
        console.log(`${qty} Pieces Booked - ${stock} Pieces left.`);
      } else {
        console.error(`We only have ${stock} pieces left.`);
      }
    },
    refill(qty) {
      stock += qty;
      console.log(`refilled the stock - ${stock} pieces now.`);
    },
  };
}

let iphone = createProduct("iphone", 70000);
iphone.buy(6);

let kitKat = createProduct("kitkat", 40);





// Observer Pattern

// Observer Pattern ek design pattern hai jisme ek object (subject)
// apne changes ko automatically notify karta hai multiple objects (observers) ko

// Real life example:
// YouTube channel (subject) -> subscribers (observers)
// Jab new video upload hoti hai -> sabko notification milta hai

// Isme 2 main parts hote hai:
// 1. Subject (jo data hold karta hai aur notify karta hai)
// 2. Observers (jo update receive karte hai)

// Subject ke paas observers ki list hoti hai
// Observers ko subscribe aur unsubscribe kiya ja sakta hai

// Jab subject me change hota hai -> wo sab observers ko update karta hai

// Basic flow:
// observer subscribe karega -> subject ke list me add hoga
// subject change hoga -> notifyObservers call hoga
// sab observers ka update() function run hoga

// Example structure:

class YoutubeChannel {
  constructor() {
    this.subscribers = [];
  }

  subscribe(user) {
    this.subscribers.push(user);
    user.update(`You have subscribed the channel.`);
  }
  unsubscribe(user) {
    this.subscribers = this.subscribers.filter((sub) => sub !== user);
    user.update(`You have un-subscribed the channel.`);
  }
  notify(message) {
    this.subscribers.forEach((sub) => sub.update(message));
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name}, ${data}`);
  }
}

let sheryians = new YoutubeChannel();
let user1 = new User("Harsh");
let user2 = new User("Amit");

sheryians.subscribe(user1);
sheryians.subscribe(user2);

sheryians.notify("new video is live on the channel.");
sheryians.unsubscribe(user2);

// Key points:
// loose coupling hota hai (subject ko pata nahi observer kya karega)
// scalable hai (multiple observers easily add ho sakte hai)
// event-driven systems me use hota hai

// Real use cases:
// Event Listeners in JS
// Redux state updates
// WebSockets / real-time updates
// Notification systems
