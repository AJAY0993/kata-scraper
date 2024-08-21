function bump(x){
  return x.split("").filter(x => x === "n").length<16 ? "Woohoo!" : "Car Dead"
}