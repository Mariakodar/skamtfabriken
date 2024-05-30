Veckoprojekt - Skämtmaskinen

// välkomstmedelande

console.log('<><><><><><><><><><><><><><><><><><><><><><><><><><><><><>' + '\n' + 'Welcome to the happy world of javascript, "skämtfabriken"' + '\n' + '<><><><><><><><><><><><><><><><><><><><><><><><><><><><><>' + '\n');

// lista med skämt

const programmingJokes = [
  "Why don't programmers like nature? It has too many bugs.",
  "Why did the CSS developer go to therapy? To get rid of his margins.",
  "How do you comfort a JavaScript developer? You console them.",
  "Why did the CSS developer leave the restaurant? Because it had no class.",
  "Why did the JavaScript developer go missing? Because he didn't know when to return.",
  "Why did the HTML tag go to the party? Because it wanted to break the line.",
  "Why do JavaScript developers wear glasses? Because they don't C#.",
  "Why don't programmers like to use inline styles? Because they want to be classy.",
  "Why did the CSS selector break up with the HTML element? It found someone more specific.",
  "Why did the CSS developer apply for a job? They wanted to get a position.",
];

// slumpfunktionen

function slumpa(from, to) {
  return Math.floor(Math.random() * (to + 1 - from)) + from;
}

// dra första skämtet, randomIndexA

let randomIndexA = slumpa(0, programmingJokes.length - 1);
console.log(programmingJokes[randomIndexA]);

// separera skämten

console.log('\n' + 'LOL :-D ' + '\n')

// dra andra skämtet, randomIndexB + jämför med första o ev. dra nytt

let randomIndexB = slumpa(0, programmingJokes.length - 1);
while (randomIndexB===randomIndexA){
  randomIndexB=slumpa(0, programmingJokes.length - 1);
}
console.log(programmingJokes[randomIndexB]);

// avslut

console.log('\n' + '<><><><><><><><><><><><><><><><><><><><><><><><><><><><><>' + '\n' + '                  Wish you a happy day' + '\n' + '<><><><><><><><><><><><><><><><><><><><><><><><><><><><><>' + '\n');

// fil för att kunna ta emot svar

import readline from 'node:readline/promises'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//ställningstagande variabel Boolean

let continueAsking = true;

// whileloop fortsätt så länge true

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

//stänger svarsfunktion

rl.close()

