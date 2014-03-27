/*
C. "Michael" Fisher
26 March 2014
Assignment: Functions (WorksheeT)
 */

// Circumference

var Radius = prompt("What radius is your circle?");
var your_Pi = prompt("What is your definition of Pi such as 3.14.");
var Circumference = conjunction(Radius, your_Pi);
console.log("The circumference of the circle is " + Circumference);

function conjunction(){
    return 2 * Radius * your_Pi;
}

// Stung!

alert("Did you know that it takes approximately 8.666666667 bee stings per pound to kill an animal?");
var vWeight = prompt("What is the weight of the animal in question?");
var num_Stings = stingage(vWeight);
console.log("It takes " + num_Stings + " bee stings to kill this animal.");

function stingage(vWeight){

    return vWeight * 8.666666667;

}