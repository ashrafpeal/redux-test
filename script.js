// 'use scrict';

// select Element
const counter = document.getElementById( 'counter' );
const increment = document.getElementById( 'increment' );
const decrement = document.getElementById( 'decrement' );
const message = document.getElementById( 'message' );

// initializing
let count = 0;

increment.addEventListener( 'click', () => {
    count++;
    counter.innerHTML = count;
    // console.log( count );
});

decrement.addEventListener( 'click', () => {
    count--;
    // if (-1 == count) {
    //     message.innerHTML = "You have reached the limit.";
    // }
    counter.innerHTML = count;
    // console.log( count );
});
