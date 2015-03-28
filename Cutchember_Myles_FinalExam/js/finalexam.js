/**
 *Myles Cutchember
 * March 28, 2015
 * Section 00
 * Final Exam
 */

//alert("Running thru the 6 wit my WOES");

//Prompt the user for cost of item
var cost = prompt("Hello, what is the cost of the item?");

//Validate the prompt is in fact a number and not black
while(cost === "" || isNaN(cost)){
    //Re-prompt
    cost = prompt("Please only enter a number and do not leave blank.\nWhat is the cost of the item?");
}

// Prompt the user for a discount % --- this number should be between 0-100
var discount = prompt("What is the discounted percent?");

//Validate
while(discount < 0 && discount > 100 || isNaN(discount) || discount===""){
    discount = prompt("Please do not leave blank, enter a number between 0 -100.\nWhat is the discount percent?");
}

function discountCost(cost,discount){
    var calcdiscount = cost * (discount/100);
    var discountPrice = cost - calcdiscount;

    return discountPrice;

}

var results = discountCost(cost,discount);

console.log("The final cost of an item that cost "+"$"+cost+" with a discount of "+discount+"%"+ " is $"+results+".");


//Testing Testing Testing

/*
 Cost = $10
 Discount = 50%

 The final cost of an item that cost $10 with a discount of 50% is $5.



 */

/*
 Cost = $20
 Discount = 10%

 The final cost of an item that cost $20 with a discount of 10% is $18.



 */