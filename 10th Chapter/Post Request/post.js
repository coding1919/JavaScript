// to make a post request we need to use fetch options
// 1. method -> HTTP-method, eg-POST
// body -> the request body

// let options = {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify({ //converts to string and JSON.parse converts to obj
//         title: 'harry',
//         body: 'bro',
//         userId: 101,
//     })
// }

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// // using async
// const createTodo = async () => {
//     let options = {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify({ //converts to string and JSON.parse converts to obj
//             title: 'harry',
//             body: 'bro',
//             userId: 101,
//         })
//     }
//     let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//     let response=await p.json()
//     return response
// }

// const mainFunc =async ()=>{
//     let todo =await createTodo()
//     console.log(todo)
// }

// mainFunc()
// using async
const createTodo = async (todo) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo), //converts to string and JSON.parse converts to obj

    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}

// const getTodo = async (id)=>{
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1' + id)
//   let r = await response.json()
//   return r
// }

const mainFunc = async () => {
    let todo = {
        title: 'harry',
        body: 'bro',
        userId: 101,
    }
    let todor = await createTodo(todo)
    console.log(todor)
    // console.log(await getTodo(101))
}

mainFunc()
