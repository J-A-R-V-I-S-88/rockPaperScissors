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
let i = 1
while(i = 1){
    let humanChoiceRaw = getHumanChoice()
    let humanChoice = humanChoiceRaw.trim().toLowerCase()
    let computerChoice = getComputerChoice(humanChoice)
    if(humanChoice ===  "rock" || humanChoice === "paper" || humanChoice === "scissors"){
    alert(`You chose ${humanChoice}. I chose ${computerChoice}. You lose!`)
    } else {
        alert("That's not an option.")
    }
}