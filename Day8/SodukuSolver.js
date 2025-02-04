var solveSudoku = function(board) {
  //The function modifies the board in place to present the solution. Hence there is no need to return the board
  function isValid(row,col,board,char){
      for(let i=0;i<9;i++){
          if(board[row][i] === char || board[i][col] === char){
              return false;
          }
          let r=3*Math.floor(row/3) + Math.floor(i/3)
          let c=3*Math.floor(col/3) + i%3;
          if(board[r][c]===char){
              return false;
          }
      }
      
      return true;
  }
  
  function helper(board){
   for(let row=0;row<9;row++){
      for(let col=0;col<9;col++){
       if(board[row][col]==='.'){
           for(let i=1;i<=9;i++){
               let char = i.toString();
               if(isValid(row,col,board,char)){
                   board[row][col]=char;
                   if(helper(board)){
                       return true;
                   }
                  //  backtrack
                   board[row][col]='.';
               }
           }
           return false;
       }
      }
  }
    return true;  
  }
  
  helper(board)
};
