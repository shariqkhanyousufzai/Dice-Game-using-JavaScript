    /*
    GAME RULES:

    - The game has 2 players, playing in rounds
    - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
    - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
    - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
    - The first player to reach 100 points on GLOBAL score wins the game

    */
   var scores, roundScore, activePlayer,gamePlaying;
   init();
   // Math.floor is for not getting decimal point
   dice = Math.floor(Math.random()*6+1);

   // document.querySelector('#current-' + activePlayer).textContent = dice;
   //  document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
   //texContent dosent wrtie html.
   // var x = document.querySelector('#score-0').textContent;

   document.querySelector('.btn-roll').addEventListener('click', function () {
       if(gamePlaying){

           //dice change with random numbers
           var dice = Math.floor(Math.random()*6+1);
           var diceDOm = document.querySelector('.dice');
           diceDOm.style.display = 'block';
           diceDOm.src = 'dice-' + dice + '.png';

           //
           if( dice !==1 ){
               roundScore += dice;
               document.querySelector('#current-' +activePlayer ).textContent = roundScore;
           }else{
               nextPlayer();
           }
       }

       // document.querySelector('.player-0-panel').classList.remove('active');
       // document.querySelector('.player-1-panel').classList.add('active');

       document.querySelector('.btn-hold').addEventListener('click', function() {
           if (gamePlaying) {
               // Add CURRENT score to GLOBAL score
               scores[activePlayer] += roundScore;

               // Update the UI
               document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

               // Check if player won the game
               if (scores[activePlayer] >= 20) {
                   document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                   document.querySelector('.dice').style.display = 'none';
                   document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                   document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                   document.querySelector('.player-current-label-' +activePlayer).style.display = 'none';
                   document.querySelector('.chicken-dinner-' +activePlayer).style.display = 'block';     
                   document.querySelector('.chicken-dinner-' +activePlayer).style.color = 'black'; 
                   gamePlaying = false;
               } else {
                   //Next player
                   nextPlayer();
               }
           }
       });

       function nextPlayer(){
           activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
           roundScore = 0 ;

           document.getElementById('current-0').textContent = 0;
           document.getElementById('current-1').textContent = 0;
           document.querySelector('.player-0-panel').classList.toggle('active');
           document.querySelector('.player-1-panel').classList.toggle('active');
           document.querySelector('.dice').style.display = 'none';
       }


   });
   document.querySelector('.btn-new').addEventListener('click', function(){
       document.querySelector('#current-0').style.padding = "0% 0%";
       document.querySelector('#current-1').style.padding = "0% 0%";
       document.querySelector('.chicken-dinner-0').style.display = 'none';
       document.querySelector('.chicken-dinner-1').style.display = 'none';
       document.querySelector('.player-current-label-0').style.display = 'block';
       document.querySelector('.player-current-label-1').style.display = 'block';

       init();
   });

   function init(){
       scores = [0,0];
       roundScore = 0 ;
       activePlayer = 0;
       gamePlaying = true;
       document.getElementById('score-0').textContent = '0';
       document.getElementById('score-1').textContent = '0';
       document.getElementById('current-0').textContent = '0';
       document.getElementById('current-1').textContent = '0';
       document.querySelector('.dice').style.display = 'none';
       document.getElementById('name-0').textContent = 'Player 1';
       document.getElementById('name-1').textContent = 'Player 2';

   };