// 1.

// 2.

// 3. 
// document.getElementById("twitter").addEventListener("click",function () {
//     window.location.href = "https://www.twitter.com";
//     return false;
//     window.focus()
// })

// 4.
const fetchContent = async (url) => {
    con = await fetch(url);
    let a = await con.json()
    return a;
}

setInterval(async function() {
    let url = "https://jsonplaceholder.typicode.com/todos/1"
    console.log(await fetchContent(url))
}, 5000);

// 5. 
setInterval(async function(){
   document.querySelector("#bulb").classList.toggle("bulb")
},500)