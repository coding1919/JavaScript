// Local storage is a web storage object which are not sent to server with each request. This data survives a full page refresh and even a full browser restart

// Methods

// setItem(key,value) - store key/value pairs
let key = prompt("Enter your key")
let value = prompt("Enter your value")
localStorage.setItem(key,value)

// getItem(key) - get the valoe by key
console.log(localStorage.getItem(key))
console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

// removeItem(key) - remove the key with its value

// console.log(localStorage.removeItem(key))
if (key=="red" || key=="blue"){
    localStorage.removeItem(key)
}

// clear(key) - delete everything

// console.log(localStorage.clear())
if (key==0){
    localStorage.clear()
}

// key(index) - get the key on a given position (0-infinite)

console.log(localStorage.key(3))
console.log(localStorage.key(2))
console.log(localStorage.key(1))

// length() - the number of stored items
console.log(localStorage.length())


// we can aget and set values like an object
localStorage.one = 1
alert(localStorage.one)
delete localStorage.one

// Note:
// Both key and value must be strings
// We can use the two json methods to store objects in localStorage

// JSON.Stringify(object) - converts object to json strings
// JSON.parse(string) - converts string to strings (must be valid json)