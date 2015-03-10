/**
 *Myles Cutchember
 * March 7, 2015
 * Section 00
 * Day 3: Prompts
 */

alert("Running thru the 6 wit my WOES");

// Basic conditional, if we have enough to buy a car

// Create a few variable

var budget = 15000;
var carPrice = 23000;
var payCheck = 1600;

if(budget>=carPrice){
    console.log("You can afford your car!")
}else{
    console.log("You are broke! Take the bus")
}

//We can buy the car if our budget is greater than or equal to the car price OR our paycheck is more than $1500

if(budget >= carPrice || payCheck>1500){
    console.log("Congrats! You can buy the car")
}else{
    console.log("You don't make enough money and your budget is too low");
}

/*
True Table for ||  "Or"

t || t = true
t || f = true
f || t = true
f || f = false
 */

/*
True Table for && "And"

t && t = true
t && f = false
f && t = false
f && f = false
 */

// You can buy a car if the budget is greater than or equal to the car price and your paycheck is over $1500

if(budget>=carPrice && payCheck>1500){
    console.log("You got yourself a new whip")

}else{
    console.log("Just keep saving bruh")
}