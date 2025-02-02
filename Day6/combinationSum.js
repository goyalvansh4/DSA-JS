var combinationSum = function(candidates, target) {
  //Write code here
  let res=[];
  function helper(start,arr,currSum){
   if(currSum>target){
      return;
  }
  else if(currSum === target){
       res.push([...arr]);
       //console.log(res);
       return;
  }
   for(let i=start;i<candidates.length;i++){
       arr.push(candidates[i]);
       currSum+=candidates[i];
       helper(i,arr,currSum);
       currSum -= candidates[i];
       arr.pop();
   }
     
  }
   
  
  helper(0,[],0)
  return res;
};
