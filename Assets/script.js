//Calling References Specific Variables

//Begin Quiz Element
var begin = document.getElementById("begin-quiz");
//HTML Manipulation Elements
var mainMenu = document.getElementById("main");
var content = document.getElementById("content");
var timeEl = document.getElementById("time-left");
var highscore = document.getElementById("highscore");
var intermediate = document.getElementById("intermediate");
//HTML Quiz Elements
var question = document.getElementById("questions");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var feedback = document.getElementById("msg");
//Highscore Page Elements
var submission = document.getElementById("initials");
var submitBtn = document.getElementById("initialsBtn");
var recorder = document.getElementById("recorder");
var scoreTable = document.getElementById("scoringTable");
var clear = document.getElementById("clear");
//Navigation Elements
var toHS = document.getElementById("tables");
var startLine = document.getElementById("goBack");

//Object with all the questions, answers and options for the quiz
var qna = {
    "theQuestion": ["Which one of the following is not a JavaScript Data Type?",
        "Event Listener Methods accept 2 different arguments. A type of event and a ______ function.",
        "What would be the result of: 3+2+'7'?",
        "Which Pop up box, available in JavaScript, returns a String?",
        "What Boolean Operators can be used in JavaScript?",
        "Loading your Result."],

    "answer": ["Case", "Callback", "57", "Prompt", "All of the Above"],

    "option": [["String", "Boolean", "Case", "Number"],
    ["Callback", "Screen", "Window", "Object"],
    ["12", "327", "39", "57"],
    ["Alert", "Prompt", "Confirm", "None of the above"],
    ["'And' Operator(&&)", "'Or' Operator (||)", "'Not' Operator(!)", "All of the Above"],
    ["Now Loading...", "Now Loading...", "Now Loading...", "Now Loading..."]]
};

//Starting amount of timers and questionNumbers
var countdown = 60;
var questionNumber = 0;
var lastAnswer = "";

//Function to begin Quiz
function beginQuiz() {
    mainMenu.setAttribute("class", "hide");
    question.setAttribute("class", "unhide container bg-light mt-3 rounded");

    iterate();
    timerStart();
}
//Function to display messages if input is incorrect or otherwise
function displayMessage(type, message) {
    feedback.textContent = message;
    feedback.setAttribute("class", type);
}

//Function to Iterate through every question
function iterate() {
    lastAnswer = this.textContent;
    if (lastAnswer === qna.answer[questionNumber - 1]) {
        displayMessage("correct", "Let's Go!");
    } else if (lastAnswer !== qna.answer[questionNumber - 1]) {
        countdown -= 10;
        displayMessage("incorrect", "That is Incorrect!");
    }
    content.textContent = qna.theQuestion[questionNumber];
    option1.textContent = qna.option[questionNumber][0];
    option2.textContent = qna.option[questionNumber][1];
    option3.textContent = qna.option[questionNumber][2];
    option4.textContent = qna.option[questionNumber][3];

    questionNumber++;
}

//Timer Function, when countdown reaches 0 it ends the quiz
function timerStart() {
    var timerInterval = setInterval(function () {
        countdown--;
        timeEl.textContent = countdown;


        if (countdown <= 0 || questionNumber === 6) {
            clearInterval(timerInterval);
            timeEl.textContent = "";
            question.setAttribute("class", "hide");
            intermediate.setAttribute("class", "container unhide bg-light mt-3 rounded");
        }

    }, 1000);
}

//Navigation functions
function toTables(e) {
    e.preventDefault();
    mainMenu.setAttribute("class", "hide");
    question.setAttribute("class", "hide");
    intermediate.setAttribute("class", "hide");
    highscore.setAttribute("class", "container unhide bg-light mt-3 rounded");
}

function toStart(e) {
    e.preventDefault();
    mainMenu.setAttribute("class", "container unhide bg-light mt-3 rounded");
    question.setAttribute("class", "hide");
    intermediate.setAttribute("class", "hide");
    highscore.setAttribute("class", "hide");
    countdown = 60;
    questionNumber = 0;
}

//Function to display succesful storage of initials
function displaySaved(type, message) {
    recorder.textContent = message;
    recorder.setAttribute("class", type);
}

//Local Storage Function
function recordHS(e) {
    e.preventDefault();

    
    var names = submission.value;
    var score = countdown;
    if (score < 0){
        score -= countdown;
    }
    if (names === "") {
        displaySaved("incorrect", "Please enter your Initials!");
        return;
    } else {
        displaySaved("correct", "Input Saved!");
        intermediate.setAttribute("class", "hide");
        highscore.setAttribute("class", "container unhide bg-light mt-3 rounded");
    }
    localStorage.setItem("Initials", names);
    localStorage.setItem("Score", score);
    renderScores();
}

//Render Out all the scores
function renderScores() {
    var player = localStorage.getItem("Initials");
    var playerScore = localStorage.getItem("Score");
    var appendee = document.createElement("div");
    appendee.setAttribute("class", "p-2 bd-highlight rounded text-center fancy");
    appendee.textContent = player + " - " + playerScore;
    scoreTable.appendChild(appendee);
}
if(localStorage.getItem("Initials")!==null){
    renderScores();
}

//Function to clear out the div
function clearScores() {
    scoreTable.innerHTML = "";
}

//All the event Listeners
begin.addEventListener("click", beginQuiz);
option1.addEventListener("click", iterate);
option2.addEventListener("click", iterate);
option3.addEventListener("click", iterate);
option4.addEventListener("click", iterate);
submitBtn.addEventListener("click", recordHS);
toHS.addEventListener("click", toTables);
startLine.addEventListener("click", toStart);
clear.addEventListener("click", clearScores)