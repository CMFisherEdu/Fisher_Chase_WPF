/*
Fisher, Chase "Michael"
09 March 2014
Activity: Expression Worksheet
 */

/*
First Problem
 */
var Age_of_Sparky = prompt("Please tell me how old Sparky is.");
// Simultaneously ask for, define, and set the variable - Age of Sparky.
Dog_Equivalent = Age_of_Sparky * 7;
// Perform math, behind the scenes - to create the equivalent "dog years".
console.log("Sparky is " + Age_of_Sparky + " human years old which is " + Dog_Equivalent + " in dog years.");
// print the log to the console - that will provide a full, easily read sentence with the data points.

/*
Second Problem
 */

var Partiers = prompt("How many people are at your party?");
// ask for, define, and set variable - number of people at party.
var Pizzas = prompt("How many pizzas are served?");
// ask for, define and set variable - number of pizzas.
var Slices = Pizzas * 8; // determine in advance # of slices.
var Ratio = Slices / Partiers; // perform math for number of slices consumed per.
console.log("Each person ate " + Ratio + " slices of pizza at the party.");
// print the log to the console - provide answer.

/*
 Third Problem
 */
console.log("But, when Sparky shows up he manages to snag some food.");
M_Ratio = Slices % Partiers;
console.log("Sparky manages to eat " + M_Ratio + " slices of pizza.");
/*
 Fourth Problem
 */
console.log("What were your last five grocery shopping bills?  Please make five entries.");
var Grocery_Bills = [];
var Bill1 = prompt("First Bill?");
Grocery_Bills.push(Bill1);
var Bill2 = prompt("Second Bill?");
Grocery_Bills.push(Bill2);
var Bill3 = prompt("Third Bill?");
Grocery_Bills.push(Bill3);
var Bill4 = prompt("Fourth Bill?");
Grocery_Bills.push(Bill4);
var Bill5 = prompt("Fifth Bill?");
Grocery_Bills.push(Bill5);
var Total_Bill = Number(Grocery_Bills[0]) + Number(Grocery_Bills[1]) + Number(Grocery_Bills[2]) + Number(Grocery_Bills[3]) + Number(Grocery_Bills[4]);
var lengthOfArray = Grocery_Bills.length;
var Average_Bill = Total_Bill / lengthOfArray;
console.log("Your total bill for the last five weeks was " + "$" + Total_Bill + " and your average weekly bill was " + "$" + Average_Bill);
/*
 Fifth Problem
 */
console.log("What did you buy at the store today?");
var Item_Description = prompt("Item purchased?");
var Item_Base_Cost = prompt("What was the sticker price of the item?");
var Input_Item_Discount = prompt("What was the discount amount of the item?  Give amount, leave out percentage sign.");
var Sales_Tax = prompt("What is sales tax in your area?  Express as a decimal.");
var Item_Discount = (100 - Input_Item_Discount) / 100;
var Item_Cost_wo_Tax = Item_Base_Cost * Item_Discount;
var Item_Cost_w_Tax = Item_Cost_wo_Tax * (1 + Sales_Tax);
console.log("“Your " + Item_Description + " was originally $" + Item_Base_Cost + ", but after a/an " + Input_Item_Discount + "% discount, it is now $" + Item_Cost_wo_Tax + " without tax, and $" + Item_Cost_w_Tax + " with tax.”");