class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    const isCorrect = n === this.number
    if(this.lives < 1){
    throw new Error("already dead")
    }
    else if(isCorrect) return true;
    else if(!isCorrect){
      this.lives = this.lives - 1
      return false
    }
  }
}