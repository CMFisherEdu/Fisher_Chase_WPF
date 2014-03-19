/*
C. "Michael" Fisher
19 March 2014
Activity: Conditionals Worksheet
 */

// Stuff your face I

var compWeight = 120;
var hvyWeightQual = 210;
if (compWeight >= hvyWeightQual){
    //Determine weight relative to qualifying amount
    console.log("The competitor qualifies for the heavyweight division.");
    // print the success statement.
}
else{
    console.log("The competitor needs to gain some weight.");
    // print the non-success statement.
}

// Celsius to Fahrenheit converter

var Degrees = prompt("What is the amount of the temperature?");
//Ask user for degrees #
var Unit = prompt("Enter C or F for Celsius or Fahrenheit.");
//Ask user Celsius or Fahrenheit
if (Unit === "C") {
    var Temperature = Degrees * 9 / 5 + 32;
    //Convert Celsius to Fahrenheit
    console.log("The temperature is " + Temperature + " degrees in Fahrenheit");
    //If Celsius -- give conversion
}else
{
    var Temperature = (Degrees - 32) * (5 / 9);
    //Convert Fahrenheit to celsius
    console.log("The temperature is " + Temperature + " degrees in Celsius");
    //If Fahrenheit -- give conversion
}

// Last Chance for Gas!

alert("you can either turn off the exit right now or wait 200 miles for the next exit, let's do some math.");
// Let the user know what's happening.
var GasEfficiency = prompt("What is the MPG efficiency of your car?");
// Ask user for efficiency of vehicle.
var GaugePercent = prompt("Percentage of gas left in the tank?");
// Ask user for amount of current gas in vehicle.
var GasTank = prompt("Number of Gallons of Capacity in Car? (Max)");
// Ask user for max possible gas in vehicle.
if (GasTank * (GaugePercent/100) * GasEfficiency > 200) {
    // Provide conditional - determine yes/no
    console.log("Yes, you can make it without stopping for gas!");
    // print success - we can continue trip
} else{
    var Gallons = (GaugePercent/100) * GasTank;
    // determine amount of remaining gas
    console.log("You only have " + Gallons + " gallons of gas in your tank, better get gas now while you can!");
    // print amount of remaining gas and non-success statement.
}

// Grade Letter Calculator

var percGrade = prompt("What was your percentage grade?");
//Ask user for their percentage grade
if (percGrade >= 90) {
    // run conditional -> for A
    console.log("You have an " + percGrade + "%, which means you have earned an A in the class.");
    // print A grade message
}
else if (percGrade <=89 && percGrade >= 80) {
    // run condition for B grade RANGE
    console.log("You have an " + percGrade + "%, which means you have earned a B in the class.");
    // print B grade message.
}
else if (percGrade <=79 && percGrade >= 70) {
    // run condition for C grade RANGE
    console.log("You have an " + percGrade + "%, which means you have earned a C in the class.");
    // print C grade message
}
else if (percGrade <=69 && percGrade >= 60) {
    // run condition for D grade RANGE
    console.log("You have an " + percGrade + "%, which means you have earned a D in the class.");
    // print D grade message
}
else if (percGrade <=59){
    // run condition for F grade.
    console.log("You have an " + percGrade + "%, which means you have failed this class. F.");
    // print F grade message.
}

// Movie Ticket Price

alert("Welcome to Cinema Crazy 12!  Let's check the time and price.");
// Letting user know what's happening.
var Age = prompt("How old are you?");
// Get age from user.
var timeOfDay = prompt("what time of day is it? Whole numbers only.");
// Get time/hour of day from user.
if (timeOfDay >= 3 && timeOfDay <= 5 ) {
    // determine if it is between 3 and 5 first- as all other factors would be irrelevant if it is.
    console.log("The ticket price is $7 dollars.");
    // discounted rate for this time-frame.
} else if (Age >= 55 || Age <= 10) {
    // if the time of day is not 3-5, we need to figure if the customer gets the age discount.
    console.log("The ticket price is $7 dollars.");
    // discounted rate for age.
} else
console.log("The ticket price is is $12 dollars.");
// everybody else.