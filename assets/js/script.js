document.getElementById("newgame").addEventListener("click", newGame);
//remove control divs and display category choice

function newGame () {
    alert("hello");
    document.getElementById("button-panel").classList.add("none");
    document.getElementById("links-and-info").classList.add("none");
    document.getElementById("category-picker").classList.remove("none");
}

