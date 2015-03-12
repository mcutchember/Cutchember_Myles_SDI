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
var temp = 75;

// Set the water temp
var waterTemp = 75;

if(temp >=80){
    console.log("Let's go to the beach!");

    if(waterTemp >75){
         console.log("Let's go swimming!")
         } else {
         console.log("Let's get a tan!")
         }

}else {
    console.log("Let's go to the movies!");

    // Do we have any kids in the group

    var kids = "yes";
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