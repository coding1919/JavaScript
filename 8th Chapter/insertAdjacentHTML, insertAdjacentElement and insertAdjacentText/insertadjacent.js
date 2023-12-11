first.insertAdjacentHTML("beforebegin", "<div> beforebegin </div>") //before the already exsisting div tag
first.insertAdjacentHTML("beforeend", "<div> beforeend </div>") //in the exsisting div tag after the inside text and element 
first.insertAdjacentHTML("afterbegin", "<div> afterbegin </div>") //in the exsisting div tag before the inside text and element it means at the starting of exsisting div
first.insertAdjacentHTML("afterend", "<div> afterend </div>") //after the already exsisting div tag

// to node remove
// to remove a node there is a method node.remove()
let id1 = document.getElementById("id1")
id1.remove()