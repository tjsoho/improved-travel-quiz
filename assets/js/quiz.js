var questionIndex = 0;
var win = 0;
var loss = 0;
var score = "";
var winCount = localStorage.getItem("Win Count")
var lossCount = localStorage.getItem("Loss Count")
var startBtn = document.getElementById("startGame");
var questionsEl = document.getElementById("questions");
var answerOptionsEl = document.getElementById("answerOptions");
var nextQuestionEl = document.getElementById("nextQuestion");
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

function startGame (){
    questionnaire();
    console.log("starting");
    document.getElementById("startGame").style.visibility = "none";
    }
    


    function questionnaire() {
        if (questionIndex == 0) {
            score = 0
        }
    
        questionsEl.innerHTML = `<div class ="questionAll">${questionsAll[questionIndex].question}</div>
        <button class ="answer0 col-5">${questionsAll[questionIndex].choices[0]}</button>
        <button class ="answer0 col-5">${questionsAll[questionIndex].choices[1]}</button>
        <button class ="answer0 col-5">${questionsAll[questionIndex].choices[2]}</button>	
        <button class ="answer0 col-5">${questionsAll[questionIndex].choices[3]}</button>
        `;
    
        // This function is to check the answer the user has chosen.
        document.querySelectorAll('.answer0').forEach(item => {
            item.addEventListener('click', checkAnswer)
        })
    }

    function checkAnswer() {
        disableButtons();
        const selectedAnswer = this;
        const correctAnswer = document.querySelector(".correct-answer"); 
    
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
    
        if (questionIndex === questionsAll.length - 1) {
            document.getElementById("nextQuestion").style.visibility = "hidden";
            document.getElementById("storeDetails").style.visibility = "visible";
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

    
// next question function
nextQuestionEl.addEventListener('click', function () {
	questionIndex++
	questionnaire()
});






















    // function checkAnswer() {
    //     // disableButtons()
    //     if (this.textContent == questionsAll[questionIndex].answer) {
    //         this.style.backgroundColor = "green";
            // document.getElementById("answerContent").style.display = "block";
            // win++;
            // winCountEl.textContent = win;
            // localStorage.setItem("Win Count", win);
        // }
        // else {
        //     this.style.backgroundColor = "red";
        //     answerContentEl.textContent = `❌ WHOOPS!! The answer is ${questionsAll[questionIndex].answer}. Better luck next time! 😀`;
        //     document.getElementById("answerContent").style.display = "block";
        //     loss++;
        //     lossCountEl.textContent = loss;
        //     localStorage.setItem("Loss Count", loss);
        //     secondsLeft -= 5
        //     sendMessage();
        // }
    
        // if (questionIndex === questionsAll.length - 1) {
        //     document.getElementById("next-finsih").style.visibility = "hidden";
        //     document.getElementById("storeDetails").style.visibility = "visible";
        