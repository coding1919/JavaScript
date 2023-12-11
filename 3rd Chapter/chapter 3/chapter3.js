// Chapter 3
//  1. 
let marks = {  // use a proper variable names
    safwan : 60,
    rahul : 40,
    rohit : 55,
}
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}
// object.keys will give you keys and object.keys(marks) will return array marks[Object.keys(marks)[i]]

let cricketScore = {
    Rohit : 0,
    SuryakumarYadav: 11,
    ShreyasIyer: 10,
    Pant: 24,
    HardikPandya: 31,
    RavindraJadeja: 27,
}
for(let a=0; a<Object.keys(cricketScore).length; a++){
    console.log("Score of " + Object.keys(cricketScore)[a] + " is " + cricketScore[Object.keys(cricketScore)[a]])

}

let detail = {
    name : "Safwan",
    class : 12,
    stream : "Science",
    marks : 539,
    ranking : 32138,
}

for(i = 0; i < Object.keys(detail).length; i++){
    console.log("Your " + Object.keys(detail)[i] + " is " + detail[Object.keys(detail)[i]]);
}

// 2.

let cert = {
    "Islamic Studies" : 40 ,
    English : 26 ,
    Arabic : 50 ,
    "Pak Study" : 15,
}

for (let b in cert){
    console.log("In " + b + " Subject you got " + cert[b]);
}

let dictionary = {
    cottagecore : "rural lifestyle" ,
    flokati : "thick woolen rug" ,
    ogham : "archaic form"
}
for(let key in dictionary){
    console.log("The meaning of " + key + " is " + dictionary[key]);
}

// 3.

let correctNumber = 7;
let number ;
while (number != correctNumber) {
    console.log("Try again")
    number = prompt("Enter your number ");
}
console.log("Your number is correct");


// 4. 

const mean = (a,b,c,d) => {
    return (a + b + c + d)/4
}
console.log( mean(4,5,6,7))