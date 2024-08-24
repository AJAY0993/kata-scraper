class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
    this.isWorthIt = ()=> this.draft - this.crew*1.5 > 20
  }
  
  //YOUR CODE HERE...
  
}