// JavaScript can be used to send and return informatiuon from the network when needed(AJAX) - Umbrella term  - Asynchronous JavaScript And XML

// Fetch API 
// fetch is used to get data over the network
// let promise = fetch(url,[options]) - without options a get request(url mhe se data kho larahe ho) is sent 
let p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    console.log(response)
    console.log(response.headers)
    // console.log(response.json())
    // console.log(response.text())
    // return response.text() // in string
    // return response.json() // in object
}).then((response)=>{
    console.log(response)
})

// Getting a response is a two stage process:

// 1. An object of response class containing "status" and "ok" properties
// status - the http status code. eg:200
// ok - boolean, true is the http status code is 200-299

// After that we need to call another method to access the body in different formats.
// response.text() - Read and return the text
// response.json() - parse the response as json

// other methods include response form.Data(), response.blub(), response.array

// Note : We can use only one body.reading method 
// ex: if we have already got the response with response.text() then response.json() wont work

// Response Headers
// response headers are available in response.headers
// Request Headers
// The set a request header in fetch, we can use the header option
// let res = fetch("https://goweather.herokuapp.com/weather/Ny",{headers:{
//     Authentication:"Secret"
// }
// })