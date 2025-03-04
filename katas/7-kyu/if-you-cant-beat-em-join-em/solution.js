function cantBeatSoJoin(numbers) {
  // your code here
  return numbers.filter(x=>x.length).sort((a,b)=> b.reduce((x,y)=>x+y) - a.reduce((x,y)=>x+y)).flat()
}