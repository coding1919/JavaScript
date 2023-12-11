// addEventListener and removeEventListener

// addEventListener - 
// is used to assign multiple handlers to an event

let b = function (a) {
    console.log(a.target)
    console.log(a.type) 
    console.log(a.currentTarget) 
    console.log(a.clientX) 
    console.log(a.clientY) // target gives the html in which that event has occured
    alert("Hello World 1")
}

let c = function (a) {
    console.log(a) // this a means parameter gives the PointerEvent
    alert("Hello World 2")
}

btn.addEventListener("click",b)

btn.addEventListener("click",c)

let a = prompt("What is your favorite number?")

if(a=="2"){
    btn.removeEventListener("click",b)
} //this wont work if we add same function on addEventListener and removeEventListener the code will still work same 
// to do that correct put that function in a variable and then use that variable in addEventListener and removeEventListener then it will execute properly

// removeEventListener - handler must be the same function object for this to work

// Event Object 
//When an event happens the browser creates an event object puts details into it and passes it as an argument to the handler

