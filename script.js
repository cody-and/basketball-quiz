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
    answer: 'Lebron James'
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

var score = 0;
var currentQuestionIndex = 0;
var timer;
var timerElement = document.getElementById('timer');
var usedQuestionIndexes = [];

function getRandomQuestion(questions) {
  if (usedQuestionIndexes.length === questions.length) {
    return null;
  }

  var randomIndex;
  var randomQuestion;

  do {
    randomIndex = Math.floor(Math.random() * questions.length);
    randomQuestion = questions[randomIndex];
  } while (usedQuestionIndexes.includes(randomIndex));

  usedQuestionIndexes.push(randomIndex);
  return randomQuestion;
}

function buildPage() {
  var questionContainer = document.getElementById('question-container');
  var questionTitle = document.getElementById('question');
  var choicesList = document.getElementById('choices');

  questionTitle.textContent = '';
  choicesList.innerHTML = '';

  var currentQuestion = getRandomQuestion(quizQuestions);
  
  if (currentQuestion === null) {
    endQuiz();
    return;
  }

  questionTitle.textContent = currentQuestion.title;

  currentQuestion.choices.forEach(function (choice) {
    var choiceButton = document.createElement('button');
    choiceButton.classList.add('choice');
    choiceButton.textContent = choice;

    choicesList.appendChild(choiceButton);

    choiceButton.addEventListener('click', function () {
      if (choice === currentQuestion.answer) {
        resultText.textContent = 'Correct!';
        score += 1; 
        timer +=5
      } else {
        resultText.textContent = 'Incorrect!';
        timer -= 5;
      }
      buildPage();
    });
  });
}

function startQuiz() {
  var startButton = document.getElementById('start-button');
  var questionContainer = document.getElementById('question-container');
  var highScoresButton = document.getElementById('view-highscores-button');
  var highScoresContainer = document.getElementById('highscores-container');
  
  highScoresButton.addEventListener('click', function (event) {
    event.preventDefault();
    displayHighScores();
  }),

  startButton.addEventListener('click', function () {
    startTimer();
    startButton.style.display = 'none';
    questionContainer.style.display = 'block';
    buildPage();
    hideHighscoresSection();

    function hideHighscoresSection(){
      hideHighscoresSection.style.display = 'none';
    }
  });
}

function startTimer() {
  var timeLimit = 60; 
  timer = timeLimit;
  var timerElement = document.getElementById('timer');

  var countdown = setInterval(function () {
    timer--;
    timerElement.textContent = timer;

    if (timer <= 0) {
      clearInterval(countdown);
      endQuiz();
    }
  }, 1000);
}

function saveScore(initials) {
  var highScores = localStorage.getItem('highScores');
  if (highScores) {
    highScores = JSON.parse(highScores);
  } else {
    highScores = [];
  }

  highScores.push({ initials: initials, score: score });

  localStorage.setItem('highScores', JSON.stringify(highScores));
}

function endQuiz() {
  var gameOverContainer = document.getElementById('game-over-container');
  gameOverContainer.style.display = 'block';

  var initialsInput = document.getElementById('initials');
  var saveScoreButton = document.getElementById('save-score');

  saveScoreButton.addEventListener('click', function (event) {
    event.preventDefault();

    var initials = initialsInput.value.trim();
    var score = 0;

    saveScore(initials, score);
  });
}

function displayHighScores() {
  var highScores = localStorage.getItem('highScores');
  var highScoresContainer = document.getElementById('highscores-container');

  if (highScores) {
    highScores = JSON.parse(highScores);
    highScoresContainer.innerHTML = '';

    var highScoresTitle = document.createElement('h2');
    highScoresTitle.textContent = 'Highscores';
    highScoresContainer.appendChild(highScoresTitle);

    highScores.forEach(function (score) {
      var scoreItem = document.createElement('div');
      scoreItem.textContent = score.initials + ': ' + score.score;
      highScoresContainer.appendChild(scoreItem);
    });

    highScoresContainer.style.display = 'block';
  } else {
    highScoresContainer.innerHTML = '<h2>Highscores</h2>No high scores available.';
  }
}

startQuiz();