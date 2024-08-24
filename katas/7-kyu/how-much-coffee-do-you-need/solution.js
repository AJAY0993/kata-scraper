function howMuchCoffee(events) {
  // Code go here
  let c = 0
  for(i = 0; i<events.length; i++){
    if(events[i] === 'MOVIE' || events[i] === 'movie' || events[i] === 'cw' || events[i] === 'CW' || events[i] === 'DOG' || events[i] === 'CAT' ||events[i] === 'cat' || events[i] === 'dog'){
    if(events[i] === events[i].toLowerCase()){
      c++
    }
    else if(events[i] === events[i].toUpperCase()){
      c+=2
    }
    }
    if(c>3)return 'You need extra sleep'
  }
  return c
}