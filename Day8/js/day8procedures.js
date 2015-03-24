/**
 *Myles Cutchember
 * March 7, 2015
 * Section 00
 * Day 8: Procedures
 */

//alert("Running thru the 6 wit my WOES");


// This is a basic function

function calcAreaF(w,h){
    var area = w*h;
    return area;
}

//Function Call
var area = calcAreaF(6,8);
console.log("The area of the rectangle is "+area);


/////////////////////////////////////////////////////////////////////

// This is a  procedure
// A list of steps to do

function calcAreaP(w,h){
    var area = w*h;

    // We do NOT return this value
    console.log("Inside the procedure, the area is "+area);

}

// Function call for the procedure?
// Just the function name NO variable to catch is

calcAreaP(12,16);