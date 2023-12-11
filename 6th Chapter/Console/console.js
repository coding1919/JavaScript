console.time("start");

console.log(console);// gives all properties

console.log('Safwan')//undefined will be returned
4; // it will return 4

console.error('This is an error');

console.assert(5>53); // error or assertion failed // used to assert condition
console.assert(555>53);


console.clear()// will clear full console

let obj = {
    a : "apple",
    b : "ball",
    c : "cat",
    d : "dog"
}
console.table(obj); // it will show in tabular form

console.warn('Dont smoke');// will show warning

console.info("This is an imp info");// gives information

console.log("log");
console.info("info");
console.warn("warn");
console.error("error")
console.assert("error" != false);
console.assert("error" == false);

console.timeEnd("start")