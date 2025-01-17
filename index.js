
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum} `);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Enter a valid number.");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Enter a valid number.");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Too Low!");
        }
        else if(guess > answer){
            window.alert("Too High!");
        }
        else{
            window.alert(`You win! The answer was: ${answer}!`);
            running = false;
        }
    }

    
}