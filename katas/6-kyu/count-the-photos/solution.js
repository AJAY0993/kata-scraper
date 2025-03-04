// return the total number of photos.
// it should return an integer
function countPhotos(road){
 let carCount = 0
 let camCount = 0
 let result = 0
 for(i=0; i< road.length; i++){
   if(road[i]=== '.'){camCount++
                     result+= carCount};
   if(road[i]=== '>')carCount++;
   if(road[i]==='<')result+= camCount
 }
  return result
}