/**
 *Myles Cutchember
 * March 7, 2015
 * Section 00
 * Day 3: Prompts
 */

//alert("Running thru the 6 wit my WOES");

// Math.round() = Basic rounding .5 goes up & .499 goes down

var num1 = 9.4444;
console.log(num1);
console.log(Math.round(num1));

// Math.floor() = Always rounds down

var num2 = 6.1;
console.log(num2);
console.log(Math.floor(num2));

// Math.ceil() = Always rounds up is there is a decimal

var num3 = 4.15;
console.log(num3);
console.log(Math.ceil(num3));

// Math.random() = Returns a number between 0 and ALMOST 1

var num4 = Math.random();
console.log(num4);

// Random Number Between 0 ---> 10

var num5 = Math.random() * 10;
console.log(num5);

// Random INTEGER between 0 --> 100

var num6 = Math.round(Math.random() * 100);
console.log(num6);

// Random number between 2 numbers that does not start at 0;

// Math.random() * (max-min) + min;

// A random number between 50 --> 80

var num7 = (Math.round(Math.random()* (80-50) + 50));
console.log(num7);

// Math Object Constant
// Area of a circles = Radius * Radius * Pi
// Math.PI = true value of Pi

var radius = 7;

var areaCircle = radius * radius * Math.PI;

// .toFixed(#) - Rounds the number to number of decimal places that matches the number inside of the parenthesis.

console.log(areaCircle.toFixed(2));

