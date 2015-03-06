/**
 * Created by MylesCutchember on 3/5/15.
 */
/*
 Myles Cutchember
 March 5, 2015
 Section 00
 Day 2: Lab Expressions
 */

alert("This is a test");

//Slice of Pie Part1

//Declare variables
//pizza*slices/people
var slices = 8;
var people = 10;
var pizzas = 4;

var slicesAte = (pizzas * slices) / people;


console.log("Each person ate" + " " + slicesAte + " " + "slices at pizzas at the party");

//Slices of Pie Part 2

var sparkyAte = (pizzas * slices)  % people;

console.log("Sparky got" + " " + sparkyAte + " " + "slices of pizza");

//Average Shopping Bill

//The total of groceries for each week.
var week1 = 200;
var week2 = 150;
var week3 = 220;
var week4 = 200;
var week5 = 100;

//Declaring variables.
var total = week1 + week2 + week3 + week4 + week5;
var average = total / 5;

console.log("You have spent a total of" +  " " + "$"+ total + " " + "on groceries over 5 weeks." + " " + "That is a average of" + " " + "$" + average + " " +"per week" );

//Discounts

//Declare variables
var originalPrice = 200;
var discount = 10;
var appliedDiscount =  discount  / 100;
var description = "cheese";
var salesTax = 5;
var appliedSalesTax= salesTax / 100;

var whatIsDiscount = originalPrice * appliedDiscount;

var totalWithoutTax = originalPrice - whatIsDiscount;
var whatIsTax = totalWithoutTax * appliedSalesTax;
var totalWithTax =  totalWithoutTax + whatIsTax;

//Spaces for the console
var space = " ";

console.log("Your"+ space + description + space + "was originally" + space + "$" + originalPrice + ", but after a" + space + discount + "%"+ space + "discount" + space + ", it is now" + space + "$" + totalWithoutTax + space + "without tax," + space + "and" + space + "$" + totalWithTax + space + "with tax." );

