// Author: Geraldine Ly
// Date: 10/28/2024

// // sortStr- a function that takes user input and sorts the letters
// //of their name
// function sortStr() {
//     let userName = ("enter your name:   ");
//     return str.split (""), sort().join("");

//     // var userName = window.prompt("hi. enter your name for a secret nickname.");
//     // console.log("userName =", userName);
//     //split string to array
//     // var nameArray = userName.split('');
//     // console.log("nameArray =", nameArray);
//     //sort the array
//     // console.log("nameArraySort =", nameArraySort);
//     //join array back to a string
//     // var nameSorted = nameArraySort.join('');
//     // console.log("nameSorted=", nameSorted);
//     //above code can be executed in one line of code, however I do not remember it from Thursday's class
//     // return nameSorted;
// }

// // call the function and print the function on the html doc
// document.writeln(sortStr());

// sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName(userName) {

    return userName.toLowerCase().split("").sort().join("");
}

// sortUserName - a function that takes user input and sorts the letters
// of their name
function randomizeName(userName) {
    // convert userName string to an array
    var nameArray = userName.toLowerCase().split("");
    console.log("nameArray =", nameArray);
    // shuffle array with our shuffle function
    var shuffledArray = shuffleArray(nameArray);
    console.log("shuffledArray =", shuffledArray);
    var shuffledString = shuffledArray.join("");
    // shift to Title Case (like a name)
    var newName = toTitleCase(shuffledString);
    // return array to a string
    return newName;
}

function main() {
    var userName = window.prompt("hello! please tell me your name for a secret code name :).");
    document.writeln("<style>:root {--textlen: " + userName.length + ";}</style>");
    var sortedName = sortUserName(userName);
    document.writeln("here's your code name: " + sortedName + "</br></br>");
}

// call the function
main();
