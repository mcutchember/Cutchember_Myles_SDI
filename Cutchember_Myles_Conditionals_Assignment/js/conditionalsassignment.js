/**
 *Myles Cutchember
 * March 12, 2015
 * Section 00
 * Conditional Assignment
 */

alert("Welcome to the tip calculator.\n\nWe are going to determine how much each person has to pay for tip.");

// Declare variables & Initiate prompts
var people = prompt("How many people present?");
var tipRate =15/100;
var badBehavior = tipRate - 5/100;
var goodBehavior = tipRate + 5/100;


if(people == "" || isNaN(people)){

    // Reprompt the user for the information
    // Give the user a 2nd chance
    people = prompt("Please enter a number\nEnter how many people present");
}

var cost = prompt("What is the cost of the meal?");

if(cost == "" || isNaN(cost)){

    // Reprompt the user for the information
    // Give the user a 2nd chance
    cost = prompt("Please enter a number\nEnter how many people present");
}

if(people == 1){
    // Finding out the user experience
    var experience = prompt("Was your experience good or bad?");
    experience = experience.toLowerCase();
    // Making sure the user only input good or bad
    if(experience !="good" && experience != "bad"){
        experience = prompt("Please only enter good or bad.\nHow was your experience?");
        experience = experience.toLowerCase();
    }

    // Create ternary
    // (condition to test) ? code to run if true : code to run if false;
    (experience === "good") ? cost = goodBehavior*=parseInt(cost) : cost = badBehavior*=parseInt(cost);


    console.log("Each person will have to put up "+ "$"+cost+" for the tip.")

}