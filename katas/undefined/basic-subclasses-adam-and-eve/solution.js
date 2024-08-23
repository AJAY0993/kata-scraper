class Human {
  constructor(name){
    this.name = name
  }
}

class Man extends Human {
  constructor(name){
    super(name)
    this.gender = "male"
  }
}

class Woman extends Human{
  constructor(name){
    super(name)
    this.gender = "female"
  }
}

class God{
/**
 * @returns Human[]
 */
  static create(){
    // code
    return [new Man("adam"), new Woman("eve")]
  }
}
// code