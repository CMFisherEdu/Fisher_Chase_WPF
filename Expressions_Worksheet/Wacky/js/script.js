/*
Fisher, Chase "Michael"
11 March 2014
Activity: Expression Worksheet
 */

/*
 Third Problem
 */

console.log("The classic hot-dog and bun scenario");
console.log("We know that hot dogs come 10 to a package, and buns come 8 to a package.\nLet's figure out how to stock a party just right.");
var Hot_Dogs = 10;
var Buns = 8;
var Purchase_HD = prompt("How many packages of hot dogs will you purchase?");
var Pur_HD_Tot = Hot_Dogs * Purchase_HD;
var Purchase_B = prompt("How many packages of buns will you purchase?");
var Pur_B = Buns * Purchase_B;
var Ratio_Pur = Pur_HD_Tot % Pur_B;
if (Ratio_Pur == 0)
{
    console.log("You have chosen an apt amount of each.");
}
else
{
    console.log("Nope, I'm sorry you don't have equal amounts of each.");
}