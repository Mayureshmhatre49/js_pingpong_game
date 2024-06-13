'use strict';

// Element selection
const $score0  = document.querySelector('#score--0');
const $score1  = document.querySelector('#score--1');
const $player0  = document.querySelector('.player--0');
const $player1  = document.querySelector('.player--1');
const $currentscore0  = document.querySelector('#current--0');
const $currentscore1   = document.querySelector('#current--1');
const $dice = document.querySelector('.dice');
const $rollBtn = document.querySelector('.btn--roll');
const $newBtn = document.querySelector('.btn--new');
const $holdBtn = document.querySelector('.btn--hold');




//Starting conditions
$score0.textContent = 0;
$score1.textContent = 0;
$dice.classList.add('hidden');


    
//Function Addition of generated random number score and return it
let currentscore = 0;
const adddiceNumber = function(diceCount){
    currentscore += diceCount ;
    return currentscore;
}

let player0Score =0;
const player0TotalScore = function(player0currentScore){
    player0Score += player0currentScore ;
    return player0Score;
}

let player1Score =0;
const player1TotalScore = function(player1currentScore){
    player1Score += player1currentScore ;
    return player1Score;
}

// const checkPlayer = function(){
//     if($player0.classList.contains('player--active')){
//         return $currentscore0;
//     } else if($player1.classList.contains('player--active')){
//         return $currentscore1;
//     } else{
//         console.log('Hello');
//     }
// }


const checkPlayer = function(){
    if($player0.classList.contains('player--active')){
        return 0;
    } else if($player1.classList.contains('player--active')){
        return 1;
    } else{
        console.log('Hello');
    }
}


  let diceNumber = function() {
    return Math.trunc(Math.random() * 6) + 1;
  }
   
    
  const currentPlaerScore = function(currentDiceNumbers){
      if (checkPlayer() === 1){ //when it's 1 then it's true so $currentscore1
          return $currentscore1.textContent = adddiceNumber(currentDiceNumbers);
      } else{
          return $currentscore0.textContent = adddiceNumber(currentDiceNumbers);
      }
  }



const rolldice = $rollBtn.addEventListener ('click', function(){

    let currentDiceNumber = diceNumber();


    if(currentDiceNumber != 1){    
    $dice.src = `dice-${currentDiceNumber}.png`;
    $dice.classList.remove('hidden');
    currentPlaerScore(currentDiceNumber);
    

    }else{ 
    $dice.src = `dice-${currentDiceNumber}.png`;
    currentscore = 0;
    $currentscore1.textContent = 0;
    $currentscore0.textContent = 0;
    $player0.classList.toggle('player--active');
    $player1.classList.toggle('player--active');


    }

});


const holdScore = $holdBtn.addEventListener('click', function(){


   if (checkPlayer()){ //when it's 1 then it's true so $score1
      let getplayer1score = player1TotalScore(currentscore);
            if (getplayer1score > 100){
                $score1.textContent = getplayer1score;
                $player1.style.background = '#7FFF94';
            }else{
            $score1.textContent = getplayer1score;
            }
        } else{
             let getplayer0score = player0TotalScore(currentscore);

             if (getplayer0score > 100){
                $score0.textContent = getplayer0score;
                $player0.style.background = '#7FFF94';
            }else{
            $score0.textContent = getplayer0score;
            }
            
        }

    currentscore = 0;
    $currentscore1.textContent = 0;
    $currentscore0.textContent = 0;
    $player0.classList.toggle('player--active');
    $player1.classList.toggle('player--active');

});

const newGameStart = $newBtn.addEventListener('click', function(){

    currentscore = 0;
    player0Score = 0;
    player1Score = 0;
    $currentscore1.textContent = 0;
    $currentscore0.textContent = 0;
    $score0.textContent = 0;
    $score1.textContent = 0;
    $player0.classList.add('player--active');
    $player1.classList.remove('player--active');
    $dice.classList.add('hidden');
    


});





