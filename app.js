const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreDis = document.querySelector("#user-score");
const compScoreDis = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random()*3);
    return options[index];
}

const drawGame = () => {
    msg.innerText = "Game was a draw!";
    msg.style.backgroundColor = "#B89E97";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin)
    {
        userScore++;
        userScoreDis.innerText=userScore;
        msg.innerText = `You won! Your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor = "#D4D5A0";
    }
    else
    {
        compScore++;
        compScoreDis.innerText = compScore;
        msg.innerText = `You lost! Comp ${compChoice} beat ${userChoice}`;
        msg.style.backgroundColor = "#D5A0CD";
    }
}

const playGame = (userChoice) => {

    const compChoice = genCompChoice();

    if(userChoice===compChoice)
    {
        drawGame();
    }
    else{
        let userWin = true;

        if(userChoice==="paper")
        {
            userWin = compChoice==="scissors"?false:true;
        }
        else if(userChoice==="rock")
        {
            userWin=compChoice==="paper"?false:true;
        }
        else
        {
            userWin=compChoice==="rock"?false:true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
