let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const drawGame = () =>{
    msg.innerHTML = "Game Was Draw. Play Again"
    msg.style.backgroundColor = "#881b31";
}


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin)
        {
            userScore++;
            userScorePara.innerHTML = userScore;
            msg.innerHTML = `You Win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
        }
    else
        {
            computerScore++;
            compScorePara.innerHTML = computerScore;
            console.log("You Lose!");
            msg.innerHTML = `You Lose! ${compChoice} beats Your ${userChoice}`;
            msg.style.backgroundColor = "red";
        }    
}


const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    // Generate Computer Choice
    const compChoice = genCompChoice();


    if (userChoice === compChoice) 
        {
            // Draw Game
            drawGame();
        }

    else 
       {
        let userWin = true;

        if(userChoice === "rock") 
        {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else 
        {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
       }
}





























choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

