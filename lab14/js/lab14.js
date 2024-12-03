/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Geraldine Ly
   Date: 11/25/2024
*/
// [[3, "fizz"], [5, "buzz"]]
//Method header should accept an array of tuples
//Hashmap, 
function fizzBuzzBoom() {
    let oneLongString ="";

    for (let num = 0; num <=20; num++) {
        console.log(num)
        let str ="";

        if (num % 3 === 0) {
            str+= "fizz";
        }

        if (num % 5 === 0) {
            str += "buzz";
        }

        if (num % 7 ===0) {
            str+= "boom";
        }

        if (str) {
            str += "!";
        } else {
            str = num.toString();
            oneLongString += str + "<br>";
        }

    }
    return $("#output").html(oneLongString);


}