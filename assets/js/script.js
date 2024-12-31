const quiz =  [
    {
        question: 'What did the other reindeer not let Rudolph do because of his shiny red nose?',
        answers: ["Join in any reindeer games", "Play football", "Fly the sleigh", "Eat mince pies"],
        correct: 0,
    },
    {
        question: 'How many ghosts show up in A Christmas Carol?',
        answers: ["Three", "Two", "Four", "Five"],
        correct: 2,
    },
    {
        question: 'What do people traditionally put on top of a Christmas tree?',
        answers: ["A star", "An angel", "Tinsel", "An elf"],
        correct: 1,
    },
    {
        question: 'In Home Alone where are the McCallisters going on vacation when they leave Kevin behind?',
        answers: ["Paris", "India", "Lapland", "New York"],
        correct: 0,
    },
    {
        question: 'What words follow "Silent Night" in the song?',
        answers: ["Christmas Night", "Thursday Night", "Holy Night", "Quite Night"],
        correct: 2,
    },
    {
        question: 'Which Christmas song contains the lyric "Everyone dancing merrily in the new old-fashioned way?"',
        answers: ["Rocking Around The Christmas Tree", "White Christmas", "Do They Know It's Christmas", "Jingle Bell Rock"],
        correct: 0,
    },
    {
        question: 'What are you supposed to do when you find yourself under the mistletoe?',
        answers: ["Dance", "Kiss", "Shake Hands", "Drink A shot"],
        correct: 1,
    },
    {
        question: 'Which one of Santas reindeer has the same name as another holiday mascot?',
        answers: ["Prancer", "Dasher", "Cupid", "Blitzen"],
        correct: 2,
    },
    {
        question: 'Whats the name of the main villain in The Nightmare Before Christmas?',
        answers: ["Sally", "Dr. Finkelstein", "Oogie Boogie", "Mayor"],
        correct: 2,
    },
    {
        question: 'According to the song, what did my true love give to me on the eighth day of Christmas?',
        answers: ["Partridge in a pear tree", "Swans a swimming", "Ladies Dancing", "maids a-milking"],
        correct: 3,
    }
];

  
  let currentQuestion = 0;
  let score = 0;
  let timer; // To store the countdown timer
  let timeLeft = 10; // Time per question in seconds
  
  // Select DOM elements
  const questionEl = document.getElementById("question");
  const answerButtons = document.querySelectorAll(".answer-btn");
  const scoreEl = document.getElementById("score");
  
  // Function to show a question
  function showQuestion() {
    const current = quiz[currentQuestion];
    questionEl.textContent = current.question;
    answerButtons.forEach((button, index) => {
      button.textContent = current.answers[index];
    });
  }
  
  // Check the answer
  function checkAnswer(index) {
    if (index === quiz[currentQuestion].correct) {
      score++;
      scoreEl.textContent = `Score: ${score}`;
    }
    currentQuestion++;
    if (currentQuestion < quiz.length) {
      loadQuestion();
    } else {
      questionEl.textContent = "Quiz Complete!";
      document.getElementById("answers").style.display = "none";
    }
  }
  // Add event listeners to answer buttons
  answerButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedIndex = parseInt(button.getAttribute("data-index"), 10);
      checkAnswer(selectedIndex);
    });
  });
  // Load the first question
  showQuestion();