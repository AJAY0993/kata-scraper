function save(sizes, hd) {
  let totalSize = 0;
  let numOfFiles = 0;
   for (i in sizes){
     totalSize += sizes[i]
     if(totalSize > hd){break}
      numOfFiles++
   }
  return numOfFiles
}