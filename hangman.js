const Hangman = function (word, remainingGuesses, guessedLetters = []) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = guessedLetters
}

Hangman.prototype.getPuzzle = function() {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

const game1 = new Hangman('city', 2, ['c'])
const game2 = new Hangman('javascript cool', 4, ['a', 'c', 'o'])

console.log(game1.getPuzzle());
console.log(game2.getPuzzle());