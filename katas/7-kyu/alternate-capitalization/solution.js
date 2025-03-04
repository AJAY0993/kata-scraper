function capitalize(s){
  return [s.split("").map((x, i) => {return i % 2 === 0 ? x.toUpperCase() : x}).join(""),
          s.split("").map((x, i) => {return i % 2 !== 0 ? x.toUpperCase() : x}).join("")];
};