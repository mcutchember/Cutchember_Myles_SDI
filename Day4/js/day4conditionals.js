/**
 *Myles Cutchember
 * March 10, 2015
 * Section 00
 * Day 4: Conditionals
 */

//alert("Running thru the 6 wit my WOES");

// Basic Condition
/*
if (condition to test) {
    code to run is the condition is true
}

 */

// Create a Boolean variable

var oldEnough = false;


// If the kid is old enough, he can ride the ride
if(oldEnough){
    //Code to run if the kid is old enough
    console.log("The kid is old enough to ride the coaster");
} else {
    //Code to run if the kid is not old enough
    console.log("You are too young kiddo");
}


//Relational Operators

// If the kid is over 48 inches tall, then he can ride the coaster

var kidHeight = 47;

// Create a variable for min height requirements
var minHeight = 48;

// Create a variable for sneaker lifts

var sneakerLifts = 2;

// Test the kid height

if(kidHeight > minHeight){

    console.log("Kid is tall enough to ride the coaster");
} else if(kidHeight + sneakerLifts > minHeight){

    console.log("If you use enough napkins, you can ride the ride");

} else {
    console.log("Sorry you are too short")

}
