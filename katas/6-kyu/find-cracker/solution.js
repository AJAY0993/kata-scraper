function findHack(arr) {
  const obj = { A: 30,
B: 20,
C: 10,
D: 5 
  }
  function helper(grades){
   let bonus = true
   let marks = grades.reduce((x,y)=>{
    if(y !== 'A' && y !== 'B'){
      bonus = false
    }
    return  x+= obj[y] ? obj[y] : 0
   },0)
   
  marks+=   bonus && grades.length >= 5 ? 20 : 0
  return    Math.min(200,marks)
  }
  
  const heckers = []
  
  const result = arr.forEach((st,i) => {
    const name = st[0];
    const totalScore = st[1];
    const grades = st[2];
    const calculatedScore = helper(grades);
    if(totalScore !== calculatedScore){
      heckers.push(name)
    }
  })
  return heckers
}