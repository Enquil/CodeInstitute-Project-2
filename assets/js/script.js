let buttons = document.getElementsByTagName("button");

for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "culture" || "history" || "science" || "sports");
            category = this.getAttribute("data-type");
            newGame(category);
    });
}

function categorySelect(category) {
    
    if (category === "culture") {
        newGame(culture);
    } else if (category === "history") {
        newGame(history);
    } else if (category === "science") {
        newGame(science);
    } else if (category === "sports") {
        newGame(sports);
    } else
    alert(`Unknown game type: ${category}`);
}


const questions = [
    {id: 1, categories: ["culture", "history"], answer: "Foo Fighters", wrong: ["Nirvana", "Thirty Seconds to Mars", "Metallica", "Meow"], question: "Dave Grohl founded what band?", difficulty: 1},

    {id: 2, categories: ["sports", "history"], answer: "Lionel Messi", wrong: ["Christiano Ronaldo", "Luka Modric", "Michel Platini", "Tyson Fury"], question: "Who has won the most ballon d'or", difficulty: 1},

    {id: 3, categories: ["history", "science"], answer: "1998", wrong: ["1989", "1994", "2012", "2001"], question: "When was the ISS launched?", difficulty: 2},

    {id: 4, categories: ["science", "history"], answer: "Eratosthenes of Cyrene", wrong: ["Galileo Galilei", "Ferdinand Magellan", "Pythagoras of Samos", "Lex Fridman"], question: "Who first proved that the earth is a sphere", difficulty: 3},

    {id: 5, categories: ["culture", "sports"], answer: "1996 Atlanta Olympics opening Ceremony", wrong: ["2008 Beijing Olympis opening Ceremony", "Funeral of Lady Diana", "Sept. 11 terror attacks", "hello"], question: "What is the most watched (live) televised event ever?", difficulty: 2},
];

function newGame(category) {

}


