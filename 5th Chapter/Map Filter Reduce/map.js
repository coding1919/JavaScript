// Array Map Method
// creates a new array and returns

let arr = [25,50,64,87]

// value - 25,50,64,87
arr.map((value)=>{
    console.log(value); 
}) 

//we can use three parameter value, index and array
arr.map((value, index, array)=>{
    console.log(value, index, array); 
}) 

// console.log(arr)

// let a = arr.map((value)=>{
//     console.log(value)
//     return value + 2;
// })
// console.log(a)

let a = arr.map((value, index, array)=>{
    console.log(value, index, array)
    return value + index;
})
console.log(a)

//Array Filter Method
let arr2 = [65,45,98,23,43]
let a2 = arr2.filter((a)=>{
    return a < 50
})
console.log(a2)

//this above code using map will return the set of array using booleans that is [false,true,false,true,true]
// let arr3 = [65,45,98,23,43];
// let a3 = arr.map((a)=>{
//     return a < 50
// })
// console.log(a3)

// in both map and filter original Array will not be changed

// Array Reduce Method
// returns value
let arr3 = [3,8,6,5,1];
let a3 = arr3.reduce((a,b)=>{
    return a + b;
})
console.log(a3);

// using function as variable
let arr4 = [3,8,6,5,1];
const reduceFunction = (a,b)=>{
    return a + b;
} 
let a4 = arr4.reduce(reduceFunction)
console.log(a4);


