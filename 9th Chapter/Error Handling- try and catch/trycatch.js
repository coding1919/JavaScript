setTimeout(() => {
    console.log("Hacking wifi.... Please wait...")
}, 1000);

// try{
// console.log(rahul)
// }
// catch(error){
//     console.log("balle balle " + error)
// }

try{
    setTimeout(() => {
        console.log(rahul)
    }, 100);
}
catch(error){
    console.log("balle balle " + error)
}

setTimeout(() => {
    console.log("Fetching username and password.... Please wait...")
    // console.log(rahul)
}, 2000);

setTimeout(() => {
    console.log("Hacking Rahul's facebook id.... Please wait...")
}, 3000);

setTimeout(() => {
    console.log("Username and Password of Rahul (+919798362498) fetched.... Please wait...")
}, 4000);

// We all make mistakes. Also sometimes our script can have errors. Usually a program halts when an error occurs

// The try catch syntax allows us to catch errors so that the script instead od dying can do some thing more reasonable

// The try catch syntax:
// The try catch syntax has two main blocks
// try{
    // try the code
// } catch(err){  // the err variable contains an error object
    // error handing
// }

// It works like this:
// 1. First the code in try is executed 
// 2. If there is no error, catch is ignored else catch is executed

// try and catch works synchronously
// If an exception happens in scheduled code, like setTimeout, then try catch wont catch it:
// try{
//     setTimeout(function() => {
//         //error code //script dies and catch wont work
//     }, 100);
// }

// Thats because the function itself is executed later, when the engine has already left the try... catch construct