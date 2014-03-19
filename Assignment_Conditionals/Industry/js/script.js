/*
C. "Michael" Fisher
19 March 2014
Assignment: Conditionals (Industry)
 */

// Building a deck for an online card game.  A deck editor/verifier.

var numCards = prompt("How many cards are in your deck?");
// Ask the user how many cards they currently have in their deck.
var minCards = prompt("What is the minimum number of cards in a deck?");
// Figure out rules of game - minimum number of cards.
var maxCards = prompt("What is the maximum number of cards in a deck?");
// Figure out rules of game - maximum number of cards.
if (numCards === "") {
    // Validator - determine if user bothered to enter anything.
    console.log("Hey, what are you trying to pull here? You need to enter a value!");
    // Let user know they need to enter something. - create sub-group of if-statements to recreate code.
    if (numCards < minCards){
        // Nested If in order to duplicate code below if user fails to provide data first-time.
        console.log("Hey, you don't have enough cards!");
    }
} else if(numCards < minCards) {
    // determine if there are too few cards
    console.log("Hey, you have " + numCards + " you are supposed to have " + minCards + " you don't have enough cards!");
    // let user know that there are too few cards.
} else if(numCards > maxCards) {
    // determine if there are too many cards.
    console.log("Hey, you have " + numCards + " you are supposed to have " + maxCards + " you have too many cards.")
    // let user know that there are too many cards.
} else if(numCards === minCards || numCards === maxCards){
    console.log("You have the exact number of cards you are meant to have.");
}