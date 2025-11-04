/*
 * Title: Main Script file
 * Description: A vanilla JS Implementation of costly DOM manipulation vs efficient DOM manipulation
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 07/01/2023
 *
 */

let array = [];
increment = 0;
let container = document.querySelector(".container");

// fast
// while (increment < 10000) {
//     array.push(++increment); // batch update
// }

// container.innerHTML = array.join(" "); // 1 dom operation

// slow

while (increment < 10000) {
    increment++;
    container.innerHTML += " " + increment; // 10 thousand dom operation
}
