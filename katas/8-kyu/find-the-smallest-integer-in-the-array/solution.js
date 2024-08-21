class SmallestIntegerFinder {
  findSmallestInt(args) {
    let arr = args.sort((a,b)=>a-b)
    return arr[0];
  }
}