// Arrays Video and Concatenating

var OrangeBins = [234, 567, 883];
var Total_Oranges = OrangeBins[0]+OrangeBins[1]+OrangeBins[2]; //demonstration that spacing is not important with those operator signs.
// ideally - for sake of readability - spaces should be included.
console.log(Total_Oranges);

var firstName = "Max";
var lastName = "Power";
var fullName = firstName + " " + lastName;

console.log(fullName);
console.log("Because we know the Simpsons are awesome!");

console.log("BREAK! BREAK! BREAK! - next segment will explore more concatenation.");

var a = "6";
var b = "7";

var result = a + b;
console.log(result);
// concatenating the two STRINGS.

// time to use the casting video! - let's treat strings differently.

var stringVar = "6";
var result = 7 + Number(stringVar);
console.log(result);

// concatenation fixed! - Instead temp-transforming 6 to a number.

//The Phone Number process:

var areaCode = 555;
var firstPart = 123;
var secPart = 4567;

var phoneNo = areaCode + firstPart + secPart;
console.log(phoneNo); //should fail and provide us with actual addition.

var phoneNo = "(" + String(areaCode) + ") " + String(firstPart) + " - " + String(secPart);
// should succeed and give a strung-together phone number when we console.
console.log(phoneNo);
