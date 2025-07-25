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

// function getHumanChoice(){
//     const userInput = prompt("Enter your choice: rock, paper, scissors");
//     return userInput.toLowerCase();
// }

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


const humanScoreElement = document.querySelector(".human")
const computerScoreElement = document.querySelector(".computer")
const actionsElement = document.querySelector(".actions")
const historyElement = document.querySelector(".history")

function resetScore(event){
    humanScore=0;
    computerScore=0;
    historyElement.replaceChildren();
    humanScoreElement.textContent = 0;
    computerScoreElement.textContent = 0;

    const resetButton = document.querySelector(".reset");
    actionsElement.removeChild(resetButton);
}

function actionListner(event){

    if (humanScore===5 || computerScore===5 || !event.target.classList.contains("action")){
        return;
    }

    const computerChoice = getComputerChoice();
    const humanChoice = event.target.textContent.toLowerCase();
    playRound(humanChoice, computerChoice);

    humanScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;

    const roundInfoElement = document.createElement("p");
    roundInfoElement.textContent = `Human: ${humanChoice} Computer: ${computerChoice}`;
    historyElement.appendChild(roundInfoElement);

    if (humanScore===5 || computerScore===5){
        const resetButton = document.createElement("button");
        resetButton.className = "reset";
        resetButton.textContent = "reset";
        resetButton.addEventListener("click", resetScore);
        actionsElement.appendChild(resetButton);
    }
    if (humanScore===5){
        const finalScoreElement = document.createElement("p");
        finalScoreElement.textContent = "You Win!!";
        historyElement.appendChild(finalScoreElement);
    } else if(computerScore===5){
        const finalScoreElement = document.createElement("p");
        finalScoreElement.textContent = "Computer Wins!!";
        historyElement.appendChild(finalScoreElement);
    }

}

actionsElement.addEventListener("click", actionListner);

// function playGame(){
//     let humanChoice = getHumanChoice();
//     let computerChoice = getComputerChoice();
//     playRound(humanChoice, computerChoice);

//     humanChoice = getHumanChoice();
//     computerChoice = getComputerChoice();
//     playRound(humanChoice, computerChoice);

//     humanChoice = getHumanChoice();
//     computerChoice = getComputerChoice();
//     playRound(humanChoice, computerChoice);

//     humanChoice = getHumanChoice();
//     computerChoice = getComputerChoice();
//     playRound(humanChoice, computerChoice);

//     humanChoice = getHumanChoice();
//     computerChoice = getComputerChoice();
//     playRound(humanChoice, computerChoice);

//     if (humanScore > computerScore){
//         console.log("You Won the overall game!!");
//     }
//     else if (computerScore > humanScore){
//         console.log("You Lost the overall game!!");
//     }
//     else{
//         console.log("Overall game ended in a tie!!");
//     }
// }