/**
 *Myles Cutchember
 * March 24, 2015
 * Section 00
 * Day 8: Multiples
 */

//alert("Running thru the 6 wit my WOES");

// Create multiple function using information from the user


// Calculate the perimeter and area of a rectangle

function periRect(w,h){
    // perimeter = 2 * width + 2 * height
    var p = 2*w+2*h;
    return p;
}

// Create an anon function for the area

var areaRect = function(w,h){
    var area = w*h;
    return area
};


// Prompt the user for width and height
var width = prompt("Lets figure out the perimeter and area of a rectangle\nWhats is the width");

//Validation
while(width === "" || isNaN(width)){
    // Re- prompt the user
    width = prompt("Please do not leave blank and only use numbers.\nWhat is your width.")
}

//ParseInt
width = parseInt(width);

var height = prompt("What is the height of the rectangle");

//Validation

while(height === "" || isNaN(height)){
    height = prompt("Please do not leave blank and only use number\nWhat is the height?")
}

//ParseInt
height = parseInt(height);

// Function Call

var resultPeri = periRect(width,height);
var resultArea = areaRect(width,height);


//Combined console log
console.log("The perimeter of your rectangle is "+resultPeri+" and the area is "+resultArea+".");

//////////////////////////////////////////////////////////////////

// Create a combined function

function combinedRect(w,h){
    //First calculate the perimeter
    var p = 2*w + 2*h;

    //Calculate the area
    var a = w*h;

    //Return both values

    return [p,a];

}

// Function call the combined array
var combinedResults = combinedRect(width,height);
console.log(combinedResults);
