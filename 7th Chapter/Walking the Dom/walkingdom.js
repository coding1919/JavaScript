// when there is more html page to access and try to manipulate through javascript at that time we have to do the dom manipulation

// Dom tree refers to the html page where all the nodes are objects 
// There are three main types of nodes
// 1. Text nodes - <h1> Heading </h1> Heading is a text node there cannot be any node inside text node
// (LEAF OF THE TREE IS TEXT NODE)
// 2. Element nodes - <html> <body> <head> Tags are element nodes
// 3. Comment nodes - <!-- --> comments are comment nodes

// Auto correction

//  if we write anythimg wrong browser will correct automatically
// <span> This is a span </div> // browser will close using span itself
// if we write anything outside the body the browser will put that inside the body tag
// in table tag it will add automatically tbody tag

// document
// document.documentElement - html tag
// document.body - body tag
// document.head - head tag

// document.title = "Website" // it will change the title as a Website for ourself and not able to change in server site

// typeof document.documentElement // object

// typeof document.title //string

// Note :- document.body can sometimes be null if the javascript iswritten before the body tag