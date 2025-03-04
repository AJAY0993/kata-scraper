const frame = (text, char) => {
  /*
    ************
    * Your     *
    * Solution *
    * Here     *
    ************
  */
  let str = ''
  let max = Math.max(...text.map((x,i) => x.length))
  text.forEach((x,i)=> {
       if(i===0) str+= new Array(max+4).fill(char).join('') +'\n'
       str+= `${char} `+x+( new Array(max-x.length).fill(' ').join('')+` ${char}\n`)
       if(i===text.length-1) str+= new Array(max+4).fill(char).join('')

  })
  return str
};