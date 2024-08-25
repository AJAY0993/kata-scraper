var cubeChecker = function(volume, side){
  if( side <= 0 || volume <= 0){
    return false;
  }else{
    return volume === side ** 3 ? true: false;
  }
};