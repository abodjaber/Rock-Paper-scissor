    let userScore = 0;
    let computerScore = 0;
    const userScoreSelector = document.getElementById("user-score");
    const computerScoreSelector = document.getElementById("computer-score");
    const resultSelector = document.querySelector(".result > p");
    const rockSelector = document.getElementById("Rock");
    const paperSelector = document.getElementById("Paper");
    const scissorsSelector = document.getElementById("Scissors");

    /**
     * Get the computer choice Rock, Paper or scissor
     * @returns {string} Random choice
     */
    function getComputerChoice() {
        const choices = ['Rock','Paper','Scissors'];
        const randomNumber = Math.floor(Math.random()*3);
        return choices[randomNumber];
    }

    /**
     * Apply the changes on the UI depend on game method inputs
     * @param userChoice
     * @param computerChoice
     * @param glow
     */
    function startPlay(userChoice , computerChoice, glow) {
        const smallUserWord = "user".fontsize(3).sub();
        const smallComputerWord = "computer".fontsize(3).sub();
        const userChoiceDiv = document.getElementById(userChoice);
        if (glow === 'green-glow' ) {
            userScore++;
            resultSelector.innerHTML = `${userChoice}${smallUserWord} beats ${computerChoice}${smallComputerWord}. You win!`;
            $(document).ready(function () {
                $('#user-label').animate({
                    left:'-30px',
                })
                    .animate({
                        left: '-25'
                    })
            });
        } else if (glow === 'red-glow') {
            computerScore++;
            resultSelector.innerHTML = `${userChoice}${smallUserWord} loses to ${computerChoice}${smallComputerWord}. You lost...`;
            $(document).ready(function () {
                $('#computer-label').animate({
                    right:'-30px',
                })
                    .animate({
                        right: '-25'
                    })
            });
        } else {
            resultSelector.innerHTML = `${userChoice}${smallUserWord} equals ${computerChoice}${smallComputerWord}. It's a draw `;
        }
        userScoreSelector.innerHTML = userScore.toString();
        computerScoreSelector.innerHTML = computerScore.toString();
        userChoiceDiv.classList.add(glow);
        setTimeout(() => userChoiceDiv.classList.remove(glow),300 )
    }

    /**
     * Decide if the user win , lose or draw depend on user choice and computer choice
     * @param userChoice
     */
    function game(userChoice) {
        const computerChoice = getComputerChoice();
        switch (userChoice + computerChoice) {
            case "RockScissors":
            case "PaperRock":
            case "ScissorsPaper":
                startPlay(userChoice, computerChoice,'green-glow');
                break;
            case "RockPaper":
            case "PaperScissors":
            case "ScissorsRock":
                startPlay(userChoice, computerChoice,'red-glow');
                break;
            case "RockRock":
            case "PaperPaper":
            case "ScissorsScissors":
                startPlay(userChoice, computerChoice,'gray-glow');
                break;
        }
    }

    function main() {

        rockSelector.addEventListener('click',() =>
            game("Rock")
        );
        paperSelector.addEventListener('click',() =>
            game("Paper")
        );
        scissorsSelector.addEventListener('click',() =>
            game("Scissors")
        );
    }

    main();


