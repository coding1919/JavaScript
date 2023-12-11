let p1 = new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(() => {
        console.log("I am a promise and i am fulfilled")
        // console.log("I am a promise and i am rejected")
        resolve(true)
        // reject(new Error("I am an error"))
    }, 5000);
})
let p2 = new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(() => {
        // console.log("I am a promise and i am fulfilled")
        console.log("I am a promise and i am rejected")
        // resolve(true)
        reject(new Error("I am an error"))
    }, 5000);
})
console.log(p1,p2)

// fulfilled - refund
// resolve - order is done
// reject - will not be delivered

// to get the value
p1.then((value)=>{
    console.log(value)
})
p2.then((value)=>{
    console.log(value)
})
p2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
}) // if we dont use thid we will see an error

// to catch the error
p1.catch((error)=>{
    console.log(error)
})
p2.catch((error)=>{
    console.log(error)
})
p2.catch((error)=>{
    console.log("some error occured in p2")
})

// Consumers : then and catch
// The consuming code can receive the final result of a promise through then and catch

// The most fundamental one is error
// if we are interested only in successful completion we can provide only one argument to then()

let promise = new Promise(resolve=>{
    setTimeout(() => {
        resolve("done")
    }, 1000);
})

promise.then(alert)

// if we are interested only in error we can use null as the first argument .then(null,t) or we can use catch

promise.catch(alert)