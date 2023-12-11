// Asynchronous action are the actions that we initiate now and they finish later 
// eg:- setTimeout()
// console.log("Start")
// setTimeout(function(){
//     console.log("I am boy");
// },3000) // because of asynchronous action this line is scheduled
// console.log("End")

// Synchronous actions are the actions that initiate and finish one by one.
// eg:- 
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// console.log("Age of "+ a +" is "+ b);

// Callback Funtions:-
// Callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete an action

// function loadScript(src, callback) {
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function () {
//         console.log("Loaded script with SRC: " + src)
//         callback();
//     }
//     document.body.appendChild(script);
// }

// function hello(){
//     alert("Safwan");
// }

function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("Loaded script with SRC: " + src)
        callback(null , src);
    }
    script.onerror = function () {
        console.log("Error loading script with SRC: "+ src);
        callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
}
function hello(error , src){
    if(error){
        console.log("error");
        return
    }
    alert("Safwan "+ src);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",hello);

// this is called "callback based" style of async programming. A function that does something asynvhronously should provide a callback argument where we put the function to run after its complete

