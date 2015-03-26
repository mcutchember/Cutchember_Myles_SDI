/**
 *Myles Cutchember
 * March 7, 2015
 * Section 00
 * Day 3: Prompts
 */

//alert("Running thru the 6 wit my WOES");


//Figure out how much pizza cost per slice and cost per sq inch
//Prompt the user for the radius

var pizzaRadius=prompt("Welcome, let's calculate the cost of your pizza. What is the radius of your pizza");

//Validate

while(pizzaRadius === "" || isNaN(pizzaRadius)){

    //Re-Prompt User
    pizzaRadius=prompt("Please do not leave blank and only use numbers.\nWhat is the radius of your pizza.")

}

// Prompt user for cost of whole pizza
do{
    var pizzaCost = prompt("How much does your pizza cost in total?\n Reminder please do not leave blank and only use number");
}while(pizzaCost==="" || isNaN(pizzaCost));

//Prompt the user for how many slices are in their pizza

do{
    var pizzaSlices = prompt("How many slices are in your pizza\nRemember only use numbers and do not leave blank.")
}while(pizzaSlices==="" || isNaN(pizzaSlices));

// Function call to lord function
var results = lordFunction(pizzaRadius,pizzaCost,pizzaSlices);

//Console log info to user

console.log("Your pizza costs $"+results[0]+" per sq inch or $"+results[1]+" per slice.");


//Create a function that will run all of the other functions
function lordFunction(radius,cost,slices){
    // function will call the other 3 function and then return the values
    // Call the area function and capture the answer
    var area = pizzaArea(radius);

    //Call the function for sqIn Cost
    var areaCost = pizzaSqInCost(area,cost);

    //Call the slicePerPrice

    var slicePrice= pricePerSlice(slices,cost);

    // Return to our main code
    return [areaCost,slicePrice];
}


//Function that calculates the area of pizza
function pizzaArea(r){
    // area = r*r *PI
    var area =r*r*Math.PI;
    return area

}

//Function that calculates the price per sq in of a pizza

function pizzaSqInCost(area, price){
    //price / area
    var costperSqIn = price / area;

    //We should round this number to 2 decimal places
    costperSqIn = costperSqIn.toFixed(2);

    return costperSqIn;
}

// Function that calculates price per slice

function pricePerSlice(slice,price){
    // price / slices
    var costPerSlice = price / slice;

    //Round to 2 decimal
    costPerSlice = costPerSlice.toFixed(2);
    return costPerSlice;
}

