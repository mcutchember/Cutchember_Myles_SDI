/**
 *Myles Cutchember
 * March 7, 2015
 * Section 00
 * Day 3: Prompts
 */

//alert("Running thru the 6 wit my WOES");

// Some Decisions Affect other decisions

// If it is warm then lets go to the beach, if it is not then let's go to the movies

// Get temp
var temp = prompt("We are going to figure out what you should do today\nWhat is the current temperature outside?");

// Validate that the user type in SOMETHING - did they leave it blank

if(temp === ""){
    //This code will run if the user types in nothing
    //Reprompt the user
    temp = prompt("Please do not leave this blank, it is required\nWhat is the current temperature");
}



// Validate that the user types in a number
// is NaN() - is it not a number
console.log(isNaN(7)); //Gives us false
console.log(isNaN("monkey")); // Gives us true


if(isNaN(temp)){
    //This code will run when temp is NOT a number
    // Reprompt the user for the information
    // Give the user a 2nd chance
    temp = prompt("Please only give a number\nEnter temperature outside.")
}



if(temp >=80) {
    console.log("Let's go to the beach!");
    //Set water temperature
    var waterTemp = prompt("What is water temperature");

    //Validate water temp
    if(waterTemp === "" || isNaN(waterTemp)){
        //This code will run if the variable is blank or not a number

        //Reprompt the user
        waterTemp = prompt("Please do not leave blank and only use numbers.\nWhat is the water temp?")

    }

    if (waterTemp > 75) {
        console.log("Let's go swimming!");

        var knowSwim = prompt("Do you know how to swim?");

        // Convert the text string to lower case
        // toLoweCase - dot syntax     - use a period

        knowSwim = knowSwim.toLowerCase();
        console.log(knowSwim);

        // Validate the knowSwim variable
        if(knowSwim != "yes" &&  knowSwim!="no"){
           // Reprompt the user
            knowSwim = prompt("Only type in yes or no.\nCan you swim?")

            knowSwim = knowSwim.toLowerCase();
        }


        if (knowSwim == "yes" || knowSwim=="Yes") {
            console.log("No floaties needed.")
        } else {
            console.log("Get a floatie.")
        }

    } else {
        console.log("Let's get a tan!")
    }
}else{
    console.log("Let's go to the movies!");

    // Do we have any kids in the group
    var kids = prompt("Are you bringing kids?");
    // Validate
    // Convert to lower case
    kids = kids.toLowerCase();
    if(kids!= "yes" && kids!="no"){
            //Reprompt
        kids = prompt("Please enter ONLY yes or no\nAre you bringing kids?")

            //Perminately convert to lower case
        kids = kids.toLowerCase()
    }

        //Test if we have kids
    if(kids === "no"){
        console.log("Let's see 50 Shades of Gray!")
    }else{
        console.log("Let's go see SpongeBob")
    }
}




// If the water temp is above 75, let's go swimming. If not lets get a tan

/* if(waterTemp >78){
    console.log("Let's go swimming!")
} else {
    console.log("Let's go to the tan!")
}
*/