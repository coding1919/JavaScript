// Callback Hell

// Pyramid of Doom

// When we have callback inside callbacks, the code gets difficult to manage

//  loadscript((...)){
//     loadScript...{
//         loadScript
//     }
// }
// as calls become more nested, the code becomes deeper and increasingly more difficult to manage especially if we have real code instead of ...

// This is sometimes called "Callback hell" or "Pyramid of doom"

// The "pyramid" of these cells grows towards the right with every asynchronous action.Soon it spirals out of control so this way of coding t