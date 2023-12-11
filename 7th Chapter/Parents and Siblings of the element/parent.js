// Dom collection Properties -

// They are read only cannot be written
// $0 is selected one or $1 is selected before
// $0 = $1 // this cannot be done elements cannot be changed

// They are live elem.childNodes variable (reference) will automatically update if childNodes of elem is changed
// $0.childNodes

// They are iterable using for of loop

// Siblings 
// siblings are nodes that are children of the same parent
// ex:- head and body are the siblings and their parent is html for both
// body is said to be the "next" or "right" sibling of head. head is said to be the "previous" or "left" sibling of body.
// next sibling is in nextSibling property and the previous one in previousSibling.
// $0.nextSibling
// $0.previousSibling

// $0.parentNode //returns all
// $0.parentElement // returns html element

// alert(document.documentElement.parentNode); //document
// alert(document.documentElement.parentElement); //null

console.log(document.body.firstChild)
a = document.body.firstChild
console.log(a.parentNode)
console.log(a.parentElement)
console.log(a.firstChild.nextSibling)