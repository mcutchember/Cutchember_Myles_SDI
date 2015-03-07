/**
 * Myles Cutchember
 * March 7, 2015
 * Section 00
 * Day 3: Arrays
 */

//alert("Mic check 1,2 1,2");

//Create a basic array
var avengersNames=["Thor", "Hulk", "Iron Man", "Captain America"];

//Print out whole array
console.log(avengersNames);

//Print out one specific item in the array.
console.log(avengersNames[2]);

//Swap items in array
avengersNames[1]="Black Widow";
console.log(avengersNames);

// Use a variable for the index number

var num = 3;
console.log(avengersNames[num]);

//Find the length of an array
//length property = How many items are in the array.
//dot syntax - fancy for use a period
console.log(avengersNames.length);


//Add an item to our array
avengersNames[4]="Hawkeye";

avengersNames[avengersNames.length]="Wolverine";

console.log(avengersNames);

//Picking oranges

var orangesPicked = [13, 350, 1000, 600];

//How Many Oranges Did We Pick Today?

var totalOranges = orangesPicked[0] + orangesPicked[1] + orangesPicked[2] + orangesPicked[3];

console.log("The total # of oranges picked is "+totalOranges+".");

var averageOranges= totalOranges/orangesPicked.length;
console.log("The average number of oranges picked per day is "+averageOranges);


// Create an array of fruit
var fruitBowl = ["apple", "mango", "grape", "banana"];
console.log(fruitBowl);

// push - add into the next open spot
//dot syntax - use a period
fruitBowl.push("strawberry");
console.log(fruitBowl);

fruitBowl.push("pineapple");
console.log(fruitBowl);

// pop - removes the last item form the array
// it also returns that item
var caughtItem = fruitBowl.pop();

console.log(fruitBowl);
console.log(caughtItem);

