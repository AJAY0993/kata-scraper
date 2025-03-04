function scale(strng, k, n) {
    // your code
  if(strng == '') return '';
  const lines = strng.split('\n');
  return lines.map(line => {
    let horizontallyScaledLine = horizontalScale(line, k);
    let verticallyScaledLine = verticalScale(horizontallyScaledLine, n);
    return verticallyScaledLine
  }).join('\n')
  
}

const horizontalScale = (s, h) => s.split('').map(s => s.repeat(h)).join('')
const verticalScale = (s, v) => Array.from({length: v}, () => s).join('\n')
