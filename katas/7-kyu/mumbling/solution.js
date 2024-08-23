function accum(s) {
	// your code
  return s.split("")
   .map((x, i) => x.toUpperCase() + x.toLowerCase().repeat(i))
   .join("-")
  
}