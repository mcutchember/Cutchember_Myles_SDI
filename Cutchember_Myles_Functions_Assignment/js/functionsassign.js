/**
 *Myles Cutchember
 * March 23, 2015
 * Section 00
 * Function Assignment
 */


// Calculate the volume and area of a tent

function areaTri(b,h){
    // area =.5 * base * height
    var a = .5*b*h;
    return a;
}

// Create an anon function for the volume

var volTri = function(b,h,l){
    // volume = .5 * (base*height) * length
    var v = .5*(b*h)*l;
    return v
};


// Prompt the user for width, height, and length
var base = prompt("Going camping?\nLets figure out the area and volume of your tent\nWhats is the base?");

//Validation
while(base === "" || isNaN(base)){
    // Re- prompt the user
    base = prompt("Please do not leave blank and only use numbers.\nWhat is your base?")
}

//ParseInt
base = parseInt(base);

var height = prompt("What is the height of the rectangle");

//Validation

while(height === "" || isNaN(height)){
    height = prompt("Please do not leave blank and only use number\nWhat is the height?")
}

//ParseInt
height = parseInt(height);


var length = prompt("Lets figure out the perimeter and area of a rectangle\nWhats is the length");

//Validation
while(length === "" || isNaN(length)){
    // Re- prompt the user
    length = prompt("Please do not leave blank and only use numbers.\nWhat is your length.")
}

//ParseInt
length = parseInt(length);

// Function Call
var resultArea = areaTri(base,height);
var resultVol = volTri(base,height,length);


//Combined console log
console.log("The area of your tent is "+resultArea+" inches and the volume is "+resultVol+" cubic inches.");

//Testing Testing Testing

/*
Tent #1

Base: 15 in
Height: 18 in
Length: 19 in

The area of your tent is 135 inches and the volume is 2565 cubic inches.


 */

/*
 Tent #2

 Base: 30 in
 Height: 52 in
 Length: 55 in

 The area of your tent is 780 inches and the volume is 42900 cubic inches.

 */

/*
 Tent #3

 Base: 4in
 Height: 3in
 Length: 7 in

The area of your tent is 6 inches and the volume is 42 cubic inches.
 */