/**
 *Myles Cutchember
 * March 7, 2015
 * Section 00
 * Day 8: Random
 */

//alert("Running thru the 6 wit my WOES");

// Create a function that will give us a random integer between two values

// Create variables for min and max values

var min = prompt("Lets find a random number between two values\nPlease enter your min value");

// Validate min value
while(isNaN(min) || min===""){
    //Re-prompt
    min = prompt("Please do not leave blank and only use numbers.\nWhat is the min value")
}


var max = prompt("Please enter your max value");
// Validate max value
while(isNaN(max) || max==="" || parseInt(max)<=parseInt(min)){

    if(isNaN(max)){
        //Re-prompt
        max = prompt("Please only use numbers.\nWhat is the max value")
    }else if(max===""){
        //Re-prompt
        max = prompt("Please do not leave blank.\nWhat is the max value")
    }else if(max<=min){
        //Re-prompt
        max = prompt("Please enter a higher value than your min number of "+min+"\nWhat is the max value")
    }


}



// Function Call
var ranNum = getRandom(min,max);
console.log("Your random number between "+min+ " and "+max+ " is "+ranNum);

// Create our function
function getRandom(min, max){

    // Generate a random integer
    var randomNumber = Math.round(Math.random()*(max-min)+parseInt(min));
    return randomNumber;

}

// 15 random number - console.log them out
for(var i=0; i<15; i++){
    console.log(getRandom(min,max));
}