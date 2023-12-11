// an event is a signal that something has happene. All the DOM nodes generate such signals

// Mouse Events - click, sontextmenu(right click), mouseover/mouseout, mousedown/mouseup, mousemove

//onmouseenter - just by keeping mouse on that place the code will execute
//onclick - just by clicking mouse on that place the code will execute

// Keyboard Events - keydown and keyup

// Form Element Events - submit , focus

// Document Events - DOMContentLoaded

// HANDLING EVENTS -
//Events can be handled through Html attributes
//<input value="hey" onclick="alert('hey')" type="button" />

//Events can also be handled through onclick property 

let a = document.getElementsByClassName("container")[0]
a.onclick = () =>{
    let b = document.getElementsByClassName("container")[0]
    b.innerHTML = "Hello World!"
}

// in both javascript onclick will execute

// Note : Adding a handler with JavaScript overwrites the exsisting handler