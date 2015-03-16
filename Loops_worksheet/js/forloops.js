/**
 *Myles Cutchember
 * March 10, 2015
 * Section 00
 * For Loops
 */

//alert("Running thru the 6 wit my WOES");

// Example of For Loop

var beer = prompt("How much beer do you have in the fridge?");


while(isNaN(beer) || beer ===""){
    //Re-prompt user
    beer = prompt("Please ONLY type a number")
}

for(; beer>=1; beer--){

    console.log("Get a drink, you have "+beer+" left in the fridge.")
}

console.log("Time to go get some more brews, but you are extremely drunk.\nLet's consider waiting on that.");