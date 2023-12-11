let a = Math.round();
let b = Math.round(a);
let chances = 0;

let number;
do{
    number = prompt(`Enter your guessed number`);
    number = Number.parseInt(number);

    if(number < b){
        console.log('Your number is greater than ',number);
    }
    else if(number > b){
        console.log('Your number is less than ',number);
    }
    else{
        console .log(`Congrats your correct number is ${b}`)
    }
    chances++;
}while(number !== b)