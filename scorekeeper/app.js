const pointsToWin = document.querySelector('#pointsToWin');
const playerOneScoreDisplay = document.querySelector('#playerOneScore');
const playerOneBtn = document.querySelector('#playerOneBtn');
const playerTwoScoreDisplay = document.querySelector('#playerTwoScore');
const playerTwoBtn = document.querySelector('#playerTwoBtn');
const resetBtn = document.querySelector('#resetBtn');


let playerOnePoints = 0;
let playerTwoPoints = 0;
let winningScore = 3;
let isGameFinished = false;

function disableButtons(condition) {
    playerOneBtn.disabled = condition;
    playerTwoBtn.disabled = condition;
}

function resetScore() {
    playerOneScoreDisplay.textContent = 0;
    playerTwoScoreDisplay.textContent = 0;
    playerOneScoreDisplay.className = '';
    playerTwoScoreDisplay.className = '';
    playerOnePoints = 0;
    playerTwoPoints = 0;
    isGameFinished = false;
    disableButtons(false)
}

function gameScore(playerPoints, playerScoreDisplay, otherPlayerScoreDisplay) {
    if (!isGameFinished) {
        playerScoreDisplay.textContent = playerPoints;

        if (playerPoints === winningScore) {
            playerScoreDisplay.classList.add('has-text-success');
            otherPlayerScoreDisplay.classList.add('has-text-danger');
            isGameFinished = true;
            disableButtons(true);
        }
    }
}

pointsToWin.addEventListener('change', function () {
    winningScore = parseInt(pointsToWin.value);
    resetScore();
})

playerOneBtn.addEventListener('click', function () {
    playerOnePoints++;
    gameScore(playerOnePoints, playerOneScoreDisplay, playerTwoScoreDisplay);
})

playerTwoBtn.addEventListener('click', function () {
    playerTwoPoints++;
    gameScore(playerTwoPoints, playerTwoScoreDisplay, playerOneScoreDisplay);
})

resetBtn.addEventListener('click', resetScore)



