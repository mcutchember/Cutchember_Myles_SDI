/**
 *Myles Cutchember
 * March 12, 2015
 * Section 00
 * Day 5: Steaks
 */

//alert("Mic Check 1 2, 1 2");

// Test a steak temperature and tell the user the done-ness level

/*

 Extra-rare or Blue (bleu) - 115–120 °F
 Rare (saignant) - 125–130 °F
 Medium rare (à point)	- 130–140 °F
 Medium (demi-anglais)	-	140–150 °F	145 °F
 Medium well (cuit)	-	150–155 °F
 Well done (bien cuit)	- 160 °F+

 */

// Create a variable for our steak temperature
var steakTemp = prompt("What is the temperature of your steak?");

//We have to test each of the cases above to see where our temp falls into.

if(steakTemp < 115){
    console.log("Your steak is uncooked")

} else if(steakTemp < 125){
    console.log("Your steak is Bleu")

} else if(steakTemp < 130){
    console.log("Your steak is saignant")

} else if(steakTemp < 140){
    console.log("Your steak is Medium Rare")

} else if(steakTemp < 150){
    console.log("Your steak is Medium")

} else if(steakTemp < 155){
    console.log("Your steak is Medium Well")

} else if(steakTemp < 160){
    console.log("Your steak is Well Done")
} else{
    console.log("Your steak is burnt")
}