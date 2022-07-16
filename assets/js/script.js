let buttons = document.getElementsByTagName("button");

let loggedIn = false;

while (loggedIn === false);

//control panel
document.addEventListener("click", function() {
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "newgame") {
                newGame();
            } else if (this.getAttribute("data-type") === "credits") {
                creditList();
            } else if (this.getAttribute("data-type") === "contact") {
                contactMe();
            }

        });
    }
});


//Function for making a newGame
function newGame() {
    alert("newgamehello");
}

//Login modal window
function logIn() {
    alert("helloformlogin");
}

function contactMe() {
    alert("hellofrom contact");
}

