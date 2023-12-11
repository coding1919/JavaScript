// This is a special syntax to work with promises in javascript
// A function can be made async by using async keyword like this:
// (ham kisi bi function ko async bana sakthe heh aur uske baad uske andhar promise await kar sakthe heh)
// async function harry(){
// retrn 7
// }
// An async function always returns a promises. Other values are wrapped in a promises automatically
// We can do something like this
// harry().then(alert)
// So async ensures that the function returns a promise and wraps non promises in it

// The await keyword
// There is another keyword called await that works only inside async functions
let value = await promise
// The await keyword makes javascript wait until the promise settles and returns its value
// Its just a more elegant syntax of getting the promise result than promise then + its easier to read and write

async function harry() {
    return 5
}

harry().then((x)=>{
    alert(x)
})

async function safwan() {
    let delhiWeather = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("27 Deg")
        }, 5000);
    })
    let bangaloreWeather = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("21 Deg")
        }, 10000);
    })
    // delhiWeather.then(alert)
    // bangaloreWeather.then(alert)
    console.log("Fetching Delhi Weather Please Wait ...")
    let delhiW = await delhiWeather
    console.log("Fetched Delhi Weather: " + delhiW)
    console.log("Fetching Bangalore Weather Please Wait ...")
    let bangaloreW = await bangaloreWeather
    console.log("Fetched Bangalore Weather: " + bangaloreW)
    return[delhiW,bangaloreW]
    // console.log(delhiW,bangaloreW)
    // alert(delhiW,bangaloreW)
}
const trygon = async ()=>{
    console.log("Hey i am trygon and i am waiting")
    // console.log("Hey i am trygon and i am not waiting")
}
const tarzan = async ()=>{
console.log("Welcome to weather control room")
let a = await safwan()
let b = await trygon()
// a.then((value)=>{
//     console.log(value)
// })
// console.log(a)
}
tarzan()