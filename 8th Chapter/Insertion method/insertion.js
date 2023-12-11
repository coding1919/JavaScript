let a = document.getElementsByTagName("div")[0]

// a.innerHTML = a.innerHTML + "<h1>Hello World!</h1>"; // older method of insertion

let div = document.createElement("div");
div.innerHTML = "<h1>Hello World!</h1>"
a.appendChild(div);
a.append(div); //append at the end of node
a.prepend(div); //insert at the beggining of node
a.before(div); //insert before node and outside the container
a.after(div); //insert after node and outside the container
a.replaceWith(div); //replaces node with the given node
