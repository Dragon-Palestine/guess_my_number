"use strict";

let securetNum = Math.trunc(Math.random() * 20) + 1;
let score = 20,
  highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const number = document.querySelector(".num").value;
  if (score > 1) {
    if (!number) {
      document.querySelector(".status").textContent =
        "⛔ this is not number !!!";
    } else if (number == securetNum) {
      document.querySelector(".status").textContent = "You win 🏆";
      document.querySelector("body").style.backgroundColor = "green";
      const style = document.createElement("style");
      style.textContent = '.title::before { content: "' + securetNum + '"; }';
      document.head.appendChild(style);
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highScore").textContent = highScore;
      }
    } else if (securetNum < number) {
      document.querySelector(".status").textContent =
        "⬆️ that is bigger than num";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (securetNum > number) {
      document.querySelector(".status").textContent =
        "⬇️ that is less than num";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".status").textContent = "You lose 😭😭";
    document.querySelector("body").style.backgroundColor = "#db2929e3";
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  securetNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".status").textContent = "🔍 Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "rgb(26, 26, 26)";
  document.querySelector(".num").value = "";
  const style = document.createElement("style");
  style.innerHTML = ".title::before { content: '?'; }";
  document.head.appendChild(style);
});
