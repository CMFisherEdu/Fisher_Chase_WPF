// Expressions Video

var a = 2;
console.log(a); // demonstration that 'a' did at one point = 2.
a = a + 3; // let's fluff up 'a' a bit.
console.log(a);
b = a + 3; // we must remember that a=a+3 already occurred.
console.log(b);

// Expressions - Age

var yearBorn = prompt("Please give me the year you were born.");
var d = new Date();
var n = d.getFullYear();
var age = n - yearBorn;
alert("You are "+ age + " years old.");