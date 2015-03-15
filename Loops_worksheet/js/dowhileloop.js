/**
 *Myles Cutchember
 * March 15, 2015
 * Section 00
 * Do While Loops
 */

//alert("Running thru the 6 wit my WOES");

//Do While Loop Example

var beer = prompt("How much beer do you have");
do {
    beer -= 1;
    console.log("You have "+beer+" left");
} while (beer >= 1);

console.log("Time to go get more brews.");