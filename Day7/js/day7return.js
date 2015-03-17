/**
 *Myles Cutchember
 * March 15, 2015
 * Section 00
 * Day 7: Retuen
 */

//alert("Running thru the 6 wit my WOES");

// Return a value from our function to our main code

// Create a function calculate the area of a rectangle

function calcArea(w,h){

    var area = w*h;
    console.log("Inside the function, the area is "+area);


    // Return the area to the main code

    return area;

}

//Call the function
//Create a variable to catch the return value
var rectArea = calcArea(10,20);

//Console.log the area
//console.log(area);

console.log(rectArea);



// Create a function to calculate the area of a circle

function circleArea(r){
    // calc area Pi * r * r
    var area = Math.PI * r *r;

    // Return the value
    return area;
}

//function call this circleArea
// Create a variable to catch the return area

var circArea = circleArea(6);

// Console.log the results

console.log("The area of the circle is "+circArea);

// What is twice the circle area of a 6" circle

var resultsTwice = circArea*2;
console.log("Twice the are is "+resultsTwice);

