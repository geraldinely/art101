/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Geraldine Ly
   Date: 11/10/2024
*/

$(document).ready(function() {
    // Add buttons to each section
    $("#challenge").append("<button id='button-challenge'>Make Special</button>");
    $("#problems").append("<button id='button-problems'>Make Special</button>");
    $("#results").append("<button id='button-results'>Make Special</button>");
    
    // Add click listeners to each button
    $("#button-challenge").click(function(){
        $("#challenge").toggleClass("special");
    });

    $("#button-problems").click(function(){
        $("#problems").toggleClass("special");
    });

    $("#button-results").click(function(){
        $("#results").toggleClass("special");
    });
});
