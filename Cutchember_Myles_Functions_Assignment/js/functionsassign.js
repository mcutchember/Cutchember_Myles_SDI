/**
 *Myles Cutchember
 * March 23, 2015
 * Section 00
 * Function Assignment
 */

alert("Welcome to the letter generator\nEnter 3 words and we will tell you which word is the longest.");


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

console.log("The longest work out of the 3 you entered is "+answer);

// Creating anonymous function to output length of longest word.
var howLong = function(){

     return answer.length

};

// Assigning anonymous function to variable
var letters = howLong();

console.log("It has "+letters+" letters");

//
//
//
//
//