// map fucntion ek array ke top pe chalta hai aur uss array ke sare elements us map function ke ander aate hai
// and map function ek naya array return krta hai and us naye array mein jo bhi return kiya hoga whi placed
// hota hai

const arr = [1,2,3,4,5];

function myMap(arr, callback){
    let newArr = [];

    for(let i = 0; i < arr.length; i++)
    {
        newArr.push(callback(arr[i], i, arr));
    }

    return newArr;
}

let ans = myMap(arr, function(val){
    return val + 2;
})


// Call Stack (execution stack)

// JS single threaded hoti hai -> ek time pe ek hi kaam krti hai
// Jab tum function call krte ho to wo stack ke top pe chala jata hai.
// function complete hone ke baad stack nikal jata hai(pop ho jata hai).

function a(){
    console.log("a");
}

function b(){
    a();
    console.log("b");
}

function c(){
    b();
    console.log("c");
}

c();



// Web APIs
// console, alert, setTimeout, setInterval, prompt
// ye sb cheeze js ka part nhi hoti hai balki browser ki web apis ke feature hai and are given by browser



// Event loop

// Js me 2 type ke task available hai synchronous and asynchronous and we have studied both'
// ab jo bhi cheeze web APIS ke through chalti hai jaise ki timeouts vo jab bhi complete hoti hai
// hum unhe daalte hai callback queue or task queue me, ab event loop ek cheeze exist krti hai.

// ab jo bhi cheez call stack me hoti hai usko hum chalate hai basically to maan lo ek setTimeout hai
// wo complete hogya hai to wo call stack to me nhi jata kyuki asynchronous hai to wo task queue me jata hai
// aur wait krta hai ki jab main call stack khali hojayega to wo main stack me jayega aur execute hoga.
// ab ye sab kuch monitor krna aur check krna ki call stack khali hua ya nhi ye krta hai event loop aur jab
// call stack khali hojayega to wo task queue ka task uthake call stack me dalega aur usko execute krwayega
