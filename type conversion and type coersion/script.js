// Type conversion

let myVar;
myVar = String(30); //converts other data types to string
console.log(myVar, typeof myVar);

let boole;
boole = String(true);
console.log(boole, typeof boole);

let date;
date = String(new Date());
console.log(date, typeof date);

let arr;
arr = String([1,2,3,4,5]);
console.log(arr, typeof arr);

let obj = {
        name:"safwan",
        class: "SSLC" ,
        new: "sss",
    }
console.log(obj.toString() , typeof obj.toString())

let num = Number("3456"); // to convert any other data types to number
// if we convert this type of value to number 34d56 it will give you NAN (not a number)
console.log(num , typeof num);

let bool = Number(true); // true=1 false=0
console.log(bool , typeof bool);

let array = Number([1,2,3,4,5,]); //NaN
console.log (array , typeof array);

let day = Number(new Date());
console.log(day , typeof day);

let int = Number("34.9532869") ;
console.log(int , typeof int);
let inte = parseInt("34.9532869") ; // integer
console.log(inte, typeof inte);
let integ = parseFloat("34.9532869") ; // float
console.log(integ, typeof integ);
let integer = Number("34.9532869") ;
console.log(integer.toFixed(13));

// Type coercion

let str = "20";
let number = 22;
console.log(str + number); //2022

let string = Number("20");
let numer = 22;
console.log(string + numer); //42

let nu = 20;
let st = "22";
console.log(nu + st)