/*
Fisher, Chase "Michael"
11 March 2014
Activity: Expression Worksheet
 */

/*
First Problem
 */
console.log("For this problem, we will calculate weight loss goals via sit-ups.");
var kCal_Pound = 3500;
// number of kCal in a pound
var Duration = prompt("many minutes do you actively do situps? (Per Set)");
// ask user how much time they spend doing sit ups
var num_of_Sets = prompt("How many sets per day?");
// get number of sets per day
var Time_Total_Daily = Duration *  num_of_Sets;
// get total time exercising each day
var cal_minute = 12.4;
// accepted number of calories for a 150 pounds individual performing sit-ups
var kCal_burn_daily = Time_Total_Daily * cal_minute;
// calories burned per day
console.log(kCal_burn_daily);
// get calories per ratio - as a daily expression
var loss_Goal = prompt("How much weight do you want to burn in pounds?");
// determine how much weight loss we need to calculate
var kCal_equivalent = loss_Goal * kCal_Pound;
// 3500 * the loss goal pounds - express to kCal
var days_workout = kCal_equivalent / kCal_burn_daily;
// Determine # of days needed to achieve goal
console.log("You need to workout for  " + days_workout + " days to reach your goal.");
// print this information to user.