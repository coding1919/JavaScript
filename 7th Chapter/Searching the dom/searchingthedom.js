// change the card title to red

let color = document.getElementById("firstcardtitle");

color.style.color = "red"

// we can take the given attribute and change its properties

let title = document.querySelectorAll(".card-title");
title[0].style.color = "yellow"
title[1].style.color = "blue"
title[2].style.color = "red"
console.log(title)

// selecting one selector and using index so that it will change the color of title

document.querySelector(".red").style.color = "red"
document.querySelector(".red").style.background = "cyan"

// queryselector takes only one
// queryselector all takes many by indexing

console.log(document.getElementsByTagName("a")) //same
console.log(document.body.getElementsByTagName("a")) // same
console.log(document.querySelector(".card").getElementsByTagName("a")) //returns 1 element

// will select the tag

document.body.getElementsByClassName(".card").style.background = "blue"

// getElementsByName returns name attribute