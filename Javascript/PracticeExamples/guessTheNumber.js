let gameNumber = 10;


let guess = prompt("Guess The Game Number :")

while(gameNumber != guess){
    guess = prompt("You guessed Wrong Number. Try Again !!!! ")
}

console.log("CONGRATULATION !!! You Guessed The Right Number.")