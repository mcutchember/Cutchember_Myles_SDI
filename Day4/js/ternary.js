/**
 *Myles Cutchember
 * March 7, 2015
 * Section 00
 * Day 3: Prompts
 */

//alert("Running thru the 6 wit my WOES");

// If your GPA is over 2.0, you can graduate

// Create a variable for GPA


var gpa = 3.5;

// Basic conditional

if(gpa > 2.0){
    console.log("You can graduate!");
}else{
    console.log("Work harder, you cannot graduate");
}

// (condition to test) ? code to run if true : code to run if false;

// Create a basic ternary function for our GPA

(gpa > 2.0) ? console.log("You can graduate") : console.log("Work harder, you cannot graduate!");

// If a child is under 10, then they must read Green Eggs and Ham, otherwise they can read the Time Machine

// Create a variable for child age anf for the book

var age = 66;
var book;

// Use a ternary to define the book

book = (age <10)? "Green Eggs and Ham" : "Time Machine";

console.log("The kid should read the "+book+".");

// Value of book if basic conditional

var bookBasic;

if(age<10){
    bookBasic = "Green Eggs and Ham";
}else{
    bookBasic = "The Time Machine";
}
console.log(bookBasic);