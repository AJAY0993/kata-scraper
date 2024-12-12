function sortReindeer(reindeerNames){
  return reindeerNames.sort((a, b) => {
    if(a.split(" ")[1] < b.split(" ")[1]) {
      return -1;
    }
    if(a.split(" ")[1] > b.split(" ")[1]) {
      return 1;
    }
    return 0;
  })
}