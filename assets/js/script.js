form = document.forms[0];
form.addEventListener("submit", handleSubmit);
let sessionQuestions = [];
let buttonArr = [];
let rightArr = [];
let sessionGames = 0;
let sessionCorrect = 0;
let user = "";

/**
 * Gets the username from the input,
 * Clears all text content,
 * Sends you straight into category choice
 */
function handleSubmit() {
    event.preventDefault();

    user = document.getElementById("username").value;
    clear();
    newGame(user);
}

/**
 * Clears screen,
 * Generates category choice,
 * Puts eventlisteners on buttons and sets the innerHTML defined as category
 * if first time picking category, greets with username
 */
function newGame(user) {
    rightArr.splice(0, rightArr.length);
    clear();
    if (sessionGames === 0) {
    game.innerHTML = `<h2>Welcome ${user}</h2>
                      <h3>Please pick a category</h3>`;
    } else { game.innerHTML = `<h3>Please pick a category</h3>`;
}
    game.innerHTML += `<div>
                            <button>Geography</button> 
                            <button>Science</button> 
                            <button onclick="nope()">Sports</button>
                        </div>`;
    
    let buttons = document.getElementsByTagName("button"); // Anna Greaves Code Institute
    for (let button of buttons) {
        button.addEventListener("click", function() {
            let category = this.innerHTML;
            select(category);
        });
    } 
}

/**
 * filters question list by category and returns them as an array of objects
 * @param {*} category is innerHTML of categorybuttons
 */
function select(category) {
    categoryArr = questions.filter(question => {
        return question.category === category;
    });
    selectDifficulty();
}

/**
 * Clears screen,
 * Generates difficulty buttons with innerHTML being difficulty choice stored as parameter in an array
 */
function selectDifficulty() {

    while (game.hasChildNodes()) {
        game.removeChild(game.firstChild);
    }

    game.innerHTML = `<h2>Select a difficulty</h2>
                        <div>
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

/**
 * Filters array of categories by selected difficulty
 * Sorts the array randomly and puts the 3 first questions into the final questionArr
 * @param {*} difficulty is innerHTML of difficulty buttons 
 */
function sortGame(difficulty) {
    questionArr = categoryArr.filter(question => {
        return question.difficulty === difficulty;
    });
    questionArr.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 3; i++) {
        sessionQuestions.push(questionArr[0]);
        questionArr.shift();
    }
    runGame();
}

/**
 * Clears screen,
 * Randomizes the wrong answers possible for index 0 of sessionQuestions and generates buttontexts based on new index,
 * Gets the buttons into an array, randomizes them and puts the correct answer at index 0
 */
function runGame() {

    while (game.hasChildNodes()) {
        game.removeChild(game.firstChild);
    }

    sessionQuestions[0].wrong.sort(() => Math.random() - 0.5);

    game.innerHTML = `<h2 class="mobilesize">${sessionQuestions[0].question}</h2>
                        <div id="answerbox">
                            <button>${sessionQuestions[0].wrong[0]}</button> 
                            <button>${sessionQuestions[0].wrong[1]}</button> 
                            <button>${sessionQuestions[0].wrong[2]}</button>
                            <button>${sessionQuestions[0].wrong[3]}</button>
                        </div>`;

    let buttonArr = document.getElementById("answerbox").children;
    let rightAnswer = Array.from(buttonArr).sort(() => Math.random() - 0.5);
    rightAnswer[0].innerText =  sessionQuestions[0].answer;
    rightAnswer[0].classList.add("correct");
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons) {
        button.addEventListener("click", function() {
            let answer = this.innerHTML;
            check(answer);
    });
} 
}

/**
 * Checks user answer against correct answer for first question in sessionQuestions array,
 * If user is right, pushes question to new array called rightArr,
 * The length of rightArr is number of correct answers,
 * When sessionQuestions array length is 0, the game ends and results are loaded
 * @param {*} answer is whatever answer the user chooses
 */
function check(answer) {
    let correct = document.querySelector(".correct");
    correct.classList.add("green");

    if (answer === sessionQuestions[0].answer) {
        rightArr.push(sessionQuestions[0]);
    }
    sessionQuestions.shift(); 

    if (sessionQuestions.length === 0) {
        setTimeout(clear, 2000);
        setTimeout(endGame, 2100);
    } else {
        setTimeout(runGame, 2000);
    }
}

/**
 * Clears screen
 */
function clear() {
    while (game.hasChildNodes()) {
        game.removeChild(game.firstChild);
    }
}

/**
 * Ends the game,
 * increases sessionGames array with 1 for calculating % correct,
 * displays some HTML
 */
function endGame() {
    sessionGames ++;
    sessionCorrect += rightArr.length;
        game.innerHTML = `<h2>End of Round</h2> 
                          <h3>You got ${rightArr.length}/3 questions right!</h3>
                          <button id="newgame" onclick="newGame()">Play Again</button>
                          <button id="stats" onclick="stats()">Statistics</button>`;
}

/**
 * Displays % of how many questions youve answered correctly
 * Displays some html
 */
 function stats() {
    clear();
    let percentage = sessionCorrect / (sessionGames * 3) * 100;
    let round = percentage.toFixed(1);
    game.innerHTML = `<h2>Statistics</h2>
                        <p>${user}<p>
                      <h3>You have answered ${round}% of questions correct, this session!</h3>`;
}

// Array of question objects
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
        id: 4, category: "Geography", difficulty: "Medium",
        question: "What percentage of the worlds population lives in the northern hemisphere?", answer: "90%", wrong: ["80%", "85%", "75%", "70%", "87%", "82%"]
    },

    {
        id: 5, category: "Geography", difficulty: "Easy",
        question: "How many timezones does Russia span?", answer: "11", wrong: ["2", "5", "8", "7", "3"]
    },

    {
        id: 6,
        category: "Geography", difficulty: "Medium",
        question: "What is the only city in the world that spans 2 continents?", answer: "Istanbul", wrong: ["Moscow", "Los Angeles", "Beijing", "Abu Dhabi", "Stockholm"]
    },

    {
        id: 7, category: "Geography", difficulty: "Easy",
        question: "What is the tallest mountain on Earth?", answer: "Mount Everest", wrong: ["Chimborazo", "K2", "Mount Blanc", "Kangchenjunga", "Kebnekaise"]
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
        id: 21, category: "Sports", difficulty: "Easy",
        question: "Who is the all time greatest goalscorer in the NHL?", answer: "Wayne Gretzky", wrong: ["Gordie Howe", "Alex Ovechkin", "Sidney Crosby", "Jaromir Jagr"]
    },

    {
        id: 22, category: "Sports", difficulty: "Easy",
        question: "Which football player has won the Ballon d'or the most times?", answer: "Lionel Messi", wrong: ["Christiano Ronaldo", "Michel PLatini", "Johan Cruyff", "Marco Van Basten", "Ronaldo"]
    },

    {
        id: 23, category: "Sports", difficulty: "Easy",
        question: "How long is a football game usually?", answer: "90 Minutes", wrong: ["60 Minutes", "45 Minutes", "80 Minutes", "75 Minutes", "30 Minutes"]
    },

    {
        id: 24, category: "Sports", difficulty: "Easy",
        question: "In basketball, what is the most amount of points one can score in one throw?", answer: "3 Points", wrong: ["1 Point", "2 Points", "4 Points", "5 Points", "6 Points"]
    },

    {
        id: 25, category: "Sports", difficulty: "Easy",
        question: "What country invented Rugby?", answer: "England", wrong: ["Ireland", "Australia", "France", "Scotland", "Argentina"]
    },

    {
        id: 26, category: "Sports", difficulty: "Medium",
        question: "In Hockey, how many outfield players are there usually on the ice?", answer: "10", wrong: ["5", "12", "8", "6", "9"]
    },

    {
        id: 27, category: "Sports", difficulty: "Medium",
        question: "What is the record for longest cricket game ever?", answer: "9 days", wrong: ["36 hours", "7 days", "11 hours", "2 weeks", "2 days"]
    },

    {
        id: 28, category: "Sports", difficulty: "Medium",
        question: "What color is the third olympic ring?", answer: "red", wrong: ["Black", "Blue", "Yellow", "Green", "Magenta"]
    },

    {
        id: 29, category: "Sports", difficulty: "Medium",
        question: "What country has won the world cup in football 5 times?", answer: "Brazil", wrong: ["France", "Italy", "Argentina", "Spain", "Germany"]
    },

    {
        id: 30, category: "Sports", difficulty: "Medium",
        question: "Who won the Premier League the season of 2015/2016?", answer: "Leicester City", wrong: ["Manchester City", "Liverpool", "Chelsea", "Arsenal", "Tottenham"]
    },

    {
        id: 31, category: "Science", difficulty: "Hard",
    },

    {
        id: 32, category: "Science", difficulty: "Hard",
    },

    {
        id: 33, category: "Science", difficulty: "Hard",
    },

    {
        id: 34, category: "Science", difficulty: "Hard",
    },

    {
        id: 35, category: "Science", difficulty: "Hard",
    },

    {
        id: 36, category: "Geography", difficulty: "Hard",
    },

    {
        id: 37, category: "Geography", difficulty: "Hard",
    },

    {
        id: 38, category: "Geography", difficulty: "Hard",
    },

    {
        id: 39, category: "Geography", difficulty: "Hard",
    },

    {
        id: 40, category: "Geography", difficulty: "Hard",
    },

    {
        id: 41, category: "Sports", difficulty: "Hard",
    },

    {
        id: 42, category: "Sports", difficulty: "Hard",
    },

    {
        id: 43, category: "Sports", difficulty: "Hard",
    },

    {
        id: 44, category: "Sports", difficulty: "Hard",
    },

    {
        id: 45, category: "Sports", difficulty: "Hard",
    },
];