/**
 *Myles Cutchember
 * March 15, 2015
 * Section 00
 * Function Worksheet
 */

//alert("Running thru the 6 wit my WOES");

// Circumference

// Calculate the circumference of a circle

function circleCircum(r){
    // C = 2*PI*r
    var circumference = 2 * Math.PI * r;

    // Return the value
    return circumference;
}

//function call this circleArea
// Create a variable to catch the return area

var circEqual = circleCircum(6);

// Console.log the results

console.log("The circumference of the circle is "+circEqual);


