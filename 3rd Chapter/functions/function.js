function onePlusAvg(x,y){
    return 1 + (x+y)/2
    // return Math.round(1 + (x+y)/2)
}

let l = 1;
let m = 2;
let n = 3;

console.log("One plus Average of a and b is ",onePlusAvg(l,m));
console.log("One plus Average of b and c is ",onePlusAvg(m,n));
console.log("One plus Average of a and c is ",onePlusAvg(l,n));

// console.log("One plus Average of a and b is ",1+(a+b)/2);
// console.log("One plus Average of b and c is ",1+(b+c)/2);
// console.log("One plus Average of a and c is ",1+(c+a)/2);

console.log("Hello")
//to use repeatedly we can use function by logic separation and also to make changes
function Average(x,y) {
    console.log("Done")
    return ((x)+y)/2
}

const hello =()=>{
    console.log("Hello bhai")
    return "safwan"
}//arrow function and preferred
// const sum =(p,q)=>{
//     return p + q
// }
let a=1;
let b=2;
let c=3;
// without using function and invoke function will not work
hello();
let naam = hello();
console.log(naam)
console.log("Average of a and b is", Average(a,b));
console.log("Average of b and c is", Average(b,c));
console.log("Average of c and a is", Average(c,a));
console.log(sum(7+7))

