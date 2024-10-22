// Author: Geraldine Ly
// Date: 10/22/2024

// Define Variables-
myTransport = ["Toyota Prius Prime", "bus", "rides from friends"];

//create an object for my main ride
myMainRide = {
  make: "Toyota",
  model: "Prius Prime",
  color: "White",
  year: 2017,
    //we can define a function within our object (called a method)
    // that uses the vale of year above (using this year)
    age: function() {
      return 2024 - this.year'
    }
}

// output
document.writeln("Kinds of transportation I us:", myTransport, "</br>");
//this allows us to write an object to the document
document.writeln("My Main Ride: <pre>")
JSON.stringify(myMainRide, null, '\t'), "</pre>"
