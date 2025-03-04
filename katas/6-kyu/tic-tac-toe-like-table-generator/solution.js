function displayBoard(board, width){
  //your code here
  let rows = [];
  for(let i = 0; i < board.length; i+= width){
    rows.push(board.slice(i, i + width).map(cell => ` ${cell} `).join('|'));
  }
  let sep = '-'.repeat(rows[0].length);
  return rows.join(`\n${sep}\n`);
}