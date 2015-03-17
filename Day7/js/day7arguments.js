/**
 *Myles Cutchember
 * March 15, 2015
 * Section 00
 * Day 7: Arguments
 */

//alert("Running thru the 6 wit my WOES");


// Arguments- Goes into functions - part of the function call

// Parameters - catch the arguments and in the function definition

// Create a function that calculates the area of a rectangle... again!

function calcArea(w,h){

    //var width = 10;
    //var height = 20;
    var area = w *h;
    console.log("The area is "+area)
}

// Call out function
// Add arguments to the function call
calcArea(10,20);
calcArea(20,40);


// Prompt the user for width and height

var width = prompt("Enter a width");

//ENTER VALIDATION HERE

var height = prompt("Enter a height");
calcArea(width,height);

// dog years

function dogYears(humanAge){
    //Dog years = human years *7;
    var dogAge = humanAge*7;
    console.log("Your age in dog years is "+dogAge);
}
//Call the dog functions
dogYears(4);


// Prompt user for human age

var userInput = prompt("Please enter your human age");

//call the dog function
dogYears(userInput);
