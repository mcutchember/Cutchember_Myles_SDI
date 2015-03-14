/**
 *Myles Cutchember
 * March 7, 2015
 * Section 00
 * Day 6: While Loops
 */

//alert("Running thru the 6 wit my WOES");

// Basic While Loop

// Initialize a counter variable

var counter = 0;

// Start a while loop
//Condition to test goes inside parenthesis
while(counter<200){
    console.log("Somethings Never End");
    console.log(counter);

    // Make a change to the counter variable

    counter+=50;

}

// Do While Loop
// This Loop Will Run The Code First, THEN Check Condition

/*
do{
    //Code will run

} while(Condition to test) ;

 */

//Declare a counting variable

var i = 20;

do{

    console.log("The number is "+i);

    ///Change the counting variable
    i++
    
}while(i<10);