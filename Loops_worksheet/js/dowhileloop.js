/**
 *Myles Cutchember
 * March 15, 2015
 * Section 00
 * Do While Loops
 */

//alert("Running thru the 6 wit my WOES");

//Do While Loop Example

var beer = prompt("How much brew do you have?");
console.log("");

while(isNaN(beer) || beer ==="") {
    //Re-prompt user
    beer = prompt("Please ONLY type a number");
}

do {
    beer -= 1;
    console.log("Grab a drink, you have "+beer+" left");
} while (beer >= 1);

console.log("Time to go get more brews.");
