function domainName(url){
  //your code here
  if(url.includes('www.')){
    url = url.replace('www.','')
  }
  if(!url.includes('http')){
    return url.split('.')[0]
  }
  return url.split('.')[0].split('//')[1]
}