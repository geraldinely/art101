/*
   Lab 15: AJAX
   Author: Geraldine Ly
   Date: 12/3/2024
*/

/*
 * Fetching data from the Pokémon API and displaying it onto GitHub Page.
 */

$(document).ready(function () {
   // event listener for the button
   $('#activate').click(function () {
       const pokemonId = Math.floor(Math.random() * 151) + 1;

       // make an AJAX call to the Pokémon API
       $.ajax({
           url: `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`, 
           type: "GET",
           dataType: "json",
           success: function (data) {
               console.log(data); // Log the data to inspect the structure

               // extract useful data from the response
               const name = data.name.charAt(0).toUpperCase() + data.name.slice(1); 
               const sprite = data.sprites.front_default; 
               const types = data.types.map(typeInfo => typeInfo.type.name).join(', '); 

               // create HTML content to display
               const outputHtml = `
                   <h3>${name}</h3>
                   <img src="${sprite}" alt="${name}">
                   <p><strong>Types:</strong> ${types}</p>
               `;

               // display data in the #output div
               $('#output').html(outputHtml);
           },
           error: function (jqXHR, textStatus, errorThrown) {
               console.error("Error:", textStatus, errorThrown);
               $('#output').html("<p>Failed to fetch Pokémon data. Please try again later.</p>");
           }
       });
   });
});
