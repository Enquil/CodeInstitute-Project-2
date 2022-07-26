let buttons = document.getElementsByTagName("button");
let arr = [];

for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "culture" || "history" || "science" || "sports");
            category = this.getAttribute("data-type");
            chooseCat(category);
    });
}

function chooseCat(category) {

    if (category === "culture") {
        let questions = questionList.filter(obj => {
            return obj.categories === (culture);
          });
          questions.sort(() => Math.random() - 0.5); 
          for (let i = 0; i < 3; i++){
            arr.push(questions[0]);
            questions.shift();
            console.log(arr);
        }

    } else if (category === "history") {
        let questions = questionList.filter(obj => {
            return obj.categories === history;
          });
          questions.sort(() => Math.random() - 0.5); 
          for (let i = 0; i < 3; i++){
            arr.push(questions[0]);
            questions.shift();
            console.log(arr);
        }

    } else if (category === "science") {
        let questions = questionList.filter(obj => {
            return obj.categories === science;
          });
          questions.sort(() => Math.random() - 0.5); 
          for (let i = 0; i < 3; i++){
            arr.push(questions[0]);
            questions.shift();
            console.log(arr);
        }        

    } else if (category === "sports") {
        let questions = questionList.filter(obj => {
            return obj.categories === sports;
          });
          questions.sort(() => Math.random() - 0.5); 
          for (let i = 0; i < 5; i++){
            arr.push(questions[0]);
            questions.shift();
            console.log(arr);
        }

    } else
    alert(`Unknown game type: ${category}`);

    runGame();
}

function runGame() {
    document.getElementById("categories").classList.add("none");
    document.getElementById("game").classList.remove("none");
    document.getElementById("back").classList.add("none");
    let answers = document.getElementsByClassName("answer");
    let question = document.getElementById("question");

    for (let i = 0; i < 4; i++) {
        let x = arr[0].wrong_answer;
        x.sort(() => Math.random() - 0.5);
        question.innerHTML = arr[0].question;
        answers[0].innerHTML = x[0];
        answers[1].innerHTML = x[1];
        answers[2].innerHTML = x[2];
        answers[3].innerHTML = x[3];
    }
    }



    const questionList = [

{id: 1, question: "What is the highest selling music album of all time?", answer: "Michael Jackson - Thriller", wrong_answer: ["Led Zeppelin - Led Zeppelin IV", "Eagles - Hotel California", "AC/DC - Back in Black", "Will Ferrell"],
    categories: culture,
},

{id: 2, question: "Hakarl, or fermented shark, is a delicacy found in which country?", answer: "Iceland", wrong_answer: ["Norway", "China", "Trinidad & Tobago", "Will Ferrell"],
    categories: culture,
},

{id: 3, question: "Which of these are NOT a play written by Shakespeare", answer: "Edward II", wrong_answer: ["Richard III", "The Merchant of Venice", "Romeo and Juliet", "Will Ferrell"],
    categories: culture,
},

{id: 4, question: "How long did the Hundred Years' War actually last?", answer: "23 years", wrong_answer: ["37 years", "35 years", "51 years", "Will Ferrell"],
    categories: history,
},
    
{id: 5, question: "When did U.S prohibition on alcohol end?", answer: "1933", wrong_answer: ["1934", "1937", "1939", "1929"],
    categories: history,
},

{id: 6, question: "What year did ", answer: "Peregrine Falcon", wrong_answer: ["Cheetah", "Mexican free-tailed bat", "Black Marlin", "Will Ferrell"],
    categories: history,
},

{id: 7, question: "What is the fastest animal on earth?", answer: "Peregrine Falcon", wrong_answer: ["Cheetah", "Mexican free-tailed bat", "Black Marlin", "Will Ferrell"],
    categories: science,
},

{id: 8, question: "What weighs the most?", answer: "An average chicken on the surface of the Sun", wrong_answer: ["A small child on earth", "Will Ferrell on the moon", "2 average chickens on earth", "Will Ferrell"],
    categories: science,
},

{id: 9, question: "Who was it, that first discovered that the earth is spherical?", answer: "Some greek", wrong_answer: ["Some other greek", "Some inventor", "Someone else", "Will Ferrell"],
    categories: science,
},

{id: 10, question: "Who has won ballon d'or the most times?", answer: "Lionel Messi", wrong_answer: ["Christiano Ronaldo", "Michel Platini", "Luka Modric", "Will Ferrell"],
    categories: sports,
},

{id: 11, question: "Worldwide, how many viewers tuned in for the 1996 Atlanta opening ceremony?", answer: "3.4 Billion", wrong_answer: ["3.2 Billion", "2.3 Billion", "4.1 Billion", "Will Ferrell"],
    categories: sports,
},

{id: 12, question: "In the NHL, who is the all-time, highest goal scorer?", answer: "Wayne Gretzky", wrong_answer: ["Ovi", "Gordie Howe", "Jaromir Jagr", "Marc-Andre Fleury", "Will Ferrell"],
    categories: sports,
},

{id: 13, question: "Who is the leftmost president depicted on Mt. Rushmore?", answer: "Abraham Lincoln", wrong_answer: ["George Washington", "Theodore Roesevelt", "Thomas Jefferson", "Will Ferrell"],
    categories: history,
},

{id: 14, question: "How much does a teaspoon full of neutron star weigh?", answer: "About 6 billion tons", wrong_answer: ["About 8 billion tons", "About 4.3 billion tons", "About 70 grams", "About a teaspoon of Will Ferrell"],
    categories: science,
},

{id: 15, question: "Where did coffee originate from?", answer: "Ethiopia", wrong_answer: ["Tanzania", "Jordan", "Saudi Arabia", "Will Ferrell"],
    categories: culture,
},
];



