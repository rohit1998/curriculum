console.log("Hello World!");

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice(){
    const userInput = prompt("Enter your choice: rock, paper, scissors");
    return userInput.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log(`You both choose ${computerChoice}. This round is a tie!`);
    }

    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")){
        console.log(`Computer choose ${computerChoice}. You have won the round!`);
        humanScore++;
    }

    if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "scissors")){
        console.log(`Computer choose ${computerChoice}. You have lost the round!`);
        computerScore++;
    }

    console.log(`User Score: ${humanScore} Computer score: ${computerScore}`);
}

function playGame(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    if (humanScore > computerScore){
        console.log("You Won the overall game!!");
    }
    else if (computerScore > humanScore){
        console.log("You Lost the overall game!!");
    }
    else{
        console.log("Overall game ended in a tie!!");
    }
}