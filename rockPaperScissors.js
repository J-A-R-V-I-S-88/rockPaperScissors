// This is a file to program a playable game of rock paper scissors using javascript.
function random(number){
    return Math.floor(Math.random() * number)
}
function getHumanChoice(){
    return prompt("Rock paper or scissors?")
}
function getComputerChoice(input){
    if(input === 0){
        return "rock"
    } else if(input === 1){
        return "paper"
    } else if(input === 2){
        return "scissors"
    }
}

let i = 1
while(i = 1){
    let humanChoiceRaw = getHumanChoice()
    let humanChoice = humanChoiceRaw.trim().toLowerCase()
    let computerChoice = getComputerChoice(random(3))
    let phrase = `You choose ${humanChoice}! I choose ${computerChoice}.`
    if(humanChoice === computerChoice){
        alert(phrase + " Draw!")
    } else if(humanChoice === "paper" && computerChoice === "rock"){
        alert(phrase + " You win!")
    } else if(humanChoice === "paper" && computerChoice === "scissors"){
        alert(phrase + " You lose!")
    } else if(humanChoice === "scissors" && computerChoice === "paper"){
        alert(phrase + " You win!")
    } else if(humanChoice === "scissors" && computerChoice === "rock"){
        alert(phrase + " You lose!")
    } else if(humanChoice === "rock" && computerChoice === "scissors"){
        alert(phrase + " You win!")
    } else if(humanChoice === "rock" && computerChoice === "paper"){
        alert(phrase + " You lose!")
    } else {
        alert("That's not an option.")
    }
}