let age = prompt("Enter your age");
age = Number.parseInt(age);

if(age>=18 && age<=70){
    alert("You can drive a car with license");
}
else if(age>=70){
    alert("You cannot drive because your age has become older")
}
else if(age<=17 && age>=1){
    alert("You are below 18 and you dont even have a licence so you can't drive");
}
else{
    alert("invalid age");
}

//1.

// let age = prompt("Enter your age");
// age = Number.parseInt(age);

// const carDrive =(age)=>{
//   return age >=18?true:false;
// }
// if(carDrive(age)){
//   alert("You can drive");
// }
// else{
//   alert("You cannot drive");
// }

//2.

// let tryAgain = true;

// const carDrive =(age)=>{
//   return age >=18?true:false;
// }
// while(tryAgain){
//   let age = prompt("Enter your age");
// age = Number.parseInt(age);
// if(carDrive(age)){
//   alert("You can drive");
// }
// else{
//   alert("You cannot drive");
// }
//   tryAgain = confirm("Do you want to play again");
// }

//3.
let tryAgain = true;

const carDrive =(age)=>{
  return age >=18?true:false;
}
while(tryAgain){
  let age = prompt("Enter your age");
age = Number.parseInt(age);
  if(age<0){
    console.error("Please enter a valid age");
    break;
  }
if(carDrive(age)){
  alert("You can drive");
}
else{
  alert("You cannot drive");
}
  tryAgain = confirm("Do you want to play again");
}

//4. 
let number = prompt("Enter your number");
number = Number.parseInt(number);

if(number>4){
  location.href = "https://google.com";
}

//5.
let color = prompt("Enter your favourite color");
document.body.style.background = color ;