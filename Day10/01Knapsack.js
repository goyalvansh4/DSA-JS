function knapSack(W, wt, val, n) {
  //Write Code here
  //let dp = new Array(n).map(()=> new Array(n).fill(-1));
  function helper(index,remWeight){
      // base case
       if(index>=n || remWeight === 0){
           return 0;
       }
       
      //  recursive case
     // if(dp[index][remWeight]=== -1){
      let exclude = helper(index+1,remWeight);
      let include = 0;
      if(wt[index]<= remWeight){
          include = val[index] + helper(index+1,remWeight-wt[index]);
      }  
      //}
     // dp[index][remWeight]=Math.max(exclude,include)
      return Math.max(exclude,include);
  }
  
  return helper(0,W)
}
