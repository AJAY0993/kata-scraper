class Person {
  // Get coding in ES6 :D
  constructor(firstName,lastName,age,gender){
  this.firstName = firstName || 'John';
   this.lastName = lastName || 'Doe';   
    this.age = age||0;
     this.gender = gender || 'Male'
  }
  sayFullName =  _ => this.firstName + ' ' + this.lastName;
  static greetExtraTerrestrials = raceName =>"Welcome to Planet Earth " + raceName
}