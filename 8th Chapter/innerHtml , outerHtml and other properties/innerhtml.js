console.log(document.getElementsByTagName("span")[0]) //console.log shows element dom tree means shows the html

console.dir(document.getElementsByTagName("span")[0]) //console.dir shows element has an object with its properties

// node can be an element or text or comment
// tagName - only for element nodes
// nodeName - defined for all  nodes(text,comment,element)

console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

// inner html - this allows to get the HTML inside the element as a string
// it works only on the element node

// let first = document.getElementById("first")
console.log(first.innerHTML) //id first is executed in console which we used in span

console.log(second.innerHTML) //id second is executed in console which we used in span and it will also print the tag

let a = first.innerHTML = "<i>Hey i am girl</i>";
console.log(a) // it can be updated and can be set

// if required other nodetype

console.log(document.body.firstChild.data)
console.log(document.body.firstChild.nodeValue) // it has printed text node as "Hello World!" because .data and .nodeValue uses other node types

// outerhtml - it contains the full HTML innerhtml + the element itself 

console.log(first.outerHTML)

let b = second.outerHTML = "<div>This is new text <p></p></div>";
console.log(b)

// textContent - Provides access to the text inside the element. Gives all the text without any tags in the Html file

console.log(document.body.textContent)

// hidden - the hidden attribute and the DOM property specifies whether the element is visible or not

let c = third.hidden = true;
console.log(c) //it hides the html