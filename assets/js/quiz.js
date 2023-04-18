var questionIndex = 0;
var win = 0;
var loss = 0;
var score = "";
var submit = document.getElementById("submitBtn")
var winCount = localStorage.getItem("Win Count")
var lossCount = localStorage.getItem("Loss Count")
var startBtn = document.getElementById("startGame");
var timerEl = document.querySelector(".timer")
var questionsEl = document.getElementById("questions");
var input = document.getElementById("inputDetails")
var answerOptionsEl = document.getElementById("answerOptions");
var nextQuestionEl = document.getElementById("nextQuestion");
var finalScoreEl = document.getElementById("finalScore")
var questionsAll =
    [
        {
            question: "What airport has been named the best airport in the world?",
            choices: ["A: Tokyo Haneda", "B: Paris CDG", "C: Singapore Changi", "Dubai DXB",],
            answer: "C: Singapore Changi"
        },

        {
            question: "Which airline has been voted best business class in the sky?",
            choices: ["A: Singapore", "B: Qatar", "C: Emirates", "D: Qantas",],
            answer: "B: Qatar"
        },

        {
            question: "Which is the busiest airport by passenger traffic?",
            choices: ["A: Paris (Charles de Gualle)", "B: London (Heathrow)", "C: Los Angeles (LAX)", "D: Atlanta (Jackson)",],
            answer: "D: Atlanta (Jackson)"
        },

        {
            question: "What is the most visited country in the world?",
            choices: ["A: France", "B: China", "C: Italy", "D: USA",],
            answer: "A: France"
        }
    ]

// start game function
startBtn.addEventListener("click", startGame);

function startGame() {
    questionnaire();
    countDown();
    secondsLeft = 90;
    console.log("starting");
    document.getElementById("startGame").style.display = "none";
    document.getElementById("storeDetails").style.display = "none";
    document.getElementById("nextQuestion").style.display = "block";
}



function questionnaire() {
    if (questionIndex == 0) {
        score = 0
    }

    questionsEl.innerHTML = `<div class ="questionAll">${questionsAll[questionIndex].question}</div>
        <button class ="answer0 col-5 A">${questionsAll[questionIndex].choices[0]}</button>
        <button class ="answer0 col-5 B">${questionsAll[questionIndex].choices[1]}</button>
        <button class ="answer0 col-5 C">${questionsAll[questionIndex].choices[2]}</button>	
        <button class ="answer0 col-5 D">${questionsAll[questionIndex].choices[3]}</button>
        `;

    // This function is to check the answer the user has chosen.
    document.querySelectorAll('.answer0').forEach(item => {
        item.addEventListener('click', checkAnswer)
    })
}

function checkAnswer() {
    disableButtons();
    const selectedAnswer = this;
    const correctAnswer = document.querySelector("." + questionsAll[questionIndex].answer[0]);

    if (selectedAnswer.textContent === questionsAll[questionIndex].answer) {
        selectedAnswer.style.backgroundColor = "green";
        win++;
        localStorage.setItem("Win Count", win);
    } else {
        selectedAnswer.style.backgroundColor = "red";
        correctAnswer.style.backgroundColor = "green"; // Set the background color of the correct answer element to green
        loss++;
        localStorage.setItem("Loss Count", loss);
        // secondsLeft -= 5
    }
}


// This function disables the buttons once the user has answered the question.
function disableButtons() {
    document.querySelectorAll('.answer0').forEach(item => {
        item.removeEventListener("click", checkAnswer)
        if (questionIndex < questionsAll.length - 1) {
            item.disabled = false;
        }
    });
}
disableButtons()


// This function loads the next question when the user clicks next
nextQuestionEl.addEventListener('click', function () {
    questionIndex++
    console.log(questionIndex)
    questionnaire()
    if (questionIndex === 3) {
        document.getElementById("storeDetails").style.display = "block";
        document.getElementById("nextQuestion").style.display = "none";
    }

});


// countdown timer
function countDown() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            sendMessage();
            return;
        }

        if (questionIndex === questionsAll.length - 1) {
            clearInterval(timerInterval);
            console.log("Timer stopped!");
            return;
        }
    }, 1000);
}

// This function tallys the final score
function scoreTotal() {
	var tally = win - loss;
	console.log(tally);
	return tally;
}


// Function to set the score and users initials to local storage
submit.addEventListener('click', function () {
    const val = document.querySelector('input').value;
    localStorage.setItem("Initials", input.value);
    finalScoreEl.textContent = "You scored " + getWinCount() + "/4";

    //save score to a high score scoreboard in local storage
    var highScore = localStorage.getItem("High Score");
    if (highScore === null) {
        highScore = 0;
    }
    if (scoreTotal() > highScore) {
        localStorage.setItem("High Score", scoreTotal());
    }
})


//function to get the users win count
function getWinCount() {
    var winCount = parseInt(localStorage.getItem("Win Count"));
    console.log(winCount)
    finalScoreEl.textContent = winCount
    if (winCount === null) {
        winCount = 0;
    }
    if (winCount <= 1) {
        document.getElementById('success1').style.display = "block";
        document.getElementById('end-game').style.display = "none";
        document.getElementById('storeDetails').style.display = "none";
        document.getElementById('finalScore1').textContent = "You scored " + winCount + "/4";

    } else if (winCount === 2) {
        document.getElementById('success2').style.display = "block";
        document.getElementById('end-game').style.display = "none";
        document.getElementById('storeDetails').style.display = "none";
        document.getElementById('finalScore2').textContent = "You scored " + winCount + "/4";

    } else if (winCount === 3) {
        document.getElementById('success3').style.display = "block";
        document.getElementById('end-game').style.display = "none";
        document.getElementById('storeDetails').style.display = "none";
        document.getElementById('finalScore3').textContent = "You scored " + winCount + "/4";

    } else if (winCount === 4) {
        document.getElementById('success4').style.display = "block";
        document.getElementById('end-game').style.display = "none";
        document.getElementById('storeDetails').style.display = "none";
        document.getElementById('finalScore4').textContent = "You scored " + winCount + "/4";
    }
    return winCount;

}

















