var combinationSum3 = function(k, n) {
  //Write Code here
  let res=[];
  function helper(start,currSum,nums){
      //base case
      if(currSum === n && nums.length === k){
          res.push([...nums]);
          return;
      }
      if(start > 9 || currSum>n || nums.length > k){
          return;
      }
      
      //recursive case
      for(let j=start;j<=9;j++){
          nums.push(j);
          helper(j+1,currSum+j,nums);
          nums.pop();
      }
  }
  
  
  helper(1,0,[])
  return res;
  
};
