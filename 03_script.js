// time display
const clock = document.getElementById('clock');

// this is digital clock and it changes every second

// let date = new Date();
// console.log(date.toLocaleTimeString()); 

// i want that this date run every time and it runs continuously. For this we use method -> setInterval

// setInterval -> isko ek method de do or interval bta to utne interval ke baad continously run krta rhega


setInterval( function(){
    let date = new Date();
    // console.log( date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);