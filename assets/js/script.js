let buttons = document.getElementsByTagName("button");

let loggedIn = false;


//control panel
document.addEventListener("DOMContentLoaded", function() {
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "newgame") {
                newGame();
            } else if (this.getAttribute("data-type") === "login") {
                logIn();
            } else if (this.getAttribute("data-type") === "contact") {
                contactMe();
            }

        });
    }
});


//Function for making a newGame
function newGame() {
    alert("moe");
    document.getElementById("main-window").remove = "none";
    document.getElementById("game-selector").add.class = "block";
}

//Login modal window
function LogIn() {
    alert("hello");
}

