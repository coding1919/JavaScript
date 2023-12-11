// direct nested as well as deeply nested elements of an element are called its children

//child nodes - they are the direct children like i am the direct children of my father

// descendent nodes - all the nested elements children and children

// first child 
console.log(document.body.firstChild); // it will give text node because space will be counted as text node and if we remove that space it will give div as our first child is div

// last child
console.log(document.body.lastChild); // it will give last child

// child nodes
console.log(document.body.childNodes); // will return full of node list or all childs


// this is always true -
// elem.childNodes[0] === elem.firstChild
// elem.childNodes[elem.childNodes.length-1] === elem.lastChild

// There is a method elem.hasChildNodes() to check whether there are any child nodes // true or false

// childNodes look like an array but its not actually an array but a collection we can use array from(collection) to convert it into an array - Array methods wont work

let arr = Array.from(document.body.childNodes)
console.log(arr) // now it is an array