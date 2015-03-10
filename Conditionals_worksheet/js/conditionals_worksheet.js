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
    var celsius = (degrees-32)*5/9;
    console.log("The temperature is "+celsius+" degrees Celsius")
}

// Check The Login

//Declaring variables

var userNameEntered = "Myles";
var passwordEntered = "password";
var correctUserName = "Myles";
var correctPassword = "ilovecorn";

// Create if statement

if(correctUserName == userNameEntered && passwordEntered == correctPassword){
    console.log("Welcome, "+correctUserName+"!")

// If the user name is not correct
}else if(userNameEntered =! correctUserName){
    console.log("User not found. Try again")
    //if the user name is correct but the password is not
}else{
    console.log("Password does not match our records.")
}