// This is a file to program a rigged game of rock paper scissors using javascript.
function getHumanChoice(){
    return prompt("Rock paper or scissors?")
}
function getComputerChoice(input){
    if (input === "rock"){
        return "paper"
    } else if(input === "paper"){
        return "scissors"
    } else if(input === "scissors"){
        return "rock"
    }
}
let losses = 0
function rockPaperScissors(humanChoice, computerChoice){
    if(humanChoice ===  "rock" || humanChoice === "paper" || humanChoice === "scissors"){
    losses = losses + 1
    alert(`You chose ${humanChoice}. I chose ${computerChoice}. You lose! Wins: 0. Losses: ${losses}. Draws: 0.`)
    } else {
            alert("That's not an option.")
        }
    }
while(true){
    let humanChoiceRaw = getHumanChoice()
    let humanChoice = humanChoiceRaw.trim().toLowerCase()
    let computerChoice = getComputerChoice(humanChoice)
rockPaperScissors(humanChoice, computerChoice)
}