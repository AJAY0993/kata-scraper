function firstNSmallest(array, n){
  // Create a copy of the array with indices for later reference
  let copyArray = array.map((value, index) => ({ value, index }));

  // Sort the copy based on values and maintain original indices for duplicates
  copyArray.sort((a, b) => {
    if (a.value !== b.value) {
      return a.value - b.value;
    }
    return a.index - b.index;
  });

  // Take the first n elements and sort them based on their original indices
  let result = copyArray.slice(0, n)
                        .sort((a, b) => a.index - b.index)
                        .map(({ value }) => value);
  
  return result;
}

