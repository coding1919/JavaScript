console.log(id1); //This is not a best practice

let id1 = document.getElementById("id1");
console.log(id1); // This is the best practice

console.log(id.matches(".class")) //false
console.log(id.matches(".box")) //true

//matches - To check if element matches the given css selector
//closest - To look for the nearestancestor that matches the given CSS selector. The elem itself is also checked
//contains - Returns true if elemB is inside elemA (a descebdent of elemA) or when elemA == elemB

 let sp1 = document.getElementById("sp1");
console.log(sp1.closest(".box"))
console.log(sp1.closest("#sp1"))

console.log(id1.contains("sp1")); //true
console.log(sp1.contains("sp1")); //true
console.log(sp1.contains("id1")); //false