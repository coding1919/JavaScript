// age lies between 10 to 20
let age = prompt("What is your age");
if(age>10 && age<20){
    console.log("Your age lies between 10 to 20");
}

// switch case
let a = prompt('What is your age');
a = Number.parseInt(a)
switch (a){
    case 11 :
        console.log("Your age is 11");
        break;
    case 12 :
        console.log("Your age is 12");
        break;
    case 13 :
        console.log("Your age is 13");
        break;
    case 14 :
        console.log("Your age is 14")
        break;
    case 15 :
        console.log("Your age is 15");
        break;
    case 16 :
        console.log("Your age is 16");
        break;
    case 17 :
        console.log("Your age is 17");
        break;
    case 18 :
        console.log("Your age is 18");
        break;
    case 19 :
        console.log("Your age is 19");
        break;
    case 20 :
        console.log("Your age is 20");
        break;
    default:
        console.log("Your age is not known")
        break;
}

// divisible by 2 and 3
let num = prompt("What is your number");
num = Number.parseInt(num);
if(num%2==0 && num%3==0){
    console.log("Your number is divisible by 2 and 3");
}
else{
    console.log("Your number is not divisible by 2 and 3");
}


// divisible by 2 or 3
let numb = prompt("What is your number");
numb = Number.parseInt(numb);
if(numb%2==0 || numb%3==0){
    console.log("Your number is divisible by 2 or 3");
}
else{
    console.log("Your number is not divisible by 2 or 3");
}

// using ternary operator

let month = 17;
let b = month<=12 ? "You said correct month" : "Your month is wrong";
console.log(b)

let c = console.log(month<=12 ? "You said correct month" : "Your month is wrong");