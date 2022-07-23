let buttons = document.getElementsByTagName("button");

for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "culture" || "history" || "science" || "sports");
        category = this.getAttribute("data-type");
            newGame(category);
    });
}

function newGame(category) {
    
    if (category === "culture") {
        cultureGame();
    } else if (category === "history") {
        alert("voof");
    } else if (category === "science") {
        alert("cluck");
    } else if (category === "sports") {
        alert("yuck");
    } else
    alert(`Unknown game type: ${category}`);
}


const questions = [
    {id: 1, categories: [culture, history], answer: "Foo Fighters", wrong: ["nirvana", "thirty seconds to mars", "metallica", "meow"], 
        question: "Dave Grohl founded what band?", difficulty: 1},

    {id: 2, categories: [sports, history], answer: "Lionel Messi", wrong: ["christiano ronaldo", "luka modric", "michel platini", "tyson fury"],
        question: "Who has won the most ballon d'or", difficulty: 1},

    {id: 3, categories: [history, science], answer: "1998", wrong: ["1989", "1994", "2012", "2001"], 
        question: "When was the ISS launched?", difficulty: 2},

    {id: 4, categories: [science, history], answer: "Eratosthenes of Cyrene", wrong: ["", "", "", ""],
        question: "Who first proved, that "},
];


