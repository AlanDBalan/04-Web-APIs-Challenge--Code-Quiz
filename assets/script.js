var quizData = [
    {
        question: "Who was the first President of the United States?";
        a: "Thomas Jefferson",
        b: "George Washington",
        c: "Abraham Lincoln",
        d: "John F. Kennedy",
        correct: "b",
    }
    {
        question: "The French Revolution took place in which decade?";
        a: "1700s",
        b: "1800s",
        c: "1900s",
        d: "2000s",
        correct: "b",
    }
    {
        question: "Which ancient civilization built the Great Pyramids of Giza?";
        a: "Mayans",
        b: "Egyptians",
        c: "Greeks",
        d: "Romans",
        correct: "b",
    }
    {
        question: "The Cold War was primarily a conflict between which two nations?";
        a: "United States and Soviet Union",
        b: "United States and China",
        c: "United States and United Kingdom",
        d: "United States and Germany",
        correct: "a",
    }
]

var quiz= document.getElementById('quiz')
var answerEls= document.querySelectorAll('.answer')
var questionEl= document.getElementById('question')
var a_text= document.getElementById('a_text')
var b_text= document.getElementById('b_text')
var c_text= document.getElementById('c_text')
var d_text= document.getElementById('d_text')
var submitBtn = document.getElementById('submit')


let curretQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    var currentQuizData = quizData[currentQuizData]

    questionEl.inneerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}