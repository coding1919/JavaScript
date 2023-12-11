let chances = prompt("How many times do you want to play?");
var i = 0;
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

var output = stonepaperscissor(person,computer)

console.log(`Computer Input : ${computer}\nYour Input : ${person}\nThis is the result : ${output} \n \nRemaining chances : ${chances-i-1}`)


// if(output === "Congratulations! You Won"){
    //   won + i ;
    // }
    // else if(output === "You Loose"){
        //   loss + i ;
        // }
        i++;
    }
    
// var won = 0;
// var loss = 0;

console.log("Game Over")
for(var won=0;won!=output==="You Loose";won++){
    console.log("Won : " + won)
}
console.log(won)
// console.log(loss)
// else if(output === "You Loose"){
//   console.log(`Your  : ${loss ++} `)
// }