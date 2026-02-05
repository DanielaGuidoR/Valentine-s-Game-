document.addEventListener("DOMContentLoaded", () => {

  const startScreen = document.getElementById("start-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const startBtn = document.getElementById("start-btn");

  const finalScreen = document.getElementById("final-screen");
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");
  const noScreen = document.getElementById("no-screen");
  const backBtn = document.getElementById("back-btn");
  const loveScreen = document.getElementById("love-screen");

  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const messageEl = document.getElementById("message");

  const questions = [
    {
      text: "¿Dónde fue nuestro primer beso?",
      answers: ["En Plaza Cuernavaca 💕", "En hamburguesas 🍔","En tu carro 🚗"],
      correct: 2
    },
    {
      text: "¿Que hicimos en nuestra primera cita?",
      answers: ["Fuimos por un helado 🍦", "Fuimos por un cafe ☕", "Fuimos a cenar 🍜"],
      correct: 1
    },
    {
      text: "¿Quien fue la primera persona en mandar mensaje?",
      answers: ["Yo obvio ✨", "Tu 😋"],
      correct: 0
    },
    {
      text: "¿Cuál es mi día fav en el gym?",
      answers: [
        "Martes de brazo 💪",
        "Miércoles de pierna juntos 👫",
        "Viernes de pierna 🦵"
      ],
      correct: 1
    }
    
  ];

  let current = 0;

  startBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    quizScreen.style.display = "block";
    showQuestion();
  });

  yesBtn.addEventListener("click", showLove);

  noBtn.addEventListener("click", () => {
    finalScreen.style.display = "none";
    noScreen.style.display = "block";
  });

  backBtn.addEventListener("click", () => {
    noScreen.style.display = "none";
    finalScreen.style.display = "block";
  });

  function showQuestion() {
    messageEl.textContent = "";
    questionEl.textContent = questions[current].text;
    answersEl.innerHTML = "";

    questions[current].answers.forEach((answer, index) => {
      const btn = document.createElement("button");
      btn.textContent = answer;
      btn.onclick = () => checkAnswer(index);
      answersEl.appendChild(btn);
    });
  }

  function checkAnswer(index) {
    if (index === questions[current].correct) {
      messageEl.textContent = "¡Correcto!, te ganaste unos besotes 💖";
      messageEl.style.color = "green";

      setTimeout(() => {
        current++;
        if (current < questions.length) {
          showQuestion();
        } else {
          quizScreen.style.display = "none";
          finalScreen.style.display = "block";
        }
      }, 1000);
    } else {
      messageEl.textContent = "Como que no te la sabes 😠 ";
      messageEl.style.color = "red";
      setTimeout(() => {
    messageEl.textContent = "";
    }, 1000); 
    }
  }

  function showLove() {
    finalScreen.style.display = "none";
    loveScreen.style.display = "block";
  }

});


