function dutyFree(normPrice, discount, hol){
let savingPerBottle = discount*normPrice/100
let noOfBottles = Math.floor(hol/savingPerBottle)
return noOfBottles
}