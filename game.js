const $submitButton = document.getElementById("submit");
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");

var guessNumber = Math.round(Math.random() * 100);
var lives = 10;

$submitButton.onclick = () => {
    let userInput = document.getElementById("number-input").value;
    lives--;
    if (userInput == guessNumber) {
        location.href = "./win.html";
    } else if (lives == 0) {
        location.href = "./loose.html";
    } else if (userInput > guessNumber) {
        message = `Oops 🙂 Your guess is too high. You have ${lives} remaining`;
    } else if (userInput < guessNumber) {
        message = `Oops 🙂 Your guess is too low. You have ${lives} remaining`
    }

    $message.style.display = "inherit";
    $message.innerHTML = message;
    $lives.innerHTML = lives;
}