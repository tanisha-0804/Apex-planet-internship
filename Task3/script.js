// ------------------ Quiz ------------------
const questions = [
  { q: "What is 2 + 2?", options: ["2", "4", "9", "8"], answer: "4" },
  { q: "Capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
  { q: "Which language runs in the browser?", options: ["Python", "JavaScript", "C++", "Java"], answer: "JavaScript" },
  { q: "What is 5 × 3?", options: ["15", "8", "20", "12"], answer: "15" }
];

let index = 0;
let score = 0;

function loadQuestion() {
  let q = questions[index];
  document.getElementById("question").innerText = q.q;

  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    let btn = document.createElement("div");
    btn.classList.add("option");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("score").innerText = `Score: ${score}`;
}

function checkAnswer(selected) {
  let correct = questions[index].answer;
  let feedback = document.getElementById("feedback");

  if (selected === correct) {
    feedback.innerText = "✅ Correct!";
    score++;
    index++;
    if (index < questions.length) {
      setTimeout(() => {
        feedback.innerText = "";
        loadQuestion();
      }, 1000);
    } else {
      feedback.innerText = `🎉 Game Over! Final Score: ${score}/${questions.length}`;
      document.getElementById("restart-btn").style.display = "inline-block";
    }
  } else {
    feedback.innerText = "❌ Wrong Answer! Game Over!";
    document.getElementById("restart-btn").style.display = "inline-block";
  }
}

function restartQuiz() {
  index = 0;
  score = 0;
  document.getElementById("feedback").innerText = "";
  document.getElementById("restart-btn").style.display = "none";
  loadQuestion();
}

loadQuestion();

// ------------------ API Fetch (Joke Generator) ------------------
async function getJoke() {
  let response = await fetch("https://official-joke-api.appspot.com/random_joke");
  let data = await response.json();
  document.getElementById("joke").innerText = `${data.setup} - ${data.punchline}`;
}

// ------------------ Dark Mode Toggle ------------------
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  let btn = document.getElementById("theme-toggle");
  btn.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});
