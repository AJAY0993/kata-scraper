function divCon(x){
return x.reduce((acc,n)=> typeof(n) === 'number' ? acc+= n : acc-= n , 0)
}