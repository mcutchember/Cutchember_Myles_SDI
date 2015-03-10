/**
 *Myles Cutchember
 * March 10, 2015
 * Section 00
 * Conditional Worksheet
 */

//alert("Running thru the 6 wit my WOES");

//Celsius to Fahrenheit converter

var degrees = 70;
var unit ="F";


// Creating If statement using formula

if(unit == "C" ){
    var fahrenheit =degrees*9/5+32;
    console.log("The temperature is "+fahrenheit+" degrees Fahrenheit")
}else{
    var celcius = (degrees-32)*5/9;
    console.log("The temperature is "+celcius+" degrees Celsius")
}

