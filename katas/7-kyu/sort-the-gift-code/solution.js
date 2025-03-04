function sortGiftCode(code){
  //TODO 
  return code.split('').sort((a,b) => {
    return a.charCodeAt() - b.charCodeAt()
  }).join('')
}