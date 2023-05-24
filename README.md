# Code Quiz

This is a web-based code quiz that tests your knowledge of various topics. The quiz presents multiple-choice questions and allows you to select your answers. At the end of the quiz, your score is calculated based on the number of correct answers.

# Features

Multiple-choice questions with four possible options
Score calculation based on correct answers
Display of final score at the end of the quiz
Reload button to restart the quiz

# Technologies Used

HTML
CSS
JavaScript

# Usage
To use the code quiz, follow these steps:

Click on this livelink: https://alandbalan.github.io/04-Web-APIs-Challenge--Code-Quiz/

or

Clone the repository or download the code files.
Open the index.html file in a web browser.
The quiz will be displayed, and you can start answering the questions by selecting the appropriate option.
After answering all the questions, your final score will be displayed.
To retake the quiz, click the "Reload" button.

# Customizing the Quiz
You can customize the quiz by modifying the quizData array in the JavaScript code. Each object in the array represents a quiz question and contains the following properties:

question: The question to be displayed.
a, b, c, d: The possible answer options.
correct: The correct answer option (a, b, c, or d).
You can add or remove questions, and update the answer options and correct answers according to your requirements.

```
var quizData = [
    {
        question: "Question 1",
        a: "Option A",
        b: "Option B",
        c: "Option C",
        d: "Option D",
        correct: "a",
    },
    // Add more questions...
];
```

# Acknowledgements
This code quiz is developed as part of a web APIs challenge. It utilizes web technologies and concepts to create an interactive quiz experience.