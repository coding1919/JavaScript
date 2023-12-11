alert("This is an alert");

let a = prompt("Enter the value of a") // WE CAN DEFAULT VALUE BY USING , AND ENTER SOMETHING WHICH YOU WANT TO BE DEFAULT

a = Number.parseInt(a);
// document.write(a);

alert("type is " + (typeof a));

let write = confirm("Do you want to write it on the page?")
if(write){
    document.write(a)
}
else{
    document.write("allow me to write")
}


// IT PAUSE THE EXECUTION OF THE SCRIPT
//EXACT POSITION OF MODAL IS GIVENBY BROWSER
//CANNOT MODIFY
// main execution thread blocks

//mostly prefered to use modals made from js
//used in admin panels