/**
 *Myles Cutchember
 * March 12, 2015
 * Section 00
 * Conditional Assignment
 */

alert("Welcome to the tip calculator.\n\nWe are going to determine how much each person has to pay for tip.");

// Declare variables & Initiate prompt
var people = prompt("How many people ate?");
var tipRate =15/100;
var badBehavior = tipRate - 5/100;
var goodBehavior = tipRate + 5/100;

//Making sure user inputs a number
if(people == "" || isNaN(people)){

    // Reprompt the user for the information
    people = prompt("Please enter a number only.\nEnter how many people ate?");
}

var cost = prompt("What is the cost of the meal?");

//Making sure user input a number
if(cost == "" || isNaN(cost)){

    // Reprompt the user for the information
    cost = prompt("Please enter a number only.\nEnter the cost of the meal?");
}

// Finding out the user experience
var experience = prompt("Was your experience good or bad?");
experience = experience.toLowerCase();
// Making sure the user only input good or bad
if(experience !="good" && experience != "bad"){
    experience = prompt("Please only enter good or bad.\nHow was your experience?");
    experience = experience.toLowerCase();
}
    //Calculate cost of tip for you only
if(people == 1){

    // Create ternary to calculate cost based on experience
    // (condition to test) ? code to run if true : code to run if false;
    (experience === "good") ? cost = goodBehavior*=parseInt(cost) : cost = badBehavior*=parseInt(cost);


    console.log("Based on your experience, it'll be nice to put up "+ "$"+(cost)+" for the tip.");

    //Calculate cost of tip for multiple people
}else if(people > 1){
    // Create ternary to calculate cost based on cost of meal, experience, and amount of people
    (experience === "good") ? cost = (goodBehavior*=parseInt(Math.round(cost))) / people : cost = (badBehavior*=parseInt(Math.round(cost))) / people;
    console.log("Based on your experience, it'll be nice for each person to put up "+ "$"+Math.round(cost)+" for the tip.")

}else{

    console.log("So your just going to run out on the bill?")
}

//Testing Testing Testing

/*
Prompt: "How many people ate?"
My input: "about twenty"
Prompt: "Please enter a number. How may people ate?"
 */

/*
 Prompt: "How many people ate?"
 My input: "1"
 Prompt: "What is the cost of the meal?"
 My input: "cat food"
 Prompt: "Please enter a number. What is the cost of the meal?"
 */

/*
 Prompt: "How many people ate?"
 My input: "1"
 Prompt: "What is the cost of the meal?"
 My input: "20"
 Prompt: "Was your experience good or bad?"
 My input: "It was aite."
 Prompt: "Please only enter good or bad. How was your experience?"
 */

/*
 Prompt: "How many people ate?"
 My input: "1"
 Prompt: "What is the cost of the meal?"
 My input: "20"
 Prompt: "Was your experience good or bad?"
 My input: "good."
 Prompt: "Based on your experience, it'll be nice to put up $4 for the tip."
 */

/*
 Prompt: "How many people ate?"
 My input: "1"
 Prompt: "What is the cost of the meal?"
 My input: "50"
 Prompt: "Was your experience good or bad?"
 My input: "bad."
 Prompt: "Based on your experience, it'll be nice to put up $5 for the tip."
 */

/*
 Prompt: "How many people ate?"
 My input: "3"
 Prompt: "What is the cost of the meal?"
 My input: "85"
 Prompt: "Was your experience good or bad?"
 My input: "good."
 Prompt: "Based on your experience, it'll be nice for each person to put up $6 for the tip."
 */

/*
 Prompt: "How many people ate?"
 My input: "8"
 Prompt: "What is the cost of the meal?"
 My input: "300"
 Prompt: "Was your experience good or bad?"
 My input: "bad"
 Prompt: "Based on your experience, it'll be nice for each person to put up $4 for the tip."
 */