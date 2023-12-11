// basics

let num = [1,2,3,4,5,6];
for(i=0; i<num.length; i++){
    console.log(num[i]);
}

// num i multiply by num i
// forEach method
num.forEach((element)=>{
    console.log(element*element);
})

//array.from changes the html collection to array
//Array.from

let name = "safwan";
let arr = Array.from(name);
console.log(arr)

//for of loop
//same as basics and very easy method
for(let i of num){
    console.log(i)
}

//for in loop

for(let i in num){
    console.log(i) // 0,1,2,3,4,5 this is key
    console.log(num[i]) // value which is used in array
}