function wordsToMarks(string){
  //your code here
return string.split('').reduce((t,x)=>t + x.charCodeAt()-96,0 )
}