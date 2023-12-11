//variable is a container in which value is stored
// var, let, const
var name='safwan'; //string
console.log(name);
var channel;
console.log(channel);
// undefine means we have just declared but not assigned any value
var mark=98; //number
console.log(mark)

var name='safwan';
var channel;
var mark=98;
console.log(name,channel,mark);

//Rules for creating javascript variables
// 1. cannot start with numbers
// 2. can start with letters , underscore(_) and dollar($)
// 3. Are case sensitive

//don't use dollar and underscore at start because it is used somewhere else

const a = "Safwan"; // in this variable cannot be changed later
console.log(a);
// const b; This cannot be done and need some value to it
var city = "Delhi";// Global Level Scope
{
let city = "Mangalore"; // Block Level Scope
console.log(city)
}
console.log(city);

// Case Types
// 1.camelCase
// 2.kabab case
// 3.snake_case
// 4.PascalCase