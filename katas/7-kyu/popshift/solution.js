function popShift(s){
  let l = 0;
  let r = s.length - 1;
  let s1= '';
  let s2 = '';
  let s3 = '';
  while(true){
    if(r - l + 1 < 2) break;
    s1+= s[l];
    s2+= s[r];
    l++;
    r--;
  }
  if (r >= l){
    s3 = s[l];
  }
  return [s2, s1, s3];
}