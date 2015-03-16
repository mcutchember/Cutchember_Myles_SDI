/**
 *Myles Cutchember
 * March 15, 2015
 * Section 00
 * Loops Worksheet
 */

//alert("Running thru the 6 wit my WOES");

// While Loop Example
// We are going to figure out when you need to buy more beer.

var beer = prompt("How much beer do you have in the fridge?");


while(isNaN(beer) || beer ===""){
    //Re-prompt user
    beer = prompt("Please ONLY type a number")
}

while(beer >= 1){
    console.log("Grab a drink, you have "+beer+ " left");




beer--;
}

console.log("You are out of beer and presumably drunk, you have to got to the store.");