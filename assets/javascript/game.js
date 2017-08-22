var gameStarted = false;
document.onkeyup = function(event) {
    console.log(gameStarted);
    if (gameStarted === false) {
        gameStarted = true; 
        numberofGuesses = ""
        lettersalreadyGuessed = []
        lettersRevealed = ""
        word = "grasshopper"
    }
    else {
            lettersalreadyGuessed.push(event.key);
            console.log(lettersalreadyGuessed);
    
    var lettersalreadyGuessed = arr.values()


    }
}

lettersGuessed = lettersMatched

function guessLetter( letter, shown, answer ) {
    var checkIndex = 0;
    
    checkIndex = answer.indexOf(letter);
    while ( checkIndex >= 0 ) {
        shown = alterAt( checkIndex, letter, shown );
        checkIndex = answer.indexOf(letter, checkIndex + 1);
    }
    return shown;
}







/*function setup() {
        availableLetters = "abcdefghijklmnopqrstuvwxyz";
        lives = 5;
        words = ["grasshopper", "panda", "eagle", "reindeer", "octupus", "armadillo", "koala"];
        messages = {
            win: 'You win!',
            lose: 'Game over!',
            guessed: ' already guessed, please try again...',
            validLetter: 'Please enter a letter from A-Z'
        };*/
     