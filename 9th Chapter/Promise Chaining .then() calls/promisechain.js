// to use chain of .then
// we can chain promises and make them pass the resolved values to one another
// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("resolve after 2 second")
//         resolve(56)
//     }, 2000);
// })

// p1.then((value)=>{
//     console.log(value)
//     let p2 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{resolve("Promise 2")},2000)
//     })
//     return p2
// }).then((value)=>{
//     console.log("We are done")
//     return 2
// }).then((value)=>{
//     console.log("Now we are pakka done")
// })

// the idea is to pass the result through the chain of .then handlers

// here is the flow of execution:
// 1. The initial promise resolves in 1 seconds (Assumption)
// 2. the next .then() handler is then called which return a new promise (resolved with 2 value)
// 3. The next .then() gets the result of previous one and this keeps going on

// Every call to .then() returns a new promise whose value is passed to next one and so on. We can even create custom promises inside .then()

const loadScript = (src)=>{
    return new Promise((resolve,reject) =>{
    let script = document.createElement("script")
    script.src = src
    document.body.appendChild(script)
    script.onload=()=>{
        resolve("The script has been loaded successfully")
    }
    script.onerror = ()=>{reject(0)}
  })
}

let p11 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js")
p11.then((value)=>{
    console.log(value)
    return loadScript("https://cdn.jssssdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js")
}).then((value)=>{
    console.log("Second script")
}).catch((error)=>{
    console.log("We are having the problem loading the script")
})