function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  let filteredArray = birds.filter (x => !geese.includes(x))
  return filteredArray
  // return an array containing all of the strings in the input array except those that match strings in geese
};