// Author: Geraldine Ly
// Date: 10/28/2024

// sortUserName - a function that takes user input and sorts the letters
//of their name
function sortUserName () {
    var userName = window.prompt("hi. enter your name for a secret nickname.");
    console.log("userName =", userName);
    //split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    //sort the array
    console.log("nameArraySort =", nameArraySort);
    //join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted=", nameSorted);
    //above code can be executed in one line of code, however I do not remember it from Thursday's class
    return nameSorted;
}

// output
document.writeln("here's your secret nickname: ", sortUserName(), "</br>");
