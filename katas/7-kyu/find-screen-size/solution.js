function findScreenHeight(width, ratio) {
    // Happy coding :)
  const [w,h] = ratio.split(':')
  const r = width/w
  return `${r*w}x${r*h}`
}