function isFlush(cards) {
  let obj  = {
    S:0,
    H:0,
    D:0,
    C:0
  }
 cards.forEach(card => {
  if(card.includes('S')) {obj.S++}
    if(card.includes('H')) {obj.H++}
    if(card.includes('D')) {obj.D++}
    if(card.includes('C')) {obj.C++}
})
  return Object.values(obj).includes(5)
}