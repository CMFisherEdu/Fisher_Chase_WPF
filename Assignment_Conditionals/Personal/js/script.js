/*
C. "Michael" Fisher
19 March 2014
Assignment: Conditionals (Personal)
 */

// Figuring out taxes - dual vs. single income
var dualIncome = prompt("How many W2s did your household have this year?");
// determine if more than one set of taxable income was earned.
if (dualIncome === "" || dualIncome === "0"){
    console.log("Then you may need to see a tax consultant with regards to your finances.");
    // provides validation tool and possibility of a null value.
} else
{
w2s = (dualIncome === "1") ? "You can file single as head-of-household" : "you may want to consider filing jointly";
/*
normally this would be represented using an if statement - however, as it is simple, a ternary statement can be applied.
If a NUMERICAL one is given - then the first option is supplied.  If a numerical value above one is given, the second option is offered.
Yes, I realize that the above examples are not "gospel" - this is supplied for the sake of classroom environment.
 */
console.log(w2s);
// print the two options to the console.
}