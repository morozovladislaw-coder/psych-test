// --- Тест ---
const answers = document.querySelectorAll('.answer');
answers.forEach(btn => {
  btn.addEventListener('click', () => {
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
  document.getElementById('test-area').classList.add('hidden');
  document.getElementById('game-section').classList.remove('hidden');
  startGame();
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
      const burst = document.createElement
