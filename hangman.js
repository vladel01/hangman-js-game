const Hangman = function (word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
}

const game1 = new Hangman('city', 2)
const game2 = new Hangman('javascript', 4)

console.log(game1);
console.log(game2);