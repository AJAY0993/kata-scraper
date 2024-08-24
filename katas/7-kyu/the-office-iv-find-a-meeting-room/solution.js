function meeting(x) {
  const i = x.findIndex(e => e === 'O');
  return i < 0 ? 'None available!' : i;
}