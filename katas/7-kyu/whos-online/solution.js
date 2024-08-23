const whosOnline = (friends) => {
// Your code here...
  let obj = {}
  let online  = friends.filter(friend => friend.status == 'online' &&  friend.lastActivity < 11 ).map(data=> data.username)
    let offline  = friends.filter(friend => friend.status =='offline').map(data=> data.username)
      let away  = friends.filter(friend => friend.status =='online'&&  friend.lastActivity > 10).map(data=> data.username)
      
      let arr = [online,offline,away]
      let arr2 = ['online','offline','away']
      for(i in arr){
        if(arr[i].length>0) { obj[ arr2[i] ] = arr[i] } 
      }
  return obj
}