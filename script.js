// script.js
const questions = [
    {
        name: '阿信',
        img: 'img1.jpg',
        correct: '主唱',
        answerImg: 'img1_answer.jpg'
    },
    {
        name: '怪獸',
        img: 'img2.jpg',
        correct: '吉他手',
        answerImg: 'img2_answer.jpg'
    },
    {
        name: '石頭',
        img: 'img3.jpg',
        correct: '吉他手',
        answerImg: 'img3_answer.jpg'
    },
    {
        name: '瑪莎',
        img: 'img4.jpg',
        correct: '貝斯手',
        answerImg: 'img4_answer.jpg'
    },
    {
        name: '冠佑',
        img: 'img5.jpg',
        correct: '鼓手',
        answerImg: 'img5_answer.jpg'
    }
];

let currentQuestionIndex = 0;

function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.correct === answer) {
        alert('答對了！');
    } else {
        alert('答錯了，再試一次！');
    }
    document.getElementById('question-img').src = currentQuestion.answerImg;
    document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        const nextQuestion = questions[currentQuestionIndex];
        document.getElementById('question-name').textContent = nextQuestion.name;
        document.getElementById('question-img').src = nextQuestion.img;
        document.getElementById('next-btn').style.display = 'none';
    } else {
        showCompletion();
    }
}

function showCompletion() {
    document.getElementById('question-name').textContent = '';
    document.getElementById('question-img').src = 'img6.jpg'; // 使用正確的合照名稱
    document.getElementById('next-btn').style.display = 'none';
    const optionsDiv = document.querySelector('.options');
    optionsDiv.innerHTML = '<p>恭喜你完成了所有題目！</p>';
}

// 初始化顯示第一位團員的名字
document.getElementById('question-name').textContent = questions[0].name;