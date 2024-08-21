function removeExclamationMarks(s) {
  let returnString = s
  while(s.includes('!')){
  s = s.replace('!','');
    }
  return s
}