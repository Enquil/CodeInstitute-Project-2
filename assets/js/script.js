let buttons = document.getElementsByTagName("button");

document.addEventListener("DOMContentLoaded", function() {
    let loggedIn = false;
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "newgame") {
                newGame();
            } else if (this.getAttribute("data-type") === "history") {
                historyGame();
            }
        });
    }
});

function newGame() {
    alert("Hello from the function!");
    console.log(loggedIn);
}