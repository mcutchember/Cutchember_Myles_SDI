/**
 *Myles Cutchember
 * March 23, 2015
 * Section 00
 * Function Assignment
 */

//alert("Running thru the 6 wit my WOES");


function longestWord(w1,w2,w3){

     w1 = prompt("Enter a word");
     w2 = prompt("Enter another word");
     w3 = prompt("Enter a final word");

    if(w1.length > w2.length && w1.length > w3.length){
        return w1;

    }else if(w2.length > w1.length && w2.length > w3.length){
        return w2;

    }else{
        return w3
    }

}


var answer =longestWord();

console.log("The longest work out of the 3 you entered is "+answer);

var howLong = function(){

     return answer.length

};

var letters = howLong();

console.log("It has "+letters+" letters");