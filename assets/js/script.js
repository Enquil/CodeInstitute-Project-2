form = document.forms[0];
form.addEventListener('submit', handleSubmit);
const user = null;
const categories = ["culture", "history", "science", "sports"];

// get username and store it as a var, replace stuff 
function handleSubmit() {
    event.preventDefault();

    let user = document.getElementById("username").value;
    const greeting = `<h2>Welcome ${user}</h2>`;
    const categories = `<h3>What would you like to do?</h3>`;
    const newGame = `<div class="block"><button onclick="meow()"> New Game </button></div>`;
    const statistics = `<button id="stats">statistics</button>`;
    let top = document.getElementById("top");
    let middle = document.getElementById("middle");
    let bottom = document.getElementById("bottom");

    while (top.hasChildNodes, middle.hasChildNodes, bottom.hasChildNodes()) {
        top.removeChild(top.firstChild);
        middle.removeChild(middle.firstChild);
        bottom.removeChild(bottom.firstChild);
    }
    
    top.innerHTML = greeting;
    top.innerHTML += categories;
    middle.innerHTML = newGame;
    middle.innerHTML += statistics;
}

function meow() {
    console.log("hello");
}