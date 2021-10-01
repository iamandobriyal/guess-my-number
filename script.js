'use strict';
/*
 console.log(document.querySelector('.message').textContent);
 document.querySelector('.message').textContent = '🎉 Correct Number';
 document.querySelector('.number').textContent = '13';
 document.querySelector('.score').textContent = '10';
 document.querySelector('.guess').value;
 */
let number = Math.trunc(Math.random()*20)+1;
let score = 20;


document.querySelector('.check').addEventListener('click',function(){
    const guess=document.querySelector('.guess').value;
    if(!guess)
    {
        document.querySelector('.message').textContent = 'Please enter a number'; 
    } 
    else if (guess == number)
    {
        document.querySelector('body').style.background ="#60b347";
        document.querySelector('.message').textContent = '🎉Correct Number';
        document.querySelector('.number').textContent = number;
        document.querySelector('.number').style.width= "300px";
        document.querySelector('.highscore').textContent = score;
    } 
    else if (guess>number)
    {
        if(score>1)
        {
        document.querySelector('.message').textContent = 'Too High!';
        score--;
        document.querySelector('.score').textContent= score;
        }
        else
        {
            document.querySelector('.score').textContent= 0;
            document.querySelector('.message').textContent = 'You lost the game'; 
            document.querySelector('body').style.background ="red";
        }
    }
    else if (guess<number)
    {
        
        if(score>1)
        {
        document.querySelector('.message').textContent = 'Too Low!';
        score--;
        document.querySelector('.score').textContent= score;
        }
        else
        {
            document.querySelector('.score').textContent= 0;
            document.querySelector('body').style.background ="red";
            document.querySelector('.message').textContent = 'You lost the game'; 
        }
    }
    
});

document.querySelector('.btn').addEventListener('click',function(){
    score = 20;
    number = Math.trunc(Math.random()*20)+1;
    document.querySelector('body').style.background ="#222";
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.number').style.width= "15rem";
        document.querySelector('.score').textContent = '0';
        document.querySelector('.guess').value = '';
})