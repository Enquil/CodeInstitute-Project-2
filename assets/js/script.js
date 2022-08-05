form = document.forms[0];
form.addEventListener('submit', handleSubmit);
const user = null;
const categories = ["culture", "history", "science", "sports"];

// get username and store it as a var, replace stuff 
function handleSubmit() {
    event.preventDefault();

    let user = document.getElementById("username").value;

    const top = document.getElementById("top");
    const middle = document.getElementById("middle");
    const bottom = document.getElementById("bottom");

    while (top.hasChildNodes, middle.hasChildNodes, bottom.hasChildNodes()) {
        top.removeChild(top.firstChild);
        middle.removeChild(middle.firstChild);
        bottom.removeChild(bottom.firstChild);
    }
    
    top.innerHTML = `<h2>Welcome ${user}</h2>`;
    top.innerHTML += `<h3>What would you like to do?</h3>`;
    middle.innerHTML = `<div class="block"><button onclick="newGame()"> New Game </button></div>`;
    middle.innerHTML += `<button id="stats">statistics</button>`;
}



function newGame() {
    const top = document.getElementById("top");
    const middle = document.getElementById("middle");

    while (top.hasChildNodes, middle.hasChildNodes()) {
        top.removeChild(top.firstChild);
        middle.removeChild(middle.firstChild);
    }
}













questions {

}