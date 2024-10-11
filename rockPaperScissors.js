// This is a file to program a playable game of rock paper scissors using javascript.
function random(number){
    return Math.floor(Math.random() * number)
}
function getHumanChoice(){
    return prompt(`Rock paper or scissors?`)
}
function getComputerChoice(input){
    if(input === 0){
        return `rock`
    } else if(input === 1){
        return `paper`
    } else if(input === 2){
        return `scissors`
    }
}

let wins = 0
let losses = 0
let draws = 0
// WLDL = winLossDrawLog
let WLDL = `Wins: ${wins}. Losses: ${losses}. Draws: ${draws}.`
function rockPaperScissors(humanChoice, computerChoice){
    let phrase = `You choose ${humanChoice}! I choose ${computerChoice}.`
    if(humanChoice === computerChoice){
        draws = draws + 1
        let WLDL = `Wins: ${wins}. Losses: ${losses}. Draws: ${draws}.`
        alert(phrase + ` Draw! ${WLDL}`)
    } else if(humanChoice === `paper` && computerChoice === `rock`){
        wins = wins + 1
        let WLDL = `Wins: ${wins}. Losses: ${losses}. Draws: ${draws}.`
        alert(phrase + ` You win! ${WLDL}`)
    } else if(humanChoice === `paper` && computerChoice === `scissors`){
        losses = losses + 1
        let WLDL = `Wins: ${wins}. Losses: ${losses}. Draws: ${draws}.`
        alert(phrase + ` You lose! ${WLDL}`)
    } else if(humanChoice === `scissors` && computerChoice === `paper`){
        wins = wins + 1
        let WLDL = `Wins: ${wins}. Losses: ${losses}. Draws: ${draws}.`
        alert(phrase + ` You win! ${WLDL}`)
    } else if(humanChoice === `scissors` && computerChoice === `rock`){
        losses = losses + 1
        let WLDL = `Wins: ${wins}. Losses: ${losses}. Draws: ${draws}.`
        alert(phrase + ` You lose! ${WLDL}`)
    } else if(humanChoice === `rock` && computerChoice === `scissors`){
        wins = wins + 1
        let WLDL = `Wins: ${wins}. Losses: ${losses}. Draws: ${draws}.`
        alert(phrase + ` You win! ${WLDL}`)
    } else if(humanChoice === `rock` && computerChoice === `paper`){
        losses = losses + 1
        let WLDL = `Wins: ${wins}. Losses: ${losses}. Draws: ${draws}.`
        alert(phrase + ` You lose! ${WLDL}`)
    } else {
        alert(`That's not an option.`)
    }
}

while (true){
    let humanChoiceRaw = getHumanChoice()
    let human = humanChoiceRaw.trim().toLowerCase()
    let computer = getComputerChoice(random(3))
    rockPaperScissors(human, computer)
}