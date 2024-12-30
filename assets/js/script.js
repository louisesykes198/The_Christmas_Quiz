//quiz questions
const questions = [
    {
        question: 'What did the other reindeer not let Rudolph do because of his shiny red nose?',
        possibleAnswers: ["Join in any reindeer games", "Play football", "Fly the sleigh", "Eat mince pies"],
        correctAnswer: 'Join in any reindeer games',
    },
    {
        question: 'How many ghosts show up in A Christmas Carol?',
        possibleAnswers: ["Three", "Two", "Four", "Five"],
        correctAnswer: ' Four',
    },
    {
        question: 'What do people traditionally put on top of a Christmas tree?',
        possibleAnswers: ["A star", "An angel", "Tinsel", "An elf"],
        correctAnswer: 'An angel',
    },
    {
        question: 'In Home Alone where are the McCallisters going on vacation when they leave Kevin behind?',
        possibleAnswers: ["Paris", "India", "Lapland", "New York"],
        correctAnswer: 'Paris',
    },
    {
        question: 'What words follow "Silent Night" in the song?',
        possibleAnswers: ["Christmas Night", "Thursday Night", "Holy Night", "Quite Night"],
        correctAnswer: 'Holy night',
    },
    {
        question: 'Which Christmas song contains the lyric "Everyone dancing merrily in the new old-fashioned way?"',
        possibleAnswers: ["Rocking Around The Christmas Tree", "White Christmas", "Do They Know It's Christmas", "Jingle Bell Rock"],
        correctAnswer: 'Rocking Around The Christmas Tree',
    },
    {
        question: 'What are you supposed to do when you find yourself under the mistletoe?',
        possibleAnswers: ["Dance", "Kiss", "Shake Hands", "Drink A shot"],
        correctAnswer: 'Kiss',
    },
    {
        question: 'Which one of Santas reindeer has the same name as another holiday mascot?',
        possibleAnswers: ["Prancer", "Dasher", "Cupid", "Blitzen"],
        correctAnswer: 'Cupid',
    },
    {
        question: 'Whats the name of the main villain in The Nightmare Before Christmas?',
        possibleAnswers: ["Sally", "Dr. Finkelstein", "Oogie Boogie", "Mayor"],
        correctAnswer: 'Oogie Boogie',
    },
    {
        question: 'According to the song, what did my true love give to me on the eighth day of Christmas?',
        possibleAnswers: ["Partridge in a pear tree", "Swans a swimming", "Ladies Dancing", "maids a-milking"],
        correctAnswer: 'maids a-milking',
    }
];

//function to display questions
const questionElement = document.getElementById("question");
const possibleAnswers = document.getElementById("possibleAnswers");
const correctAnswer = document.getElementById("correctAnswer");
let latestQuestion = 0;
let score = 0;