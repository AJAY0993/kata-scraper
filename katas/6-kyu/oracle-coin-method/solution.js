function oracle(arr) {
    //enter your code here
    const map  = {
      'one':1,
      'two':2,
      'three':3,
      'four':4,
      'five':5,
      'six':6
    }
    
    function getLine(str){
      if(str ===  'ttt') return '----x----'
      if(str === 'hhh') return '----o----'
      if(str === 'hht' || str === 'thh' || str === 'hth') return '---- ----'
      return  '---------' 
    } 

     arr = arr.sort((a,b)=> map[b[0]] - map[a[0]])
     let line = ''
     for (const i of arr){
       line+= getLine(i.slice(1).join(''))
       line+= '\n'
     }
     return line.slice(0,-1)
}