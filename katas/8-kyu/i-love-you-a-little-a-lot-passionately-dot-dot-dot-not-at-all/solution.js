function howMuchILoveYou(n) {
    // your code
  let arr = ["I love you", "a little", "a lot", "passionately","madly", "not at all"]
  if(n%6 ===5){return arr[4]};
  if(n%6 ===4){return arr[3]};
  if(n%6 ===3){return arr[2]};
  if(n%6 ===2){return arr[1]};
  if(n%6 ===1){return arr[0]};
  if(n%6 ===0){return arr[5]}
}
