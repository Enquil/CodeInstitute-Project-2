let buttons = document.getElementsByTagName("button");

for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "culture" || "history" || "science" || "sports");
            category = this.getAttribute("data-type");
            newGame(category);
    });
}

function newGame(category) {
    x = 0;
    if (category === "culture") {
        const results = questionList.filter(obj => {
            return obj.categories === culture;
          });
          console.log(results);
    } else if (category === "history") {
        const results = questionList.filter(obj => {
            return obj.categories === history;
          });
          console.log(results);
    } else if (category === "science") {
        const results = questionList.filter(obj => {
            return obj.categories === science;
          });
          console.log(results);
    } else if (category === "sports") {
        const results = questionList.filter(obj => {
            return obj.categories === sports;
          });
          console.log(results);
    } else
    alert(`Unknown game type: ${category}`);
}


const questionList = [

    {id: 1, question: "Who has won ballon d'or the most times?", answer: "Lionel Messi", wrong_answer: ["Christiano Ronaldo", "Michel Platini", "Luka Modric", "Will Ferrell"],
    categories: sports,
},

    {id: 2, question: "Worldwide, how many viewers tuned in for the 1996 Atlanta opening ceremony?", answer: "3.4 Billion", wrong_answer: ["3.2 Billion", "2.3 Billion", "4.1 Billion", "Will Ferrell"],
    categories: sports
},

    {id: 2, question: "In the NHL, who is the all-time ?", answer: "Wayne Gretzky", wrong_answer: ["Ovi", "Gordie Howe", "Jaromir Jagr", "Fleury"],
    category: sports
},
];

