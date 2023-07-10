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
  {
    title: 'Which team holds the record for the most NBA championships?',
    choices: ['Los Angeles Lakers', 'Boston Celtics', 'Chicago Bulls', 'Golden State Warriors'],
    answer: 'Boston Celtics'
    },
    
    {
    title: 'Who is the all-time leading scorer in NBA history?',
    choices: ['LeBron James', 'Kareem Abdul-Jabbar', 'Michael Jordan', 'Kobe Bryant'],
    answer: 'Kareem Abdul-Jabbar'
    },
    
    {
    title: 'Which player has the most triple-doubles in NBA history?',
    choices: ['Magic Johnson', 'Russell Westbrook', 'Oscar Robertson', 'LeBron James'],
    answer: 'Russell Westbrook'
    },
    
    {
    title: 'Which NBA player has won the most Defensive Player of the Year awards?',
    choices: ['Dikembe Mutombo', 'Rudy Gobert', 'Hakeem Olajuwon', 'Ben Wallace'],
    answer: 'Dikembe Mutombo'
    },
    
    {
    title: 'Which NBA team holds the record for the longest winning streak in a single season?',
    choices: ['Los Angeles Lakers', 'Golden State Warriors', 'Miami Heat', 'Chicago Bulls'],
    answer: 'Golden State Warriors'
    },
    
    {
    title: 'Who is the youngest player to score 30,000 points in NBA history?',
    choices: ['Kobe Bryant', 'LeBron James', 'Michael Jordan', 'Kevin Durant'],
    answer: 'LeBron James'
    },
    
    {
    title: 'Which NBA player has won the most Most Valuable Player (MVP) awards?',
    choices: ['LeBron James', 'Kareem Abdul-Jabbar', 'Michael Jordan', 'Bill Russell'],
    answer: 'Kareem Abdul-Jabbar'
    },
    
    {
    title: 'Which player holds the record for the most three-pointers made in a single NBA season?',
    choices: ['Stephen Curry', 'Klay Thompson', 'James Harden', 'Ray Allen'],
    answer: 'Stephen Curry'
    },
    
    {
    title: 'Which NBA player has the highest career free-throw percentage?',
    choices: ['Steve Nash', 'Stephen Curry', 'Dirk Nowitzki', 'Mark Price'],
    answer: 'Steve Nash'
    },
    
    {
    title: 'Who is the only player to have won the NBA Finals MVP award with a losing team?',
    choices: ['Jerry West', 'Magic Johnson', 'LeBron James', 'Allen Iverson'],
    answer: 'Jerry West'
    },
    {
    title: 'Who holds the record for the most points scored in a single NBA game?',
    choices: ['Kobe Bryant', 'Wilt Chamberlain', 'Michael Jordan', 'Elgin Baylor'],
    answer: 'Wilt Chamberlain'
    },
      
    {
    title: 'Which player has won the most NBA All-Star Game MVP awards?',
    choices: ['Kobe Bryant', 'LeBron James', 'Michael Jordan', 'Shaquille ONeal'],
    answer: 'Kobe Bryant'
    },
      
    {
    title: 'Who is the tallest player in NBA history?',
    choices: ['Yao Ming', 'Shaquille ONeal', 'Manute Bol', 'Gheorghe Muresan'],
    answer: 'Gheorghe Muresan'
    },
      
    {
    title: 'Which NBA player has the most career assists?',
    choices: ['Magic Johnson', 'John Stockton', 'Jason Kidd', 'Steve Nash'],
    answer: 'John Stockton'
    },
      
    {
    title: 'Who is the only player to have won the NBA MVP, Defensive Player of the Year, and Finals MVP in the same season?',
    choices: ['Michael Jordan', 'LeBron James', 'Hakeem Olajuwon', 'Kawhi Leonard'],
    answer: 'Hakeem Olajuwon'
    },
      
    {
    title: 'Which NBA team has the most championships in the 21st century?',
    choices: ['San Antonio Spurs', 'Los Angeles Lakers', 'Miami Heat', 'Golden State Warriors'],
    answer: 'Los Angeles Lakers'
    },
      
    {
    title: 'Who is the youngest player to win the NBA Rookie of the Year award?',
    choices: ['LeBron James', 'Derrick Rose', 'Kevin Durant', 'Tim Duncan'],
    answer: 'Derrick Rose'
    },
      
    {
    title: 'Which player holds the record for the most steals in NBA history?',
    choices: ['Scottie Pippen', 'Gary Payton', 'Michael Jordan', 'John Stockton'],
    answer: 'John Stockton'
    },
      
    {
    title: 'Which team holds the record for the most wins in a single NBA regular season?',
    choices: ['Golden State Warriors', 'Chicago Bulls', 'Los Angeles Lakers', 'Boston Celtics'],
    answer: 'Golden State Warriors'
    },
      
   {
    title: 'Who is the only player to win the NBA scoring title in his rookie season?',
    choices: ['Allen Iverson', 'Kevin Durant', 'Elvin Hayes', 'Wilt Chamberlain'],
    answer: 'Wilt Chamberlain'
    }

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