let user = prompt("Enter S, W and G");
let cpu1 = Math.floor(Math.random())*3;
let cpu = ["S","W","G"][cpu1]

const match = (cpu,user) =>{
    if(cpu === user){
        return "tie";
    }
    else if(cpu === "S" && user === "W"){
        return "cpu won"
    }
    else if(cpu === "S" && user === "G"){
        return "user won"
    }
    else if(cpu === "W" && user === "S"){
        return "user won"
    }
    else if(cpu === "W" && user === "G"){
        return "cpu won"
    }
    else if(cpu === "G" && user === "S"){
        return "cpu won"
    }
    else if(cpu === "G" && user === "W"){
        return "user won"
    }
}

let result = match(cpu,user);

document.write(`cpu : ${cpu} <br> user : ${user} <br> Your result is ${result}`)

let chances = prompt("How many times do you want to play?");
i = 0;
while(i<chances){
let person = prompt("Enter Stone,Paper or Scissor");
let computerInput = Math.floor(Math.random()*3);
let computer = ["Stone","Paper","Scissor"][computerInput]

const stonepaperscissor = (person , computer) =>{
    if(person===computer){
        return "Match is Tie"
    }
    else if(person==="Stone" && computer==="Paper"){
        return "You Loose"
    }
    else if(person==="Stone" && computer==="Scissor"){
        return "Congratulations! You Won"
    }
    else if(person==="Paper" && computer==="Stone"){
        return "Congratulations! You Won"
    }
    else if(person==="Paper" && computer==="Scissor"){
        return "You Loose"
    }
    else if(person==="Scissor" && computer==="Stone"){
        return "You Loose"
    }
    else if(person==="Scissor" && computer==="Paper"){
        return "Congratulations! You Won"
    }
}

let output = stonepaperscissor(person,computer)

console.log(`Computer Input : ${computer}\nYour Input : ${person}\nThis is the result : ${output} \n \nRemaining chances : ${chances-i-1}`)

i++;
}

console.log("Game Over")

