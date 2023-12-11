//Primitive Data Types (Base) - Memory allocation is in stack

let userName = "Mohammed " + "Safwan" ; //string
console.log(userName);
console.log((typeof userName));

let rollNumber = 1919; //numbers
console.log(rollNumber);
console.log((typeof rollNumber));

let choose = true; //boolean
console.log(choose);
console.log((typeof choose)); // typeof shows which data types it is

let bigInt = BigInt("89") + BigInt("1"); //bigInt
console.log(bigInt);
console.log((typeof bigInt));

let Empty = null; //null
console.log(Empty);
console.log((typeof Empty)); // return value is bogas

let notKnown ; //undefined
console.log(notKnown);
console.log((typeof notKnown));

let symbol = Symbol(); //symbol
console.log(symbol);
console.log((typeof symbol));

//Reference Data Types (Object) - Memory allocation is in Heap

let myArray = ["safwan", 98 , true , undefined]; // arrays
console.log(myArray);
console.log((typeof myArray)); //object

let obj = {
    name : "Safwan",
    marks : 98,  //object literals - not to give space or to give space use quotes ""
    type : true,  
    details : undefined
};
console.log(obj);
console.log((typeof obj));

function newFunc(params) {  //functions
    Safwan
};
console.log(newFunc);
console.log((typeof newFunc));

let date = new Date();  // dates
console.log(date);
console.log((typeof date));