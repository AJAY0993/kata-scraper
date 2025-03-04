function countLanguages(list) {
  // thank you for checking out the Coding Meetup kata :)
  return list.reduce((a,b)=>{
    lang = b.language
    temp = {...a}
    temp[lang] = a[lang] + 1 || 1
    return {...temp}
  },{})
}