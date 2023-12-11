let marks = [93,75,58,99, null,false,"not present"] //you can add any primitive data types
console.log(marks);

// const arr = new Array(25,'apple',true);
// console.log(arr);
// arr[0] = 'safwan';
// console.log(arr);
// let arrelement = arr[0];
// console.log("Element: ",arrelement);
// console.log(arr);

console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
console.log(marks[6])
// console.log(marks[7])
console.log(marks[7]) // if you didnt had any data types it will give undefined
console.log(marks[8]) // if you didnt had any data types it will give undefined

console.log(marks.length)// it is property because it doesnt have braces() and if it has braces() it is called as method

console.log(Array.isArray(25));

marks[7] = 82 //adding the new value to array
marks[2] = 72 // changing the value of array
console.log(marks)

// arrays are mutable arrays can be changed and strings are immutable and strings cannot be changed

console.log(typeof marks)

//arrays can hold many values under a single name

//for loop practice in array

let value = [23,42,76,11,39];
for(let i=0; i<value.length; i++){
    console.log(i)
    console.log(value[0])
    console.log(value[1])
    console.log(value[2])
    console.log(value[3])
    console.log(value[4])
}

//Array Methods

let num = [1,2,3,4,56,6]
let b = num.toString() //converts array to string
console.log(b, typeof b)

let c = num.join('_'); // joining value after one array and another array and another array
console.log(c, typeof c)

num.pop();// removes the last value in array
console.log(num);

let r = num.pop();//pop returns the popped element
console.log(num, r);

num.push(34);// adds the value at the end of the array
console.log(num);

let d = num.push(34);// push returns the length
console.log(num , d)

num.shift();// removes the first value from array
console.log(num);

let e = num.shift();// shift returns the shifted value
console.log(num , e)

num.unshift(99);// adds the value at the starting of the array
console.log(num);

let f = num.unshift(99);// unshift returns the length
console.log(num , f)

//delete is not a method it is a operator like typeof()
delete num[0] //deletes the 0th element and gives it a empty space 
//before it has the 6 element and after delete it has the 6 element
console.log(num);
console.log(num.length);

let num_more = [11,12,13,14,15];
let newArray = num.concat(num_more)// it merges the both array or more array
console.log(newArray); // it returns the new array 
//but doesnt change the array num to the newArray and num_more to the newArray it means doesnt change the existing array

num.sort(); // it sorts in the manner like if array contains [1,2,3,4,5,11,15,17,22,34,338,4000,45,555555] then it will sort like [1,11,15,17,2,22,3,338,34,4,45,4000,555555]
console.log(num);

let g = num.sort() // it returns the same
console.log(num,g);

let compare =(a,b)=>{
    return b - a; //accending order a - b decending order
}
num.sort(compare);
console.log(num);

num.splice(2,3,1021,1031,1041,1051); // in splice first argument is to keep the element from 0 to 2 as it is and the second argument is 3 which removes 3 element and instead of that it gives that element argument 3 and 4 and 5 and 6 and so on.....
// returns deleted items and modifies the array
console.log(num);

num.slice(2); // it doesnt modify the original array 
//it creates the new array
console.log(num)

let h = num.slice(3)
console.log(h);

let i = num.slice(3,5)
console.log(i);

num.reverse()
console.log(num)