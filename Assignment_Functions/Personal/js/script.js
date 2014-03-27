/*
C. "Michael" Fisher
26 March 2014
Assignment: Functions
 */

// Personal
/*
I am going to create a function that adds books to a collection, and then returns  the number of books in your collection,
As well as the Titles.
 */

var myBooks= new Array();
// Create variable (Array) - to assign book names.

myBooks[0] = prompt("What is the title of the first book in your collection?");
myBooks[1] = prompt("What is the title of the second book in your collection?");
myBooks[2] = prompt("What is the title of the third book in your collection?");
// Assign book names via prompts to Array.


function track_Books(){
    // create function - track_Books.
    for (var x = 0; x<myBooks.length; x++){
        // use the array length to generate names for console statement.
        console.log("Out of your " + myBooks.length + " books, your " + x + " book is called: " + myBooks[x] + ".");
        // State number and names of books.
    }
}

track_Books();
// Call function