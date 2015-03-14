/**
 *Myles Cutchember
 * March 7, 2015
 * Section 00
 * Day 3: Prompts
 */

//alert("Running thru the 6 wit my WOES");

// for(initialization:condition:increment of change) {}
// we use i ALOT in loop - because it stands for iteration

for(var i =0; i<20;i++){
    console.log("The value of i is "+i);
}

console.log(i);

// Break the loop

for(var j =0; j<5; j++){
    // Conditional to test if we should break loop
    // If the value of j is 3, then console.log something different and stop the loop

    if(j===3){
        // Stop the loop but first console.log out

        console.log("J is 3!!");
        break;
    }

    console.log("The value of j is "+j);

}

//Specific cases for each value

for(var k =0; k<3; k++){

    if(k === 0){
        console.log("The value is zero.");
    } else if(k === 1){
        console.log("The value is one.")
    } else if(k === 2){
        console.log("The value is two.")
    }


}