'use strict';
let number = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore= 0;

let displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.submit').addEventListener('click',function()
{
    document.querySelector('.pop-up').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
})
document.querySelector('.check').addEventListener('click',function(){
    const guess=document.querySelector('.guess').value;
    document.querySelector('.guess').value = '';
    if(!guess)
    {
        displayMessage('Please Enter a number');
    } 
    else if (guess == number)
    {
        if(score>highScore){
            highScore=score;
        }
        document.querySelector('body').style.background ="#60b347";
        displayMessage('🎉Correct Number');
        document.querySelector('.number').textContent = number;
        document.querySelector('.number').style.width = "300px";
        document.querySelector('.highscore').textContent = score;
    } 
    else if(guess != number){
        if(score>1)
        {
        if(number == guess - 1 || number == guess + 1)
        {
            displayMessage('Pretty Close');
            score--;
        }
        else if(number == guess - 2)
        {
            score--;
            displayMessage('A little bit lower');
        }
        else if(number == guess + 2)
        {
            displayMessage('A little bit higher');
            score--;
        }
        else{
            displayMessage(guess > number ?  guess +' is Too High!' : guess + ' is Too Low!');
            score--;
            document.querySelector('.score').textContent= score;
        }
        }
        else
        {
            document.querySelector('.score').textContent= 0;
            displayMessage('You lost the game'); 
            document.querySelector('body').style.background ="red";
        }
    }
    
});

document.querySelector('.btn').addEventListener('click',function(){
    score = 20;
    number = Math.trunc(Math.random()*20)+1;
    document.querySelector('body').style.background ="#222";
        displayMessage('Start guessing...');
        document.querySelector('.number').textContent = '?';
        document.querySelector('.number').style.width= "15rem";
        document.querySelector('.score').textContent = '0';
        document.querySelector('.guess').value = '';
        document.querySelector('.number').style.width= "200px";
})