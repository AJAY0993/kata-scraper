function partyPeople(party) {
  let arr = party.sort((a,b)=> a-b)
while(arr.length && arr[arr.length - 1] > arr.length) arr.pop()
  return arr.length
}