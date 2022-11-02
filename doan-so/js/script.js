let secretDoc = document.querySelector(".secret");
let secret = secretDoc.textContent;
let guess = document.querySelector(".guess");
secret = Math.floor(Math.random() * 20 + 1);
console.log(secret);
let score = 20;
let highscore = 0;

const displayMessenge = function (messenge) {
  document.querySelector(".messenger").textContent = messenge;
};

const scoreNumber = function (score) {
  document.querySelector(".score").textContent = score;
};

const highscoreNumber = function (highscore) {
  document.querySelector(".highscore").textContent = highscore;
};

const secretNumber = function (secret) {
  document.querySelector(".secret").textContent = secret;
};

const mainBackgroundColor = function (color) {
  document.querySelector("#main").style.backgroundColor = color;
};

document.querySelector(".btn-again").addEventListener("click", function () {
  score = 20;
  scoreNumber(20);
  secret = Math.floor(Math.random() * 20 + 1);
  secretNumber("?");
  displayMessenge("Start guessing...");
  guess.value = "";
  mainBackgroundColor("black");
  console.log(secret);
  secretDoc.classList.toggle("secret-width");
});

document.querySelector(".btn-check").addEventListener("click", function () {
  let guessNumber = Number(guess.value);
  if (!guessNumber) {
    displayMessenge("⛔ No number!");
  } else if (guessNumber !== secret) {
    if (score > 1) {
      displayMessenge(guessNumber > secret ? "📈 Too high!" : "📉 Too low!");
      score--;
      scoreNumber(score);
    } else {
      displayMessenge("💥 You lose!");
      score = 0;
      scoreNumber(score);
    }
  } else if (guessNumber === secret) {
    displayMessenge("🎉 You win");
    mainBackgroundColor("green");
    secretDoc.classList.add("secret-width");
    secretNumber(secret);

    if (score > highscore) {
      highscore = score;
      highscoreNumber(highscore);
    }
  }
});
