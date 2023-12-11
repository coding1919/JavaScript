// cookies are small strings of data stored directly in the browser

// In js, document.cookie provides access to cookies

alert(document.cookie)
// key value pair separated by a dash

// cookie are set by a web server using the Set-Cookie HTTP-header. Next time when the request is sent to the same domain. the browser sends the cookie using the cookie HTTP-header That way the server knows who sent the request

// we can access cookies using document.cookie property:
// contains key value pairs delimited by a ;

document.cookie = "name=safwan0897"

console.log(document.cookie)
document.cookie = "name=saf12383"
document.cookie = "name2=saf1238834678463"
console.log(document.cookie)

// cookies wont overwrite or rewrite instead cookies are added

// Writing to cookie
// An assignment to document,cookie is treated specially in a way that a write operator doesnt touch other cookies

document.cookie = "name=newboy827"  //update cookie
console.log(document.cookie)

// encodeURIComponent
// This function helps to keep the valid formatting. It is used like this

let key = prompt("Enter your key")
let value = prompt("Enter your value")
console.log(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)

console.log(decodeURIComponent(key))
console.log(decodeURIComponent(value))

// This way the special character are encoded

// Cookie option
// Cookies have a several options which can be provided after key=value to a set call like this:

console.log(document.cookie= "user=safwan; path=/a; expires=29 March 2023;")

// path option makes the cookie visible at /a /a/b etc
// expires set a cookies expiration time

// Note:
// The name=value pair after encodeURIComponent should not exceed 4kb
// Total number of cookies per domain is limited to around 20+ (exact number browser dependent)