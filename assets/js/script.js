let buttons = document.getElementsByTagName("button");
let arr = [];   // array for questions
let y = [];     // used with z to place correct answer randomly
let x = [];     // wrong answer array for randomizing answers
let z = "";     // is correct answer
let rightArr = [];  //pushes here if correct

    //button event listeners and category choice
for (let button of buttons) {
    button.addEventListener("click", function() {
            category = this.getAttribute("id");
            chooseCat(category);
    });
}
 

    // Category choice and make an array for the game, turn into one block, cat is passed on
function chooseCat(category) {

    let questions = questionList.filter(obj => {
        return obj.categories === category;
      });
      questions.sort(() => Math.random() - 0.5); 
      for (let i = 0; i < 5; i++){
        arr.push(questions[0]);
        questions.shift();
    }

    setTable();
    runGame();
}

    // removes category div and back button, adds game "table", puts answers into an array
function setTable() {
    document.getElementById("categories").classList.add("none");
    document.getElementById("game").classList.remove("none");
    document.getElementById("back").classList.add("none");
    y.push(document.getElementById("answer1"));
    y.push(document.getElementById("answer2"));
    y.push(document.getElementById("answer3"));
    y.push(document.getElementById("answer4"));

    //having hard time of calling of these all at once
    document.getElementById("answer1").addEventListener("click", checkAnswer);
    document.getElementById("answer2").addEventListener("click", checkAnswer);
    document.getElementById("answer3").addEventListener("click", checkAnswer);
    document.getElementById("answer4").addEventListener("click", checkAnswer);
}


    // Game 
function runGame() {
if (arr.length === 0) {
    endGame();
} else {
    document.getElementById("question-text").innerText = arr[0].question;
    let x = arr[0].wrong_answer;
    let z = arr[0].answer;
    shuffleStuff();
    
    //puts wrong answers in divs
    for (let i = 0; i < 4; i++) {
        y[i].innerText = x[i];
    }
    // sets right answer in w/e div is first in the array
    y[Math.floor(Math.random() * 4)].innerText = z;
}}


    /* erase, make "complicated" function.
    destroy shuffleStuff
    */
function shuffleStuff() {
    x.sort(() => Math.random() - 0.5);
}

function checkAnswer () {
    let userAnswer = this.innerText;
    if (userAnswer === arr[0].answer) {
        incrementScore();
        console.log(rightArr);
        arr.shift();
    } else {
    arr.shift();
}

runGame();
}

function incrementScore() {
    rightArr.push(arr[0]);
}

function endGame () {
    document.getElementById("game").classList.add("none");
    document.getElementById("back").classList.remove("none");
    document.getElementById("blue-window").innerHTML = `<h2>you got ${rightArr.length}/5 correct</h2>`;
}
    const questionList = [

{id: 1, question: "What is the highest selling music album of all time?", answer: "Thriller", wrong_answer: ["Led Zeppelin IV", "Hotel California", "Back in Black", "21"],
    categories: "culture"
},

{id: 2, question: "Hakarl, or fermented shark, is a delicacy found in which country?", answer: "Iceland", wrong_answer: ["Norway", "China", "Trinidad & Tobago", "Greenland"],
    categories: "culture"
},

{id: 3, question: "Which of these are NOT a play written by Shakespeare", answer: "Edward II", wrong_answer: ["Richard III", "The Tempest", "Romeo and Juliet", "Henry V"],
    categories: "culture"
},

{id: 4, question: "How long did the Hundred Years' War actually last?", answer: "23 years", wrong_answer: ["37 years", "35 years", "51 years", "13 years"],
    categories: "history"
},
    
{id: 5, question: "When did U.S prohibition on alcohol end?", answer: "1933", wrong_answer: ["1934", "1937", "1939", "1929"],
    categories: "history"
},

{id: 6, question: "What is the name of the site, on which Napoleon was defeated once and for all?", answer: "Waterloo", wrong_answer: ["Trafalgar", "Ligny", "Borodino", "Leipzig"],
    categories: "history"
},

{id: 7, question: "What is the fastest animal on earth?", answer: "Peregrine Falcon", wrong_answer: ["Cheetah", "Mexican free-tailed bat", "Black Marlin", "Will Ferrell"],
    categories: "science"
},

{id: 8, question: "What weighs the most?", answer: "A chicken on the surface of the Sun", wrong_answer: ["A small child on earth", "Will Ferrell on the moon", "2 average chickens on earth", "A cat on Mars"],
    categories: "science"
},

{id: 9, question: "Who was it, that first discovered that the earth is spherical?", answer: "Eratosthenes of Cyrene", wrong_answer: ["Pythagoras of Samos", "Galileo Galilei", "Isaac Newton", "Will Ferrell"],
    categories: "science"
},

{id: 10, question: "Who has won ballon d'or the most times?", answer: "Lionel Messi", wrong_answer: ["Christiano Ronaldo", "Michel Platini", "Luka Modric", "Will Ferrell"],
    categories: "sports"
},

{id: 11, question: "Worldwide, how many viewers tuned in for the 1996 Atlanta opening ceremony?", answer: "3.4 Billion", wrong_answer: ["3.2 Billion", "2.3 Billion", "4.1 Billion", "Will Ferrell"],
    categories: "sports"
},

{id: 12, question: "In the NHL, who is the all-time, highest goal scorer?", answer: "Wayne Gretzky", wrong_answer: ["Ovi", "Gordie Howe", "Jaromir Jagr", "Marc-Andre Fleury", "Will Ferrell"],
    categories: "sports"
},

{id: 13, question: "Who is the rightmost president depicted on Mt. Rushmore?", answer: "Abraham Lincoln", wrong_answer: ["George Washington", "Theodore Roesevelt", "Thomas Jefferson", "Will Ferrell"],
    categories: "history"
},

{id: 14, question: "How much does a teaspoon full of neutron star weigh?", answer: "About 6 billion tons", wrong_answer: ["About 8 billion tons", "About 4.3 billion tons", "About 70 grams", "About a teaspoon of Will Ferrell"],
    categories: "science"
},

{id: 15, question: "Where did coffee originate?", answer: "Ethiopia", wrong_answer: ["Tanzania", "Jordan", "Saudi Arabia", "Will Ferrell"],
    categories: "culture"
},

{id: 16, question: "What is the most visited country in the world?", answer: "France", wrong_answer: ["Spain", "United States", "China", "Turkey"],
    categories: "culture"
},

{id: 17, question: "What is the most visited city in the world?", answer: "Bangkok", wrong_answer: ["Paris", "London", "Dubai", "Singapore"],
    categories: "culture"
},

{id: 18, question: "Of all the natural sciences, which one is the oldest?", answer: "Astronomy", wrong_answer: ["Biology", "Chemistry", "Physics", "Oceanography"],
    categories: "science"
},
];



