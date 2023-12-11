// Chapter 4
//1.
let str = "Saf\""
console.log(str.length);

//2.
//includes

const senten = "am a boy"
const word = "boy"
console.log(`The word "${word}" ${senten.includes(word) ? 'is' : 'is not'} in the sentence`) // this program will show you the word is in the sentence or not using ternary and includes

const arr = [1,2,3,4,5,6];
console.log(arr.includes(3)); // output will be true
//startsWith - starting string
const strg = "I am a boss";
console.log(strg.startsWith("I"));
//endsWith - ending string
const st = "you are";
console.log(st.endsWith("are"));

//3.

const sentence = "How are you BOSS" ;
console.log(sentence.toLowerCase())

//4.

let age = "Your age is 18"
console.log(age.slice('Your age is '.length));
console.log(age.slice(12));

let string = 'i want rupees 1000';
let amount = Number.parseInt(string.slice(13))
console.log(amount)

//5.

let naam = "Safwan"
naam[2] = "w" // it doesnt work but it also not shows any error and it also didnt change because it is immutable
console.log(naam) 
