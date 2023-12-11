let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        alert("Hey i am  not resolved")
        resolve(4)
    }, 2000);
})
p1.then(()=>{
    console.log("Congragulations this promise is now resolved")
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(4);
        }, 6000);
    })
}).then((value)=>{
    console.log(value)
})

p1.then(()=>{
    console.log("Hurray")
})

p1.then(()=>{
    console.log("Like")
    setTimeout(() => {
        console.log("Love")
    }, 5000);
})
// We can attach multiple handlers to one promise.They dont pass the result to each other.instread they process it independently