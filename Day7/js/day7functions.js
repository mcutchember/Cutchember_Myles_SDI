/**
 *Myles Cutchember
 * March 15, 2015
 * Section 00
 * Day 7: Functions
 */

//alert("Running thru the 6 wit my WOES");

// basic structure of a function
// function functionName(){ code to run }

// Create a function that will console log out hello

function printHello(){

    console.log("Hello and Howdy!")
}

// Create a function that prints out more text
function printMore(){

    console.log("Prints more text!");
}



// function call the printHello function

printHello();
printMore();
printHello();

// Create a function that calculates the area of a rectangle

function calcArea(){
    // Calculate variables for width, height, and area
    var width = 20;
    var height = 30;
    var area = width * height;

    // Print out the area
    console.log("The area is "+area);

}

calcArea();