form = document.forms[0];
form.addEventListener("submit", handleSubmit);
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
    middle.innerHTML = `<div class="block"><button id="newgame" onclick="newGame()"> New Game </button></div>`;
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
                            <div class="btn" onclick="difficulty(category)">Geography</button> 
                            <button data-type="geography" onclick="difficulty(category)">Geography</button> 
                            <button data-type="science" onclick="difficulty(category)">Science</button> 
                            <button data-type="sports" onclick="difficulty(category)">Sports</button>
                        </div>`;
    
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            let category = this.innerHTML;
            difficulty(category);
        });
    }   
}

function difficulty(category) {
    console.log(category);
}















questions = [
    {
        id: 1, category: "geography", difficulty: 1,
        question: "By land area, which country is the largest?", answer: "Russia", wrong: ["Canada", "Australia", "United States", "Germany", "China"]  
    },

    {
        id: 2, category: "geography", difficulty: 1,
        question: "By land area, which country is the smallest?", answer: "Vatican City", wrong: ["Monaco", "Gibraltar", "Tokelau", "Nauru", "Macao"]
    },

    {
        id: 3, category: "geography", difficulty: 2,
        question: "What is the largest desert in the world", answer: "Antarctic Desert", wrong: ["Sahara Desert", "Arctic Desert", "Great Australian Desert", "Gobi Desert", "Arabian Desert"]
    },

    {
        id: 4, category: "geography", difficulty: 3,
        question: "What percentage of the worlds population lives in the northern hemisphere?", answer: "90%", wrong: ["80%", "85%", "75%", "70%", "87%", "82%"]
    },

    {
        id: 5, category: "geography", difficulty: 2,
        question: "How many timezones does Russia span?", answer: "11", wrong: ["10", "9", "8", "7", "6"]
    },

    {
        id: 6,
        category: "geography", difficulty: 2,
        question: "What is the only city in the world that spans 2 continents?", answer: "Istanbul", wrong: ["Moscow", "Los Angeles", "Beijing", "Abu Dhabi", "Stockholm"]
    },

    {
        id: 7, category: "geography", difficulty: 1,
        question: "What is the tallest mountain on Earth?", answer: "Mt. Everest", wrong: ["Mt. Chimborazo", "K2", "Mt. Blanc", "Mt. Kangchenjunga", "Mt. Kebnekaise"]
    },

    {
        id: 8, category: "geography", difficulty: 2,
        question: "What is the highest point on Earth?", answer: "Mt. Chimborazo", wrong: ["Mt. Everest", "K2", "Mt. Blanc", "Mt. Kangchenjunga", "Mt. Kebnekaise"]
    },

    {
        id: 9, category: "geography", difficulty: 1,
        question: "What is the lowest point on Earths surface?", answer: "Mariana Trench", wrong: ["Dead Sea", "Litke Deep", "Denman Glacier", "Byrd Glacier", "Tonga Trench"]
    },

    {
        id: 10, category: "geography", difficulty: 3,
        question: "Which country has the most pyramids?", answer: "Sudan", wrong: ["Egypt", "Peru", "Chile", "India", "China"]
    },

    {
        id: 11, category: "science", difficulty: 1,
        question: "How many planets are there in our solar system?", answer: "8", wrong: ["9", "10", "7", "11", "6"]
    },

    {
        id: 12, category: "science", difficulty: 2,
        question: "Which star is closest to our solar system?", answer: "Proxima Centauri", wrong: ["Barnard's Star", "Luhman 16", "Sirius", "Lalande 21185", "Wolf 359"] 
    },

    {
        id: 13, category: "science", difficulty: 1,
        question: "Who first measured gravity?", answer: "Sir Isaac Newton", wrong: ["Eratosthenes of Cyrene", "Pythagoras of Samos", "Aristotle", "Richard Feynman", "Galileo Galilei"]
    },

    {
        id: 14, category: "science", difficulty: 1,
        question: "What is the first element of the periodic table?", answer: "Hydrogen", wrong: ["Helium", "Gold", "Uranium", "Lithium", "Beryllium"]
    },

    {
        id: 15, category: "science", difficulty: 1,
        question: "Which of these numbers represents pi?", answer: "3.14", wrong: ["2.76", "1.41", "0.67", "420", "42"]
    },

    {
        id: 16, category: "science", difficulty: 3,
        question: "How much does a teaspoon of neutron star weigh?", answer: "6 billion tons", wrong: ["6.9 billion tons", "70 grams", "3.2 kg", "5000 tons", "1 billion tons"]
    },

    {
        id: 17, category: "science", difficulty: 2,
        question: "Who is credited as the 'father of the atomic bomb'?", answer: "Robert Oppenheimer", wrong: ["Albert Einstein", "Linus Pauling", "Nikola Tesla", "Niels Bohr", "Ernest Rutherford"]
    },

    {
        id: 18, category: "science",
    },

    {
        id: 19, category: "science",
    },

    {
        id: 20, category: "science",
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