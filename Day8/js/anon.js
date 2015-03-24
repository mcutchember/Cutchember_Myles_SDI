/**
 *Myles Cutchember
 * March 24, 2015
 * Section 00
 * Day 8: Anon Functions
 */

//alert("Running thru the 6 wit my WOES");

// Basic Function
/*
function functionName(){

}
 */


// Anonymous Function
/*
var functionName = function(){

}
 */

// Anon Functions are extremely popular in JS and jQuery
// Highly used in object oriented programming
// Quick and Easy
// You can use either a basic or anon function - FOR NOW

// Function calls above definitions

var basicArea2 = triangleArea(2,9);
console.log("The area from the basic function before the definition is "+basicArea2);

/*Anon function call (<===THIS DOES NOT WORK, DO NOT PUT IT ABOVE DEFINITION!!!!!!)
var anonArea2 = triangleAreaAnon(3,4);
console.log("The area from the anon function before the definition is "+anonArea2);
*/



// Build a basic function for area of a triangle

function triangleArea(b,h){

    // Calc Area
    var area = .5*b*h;
    return area

}

// Anon Function

var triangleAreaAnon = function(b,h){
    var area = .5*b*h;
    return area;
};


// Function Call to Basic Function

var basicArea = triangleArea(5,6);
console.log("The area from the basic function is "+basicArea);

// Function Call to Anon Function

var anonArea = triangleAreaAnon(4,5);
console.log("The area from the anon function is "+anonArea);
