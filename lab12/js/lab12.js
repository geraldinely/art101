/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Geraldine Ly
   Date: 11/21/2024
*/

//Return Red Phoenix, Blue Dragons, Purple Turtles, Black Lions
// depending on length mod 4

function familySorting(str) {
  let len = str.length;
  let mod = len % 4;

  if (mod === 0) {
    return "red phoenix 🐦‍🔥";
  } else if (mod === 1) {
    return "blue dragons 🐉";
  } else if (mod === 2) {
    return "purple turtles 🐢";
  } else if (mod === 3) {
    return "black lions 🦁";
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElement