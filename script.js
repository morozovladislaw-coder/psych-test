// --- Тест ---
const answers = document.querySelectorAll('.answer');
answers.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const parent = btn.parentElement;
    parent.querySelectorAll('.answer').forEach(a => a.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

document.getElementById('submit-test').addEventListener('click', () => {
  const selected = document.querySelectorAll('.answer.selected');
  if (selected.length < 5) {
    alert('Будь ласка, відповідайте на всі питання!');
    return;
  }
  alert('Тест завершено! Тепер переходьте до міні-гри 🎉');
  // можно отправить email через backend или emailjs
});

// --- Міні-гра ---
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
    heart.style.left = Math.random() * (gameArea.offsetWidth - 40) + 'px';
    heart.style.fontSize = (20 + Math.random() * 30) + 'px';
    heart.style.animationDuration = (3 + Math.random() * 2) + 's';
    heart.textContent = '❤️';
    gameArea.appendChild(heart);

    heart.addEventListener('click', () => {
      gameScore++;
      scoreDisplay.textContent = `Очки: ${gameScore}`;
      heart.remove();
      heartEffect(heart);
    });

    setTimeout(() => {
      if (heart.parentElement) heart.remove();
    }, 5000);

  }, 700);

  setTimeout(endGame, 15000);
}

function heartEffect(heart) {
  const burst = document.createElement('div');
  burst.textContent = '✨';
  burst.style.position = 'absolute';
  burst.style.left = heart.style.left;
  burst.style.top = heart.offsetTop + 'px';
  burst.style.fontSize = '24px';
  gameArea.appendChild(burst);
  setTimeout(() => burst.remove(), 500);
