function anyArrows(arrows){
  // arrow it
  const isDamaged = (item => item.damaged !== true)
  return (arrows.some(isDamaged));
}