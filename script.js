/*

What data type can I use to store all the questions, and the answers that go with them?
How can I present one set of question + answers on the screen one at a time, and move from to another?

How can I tell whether the user has clicked on the right answer?
How can I save high scores?

Test with just 1-2 questions


Set it up so that the display of the question and answers is the same, no matter which one is being displayed

Things to practice:
----------------------
1. Create DOM elements and display them on the screen 
2. Write a function that accepts an object, and displays the parts of the object on the screen
3. Write a function that detects when a button is clicked, and provides details about that button


*/

var quizQuestions = [
  {
    title: 'Which player won 6 championships with the Chicago Bulls in the 1990s?',
    choices: ['Steve Kerr', 'Derrick Rose', 'Dennis Rodman', 'Michael Jordan'],
    answer: 'Michael Jordan'
  },
  {
    title: 'How many regular season MVP trophies does Stephen Curry have?',
    choices: ['3', '0', '2', '1'],
    answer: '2'
  },
];


var currentQuestionIndex = 0;
var timer;
var timerElement = document.getElementById('timer');

function buildPage(questions) {
  var questionContainer = document.getElementById('question-container');
  var questionTitle = document.getElementById('question');
  var choicesList = document.getElementById('choices');

  questionTitle.textContent = '';
  choicesList.innerHTML = '';

  var currentQuestion = questions[currentQuestionIndex];
  questionTitle.textContent = currentQuestion.title;
  currentQuestion.choices.forEach(function (choice) {

    var choiceButton = document.createElement('button');

    choiceButton.classList.add('choice');

    choiceButton.textContent = choice;
    
    choicesList.appendChild(choiceButton);

    choiceButton.addEventListener('click', function () {
      if (choice === currentQuestion.answer) {
        // correct answer moves to the next question and rebuilds the page
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
          buildPage(quizQuestions);
        } else {
          endQuiz();
        }
      } else {
        timer -= 10;
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
          buildPage(quizQuestions);
        } else {
          endQuiz();
        }
      }
    });
  });
}


// starts the quiz and hides the start button 
function startQuiz() {
  var startButton = document.getElementById('start-button');
  var questionContainer = document.getElementById('question-container');

  startButton.addEventListener('click', function () {
    startTimer();
    startButton.style.display = 'none';
    questionContainer.style.display = 'block';
    buildPage(quizQuestions);
  });
}

// timer function that counts down from 60 and ends the quiz when it hits zero
function startTimer() {
  var timeLimit = 60; 
  timer = timeLimit;

  
  var countdown = setInterval(function () {
    timer--;
    timerElement.textContent = timer;

    if (timer <= 0) {
      clearInterval(countdown);
      endQuiz();
    }
  }, 1000);
}

// displays the game over container
function endQuiz() {
  var gameOverContainer = document.getElementById('game-over-container');
  gameOverContainer.style.display = 'block';

  var initialsInput = document.getElementById('initials');
  var saveScoreButton = document.getElementById('save-score');

  saveScoreButton.addEventListener('click', function (event) {
    event.preventDefault();

    var initials = initialsInput.value.trim();
    var score

  });
}

startQuiz();