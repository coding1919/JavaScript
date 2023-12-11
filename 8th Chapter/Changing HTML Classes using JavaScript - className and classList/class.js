let first = document.getElementById("first");

first.className = "red text-dark" // to use the class and use it on your html it means to replace the classes

let a = first.classList
console.log(a) // all list of class used in id first

let b = first.classList.remove("red")
console.log(b) // to remove class

let c = first.classList.add("blue")
console.log(c) // to add class

console.log(a)

let d = first.classList.toggle("red");
console.log(d) // toggle method add class if it is there and remove class if it not there

let e = first.classList.contains("red")
console.log(e) // to check the class is there in first id and returns true or false
let f = first.classList.contains("green")
console.log(f)