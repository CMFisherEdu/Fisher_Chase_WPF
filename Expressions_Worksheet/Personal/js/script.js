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

/*
 Second Problem
 */

console.log("For this problem we will project and calculate future external storage use for a company business project on a server");
var aver_Img_size = prompt("Please let me know the average Image size in Mb.");
// we need to know what the average image size is for this project
var aver_Img_size_Comp = prompt("Please let me know the average Compressed Image size in Mb.");
// we need to know what the average compressed image size is for this project
var aver_Doc_size = prompt("Please let me know the average Document size in Kb.");
// we need to know what the average document size is for this project
var num_Img_s = prompt("How many uncompressed images will you need?");
// project number of standard images needed
var num_Img_Comp = prompt("What percentage of those images will need compression?");
// project number of compressed images needed
var num_Doc = prompt("How many documents will you need for the project?");
// project number of documents needed
var Img_s_Storage = num_Img_s * aver_Img_size;
// get total size of standard image files
var Img_c_Storage = num_Img_s * (num_Img_Comp/100) * aver_Img_size_Comp;
// Get both total number of compressed images and total size.
var Doc_Storage = num_Doc * aver_Doc_size;
// Get total size of documents.
var mb = 1024;
// 1024 kb in a mb.
var Storage_Total_kb = (Doc_Storage) + (Img_c_Storage * mb) + (Img_s_Storage * mb);
console.log("Your total storage in Kb is " + Storage_Total_kb);
var Storage_Total_mb = (Doc_Storage / mb) + Img_c_Storage + Img_s_Storage;
console.log("Your total storage in Mb is " + Storage_Total_mb);
var Cost_Storage = prompt("Your server storage provider - how much do they charge per Gig of space?");
var Storage_Total_gb = Storage_Total_mb / 1024;
var Total_Cost_Storage = Storage_Total_gb * Cost_Storage;
console.log("This is your total cost $" + Total_Cost_Storage);

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