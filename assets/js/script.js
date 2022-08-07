form = document.forms[0];
form.addEventListener("submit", handleSubmit);
let sessionQuestions = [];
let numb = [];
// get username and store it as a var, replace stuff 
function handleSubmit() {
    event.preventDefault();

    let user = document.getElementById("username").value;

    const top = document.getElementById("top");
    const middle = document.getElementById("middle");
    const bottom = document.getElementById("bottom");

    while (middle.hasChildNodes()) {
        top.removeChild(top.firstChild);
        middle.removeChild(middle.firstChild);
        bottom.removeChild(bottom.firstChild);
    }
    
    top.innerHTML = `<h2>Welcome ${user}</h2><br> <h3>What would you like to do?</h3>`;
    middle.innerHTML = `<div class="block">
                            <button id="newgame" onclick="newGame()">New Game</button>
                        </div> 
                        <button id="stats">Statistics</button>`;
}



function newGame() {
    let top = document.getElementById("top");
    let middle = document.getElementById("middle");

    while (middle.hasChildNodes()) {
        top.removeChild(top.firstChild);
        middle.removeChild(middle.firstChild);
    }

    top.innerHTML = `<h2>Pick a category</h2>`;
    middle.innerHTML = `<div>
                            <button>Geography</button> 
                            <button>Science</button> 
                            <button>Sports</button>
                        </div>`;
    
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            let category = this.innerHTML;
            select(category);
        });
    }   
}

function select(category) {
    categoryArr = questions.filter(question => {
        return question.category === category;
    });
    selectDifficulty();
}

function selectDifficulty() {
    let top = document.getElementById("top");
    let middle = document.getElementById("middle");
    while (middle.hasChildNodes()) {
        top.removeChild(top.firstChild);
        middle.removeChild(middle.firstChild);
    }

    top.innerHTML = `<h2>Select a difficulty</h2>`;
    middle.innerHTML = `<div>
                            <button>Easy</button> 
                            <button>Medium</button> 
                            <button>Hard</button>
                        </div>`;

    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            let difficulty = this.innerHTML;
            sortGame(difficulty);
    });
}
}

function sortGame(difficulty) {
    questionArr = categoryArr.filter(question => {
        return question.difficulty === difficulty;
    });
    questionArr.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 3; i++) {
        sessionQuestions.push(questionArr[0]);
        questionArr.shift();
    }
    console.log(sessionQuestions);
    runGame();
}

function runGame() {
    let top = document.getElementById("top");
    let middle = document.getElementById("middle");

    while (middle.hasChildNodes()) {
        top.removeChild(top.firstChild);
        middle.removeChild(middle.firstChild);
    }

    questionArr[0].wrong.sort(() => Math.random() - 0.5);
    top.innerHTML = `<h2>${questionArr[0].question}</h2>`;
    middle.innerHTML = `<div id="answerbox">
                            <button class="fortyfive" onclick="check(answer)">${sessionQuestions[0].wrong[0]}</button> 
                            <button class="fortyfive" onclick="check(answer)">${sessionQuestions[0].wrong[1]}</button> 
                            <button class="fortyfive" onclick="check(answer)">${sessionQuestions[0].wrong[2]}</button>
                            <button class="fortyfive" onclick="check(answer)">${sessionQuestions[0].wrong[3]}</button>
                        </div>`;
    let numb = (document.getElementById("answerbox").children);
    numb[0].innerText =  sessionQuestions[0].answer;
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let answer = this.innerHTML;
            check(answer);
    });
} 
}

function check(answer) {
    if (answer === sessionQuestions[0].answer) {
    alert("correct");
    } else {
        alert("wrong");
    }
    sessionQuestions.shift();
    if (sessionQuestions.length === 0) {
        alert("done");
    } else {
        runGame();
    }
}

questions = [
    {
        id: 1, category: "Geography", difficulty: "Easy",
        question: "By land area, which country is the largest?", answer: "Russia", wrong: ["Canada", "Australia", "United States", "Germany", "China"]  
    },

    {
        id: 2, category: "Geography", difficulty: "Easy",
        question: "By land area, which country is the smallest?", answer: "Vatican City", wrong: ["Monaco", "Gibraltar", "Tokelau", "Nauru", "Macao"]
    },

    {
        id: 3, category: "Geography", difficulty: "Medium",
        question: "What is the largest desert in the world", answer: "Antarctic Desert", wrong: ["Sahara Desert", "Arctic Desert", "Great Australian Desert", "Gobi Desert", "Arabian Desert"]
    },

    {
        id: 4, category: "Geography", difficulty: "Hard",
        question: "What percentage of the worlds population lives in the northern hemisphere?", answer: "90%", wrong: ["80%", "85%", "75%", "70%", "87%", "82%"]
    },

    {
        id: 5, category: "Geography", difficulty: "Medium",
        question: "How many timezones does Russia span?", answer: "11", wrong: ["10", "9", "8", "7", "6"]
    },

    {
        id: 6,
        category: "Geography", difficulty: "Medium",
        question: "What is the only city in the world that spans 2 continents?", answer: "Istanbul", wrong: ["Moscow", "Los Angeles", "Beijing", "Abu Dhabi", "Stockholm"]
    },

    {
        id: 7, category: "Geography", difficulty: "Easy",
        question: "What is the tallest mountain on Earth?", answer: "Mt. Everest", wrong: ["Mt. Chimborazo", "K2", "Mt. Blanc", "Mt. Kangchenjunga", "Mt. Kebnekaise"]
    },

    {
        id: 8, category: "Geography", difficulty: "Medium",
        question: "What is the highest point on Earth?", answer: "Mt. Chimborazo", wrong: ["Mt. Everest", "K2", "Mt. Blanc", "Mt. Kangchenjunga", "Mt. Kebnekaise"]
    },

    {
        id: 9, category: "Geography", difficulty: "Easy",
        question: "What is the lowest point on Earths surface?", answer: "Mariana Trench", wrong: ["Dead Sea", "Litke Deep", "Denman Glacier", "Byrd Glacier", "Tonga Trench"]
    },

    {
        id: 10, category: "Geography", difficulty: "Hard",
        question: "Which country has the most pyramids?", answer: "Sudan", wrong: ["Egypt", "Peru", "Chile", "India", "China"]
    },

    {
        id: 11, category: "Science", difficulty: "Easy",
        question: "How many planets are there in our solar system?", answer: "8", wrong: ["9", "10", "7", "11", "6"]
    },

    {
        id: 12, category: "Science", difficulty: "Easy",
        question: "Which star is closest to our solar system?", answer: "Proxima Centauri", wrong: ["Barnard's Star", "Luhman 16", "Sirius", "Lalande 21185", "Wolf 359"] 
    },

    {
        id: 13, category: "Science", difficulty: "Easy",
        question: "Who first measured gravity?", answer: "Sir Isaac Newton", wrong: ["Eratosthenes of Cyrene", "Pythagoras of Samos", "Aristotle", "Richard Feynman", "Galileo Galilei"]
    },

    {
        id: 14, category: "Science", difficulty: "Easy",
        question: "What is the first element of the periodic table?", answer: "Hydrogen", wrong: ["Helium", "Gold", "Uranium", "Lithium", "Beryllium"]
    },

    {
        id: 15, category: "Science", difficulty: "Easy",
        question: "Which of these numbers represents pi?", answer: "3.14", wrong: ["2.76", "1.41", "0.67", "420", "42"]
    },

    {
        id: 16, category: "Science", difficulty: "Medium",
        question: "How much does a teaspoon of neutron star weigh?", answer: "6 billion tons", wrong: ["6.9 billion tons", "70 grams", "3.2 kg", "5000 tons", "1 billion tons"]
    },

    {
        id: 17, category: "Science", difficulty: "Medium",
        question: "Who is credited as the 'father of the atomic bomb'?", answer: "Robert Oppenheimer", wrong: ["Albert Einstein", "Linus Pauling", "Nikola Tesla", "Niels Bohr", "Ernest Rutherford"]
    },

    {
        id: 18, category: "Science", difficulty: "Medium",
        question: "At what temperature does water boil?", answer: "100°C", wrong: ["100°K", "100°F", "211°F", "37°C", "1°K"]
    },

    {
        id: 19, category: "Science", difficulty: "Medium",
        question: "What is the biggest animal on Earth?", answer: "Blue Whale", wrong: ["Orca", "African Elephant", "Colossal Squid", "Asian Elephant", "Brown Bear"]
    },

    {
        id: 20, category: "Science", difficulty: "Medium",
        question: "What is the fastest animal on Earth?", answer: "Peregrine Falcon", wrong: ["Mexican free-tailed Bat", "Cheetah", "Golden Eagle", "Sailfish", "Rock Dove"]
    },

    {
        id: 21,
        category: "Sports"
    },

    {
        id: 22,
        category: "Sports"
    },

    {
        id: 23,
        category: "Sports"
    },

    {
        id: 24,
        category: "Sports"
    },

    {
        id: 25,
        category: "Sports"
    },

    {
        id: 26,
        category: "Sports"
    },

    {
        id: 27,
        category: "Sports"
    },

    {
        id: 28,
        category: "Sports"
    },

    {
        id: 29,
        category: "Sports"
    },

    {
        id: 30,
        category: "Sports"
    },

    {
        id: 31, category: "Science", difficulty: "Hard",
    },

    {
        id: 31, category: "Science", difficulty: "Hard",
    },

    {
        id: 31, category: "Science", difficulty: "Hard",
    },

    {
        id: 31, category: "Science", difficulty: "Hard",
    },

    {
        id: 31, category: "Science", difficulty: "Hard",
    },
];