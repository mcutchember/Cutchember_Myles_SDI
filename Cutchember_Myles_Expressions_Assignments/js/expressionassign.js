/**
 *Myles Cutchember
 * March 7, 2015
 * Section 00
 * Expressions Assignments
 */

//alert("Running thru the 6 wit my WOES");

//Welcome message
alert("Welcome to the Digital Music Calculator.\n \nWe will learn about your monthly and annual spending on iTunes.");

//Creating Array
var weeklyPurchased = [];

// Finding out how much were the total cost of the music purchased.
var costofSongs = prompt("We will start by entering the cost of the song: ");

// Assigning Array
weeklyPurchased[0] = prompt("Not bad. How many songs did you buy in the first week? ");

weeklyPurchased[1] = prompt("Now, how many songs did you buy in Week 2? ");

weeklyPurchased[2] = prompt("Great! What about Week 3? ");

weeklyPurchased[3] = prompt("Finally, in Week 4? ");

//Adding weekly purchases
var amountofSongs = parseInt(weeklyPurchased[0]) + parseInt(weeklyPurchased[1]) + parseInt(weeklyPurchased[2]) + parseInt(weeklyPurchased[3]);

//Multiplying songs purchased by cost of each song
var weeklyCost = amountofSongs * parseInt(costofSongs);

console.log("Wow! You have spent a total of "+"$"+weeklyCost+ " on music this month.");

// Calculating annual cost
weeklyCost *= 12;

console.log("At this rate you will spend "+ "$"+weeklyCost+" annually.");

alert("Check out your results below.");

//The testing begins

/*
The cost of the song is $1
In the first week, I purchased 5 songs.
In the second week, I purchased 2 songs.
In the third week, I purchased 5 addition songs.
Finally, in the last week, I purchased 10 songs.

Using the Digital Music Calculator, I have spent a total of $94 on music this month.
If I continue to purchase music at this rate, I will spend $1128 annually.
*/



/*
The cost of the song is $4
In the first week, I purchased 4 songs.
In the second week, I purchased 1 song.
In the third week, I purchased 3 additional songs.
Finally, in the last week, I purchased 0 songs.
Using the Digital Music Calculator, I have spent a total of $32 on music this month.
If I continue to purchase music at this rate, I will spend $252.
*/

/*
The cost of the song is $14.

In the first week, I purchased 10 songs.
In the second week, I purchased 30 songs.
In the third week, I purchased 2 songs.
Finally, in the last week, I purchased 5 songs.

Using the Digital Music Calculator, I have spent a total of $ on music this month.
If i continue to purchase music at this rate, I will spend $ .
 */