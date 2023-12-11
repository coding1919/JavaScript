console.log("Hello");
const name = "Safwan"; // string can be done in "" and '' 
const greet = "Good Morning";
console.log(greet + ' '+ name); // string concatination
console.log(greet.length); // counts the length of the string 

// Template Literals // String interpulation - adding variable to string
let fr1 = "Rahul"
let fr2 = "Rohit"
// Rahul is a friend of Rohit
let sentence = `${fr1} is a friend of ${fr2}`;
console.log(sentence);

//Escape Sequence Characters
let fruit = 'Banana\'s' // \' is considered as one character so length will be 7 
// \n new line
// \t new tab
// \r carriage return
console.log(fruit)

console.log(name + ' ' + greet); // joining 2 string

let info = "This is something that we are studying "
info = info.concat("that ", "help"); // to add strings
console.log(info) // only geeting return and it ias not changing original string
console.log(info.concat(" new", " detail"));

let boy1 = "Harry"
let boy2 = "Shubham"
console.log(boy1.concat(" is a friend of ", boy2))


console.log(info.length); // counts character
console.log(info.toLowerCase()) //converts to lowercase
console.log(info.toUpperCase()) // converts to uppercase
console.log(info[0]) // indexing 0 to .....  
console.log(info.indexOf("that")); // where is that particular string and gives the index of it
// if string is not present then it will be -1
console.log(info.lastIndexOf("that")); // last occurence indexing
console.log(info.charAt(1)) // gives character from 0 - ..... 
// same like info[0]
console.log(info.endsWith("studying")); // gives true or false if it matches the last word or sentence or letter
console.log(info.includes("studying")); // it will tell whether the written word, sentence or letter is included in that string. It will return boolean 
console.log(info.substring(1,6))
// it will give -> his i
// from 1st character to 5th character

let naam = "Safwan"
console.log(naam.slice(1,5)); // afwa slice start to end but end character doesnt counts
// if we use minus (-) it will give last character
console.log(naam.slice(1)); //afwan // slice start and ends when the string gets end
console.log(info.split(' ')); //it will split into array in every given character
console.log(info.replace('studying', 'study'));//replaces 

let course = "Computer Science"
console.log(course.replace("Science","Commerce")) 
// exact string and same if capital use capital as same

let boy3 = "   Aman         Rahul      "
console.log(boy3.trim()) // trims extra spaces from start and end

//if forgot check in google and get that knowledge

//Strings are immutable inorder to access the character at an index we use the following syntax

// let name = "Harry"
// name[0] => prints H
// name[1] => prints a

let userName = "Safwan";
for(i=0; i<userName.length; i++){
    console.log(userName[0]);
    console.log(userName[1]);
    console.log(userName[2]);
    console.log(userName[3]);
    console.log(userName[4]);
    console.log(userName[5]);
    // console.log(userName[i]);
}