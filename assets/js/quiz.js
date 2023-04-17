var questionIndex = 0;
var win = 0;
var loss = 0;
var score = "";
var startBtn = document.getElementById("startGame");
var questionsEl = document.getElementById("questions");
var answerOptionsEl = document.getElementById("answerOptions");
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