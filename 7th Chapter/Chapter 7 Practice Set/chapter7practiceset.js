// 1. 
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"

// 2. 
// in table when you inspect there will be automatically tbody tag and when you view page source there will be no tbody tag

// 3.

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

// 4.
Array.from(document.getElementsByTagName("li")).forEach((element) =>{
    element.style.background ="red";
})

// 5.
// none of these because all dont check farthest
