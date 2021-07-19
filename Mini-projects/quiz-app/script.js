const quizData = [
    {
        question: 'What is HTML?',
        a: 'Helicopter Terminal Marketplace Loop',
        b: 'HyperText Markup Language',
        c: 'Cascading Style Sheet',
        d: 'Jason Object Notation',
        correct: 'b'
    },
    {
        question: 'What is the most used programming language in 2021?',
        a: 'JavaScript',
        b: 'Python',
        c: 'Java',
        d: 'C#',
        correct: 'a'
    },
    {
        question: 'What year was javascript created?',
        a: '1992',
        b: '1998',
        c: '1995',
        d: '1991',
        correct: 'c'
    },
    {
        question: 'Which from the list is not a javascript framework?',
        a: 'Vue',
        b: 'React',
        c: 'Angular',
        d: 'CherryPy',
        correct: 'd'
    },
    {
        question: 'Which of the code editors developed by Microsoft?',
        a: 'Visual Studio Code',
        b: 'Atom',
        c: 'Notepad++',
        d: 'Sublime Text ',
        correct: 'a'
    },
]

const wrapper = document.getElementById('wrapper')
const question = document.getElementById('question')
const answerEls = document.querySelectorAll('.answer')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const btn = document.getElementById('btn')

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer()

    const currentQuizData = quizData[currentQuiz]
    question.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    });
    return answer
}

function deselectAnswer() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    })
}

btn.addEventListener('click', () => {
    let answer = getSelected();

    console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        console.log(score);
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            wrapper.innerHTML = `
                <h2 class="result">You answered correctly at ${score}/${quizData.length} questions.</h2>
                <button onclick="location.reload()" class="btn">Reload</button>
            `
        }
    }  
})