function stairsIn20(s){
  //your code here
return (s[0].reduce((t,x)=>{return x+t},0) + s[1].reduce((t,x)=>{return x+t},0) + s[2].reduce((t,x)=>{return x+t},0) + s[3].reduce((t,x)=>{return x+t},0) + s[4].reduce((t,x)=>{return x+t},0) + s[5].reduce((t,x)=>{return x+t},0) + s[6].reduce((t,x)=>{return x+t},0)  )*20
    }