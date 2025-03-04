"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  const newArr =[]
 array.forEach(x=> x.forEach(y=> newArr.push(y)) );
  return newArr.sort((a,b)=>a-b)
  
}