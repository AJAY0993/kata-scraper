var BARK  = 'woof woof';
var SLEEP = 'zzzzzzzzz....';

function dog_bark_by_default(bark){
  if(bark === false) return SLEEP
  return BARK
}

function dog_bark_only_if_told_so(bark){
 if(bark === true) return BARK
 return SLEEP
}

function dog_dont_bark_by_default(dont_bark){
 if(dont_bark === false) return BARK
 return SLEEP 
}

function dog_dont_bark_only_if_told_so(dont_bark){
 if(dont_bark === true) return SLEEP
 return BARK 
}
