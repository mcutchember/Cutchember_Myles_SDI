/**
 *Myles Cutchember
 * March 15, 2015
 * Section 00
 * Day 7: Scope
 */

//alert("Running thru the 6 wit my WOES");

// Variable Scope

// variable inside and outside of a function

// Try not to use the same variable names. BUT
// In a big file this is going tot he impossible

// Create a variable for width in our MAIN CODE
// Scoped outside of the function - "Main code"

width = 5;

//Create a function that calculates the perimeter of a rectangle

function calcPeri(){

    //Create a variable called width inside a function
    // Scoped tot he function calcPeri
    var width = 10;

    // create a variable for height and perimeter
    var height = 20;
    var perimeter = width *2 + height*2;

    console.log("Inside of the function, the perimeter is "+perimeter);

    // Variables created inside of a function can NOT be accessed outside of a function
    // Variables created outside of a function CAN be accessed but usually will not be.

}

console.log("Before the function call, width = "+width);

// function call the calcPeri
calcPeri();
console.log("After the function call, width = "+width);


// Console.log the answer
// THIS DOES NOT WORK

//console.log("Outside of the function, the perimeter is "+ perimeter);

