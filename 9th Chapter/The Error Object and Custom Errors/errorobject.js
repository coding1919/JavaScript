// For all the built in errors, the error object has two main properties:

try {
    // harry
    // throw new Error("Harry is not good") // this is the custom error that we can create our own
    // throw new ReferenceError("Harry is not good") // it gives type as reference error
    // this is done for stack:
    console.log(safwan)
    throw new ReferenceError("Safwan is not good")
} catch (error) {
    console.log(error.name) // name of the error
    console.log(error.message) //gives a message like harry is not defined
    console.log(error.stack) // full stack of error like this:
    // ReferenceError: Safwan is not good
    // at errorobject.js:9:11
}

// We can throw our own error by using the throw syntax

try{
    let age = prompt("Enter your age")
    age = Number.parseInt(age)
    if(age>100){
        throw new ReferenceError("This is probably not true")
    }
} catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}

// We can also throw a particular error by using the built in constructor for standard errors:

// new SyntaxError("hello")
// new ReferenceError("hello")