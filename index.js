"üse strict"

const btnAgain = document.querySelector(".btn-again");
const secret = document.querySelector(".secret-number");
const check = document.querySelector(".check");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const scores = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const body = document.querySelector('body');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// secret.textContent = secretNumber;
let score = 20;
let highscore = 0;

check.addEventListener('click', function () {
const guess = Number(document.querySelector(".guess").value);

    if(!guess) {
        message.textContent = "No number! Please guess a number";
    }

    else if (guess === secretNumber){
        message.textContent = "Correct number!";
        score.textContent = score;
        body.style.backgroundColor = "#60b347";
        btnAgain.style.color = "#60b347";
        check.style.color = "#60b347";

        if(score > highscore) {
            highscore = score;
            highScore.textContent = `Highscore: ${highscore}`;
        }
    }

    else if (guess !== secretNumber) {
        if(score > 1) {
            guess > secretNumber ? message.textContent = "Too High!" : message.textContent = "Too Low!";
            score--;
        body.style.backgroundColor = "rgb(226, 47, 47)";
            scores.textContent = `Score: ${score}`;
        }
        else{
            message.textContent = "You lost the game!"
            scores.textContent = 0;
        }
    }
})

btnAgain.addEventListener('click', function() {
    score = 20;
    message.textContent = "Start guessing...";
    scores.textContent = `Score: ${score}`;
    highScore.textContent = `Highscore: ${highscore}`;
    btnAgain.style.color = "black";
    check.style.color = "black";
    secret.textContent = "?";      
    body.style.backgroundColor = "black";
    guess.value = '';
})