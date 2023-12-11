const changeBgRed = ()=> {
    document.body.firstElementChild.style.background = "red"
}


let b = document.body
console.log("First child of b is ", b.firstChild); // textnode or commentnode or elementnode
console.log("First element child of b is ", b.firstElementChild); // only element node


// sometimes we dont want text in comment nodes . Some links only take Element nodes into account 

console.log(b.nextElementSibling);
console.log(b.previousElementSibling);
console.log(b.lastElementChild);

changeBgRed()