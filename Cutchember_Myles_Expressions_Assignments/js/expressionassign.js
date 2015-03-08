/**
 *Myles Cutchember
 * March 7, 2015
 * Section 00
 * Expressions Assignments
 */

//alert("Running thru the 6 wit my WOES");

//Welcome message
alert("Welcome to your digital music calculator.\n \nWe will learn about your spending on iTunes.");

//Creating Array
var weeklyPurchased = [];

// Finding out how much were the total cost of the music purchased.
var costofSongs = prompt("We will start by entering the cost of a song: ");

// Assigning Array
weeklyPurchased[0] = prompt("Cool, now how many songs did you buy in Week 1? ");

weeklyPurchased[1] = prompt("Now, how many songs did you buy in Week 2? ");

weeklyPurchased[2] = prompt("Week 3? ");

weeklyPurchased[3] = prompt("Finally, Week 4? ");

//Calculated weekly purchases

var totalCost = parseInt(weeklyPurchased[0]) + parseInt(weeklyPurchased[1]) + parseInt(weeklyPurchased[2]) + parseInt(weeklyPurchased[3]) * parseInt(costofSongs);

console.log("You have spent a total of "+"$"+totalCost+ " on music this month.");

// Calculating annual cost at this rate
totalCost *= 12;

console.log("At this rate you will spend "+ "$"+totalCost+" annually.");




