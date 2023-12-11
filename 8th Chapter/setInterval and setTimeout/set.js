// setTimeout - when we want to execute javaScript after some time
// setInterval - when we want to execute our javaScript again and again after a set period of time 

alert("Hello")

const sum = (a,b) =>{
    console.log("yes i am running "+(a+b));
    a+b
}

setTimeout(sum , 10000 , 1, 2) // arguments are given like this

let a = setTimeout(function(){
    alert("I am setTimeout")
}, 5000) // 2000 is 2000 milliseconds this is the way to delay the program after 2s it will show the second alert

console.log(a) // in console it shows one that is timer id
let b = prompt("Do you want to run the setTimeout");
if("n" == b){
    clearTimeout(a) // to stop execution
}

setInterval(function(){
    alert("i am setInterval")
}, 50000) // it will execute again and again

//to stop execute use clearInterval() and put a value

const power = (x,y) =>{
    console.log(x+" to the power of " + y +" is "+ x**y )
}

let c = setInterval(power,3000 , 3,2);
let stop = prompt("stop execution?");
if(stop=="y"){
    clearInterval(c)
} 