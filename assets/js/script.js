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

    top.innerHTML = `<h2>Pick a category</h2>`;
    middle.innerHTML = `<div>
                            <button onclick="runGame(category)"> Geography </button> 
                            <button onclick="runGame(category)"> Science </button> 
                            <button onclick="runGame(category)"> Sports </button>
                        </div>`;
}















questions = [
    {
        id: 1, category: "geography", difficulty: 1,
        question: "By landarea, which country is the largest?", answer: "Russia", wrong: ["Canada", "Australia", "United States", "Germany", "China"]  
    },

    {
        id: 2, category: "geography", difficulty: 1,
        question: "By landarea, which country is the smallest?", answer: "Vatican City", wrong: ["Monaco", "Gibraltar", "Tokelau", "Nauru", "Macao"]
    },

    {
        id: 3, category: "geography", difficulty: 2,
        question: "What is the largest desert in the world", answer: "Antarctic Desert", wrong: ["Sahara Desert", "Arctic Desert", "Great Australian Desert", "Gobi Desert", "Arabian Desert"]
    },

    {
        id: 4, category: "geography", difficulty: 3,
        question: "What percentage of the worlds population lives in the norther hemisphere?", answer: "90%", wrong: ["80%", "85%", "75%", "70%", "87%", "82%"]
    },

    {
        id: 5, category: "geography", difficulty: 2,
        question: "How many timezones does Russia span?", answer: ""
    },

    {
        id: 6,
        category: "geography"
    },

    {
        id: 7,
        category: "geography"
    },

    {
        id: 8,
        category: "geography"
    },

    {
        id: 9,
        category: "geography"
    },

    {
        id: 10,
        category: "geography"
    },

    {
        id: 11,
        category: "science"
    },

    {
        id: 12,
        category: "science"
    },

    {
        id: 13,
        category: "science"
    },

    {
        id: 14,
        category: "science"
    },

    {
        id: 15,
        category: "science"
    },

    {
        id: 16,
        category: "science"
    },

    {
        id: 17,
        category: "science"
    },

    {
        id: 18,
        category: "science"
    },

    {
        id: 19,
        category: "science"
    },

    {
        id: 20,
        category: "science"
    },

    {
        id: 21,
        category: "sports"
    },

    {
        id: 22,
        category: "sports"
    },

    {
        id: 23,
        category: "sports"
    },

    {
        id: 24,
        category: "sports"
    },

    {
        id: 25,
        category: "sports"
    },

    {
        id: 26,
        category: "sports"
    },

    {
        id: 27,
        category: "sports"
    },

    {
        id: 28,
        category: "sports"
    },

    {
        id: 29,
        category: "sports"
    },

    {
        id: 30,
        category: "sports"
    },
];