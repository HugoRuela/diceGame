var randomNumber1 = Math.floor(Math.random() * 6)+1; // Random number then multiply by 6 for a range 1 - 6 then Math.Floor to remove decimal points;

var randomNumber2 = Math.floor(Math.random() * 6)+1;

var img1 = "images/dice" + randomNumber1 + ".png"; // Left Player - Player 1;
var img2 = "images/dice" + randomNumber2 + ".png"; // Right Player - Player 2;

var imgRandom1 = document.querySelectorAll("img")[0];
var imgRandom2 = document.querySelectorAll("img")[1];


imgRandom1.setAttribute("src",img1);
imgRandom2.setAttribute("src",img2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";

} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";

} else {
  document.querySelector("h1").textContent = "Draw!";
}
