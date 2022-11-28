// -----> EXERCISE 1: Comment Your JavaScript Code <-----

// Ésta es una línea de comentario

/* Éste es
un comentario
multilinea */


// -----> EXERCISE 2: Declare JavaScript Variables <-----
var myName;


// -----> EXERCISE 3: Storing Values with the Assignment Operator <-----
var a;
a = 7;


// -----> EXERCISE 4: Assigning the Value of One Variable to Another <-----
var a;
a = 7;
var b;
b = a;


// -----> EXERCISE 5: Initializing Variables with the Assignment Operator <-----
var a = 9;


// -----> EXERCISE 6: Declare String Variables <-----
var myFirstName = "Daniel";
var myLastName = "Billordo";


// -----> EXERCISE 7: Understanding Uninitialized Variables <-----
// Only change code below this line
var a =5;
var b = 10;
var c = "I am a";
// Only change code above this line
a = a + 1;
b = b + 5;
c = c + " String!";


// -----> EXERCISE 8: Understanding Case Sensitivity in Variables <-----
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;


// -----> EXERCISE 9: Explore Differences Between the var and let Keywords <-----
// Update the code so it only uses the let keyword.
let catName = "Oliver";
let catSound = "Meow!";


// -----> EXERCISE 10: Declare a Read-Only Variable with the const Keyword <-----
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line


// -----> EXERCISE 11: Add Two Numbers with JavaScript <-----
const sum = 10 + 10;


// -----> EXERCISE 12: Subtract One Number from Another with JavaScript <-----
const difference = 45 - 33;


// -----> EXERCISE 13: Multiply Two Numbers with JavaScript <-----
const product = 8 * 10;


// -----> EXERCISE 14: Divide One Number by Another with JavaScript <-----
const quotient = 66 / 33;


// -----> EXERCISE 15: Increment a Number with JavaScript <-----
let myVar = 87;
myVar++;


// -----> EXERCISE 16: Decrement a Number with JavaScript <-----
let myVar2 = 11;
myVar2--;


// -----> EXERCISE 17: Create Decimal Numbers with JavaScript <-----
const ourDecimal = 5.7;
const myDecimal = 2.2;


// -----> EXERCISE 18: Multiply Two Decimals with JavaScript <-----
const product2 = 2.0 * 2.5;


// -----> EXERCISE 19: Divide One Decimal by Another with JavaScript <-----
const quotient2 = 4.4 / 2.0; 


// -----> EXERCISE 20: Finding a Remainder in JavaScript <-----
let remainder = 0;
remainder = 11 % 3;


// -----> EXERCISE 21: Compound Assignment With Augmented Addition <-----
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;


// -----> EXERCISE 22: Compound Assignment With Augmented Subtraction <-----
let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;


// -----> EXERCISE 23: Compound Assignment With Augmented Multiplication <-----
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;


// -----> EXERCISE 24: Compound Assignment With Augmented Division <-----
let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;


// -----> EXERCISE 25: Escaping Literal Quotes in Strings <-----
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";


// -----> EXERCISE 26: Quoting Strings with Single Quotes <-----
const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';


// -----> EXERCISE 27: Escape Sequences in Strings <-----
const myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";


// -----> EXERCISE 28: Concatenating Strings with Plus Operator <-----
const myStr4 = "This is the start. " + "This is the end.";


// -----> EXERCISE 29: Concatenating Strings with the Plus Equals Operator <-----
let myStr5 = "This is the first sentence. ";
myStr5 += "This is the second sentence.";


// -----> EXERCISE 30: Constructing Strings with Variables <-----
const myName2 = "Daniel";
const myStr6 = "My name is " + myName2 + "and I am well!";


// -----> EXERCISE 31: Appending Variables to Strings <-----
const someAdjective = "funny";
let myStr7 = "Watching football is ";
myStr7 += someAdjective;


// -----> EXERCISE 32: Find the Length of a String <-----
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;


// -----> EXERCISE 33: Use Bracket Notation to Find the First Character in a String <-----
let firstLetterOfLastName = "";
const lastName2 = "Lovelace";
firstLetterOfLastName = lastName2[0];


// -----> EXERCISE 34: Understand String Immutability <-----
let myStr8 = "Jello World";
myStr8 = "Hello World";


// -----> EXERCISE 35: Use Bracket Notation to Find the Nth (third) Character in a String <-----
const lastName3 = "Lovelace";
const thirdLetterOfLastName = lastName3[2];


// -----> EXERCISE 36: Use Bracket Notation to Find the Last Character in a String <-----
const lastName4 = "Lovelace";
const lastLetterOfLastName = lastName4[lastName4.length - 1];


// -----> EXERCISE 37: Use bracket notation to find the second-to-last character in a string <-----
const lastName5 = "Lovelace";
const secondToLastLetterOfLastName = lastName5[lastName5.length - 2];


// -----> EXERCISE 38: Word Blanks <-----
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "The " + myNoun + " is very " + myAdjective + ", but he " + myVerb + " very " + myAdverb + ".";


// -----> EXERCISE 39: Store Multiple Values in one Variable using JavaScript Arrays <-----
const myArray = ["Hola" , 5];


// -----> EXERCISE 40: Nest one Array within Another Array <-----
const myArray2 = [["Saludo", 10], [3400, "Corrientes"]];


// -----> EXERCISE 41: Access Array Data with Indexes <-----
const myArray3 = [50, 60, 70];
const myData = myArray3[0];


// -----> EXERCISE 42: Modify Array Data With Indexes <-----
const myArray4 = [18, 64, 99];
myArray4[0] = 45;


// -----> EXERCISE 43: Access Multi-Dimensional Arrays With Indexes <-----
// Using bracket notation select an element from myArray5 such that myData2 is equal to 8
const myArray5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData2 = myArray5[2][1];