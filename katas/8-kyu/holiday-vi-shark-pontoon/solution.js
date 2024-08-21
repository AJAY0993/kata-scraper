function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  
if(dolphin){sharkSpeed = sharkSpeed/2}
  
let timeSharkAndMe = sharkDistance/sharkSpeed
let timeMeAndPantoon = pontoonDistance/youSpeed

if(timeSharkAndMe>timeMeAndPantoon){return "Alive!"}
  else{
    return "Shark Bait!"
  }

}