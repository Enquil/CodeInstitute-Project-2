let questions = questionList.filter(obj => {
    return obj.categories = culture;
  });
  questions.sort(() => Math.random() - 0.5); 
  for (let i = 0; i < 5; i++){
    arr.push(questions[0]);
    questions.shift();
}