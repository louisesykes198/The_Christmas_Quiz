//quiz questions
const questions = [
    {
        question: 'What did the other reindeer not let Rudolph do because of his shiny red nose?',
        answers: ["Join in any reindeer games", "Play football", "Fly the sleigh", "Eat mince pies"],
        correctAnswer: '0',
    },
    {
        question: 'How many ghosts show up in A Christmas Carol?',
        answers: ["Three", "Two", "Four", "Five"],
        correctAnswer: ' 2',
    },
    {
        question: 'What do people traditionally put on top of a Christmas tree?',
        answers: ["A star", "An angel", "Tinsel", "An elf"],
        correctAnswer: '1',
    },
    {
        question: 'In Home Alone where are the McCallisters going on vacation when they leave Kevin behind?',
        answers: ["Paris", "India", "Lapland", "New York"],
        correctAnswer: '0',
    },
    {
        question: 'What words follow "Silent Night" in the song?',
        answers: ["Christmas Night", "Thursday Night", "Holy Night", "Quite Night"],
        correctAnswer: '2',
    },
    {
        question: 'Which Christmas song contains the lyric "Everyone dancing merrily in the new old-fashioned way?"',
        answers: ["Rocking Around The Christmas Tree", "White Christmas", "Do They Know It's Christmas", "Jingle Bell Rock"],
        correctAnswer: '0',
    },
    {
        question: 'What are you supposed to do when you find yourself under the mistletoe?',
        answers: ["Dance", "Kiss", "Shake Hands", "Drink A shot"],
        correctAnswer: '1',
    },
    {
        question: 'Which one of Santas reindeer has the same name as another holiday mascot?',
        answers: ["Prancer", "Dasher", "Cupid", "Blitzen"],
        correctAnswer: '2',
    },
    {
        question: 'Whats the name of the main villain in The Nightmare Before Christmas?',
        answers: ["Sally", "Dr. Finkelstein", "Oogie Boogie", "Mayor"],
        correctAnswer: '2',
    },
    {
        question: 'According to the song, what did my true love give to me on the eighth day of Christmas?',
        answers: ["Partridge in a pear tree", "Swans a swimming", "Ladies Dancing", "maids a-milking"],
        correctAnswer: '3',
    }
];

// variables for functions
const questionElement = document.getElementById("question");
const answers = document.getElementById("possibleAnswers");
const correctAnswer = document.getElementById("correctAnswer");
let currentQuestion = 0;
let score = 0;
let time = 0;
// function to start quiz
function startQuiz(){
    let currentQuestion = 0;
    let score = 0;
    let time = 0;
  }
// function to show elements
const questionEl = document.getElementById("questions");
const answerButtons = document.querySelectorAll(".answer-btn");
let scoreEl = document.getElementById("score");
let timeEl = document.getElementById("time");
startQuiz()
// function to show question 
function question () {
    const current = quiz[currentQuestion];
    questionEl.textContent = current.question;
    answerButtons.forEach((button, index) => {
        button.textContent = CanvasCaptureMediaStreamTrack.answers[index];
    });
}
// function for checking answer
function checkAnswer(index) {
    if (index === quiz [currentQuestion].correct) {
        score++;
        scoreEl.textContent = `Score: ${score}`;
    }
    currentQuestion++;
    if(currentQuestion < quiz.lenght) {
        showQuestion();
    } else {
        questionEl.textContent = "End of Quiz";
        document.getElementById("answers").style.display = "none";
    }
}
showQuestion();