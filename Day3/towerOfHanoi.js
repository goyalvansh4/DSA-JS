function toh(N, fromm, to, aux) {
  //Write code here
  // sample print statement below
  //console.log("move disk " + 1 + " from rod " + 1 + " to rod " + 2);
  //in the above statement consider we are moving disk 1 from rod 1 to rod 2
  //remember to return number of moves as well
  
  let count = 0;
  function helper(N, fromm, to, aux){
      // base case
      if(N===1){
          count+=1;
          console.log("move disk " + N + " from rod " + fromm + " to rod " + to);
          return;
      }
      
      //recursive 
      helper(N-1,fromm,aux,to);
      count+=1;
      console.log("move disk " + N + " from rod " + fromm + " to rod " + to);
      helper(N-1,aux,to,fromm);
      
  }
  helper(N, fromm, to, aux)
  return count;
  
}
