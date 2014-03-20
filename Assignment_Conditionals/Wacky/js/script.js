/*
C. "Michael" Fisher
19 March 2014
Assignment: Conditionals (Wacky)
 */

/*
Feeding Gnomes in Gnomoria
Gnomoria is a Village Management sandbox video game wherein one must feed and micromanage your gnomes into a prosperous kingdom.
Sometimes it is useful to determine in advance if you will have enough food to last through winter.
If not, you may need to trade away some of your valuable commodities for food.
 */

var gnomePop = prompt("How many Gnomes are in your Kingdom?");
// We need the number of gnomes in the game.
var foodConsumption = prompt("How much food per day do your Gnomes eat? can be a decimal.");
// We need the rate at which they eat.
var foodStocks = prompt("How many units of food do you have?");
// we need how much food they have currently.
var daysWinter = prompt("How many days until Winter?");
// we need how much time they have left.

var RateConsume = foodConsumption * gnomePop;
// in order to simplify the IF statement - let's create a variable that simplifies the expression
var totalConsumption = RateConsume * daysWinter
/*
in order to simplify the actual amount consumed over the entire period leading until winter - we'll reduce the previous data to
this variable.
 */
if (gnomePop === ""){
    var gnomePop = prompt("Enter gnome population.");
} else if (foodConsumption === "") {
    var foodConsumption = prompt("You need to enter a value for food consumption.");
} else if (foodStocks === "") {
    var foodStocks = prompt("You need to enter a value for food stocks.");
} else if (daysWinter === "") {
    var daysWinter = prompt("You need to enter a value for the number of days until Winter.");
}
/*
The above is used to provide validation to the code prior ot reaching the primary conditionals needed to solve the problem.
 */
if ( totalConsumption > foodStocks ) {
    /*
    If statement to compare consumption to food stocks.  It is important to remember that we have accounted for
    days, consumption, and population all within total consumption.
     */
    console.log("You will not survive the Winter, buy some food from the merchants.");
    // Print this if the result is Greater on the consumption side - bad result.
} else {
    console.log("You will make it through the Winter just fine.");
    // Print this if the result is Lesser on the consumption side - good result.
}


