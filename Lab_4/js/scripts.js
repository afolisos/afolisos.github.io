let myFullName = "Akpokli FoliSosro"; // 16 characters in name...not including space
const myHeading = document.querySelector(".header")
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
document.querySelector(".header").innerHTML = myFullName + "\'s Lab 4.\n";

// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
let myFirstParagraph = document.createElement("p");
myFirstParagraph.className = "content1";
let mySecondParagraph = document.createElement("p")
mySecondParagraph.className =  "content2";
document.querySelector(".content").append(myFirstParagraph, mySecondParagraph);


// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
myFirstParagraph.innerText = 'My name has '+(myFullName.length-1) + ' characters'+'....'+ myFullName;
// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
mySecondParagraph.innerText = 'The third character of my name is ' + myFullName.slice(2,3).toUpperCase();

// 6 Add a new line to your second paragraph
mySecondParagraph.innerText +="\n";

// 7 Return the final three characters of your last name to that new line
mySecondParagraph.innerText += myFullName.slice(myFullName.length-3);

// 8 Substring your first and last name into two separate variables
let myFirstName = myFullName.slice(0,3)
let myLastName = myFullName.slice(4)


// 9 Add the total length of your first and last names together
let total = myFirstName.length + myLastName.length;

// 10 Display that total next to your name in your header
myHeading.innerText += " Total lenght of my name is " +total;

