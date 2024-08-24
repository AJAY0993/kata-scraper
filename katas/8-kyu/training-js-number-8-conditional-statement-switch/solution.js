function howManydays(month){
  let x;
  switch (month){
    case 1:
      x=31;
      break;
    case 2:
      x=28;
      break;
    case 3:
      x=31;
      break;
    case 5:
      x=31;
      break;
    case 7:
      x=31;
      break;
    case 8:
      x=31;
      break;
    case 10:
      x=31;
      break;
    case 12:
      x=31;
      break;
    default:
      x=30;
  }
  return x;
}