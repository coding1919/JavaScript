// it works same like as we promise in our day to day life

// The solution to the callback hell is promises
// A promise is a "promise of code execution". The code either executes or fails in both the cases the subscribers will be notified

// The syntax of the promises looks like this:
let promise = new Promise(function (resolve,reject) {
    alert("I am an alert in promise")
    resolve(56)
})

console.log("Hello")
setTimeout(function() {
    console.log("Hello in 2 seconds")
}, 2000)

console.log('My name is ' + "John")
console.log(promise)

// resolve and reject are two callbacks provided by javascript itself. They are called like this:

// resolve(value) - if the job is finished successfully
// reject(value) - if the job fails

// The promise object returned by the new Promise constructor has these properties

// 1. state: Initially pending then changes to either "fulfilled" when resolve is called or "rejected" when reject is called

// 2. result: Initially undefined then changes to value if rejected resolve(value) or error when rejected reject(error)

// Fetch google.com homepage
// Fetch data from the data api
// Fetch pictures from the server
// Print downloading
// Rest of the script

