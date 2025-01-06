// The quiz questions, answers, and correct answer
const questions = [{
    question: 'What did the other reindeer not let Rudolph do because of his shiny red nose?',
    possibleAnswers: ["Join in any reindeer games", "Play football", "Fly the sleigh", "Eat mince pies"],
    correctAnswer: 0,
},
{
    question: 'How many ghosts show up in A Christmas Carol?',
    possibleAnswers: ["Three", "Two", "Four", "Five"],
    correctAnswer: 2,
},
{
    question: 'What do people traditionally put on top of a Christmas tree?',
    possibleAnswers: ["A star", "An angel", "Tinsel", "An elf"],
    correctAnswer: 1,
},
{
    question: 'In Home Alone where are the McCallisters going on vacation when they leave Kevin behind?',
    possibleAnswers: ["Paris", "India", "Lapland", "New York"],
    correctAnswer: 0,
},
{
    question: 'What words follow "Silent Night" in the song?',
    possibleAnswers: ["Christmas Night", "Thursday Night", "Holy Night", "Quite Night"],
    correctAnswer: 2,
},
{
    question: 'Which Christmas song contains the lyric "Everyone dancing merrily in the new old-fashioned way?"',
    possibleAnswers: ["Rocking Around The Christmas Tree", "White Christmas", "Do They Know It's Christmas", "Jingle Bell Rock"],
    correctAnswer: 0,
},
{
    question: 'What are you supposed to do when you find yourself under the mistletoe?',
    possibleAnswers: ["Dance", "Kiss", "Shake Hands", "Drink A shot"],
    correctAnswer: 1,
},
{
    question: 'Which one of Santas reindeer has the same name as another holiday mascot?',
    possibleAnswers: ["Prancer", "Dasher", "Cupid", "Blitzen"],
    correctAnswer: 2,
},
{
    question: 'Whats the name of the main villain in The Nightmare Before Christmas?',
    possibleAnswers: ["Sally", "Dr. Finkelstein", "Oogie Boogie", "Mayor"],
    correctAnswer: 2,
},
{
    question: 'According to the song, what did my true love give to me on the eighth day of Christmas?',
    possibleAnswers: ["Partridge in a pear tree", "Swans a swimming", "Ladies Dancing", "maids a-milking"],
    correctAnswer: 3,
}
];
let currentQuestion = 0;
let score = 0;
// Select the elements
const questionEl = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const scoreEl = document.getElementById("score");
const resetBtn = document.getElementById("reset-btn");
// Function to show a question
function showQuestion() {
const current = questions[currentQuestion];
questionEl.textContent = current.question;
answerButtons.forEach((button, index) => {
    button.textContent = current.possibleAnswers[index];
});
resetBtn.style.display = "none";
}
// Function to check the answer
function checkAnswer(index) {
if (index === questions[currentQuestion].correctAnswer) {
    score++;
    scoreEl.textContent = `Score: ${score}`;
}
currentQuestion++;
if (currentQuestion < questions.length) {
    showQuestion();
} else {
    questionEl.textContent = "Quiz Complete!";
    document.getElementById("answers").style.display = "none";
    resetBtn.style.display = "block";
}
}
// Add event listeners to the answer buttons
answerButtons.forEach((button, index) => {
button.addEventListener("click", () => {
    checkAnswer(index);
});
});
// Load the first question
showQuestion();
// Snowflakes function (unchanged)
function createSnowflakes() {
const snowflakesContainer = document.getElementById('snowflakes');
const numberOfSnowflakes = 100;

for (let i = 0; i < numberOfSnowflakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
    snowflake.style.animationDelay = `${Math.random() * 2}s`;
    snowflake.style.width = `${Math.random() * 10 + 5}px`;
    snowflake.style.height = snowflake.style.width;

    snowflakesContainer.appendChild(snowflake);
}
}
createSnowflakes();
// Update the year in the footer
document.addEventListener("DOMContentLoaded", () => {
const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();
});
// Reset the game
resetBtn.addEventListener("click", () => {
currentQuestion = 0;
score = 0;
scoreEl.textContent = `Score: ${score}`;
document.getElementById("answers").style.display = "block";
showQuestion();
});