/*
Fisher, Chase "Michael"
11 March 2014
Activity: Expression Worksheet
 */

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

