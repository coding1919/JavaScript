let a = prompt("What is your age?");
a = Number.parseInt(a) //converting string into number

if(a<0){
    alert("Invalid age");
}
else if(a<18){
    alert("You are not able to drive")
}
else if(a>=18 && a<100){
    alert("You are able to drive, please enter your details in further page")
}
else{
    alert("Invalid age");
}
console.log("done")

//Homework switch statement

console.log("You can", a<18? "drive" :"not drive");

let vari = 34;

// if(vari){
//     console.log("vari is defined")
// }

if(typeof vari !=='undefined'){
    console.log("vari is defined");
}
else{
    console.log("Vari is not defined")
}

const doesDrive = true;

if(doesDrive && age>18){
    console.log('You can drive');
}
else{
    console.log("You cannot drive");
}



switch (age) {
    case 18:
        console.log("You are 18");
        break;
    case 28:
        console.log("You are 28");
        break;
    case 38:
        console.log("You are 38");
        break;
    default:
        console.log("Your age is not mentioned")
        break;
}