class DataSet {
  constructor(...data) {
    // Define your constructor here
  this.data = data
  this.mean = this.data.reduce((acc,x)=> acc + x, 0)/this.data.length
  this.variance = this.data.reduce((acc,x) => Math.pow((this.mean - x), 2) + acc,0)/this.data.length
  this.stdDeviation = Math.sqrt(this.variance)
  }
  // Define the rest of your class here
  setMean(){
    this.mean = this.data.reduce((acc,x)=> acc + x, 0)/this.data.length
    return this.mean
  }
  setVar(){
    this.variance = this.data.reduce((acc,x) => Math.pow((this.mean - x), 2) + acc,0)/this.data.length
    this.stdDeviation = Math.sqrt(this.variance)
    return this.variance
  }
}