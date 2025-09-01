const quizData = [
  { q: "Ви відчуваєте сум більшу частину дня?", yes: 1, no: 0 },
  { q: "Ви втратили інтерес до улюблених занять?", yes: 1, no: 0 },
  { q: "Ви відчуваєте втому або низьку енергію?", yes: 1, no: 0 },
  { q: "Ви відчуваєте почуття провини чи непотрібності?", yes: 1, no: 0 },
  { q: "Ви відчуваєте труднощі з концентрацією?", yes: 1, no: 0 },
  { q: "Ви маєте зміни апетиту або сну?", yes: 1, no: 0 },
  { q: "Ви відчуваєте дратівливість або тривожність?", yes: 1, no: 0 },
  { q: "Ви відчуваєте відчуження від оточення?", yes: 1, no: 0 },
  { q: "Ви помічаєте зниження самооцінки?", yes: 1, no: 0 },
  { q: "Ви часто відчуваєте безнадію?", yes: 1, no: 0 }
];

let current = 0;
let score = 0;

const quizEl = document.getElementById('quiz');
const resultEl = document.getElementById('result');
const miniGameEl = document.getElementById('mini-game');
const emailForm = document.getElementById('email-form');
const resultHidden = document.getElementById('result-hidden');

function loadQuestion() {
  if(current >= quizData.length) {
    showResult();
    return;
  }
  const q = quizData[current];
  quizEl.innerHTML = `<p>${q.q}</p>
    <button class="yes">Так</button>
    <button class="no">Ні</button>`;

  const buttons = quizEl.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      score += btn.classList.contains('yes') ? q.yes : q.no;
      current++;
      setTimeout(loadQuestion, 300);
    });
  });
}

function showResult() {
  quizEl.classList.add('hidden');
  resultEl.classList.remove('hidden');
  let message = "";
  if(score <= 3) message = "Низький рівень депресії";
  else if(score <= 7) message = "Середній рівень депресії";
  else message = "Високий рівень депресії";

  resultEl.innerHTML = `<h2>Ваш результат: ${message}</h2>`;
  resultHidden.value = message;

  miniGameEl.classList.remove('hidden');
  emailForm.classList.remove('hidden');
  startGame();
}

// Міні-гра: ловимо сердечки
const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score-display');
const restartBtn = document.getElementById('restart-game');
let gameScore = 0;
let gameInterval;

function startGame() {
  gameScore = 0;
  scoreDisplay.textContent = "Очки: 0";
  gameArea.innerHTML = '';
  restartBtn.classList.add('hidden');

  gameInterval = setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * (gameArea.offsetWidth - 30) + 'px';
    heart.textContent = '❤️';
    heart.style.animationDuration = (3 + Math.random()*2) + 's';
    gameArea.appendChild(heart);

    heart.addEventListener('click', () => {
      gameScore++;
      scoreDisplay.textContent = `Очки: ${gameScore}`;
      heart.remove();
    });

    setTimeout(() => {
      if(heart.parentElement) heart.remove();
    }, 5000);
  }, 800);

  setTimeout(endGame, 15000); // игра длится 15 секунд
}

function endGame() {
  clear
