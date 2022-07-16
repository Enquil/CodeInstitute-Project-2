let buttons = document.getElementsByTagName("button");

let loggedIn = false;

document.addEventListener("DOMContentLoaded", function() {
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "newgame") {
                newGame();
            } else if (this.getAttribute("data-type") === "login") {
                logIn();
            } else if (this.getAttribute("data-type") === "contact") {
                contact();
            }

        });
    }
});


//Function for making a newGame
function newGame() {
    alert("moe");
    document.getElementById("main-window").change.class = "none";
    document.getElementById("game-category").style.visibility = "block";
}

function LogIn() {
    alert("hello");
}