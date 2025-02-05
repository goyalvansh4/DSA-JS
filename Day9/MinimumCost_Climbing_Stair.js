var minCostClimbingStairs = function(cost) {
  //Write Code here 
  let n=cost.length;
  
  // memorizatio
  let memo= new Array(n).fill(-1);
  function helper(index){
      if(index >= n){
          return 0;
      }
      
      if(memo[index] !== -1) return memo[index];
      let one= cost[index] + helper(index+1)
      let two= cost[index] + helper(index+2)
      memo[index]=Math.min(one,two);
      return memo[index]
  }
  
  
  return Math.min(helper(0),helper(1));
};
