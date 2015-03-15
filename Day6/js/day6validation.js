/**
 * Myles Cutchember
 * March 7, 2015
 * Section 00
 * Day 3: Prompts
 */

//alert("Running thru the 6 wit my WOES");

// Ask the user for a number
var num1= prompt("Please enter a number: ");

// Validate that the user typed in a number OR didn't leave it blank

// Validate using a while loop
while(isNaN(num1) || num1===""){
    // Reprompt the user
    if(num1 === ""){
        //The user left it blank
        num1 = prompt("Hey did you forget to input? Please do not leave blank")
    }else if(isNaN(num1)){
        num1 = prompt("Please only enter type in numbers\nEnter a number.")
    }


}

// Ask the user a yes or no question

var userInput = prompt("Please enter yes or no");
// Convert to lower case
    userInput = userInput.toLowerCase();

// Validate
while(userInput != "yes" && userInput != "no" && userInput!="nope"){

    // Re-prompt
    userInput = prompt("Please only enter in yes or no")
}