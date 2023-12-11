// There are 6 static methods of promise class:


let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Value 1")
    }, 5000);
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // resolve("Value 2")
        reject(new Error("Error"));
    }, 2000);
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Value 3")
    }, 3000);
})
// p1.then((value)=>{
//     console.log(value)
// })
// p2.then((value)=>{
    //     console.log(value)
    // })
    // p3.then((value)=>{
        //     console.log(value)
        // })

// Promise.all-> Waits for all promises to resolve and returns the array of their results. If any one fails, it becomes the error and all other results are ignored
// This will run all the resolve promise at once like i used 1000 and 2000 and 3000 milliseconds so it will run all at the same time that is 3000 milliseconds 
// and if it has any error it will not execute any of the promises
        // let promise_all = Promise.all([p1,p2,p3])
        // promise_all.then((value)=>{
        //     console.log(value)
        // })

// Promise.allSettled-> Waits for all the promises to settle and return their results as an array of objects with status and value
// This will give both result as well as resolve and give its status
        // let promise_all = Promise.allSettled([p1,p2,p3])
        // promise_all.then((value)=>{
        //     console.log(value)
        // })

// Promise.race-> Waits for the first promise to settle and its result/error becomes the outcome
// its like a race any promise which resolve first will be shown
// if only resolve it will execute and if only reject and that value is first in race then it will show an error
        // let promise_all = Promise.race([p1,p2,p3])
        // promise_all.then((value)=>{
        //     console.log(value)
        // })

// Promise.any-> Waits for the first promise to fulfill(if not rejected),and its result becomes the outcome throws aggregate Erroe if all the promises are rejected
// Its same like a race but if we use reject as error it will not show any error and if any promise not able to run then it will show the defaullt error
        // let promise_all = Promise.any([p1,p2,p3])
        // promise_all.then((value)=>{
        //     console.log(value)
        // })

// Promise.resolve-> Makes a resolved promise with the given value
        // let promise_all = Promise.resolve([p1,p2,p3])
        // promise_all.then((value)=>{
        //     console.log(value)
        // })
        // let promise_all = Promise.resolve(7)
        // promise_all.then((value)=>{
        //     console.log(value)
        // })

// Promise.reject-> Makes a rejected promise with the given error
        // let promise_all = Promise.reject([p1,p2,p3])
        // promise_all.then((value)=>{
        // console.log(value)
        // })
        // let promise_all = Promise.reject(new Error("Saf"))
        // promise_all.then((value)=>{
        //     console.log(value)
        // })
