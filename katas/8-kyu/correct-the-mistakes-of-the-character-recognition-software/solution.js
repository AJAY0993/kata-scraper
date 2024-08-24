function correct(string)
{
	// your code here:
  const obj = {
    5:'S',
    0:'O',
    1:'I'
  }
 return string.split('').map(x=>obj[x]||x).join('')
}