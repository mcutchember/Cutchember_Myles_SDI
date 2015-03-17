/**
 *Myles Cutchember
 * March 15, 2015
 * Section 00
 * Day 7: Beer
 */

//alert("Running thru the 6 wit my WOES");

// Code the song 99 bottles of beer on the wall

// Basic structure of for loop
// for(var i =0; condition to test; increment of change){}

for(var i=99; i>0; i--) {

    if(i===1){
        console.log("1 bottle of beer on the wall. 1 bottle of beer. You take one down and pass it around. No more bottles of beer on the wall.\n The End.");
    }else{
        console.log(i+" bottles of beer on the wall. "+i+ " bottles of beer. You take one down and pass it around. "+(i-1)+" bottles of beer on the wall.");

    }


}