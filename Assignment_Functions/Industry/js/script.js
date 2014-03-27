/*
C. "Michael" Fisher
26 March 2014
Assignment: Functions
 */

// Industry

/*
This series of functions and arrays will attempt to provide a business stability overview.
 */


function valuate_Stocks(){
        var asset_value1 = prompt("What is the dollar value of your Stocks?");
    // Get a value for Stock Assets later.
    return asset_value1
}
var Stock_Assets = valuate_Stocks();

function valuate_MFA(){
    var asset_value2 = prompt("What is the dollar value of your Mutual Fund Assets?");
    // Get a value for Stock Assets later.
    return asset_value2
}
var Mutual_Fund_Assets = valuate_MFA();

function valuate_CR(){
    var asset_value3 = prompt("What is the dollar value of your cash reserves?");
    // Get a value for Stock Assets later.
    return asset_value3
}
var Cash_Reserves = valuate_CR();

var Tot_Value_Assets = function(Stock_Assets, Mutual_Fund_Assets, Cash_Reserves){
    // anonymously call function that will total the value of the assets.
    dollar_Value = Stock_Assets + Mutual_Fund_Assets + Cash_Reserves;
    return dollar_Value;
}

var Total_Value_of_Assets = Tot_Value_Assets(Stock_Assets, Mutual_Fund_Assets, Cash_Reserves);

diversity_Stocks = (Stock_Assets === 0) ? "You need to diversify your Stock portfolio" : "You have some stocks!";
// Find total asset value of Stock Assets - if 0, first statement; otherwise - second.
diversity_MFA = (Mutual_Fund_Assets === 0) ? "You need to diversify your Mutual Fund portfolio" : "You have some mutual funds.";
// Find total asset value of Mutual Fund Assets  Assets - if 0, first statement; otherwise - second.
diversity_Cash_Reserves = (Cash_Reserves === 0) ? "You need to get some money in the bank!" : "You have money in the bank.";
// Find total asset value of Cash Reserves - if 0, first statement; otherwise - second.
console.log(diversity_Stocks);
console.log(diversity_MFA);
console.log(diversity_Cash_Reserves);

console.log("You have a total of $" + Total_Value_of_Assets + "throughout your accounts.");