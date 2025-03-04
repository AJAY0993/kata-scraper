function diamondsAndToads(sentence,fairy){
  let obj  = {}
  switch(fairy){
    case "good":
    obj.crystal = 0
    obj.ruby = 0 
    sentence.split('').forEach(x=> {if(x === "r")obj.ruby++
                               if(x === "R")obj.ruby+=2
                               if(x === "c")obj.crystal++
                               if(x === "C")obj.crystal+=2})
    return obj;
    case "evil":
    obj.python = 0;
    obj.squirrel = 0;
    sentence.split('').forEach(x=> {if(x === "p")obj.python++
                               if(x === "P")obj.python+=2
                               if(x === "s")obj.squirrel++
                               if(x === "S")obj.squirrel+=2}
                         )
    return obj;
}
}