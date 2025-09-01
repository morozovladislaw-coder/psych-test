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

function loadQuestion() {
  if (current >= quizData.length) {
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
  miniGameEl.classList.remove('hidden');
  emailForm.classList.remove('hidden');
}

// Запускаем тест
loadQuestion();

// Міні-гра
let clicks = 0;
const gameBtn = document.getElementById('click-game');
const gameMsg = document.getElementById('game-message');
gameBtn.addEventListener('click', () => {
  clicks++;
  if(clicks >= 10){
    gameMsg.textContent = "Ви виграли! 🎉";
    gameBtn.disabled = true;
  } else {
    gameMsg.textContent = `Натиснуто: ${clicks}/10`;
  }
});

// Відправка email
emailForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const email = document.getElementById('email').value;
  const body = `Результат тесту: ${score} балів`;
  const mailtoLink = `mailto:${email}?subject=Результат тесту&body=${body}`;
  window.location.href = mailtoLink;
});
