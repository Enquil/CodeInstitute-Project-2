let buttons = document.getElementsByTagName("button");

document.addEventListener("DOMContentLoaded", function() {
    let menuOn = true;
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "newgame") {
                newGame();
            } else if (this.getAttribute("data-type") === "history") {
                ;
            }
        });
    }
});

function newGame() {
    alert("Hello from the function!");
}