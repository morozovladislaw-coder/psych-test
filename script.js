{\rtf1\ansi\ansicpg1251\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let scoreTest = 0;\
\
document.querySelectorAll('.answers button').forEach(button => \{\
  button.addEventListener('click', () => \{\
    let parent = button.parentElement;\
    parent.querySelectorAll('button').forEach(btn => btn.classList.remove('selected'));\
    button.classList.add('selected');\
    scoreTest = Array.from(document.querySelectorAll('.answers .yes.selected')).length;\
  \});\
\});\
\
document.getElementById("testForm").addEventListener("submit", function(e)\{\
  e.preventDefault();\
  let resultText = '';\
  if (scoreTest >= 4) resultText = '\uc0\u1059  \u1074 \u1072 \u1089  \u1084 \u1086 \u1078 \u1091 \u1090 \u1100  \u1073 \u1091 \u1090 \u1080  \u1086 \u1079 \u1085 \u1072 \u1082 \u1080  \u1076 \u1077 \u1087 \u1088 \u1077 \u1089 \u1110 \u1111 . \u1056 \u1077 \u1082 \u1086 \u1084 \u1077 \u1085 \u1076 \u1091 \u1108 \u1090 \u1100 \u1089 \u1103  \u1079 \u1074 \u1077 \u1088 \u1085 \u1091 \u1090 \u1080 \u1089 \u1103  \u1076 \u1086  \u1089 \u1087 \u1077 \u1094 \u1110 \u1072 \u1083 \u1110 \u1089 \u1090 \u1072 .';\
  else if (scoreTest >= 2) resultText = '\uc0\u1052 \u1086 \u1078 \u1083 \u1080 \u1074 \u1110  \u1076 \u1077 \u1103 \u1082 \u1110  \u1086 \u1079 \u1085 \u1072 \u1082 \u1080  \u1076 \u1077 \u1087 \u1088 \u1077 \u1089 \u1110 \u1111 . \u1055 \u1086 \u1076 \u1091 \u1084 \u1072 \u1081 \u1090 \u1077  \u1087 \u1088 \u1086  \u1082 \u1086 \u1085 \u1089 \u1091 \u1083 \u1100 \u1090 \u1072 \u1094 \u1110 \u1102  \u1079  \u1087 \u1089 \u1080 \u1093 \u1086 \u1083 \u1086 \u1075 \u1086 \u1084 .';\
  else resultText = '\uc0\u1042 \u1072 \u1096  \u1089 \u1090 \u1072 \u1085  \u1074  \u1084 \u1077 \u1078 \u1072 \u1093  \u1085 \u1086 \u1088 \u1084 \u1080 . \u1071 \u1082 \u1097 \u1086  \u1074 \u1080 \u1085 \u1080 \u1082 \u1085 \u1091 \u1090 \u1100  \u1087 \u1088 \u1086 \u1073 \u1083 \u1077 \u1084 \u1080 , \u1079 \u1074 \u1077 \u1088 \u1090 \u1072 \u1081 \u1090 \u1077 \u1089 \u1100  \u1076 \u1086  \u1092 \u1072 \u1093 \u1110 \u1074 \u1094 \u1103 .';\
  document.getElementById("result").innerText = resultText;\
  document.getElementById("result").style.display = 'block';\
  document.getElementById("testForm").style.display = 'none';\
  startGame();\
\});\
\
// \uc0\u1052 \u1110 \u1085 \u1110 \u1084 \u1072 \u1083 \u1100 \u1085 \u1072  \u1075 \u1088 \u1072 \
let scoreGame = 0;\
let gameContainer = document.getElementById("game");\
let scoreDisplay = document.getElementById("score");\
\
function createStar() \{\
  let star = document.createElement('div');\
  star.classList.add('star');\
  star.innerText = '\uc0\u11088 ';\
  star.style.left = Math.random() * 90 + '%';\
  star.style.top = '-50px';\
  gameContainer.appendChild(star);\
  let speed = Math.random() * 3 + 2;\
  let fallInterval = setInterval(() => \{\
    let top = parseFloat(star.style.top);\
    if(top > 250)\{\
      star.remove();\
      clearInterval(fallInterval);\
    \} else star.style.top = top + speed + 'px';\
  \}, 20);\
  star.addEventListener('click', () => \{\
    scoreGame++;\
    scoreDisplay.innerText = '\uc0\u1041 \u1072 \u1083 \u1080 : ' + scoreGame;\
    star.remove();\
    clearInterval(fallInterval);\
  \});\
\}\
\
function startGame() \{\
  gameContainer.style.display = 'block';\
  let gameTime = 15;\
  let interval = setInterval(createStar, 500);\
  setTimeout(() => \{\
    clearInterval(interval);\
    alert('\uc0\u1043 \u1088 \u1072  \u1079 \u1072 \u1074 \u1077 \u1088 \u1096 \u1077 \u1085 \u1072 ! \u1042 \u1080  \u1085 \u1072 \u1073 \u1088 \u1072 \u1083 \u1080  ' + scoreGame + ' \u1073 \u1072 \u1083 \u1110 \u1074 !');\
  \}, gameTime * 1000);\
\}\
}
