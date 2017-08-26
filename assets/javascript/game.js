(function () {
    "use strict";
    var allLetters, wordBank, guessInput, guess, guessButton, lettersGuessed, lettersMatched, output, man, letters, lives, currentWord, numLettersMatched, messages;

    function setup() {
        allLetters = "abcdefghijklmnopqrstuvwxyz";
        lives = 10;
        wordBank = ["grasshopper", "armadillo", "orangutan", "dragon"];
        messages = {
            win: 'You win!',
            lose: 'Game over!',
            guessed: 'already guessed',
        };
        
        lettersGuessed = lettersMatched = '';
        numLettersMatched = 0;
    
        currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  
        output = document.getElementById("output");
        man = document.getElementById("man");
        guessInput = document.getElementById("letter");

        man.innerHTML = 'You have ' + lives + ' lives remaining';
        output.innerHTML = '';

        document.getElementById("letter").value = '';
        guessButton = document.getElementById("guess");
        guessInput.style.display = 'inline';
        guessButton.style.display = 'inline';

        
        letters = document.getElementById("letters");
        letters.innerHTML = '<li class="current-word">Current word:</li>';

        var letter, i;
        for (i = 0; i < currentWord.length; i++) {
            letter = '<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
            letters.insertAdjacentHTML('beforeend', letter);
        }
    }

    function gameOver(win) {
        if (win) {
            output.innerHTML = messages.win;
            output.classList.add('win');
        } else {
            output.innerHTML = messages.lose;
            output.classList.add('error');
        }

        guessInput.style.display = guessButton.style.display = 'none';
        guessInput.value = '';
    }

    window.onload = setup();
    document.getElementById("restart").onclick = setup;
    guessInput.onclick = function () {
        this.value = '';
    };

    var allLetters = 'abcdefghijklmnopqrstuvwxyz';
    var outputElement = document.getElementById('guessed-letters');
    var lettersGuessed = []; 

    document.addEventListener('keyup', function (event) {
      var key = event.key.toLowerCase();
      if (allLetters.indexOf(key) !== -1) {
        if (lettersGuessed.indexOf(key) === -1) { 
         lettersGuessed.push(key);
          var string = lettersGuessed.join(''); 
          outputElement.textContent = string;
        }
      }
    });
    
    document.getElementById('hangman').onsubmit = function (e) {
        if (e.preventDefault) e.preventDefault();
        output.innerHTML = '';
        output.classList.remove('error', 'warning');
        guess = guessInput.value;

        
        if (guess) {
            
            if (allLetters.indexOf(guess) > -1) {
                
                if ((lettersMatched && lettersMatched.indexOf(guess) > -1) || (lettersGuessed && lettersGuessed.indexOf(guess) > -1)) {
                    output.innerHTML = '"' + guess.toUpperCase() + '"' + messages.guessed;
                    output.classList.add("warning");
                }
                
                else if (currentWord.indexOf(guess) > -1) {
                    var lettersToShow;
                    lettersToShow = document.querySelectorAll(".letter" + guess.toUpperCase());

                    for (var i = 0; i < lettersToShow.length; i++) {
                        lettersToShow[i].classList.add("correct");
                    }

                    
                    for (var j = 0; j < currentWord.length; j++) {
                        if (currentWord.charAt(j) === guess) {
                            numLettersMatched += 1;
                        }
                    }

                    lettersMatched += guess;
                    if (numLettersMatched === currentWord.length) {
                        gameOver(true);
                    }
                }
                
                    lettersGuessed += guess;
                    lives--;
                    man.innerHTML = 'You have ' + lives + ' lives remaining';
                    if (lives === 0) gameOver();
                }
            }
            
            else {
                output.classList.add('error');
                output.innerHTML = messages.validLetter;
            }
        }
        

}());




