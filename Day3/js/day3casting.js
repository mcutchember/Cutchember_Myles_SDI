/**
 *Myles Cutchember
 * March 7, 2015
 * Section 00
 * Day 3: Casting
 */

//alert("Running thru the 6 wit my WOES");

//Casting variables means treating one variable type life another... if possible

var stringVar = "6";
var results = 7 + stringVar;

console.log(results);

//Number() - treats whatever is inside like a number if possible

var castingResults = 7 + Number(stringVar);
console.log(castingResults);

// Cast numbers to be a text string
// String() - treat whatever inside as a text string

var areaCode = 407;
var prefix = 555;
var lineNumber = 1234;

var phoneNumber = String(areaCode) + String(prefix) + String(lineNumber);
console.log(phoneNumber);


console.log("(" + areaCode + ")" +prefix+ "-"+lineNumber);

// Parsing Integers
//parseInt() - Looks through a text string & returns an integer
// ONLY the first number in a string is returned
// & is the first character in the text string cannot be converted into a number, then it returns NaN

var a = parseInt("40 years old");
console.log(a);

//vs.

var b = Number("40 years old");
console.log(b);

var c = parseInt("He was 40");
console.log(c);

// Prompts ONLY return text strings!!!!!

var tshirtsOwned = prompt("How many tee's do you currently own");

// Ask the user how many they bought

var tshirtsBought = prompt("How many tee's did you buy today");

// Calculate the total number of tee's

var totalShirts = parseInt(tshirtsOwned) + parseInt(tshirtsBought);

console.log("You currently own " +totalShirts+ " shirts.");