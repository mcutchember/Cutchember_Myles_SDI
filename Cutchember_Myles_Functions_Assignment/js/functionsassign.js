/**
 *Myles Cutchember
 * March 23, 2015
 * Section 00
 * Function Assignment
 */

//alert("Running thru the 6 wit my WOES");

    //We are going to figure out the cost for the club

// Create function for price





var dressCode = function() {

    var attire = prompt("Do you have on proper casual attire? ");

    if (attire != "yes" && attire != "no") {

        // Re-prompt
        attire = prompt("Please only enter in yes or no");

    }

    if(attire === "no"){

        console.log("Sorry, please change your clothes into the right gear.")

    }

    return dressCode();
};

function calcSales(a,b,c){

    a = prompt("");
    b = prompt("");
    c = prompt("");

    return a*79 + b *129 + c*699;



}

dressCode();
calcSales(a,b,c);
