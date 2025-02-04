var solveNQueens = function(n) {
  //Write Code here
  let res = [];
  let board = new Array(n).fill().map(()=> new Array(n).fill('.'));
  
  function convertBoard(board){
    return board.map((row)=> row.join(''))
  }
  
  function isValid(row,col,board){
      // for column
      for(x=0;x<row;x++){
          if(board[x][col]==='Q'){
              return false;
          }
      }
      // for upper left diagonal
      for(let r=row,c=col;r>=0&&c>=0;r--,c--){
          if(board[r][c]==='Q') {
              return false;
          }
      }
      for(let r=row,c=col;r>=0&&c<n;r--,c++){
          if(board[r][c]==='Q') {
              return false;
          }
      }
      return true;
  }
  
  function positionNextQueen(board,row){
      //base case
      if(row === n){
          res.push(convertBoard(board))
          return;
      }
      
      //recursive case
      for(col=0;col<n;col++){
          if(isValid(row,col,board)){
              board[row][col]='Q';
              positionNextQueen(board,row+1);
              board[row][col]='.';
          }
      }
  }
  
  positionNextQueen(board,0)
  return res;
  
};
