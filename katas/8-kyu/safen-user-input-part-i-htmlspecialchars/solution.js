function htmlspecialchars(formData) {
  // Insert your code here
  let arr = formData.split('').map( x=> {switch(x){
      case '<':
      return '&lt;'
      break
      
      case '>':
      return '&gt;'
      break
      
      case '"':
      return '&quot;'
      break
      
      case '&':
      return '&amp;'
      break
      
      default :
      return x
      
  }})
  
  return arr.join('')
}