let buttons = document.getElementsByTagName("button");

for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "culture" || "history" || "science" || "sports");
            category = this.getAttribute("data-type");
            chooseCat(category);
    });
}

function chooseCat(category) {
    let arr = [];
    if (category === "culture") {
        let questions = questionList.filter(obj => {
            return obj.categories === culture;
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
            return obj.categories === science;
          });
          questions.sort(() => Math.random() - 0.5); 
          for (let i = 0; i < 3; i++){
            arr.push(questions[0]);
            questions.shift();
            console.log(arr);
        }
        
    } else
    alert(`Unknown game type: ${category}`);
}

function sortQuestions(){
    questions.sort(() => Math.random() - 0.5);
}


function newGame(culture) {
    questions.slice();
}


const questionList = [

    {id: 1, question: "What is the highest selling music album of all time?", answer: "Michael Jackson - Thriller", wrong_answer: ["Led Zeppelin - Led Zeppelin IV", "Eagles - Hotel California", "AC/DC - Back in Black", "Will Ferrell"],
    categories: culture,
},

    {id: 2, question: "Hakarl, or fermented shark, is a delicacy of what country?", answer: "Iceland", wrong_answer: ["Norway", "China", "Trinidad & Tobago", "Will Ferrell"],
    categories: culture,
},

    {id: 3, question: "How long did the Hundred Years' War actually last?", answer: "23 years", wrong_answer: ["37 years", "35 years", "51 years", "Will Ferrell"],
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

    {id: 12, question: "In the NHL, who is the all-time, highest goal scorer?", answer: "Wayne Gretzky", wrong_answer: ["Ovi", "Gordie Howe", "Jaromir Jagr", "Fleury"],
    categories: sports,

},
];

