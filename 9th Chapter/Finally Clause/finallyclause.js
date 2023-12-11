// The try catch construct may have one or more clause: finally

// if it exists it runs in all cases:
// after try if there were no errors
// after catch if there were errors
// if there is return in try, finally is executed just before the control returns to the outer code

try {
    let a = 0
    console.log(safwan)
    console.log("Program runs successfully")
} catch (error) {
    console.log("This is an error")
    // console.log(p)
}
finally{
    console.log("I am a good boy") // finally will run always
    // Close the file
    // Exit the loop
    // Write to the log file
}
console.log("I am a good boy")

const f =()=>{

    try {
        let a = 0
        // console.log(safwan)
        console.log("Program runs successfully")
        return
    } catch (error) {
        console.log("This is an error")
        console.log(p)
    }
    finally{
        console.log("I am a good boy") // finally will run always
        // Close the file
        // Exit the loop
        // Write to the log file
    }
}
f()
console.log("end")