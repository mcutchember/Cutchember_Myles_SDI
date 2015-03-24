/**
 *Myles Cutchember
 * March 23, 2015
 * Section 00
 * Function Assignment
 */

alert("Welcome\n Enter the first 3 words that come to mind.\nFind out which word has the most letters.");


// User input 3 words, and use those 3 words are parameters.
function longestWord(w1,w2,w3){

     w1 = prompt("Enter a word");
    //validate actual words are entered
    if(w1 === "") {
        prompt("You did not enter a word.\nPlease enter a word.");
    }

     w2 = prompt("Enter another word");
    //validate actual words are entered
    if(w2 === ""){
        prompt("You did not enter a second word.\nPlease enter another word.");
    }



     w3 = prompt("Enter a final word");
    //validate actual words are entered
    if(w3=== ""){
        w3 = prompt("You did not enter a final word.\nPlease enter a final word.");
    }

    // Function Arguments
    if(w1.length > w2.length && w1.length > w3.length){
        return w1;

    }else if(w2.length > w1.length && w2.length > w3.length){
        return w2;

    }else{
        return w3
    }

}

// Calling function and assigning to variable
var answer =longestWord();

console.log("The longest word you entered is "+answer);

// Creating anonymous function to output length of longest word.
var howLong = function(){

     return answer.length

};

// Assigning anonymous function to variable
var letters = howLong();

console.log("It has "+letters+" letters");

// tray, spoon, seat ===> "the longest word you entered is spoon, it has 5 letters."
// breath. poison, confusion ====> "the longest word you entered is confusion, it has 9 letters."
// amoeba, island, guideline =====> "the longest word you entered is guideline, it has 9 letters."
