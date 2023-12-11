//  For Loop
//  for(let i=0; i<10; i++){
//     console.log(i);
//  }

//  program to add first n natural numbers
// let sum = 0;
// let n = prompt('Enter the value of n')
// n = Number.parseInt(n)
// for(let i=0; i<n; i++){
//     sum += (i+1)
// }
// console.log('Sum of first '+ n + ' natural number is ' + sum);

// program to multiply first n natural numbers
// let sum = 1;
// let n = prompt("Enter the value of n");
// n = Number.parseInt(n)
// for( i=1; i<n; i++){
//     sum += (i*n);
//     console.log((i*n), "+")
// }
// console.log('Factorial of first ' + n + ' natural number ' + sum)
// console.log(sum)

let obj = {
    safwan: 60,
    rohan: 90,
    rahul: 50,
    ritesh: 70,
}
for (let a in obj){
    // console.log(a)
    console.log("Marks of "+a+ " are "+ obj[a])
}

for (let a of "Safwan"){
    console.log(a)
}
