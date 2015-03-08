/**
 *Myles Cutchember
 * March 7, 2015
 * Section 00
 * Expressions Assignments
 */

//alert("Running thru the 6 wit my WOES");

alert("Welcome to your digital music calculator.\n \nWe will learn about your spending on iTunes.");

// Finding out how much were the total cost of the music purchased.
var numofSongs = prompt("We will start by entering the cost of songs: ");

var costofSongsWeekOne = prompt("Cool, now how many songs did you buy in Week 1? ");

var costofSongsWeekTwo = prompt("Now, how many songs did you buy in Week 2? ");

var costofSongsWeekThree = prompt("Week 3? ");

var costofSongsWeekFour = prompt("Finally, Week 4? ");

//Creating Array for Weekly Spending

var totalCost = parseInt(costofSongs) * parseInt(numofSongs);

console.log("Got it, the total cost of music purchased was "+ "$"+ totalCost);

var totalWeek = totalCost * 7;

console.log("At this rate, if you bought music everyday," +
"you'll spend "+ "$"+totalWeek+ " in a week");

totalWeek *= 4;

console.log("and $"+totalWeek+" in a month.");

// The total of money spent yearly

alert("Now, we are going to find out the average money we spent on music in a month at this.");
