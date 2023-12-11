//1.

let arr = [1,2,3,4,5,6,7];
let a = prompt("Enter a number");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);

//2.

let arr2 = [43,78,56];
let b;
do {
    b = prompt("Enter a number");
    b = Number.parseInt(b);
    arr2.push(b);
    console.log(arr2);
} while(b!=0)

//3.

let arr3 = [22,40,60,47,98,100,6,15];
let c=arr3.filter((x)=>{
    return x % 10;
})
console.log(c);

//4.

let arr4 = [1,2,3,4,5,6,7,8,9];
let d = arr4.map((value)=>{
    return value * value;
})
console.log(d);

//5.

let arr5 = [1,2,3,4,5,6,7,8,9];
let e = arr5.reduce((x1,x2)=>{
    return x1 * x2;
})
console.log(e);