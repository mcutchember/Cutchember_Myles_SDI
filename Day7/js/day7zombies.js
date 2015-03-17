/**
 *Myles Cutchember
 * March 15, 2015
 * Section 00
 * Day 7: Zombie Attack
 */

//alert("Running thru the 6 wit my WOES");

// ZOMBIE ATTCK

// We have accidently created a zombie at Full Sail.
// A zombie can bite 4 people a day and turn them into zombies the next day
// The CDC wants to know how many zombies there will be in 8 days

// Givings that we know

// How many zombies do we have
var numZombies = 1;

// How many bites per zombie per day
var numBites = 4;

// Number of days that the CDC wants
var days = 8;

// Create for loop to calculate zombie number
/*for(var i=1; i<=days; i++){

    // How many NEW zombies get made everyday
    var newZombies = numZombies * numBites;

    // Add the new zombies to our exhausted horde
    numZombies += newZombies;

    // Console.log the results
    console.log("There are "+numZombies+" number of Zombies on day #"+i+"!")
}
*/

// How long will it take to get a million zombies

var numDays= 1;

while(numZombies <= 1000000){

    // How many NEW zombies get made everyday
    var newZombies = numZombies * numBites;

    // Add the new zombies to our exhausted horde
    numZombies += newZombies;

    // Console.log the results
    console.log("There are "+numZombies+" number of Zombies on day #"+numDays+"!");

    numDays++


}

console.log("It will take "+(numDays-1)+" days to reach a million zombies. ");