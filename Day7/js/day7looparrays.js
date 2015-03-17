/**
 *Myles Cutchember
 * March 15, 2015
 * Section 00
 * Day 7: Loop Arrays
 */

//alert("Running thru the 6 wit my WOES");


// Tell each member of the Scooby gang that they solved a mystery

// Create an array og gang members

var names = ["Scooby Doo", "Shaggy", "Velma", "Daphne", "Fred"];

// Add scrappy to the gang

names.push("Scappy");

// Create for loop to cycle through the array

for(var i =0; i<names.length; i++){
    // console.log each person
    console.log("You solved the case "+names[i]+"!")


}


// Keep track of our bills and get to total and average

var bill = [50, 10, 5, 20, 10, 60, 70];

// Create variable for total and average

var total = 0;
var average =0;

// Create a variable to track item total

var numItems =0;

for(var j=0; j<bill.length; j++){

    // Only add them if they are equal to or over 15

    if(bill[j]>=15){

        // Add each bill to the total
        total += bill[j];
        numItems++
    }




}

console.log("The total is $"+total);

// Calculate the average

average = total / numItems;

console.log("The average is $"+average);
