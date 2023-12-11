let first = document.getElementById("first")

// getAttribute - to write the attribute name and it will give the value of an attribute
let a = first.getAttribute("class")
console.log(a) 

// hasAttribute - to check whether the attribute is present or not 
console.log(first.hasAttribute("style")) //false
console.log(first.hasAttribute("class")) //true 

// setAttribute - method used to set the value of an attribute
// let b = 
first.setAttribute("hidden","true");
// console.log(b) 

first.setAttribute("class","new aimboy"); // to add more class use space and add class

// removeAttribute - method to remove the attribute from element
first.removeAttribute("class");

//.attributes - method to get the collection of all attributes
console.log(first.attributes)



// data -* attributes

// we can always create custom attribute but the ones starting with "data-" are reserved for programmers use. They are available in a property named dataset
// if an element has an attribute named "data-ore" its available as dataset.one

console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.players)


