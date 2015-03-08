/**
 *Myles Cutchember
 * March 7, 2015
 * Section 00
 * Expressions Assignments
 */

//alert("Running thru the 6 wit my WOES");

alert("Welcome to your digital music calculator.\n \nWe will learn about your spending on iTunes.");

// Finding out how much were the total cost of the music purchased
var numofSongs = prompt("We will start by entering the cost of songs: ");

var costofSongs = prompt("Cool, now how many songs did you buy? ");

var totalCost = parseInt(costofSongs) * parseInt(numofSongs);

console.log("Got it, the total cost of music purchased was "+ "$"+ totalCost);

// The total of money spent monthly

alert("Now, we are going to find out the average money we spent on music in a month at this rate.");

var weekOne = prompt("Week 1 totals:");
var weekTwo = prompt("Week 2 totals:");
var weekThree = prompt("Week 3 totals:");
var weekFour = prompt("Week 4 totals:");

// Converting into array

var monthlySpending = [parseInt(weekOne), parseInt(weekTwo), parseInt(weekThree), parseInt(weekFour)];




console.log("Great!, this what you spent each week"+monthlySpending);