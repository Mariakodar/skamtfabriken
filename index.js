console.log('<><><><><><><><><><><><><><><><><><><><><><><><><><><><><>' + '\n' + 'Welcome to the happy world of javascript, "skämtfabriken"' + '\n' + '<><><><><><><><><><><><><><><><><><><><><><><><><><><><><>' + '\n');

const programmingJokes = [
  { joke:0, question: "Why don't programmers like nature?", answer: "It has too many bugs." },
  { joke:1, question: "Why did the CSS developer go to therapy?", answer: "To get rid of his margins." },
  { joke:2, question: "How do you comfort a JavaScript developer?", answer: "You console them." },
  { joke:3, question: "Why did the CSS developer leave the restaurant?", answer: "Because it had no class." },
  { joke:4, question: "Why did the JavaScript developer go missing?", answer: "Because he didn't know when to return." },
  { joke:5, question: "Why did the HTML tag go to the party?", answer: "Because it wanted to break the line." },
  { joke:6, question: "Why do JavaScript developers wear glasses?", answer: "Because they don't C#." },
  { joke:7, question: "Why don't programmers like to use inline styles?", answer: "Because they want to be classy." },
  { joke:8, question: "Why did the CSS selector break up with the HTML element?", answer: "It found someone more specific." },
  { joke:9, question: "Why did the CSS developer apply for a job?", answer: "They wanted to get a position." },
];

function slumpa(from, to) {
  return Math.floor(Math.random() * (to + 1 - from)) + from;
}

let randomIndexA = slumpa(0, programmingJokes.length - 1);
console.log(programmingJokes[randomIndexA]);

console.log('\n' + 'LOL :-D ' + '\n')

let randomIndexB = slumpa(0, programmingJokes.length - 1);
while (randomIndexB===randomIndexA){
  randomIndexB=slumpa(0, programmingJokes.length - 1);
}
console.log(programmingJokes[randomIndexB]);

console.log('\n' + '<><><><><><><><><><><><><><><><><><><><><><><><><><><><><>' + '\n' + '                  Wish you a happy day' + '\n' + '<><><><><><><><><><><><><><><><><><><><><><><><><><><><><>' + '\n');

import readline from 'node:readline/promises'

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let continueAsking = true;

while (continueAsking) {
      const answer = await rl.question('Do you want another joke? (Y/N)');
        
      if (answer === 'N') {
        console.log('Welcome back!');
        continueAsking = false;
        } else {
          console.log('here we go, time to laugh');
          let randomIndexC = slumpa(0, programmingJokes.length - 1);
          console.log(programmingJokes[randomIndexC]);
          }
}
rl.close()

