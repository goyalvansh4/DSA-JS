var permute = function(nums) {
  //Write code here
  const permutation = [];
  let n=nums.length;
  function helper(i){
      if(n-1 === i){
          permutation.push(nums)
          return;
      }
      for(let j=i;j<n;j++){
      [nums[i],nums[j]]=[nums[j],nums[i]]
      helper(i+1);
      [nums[i],nums[j]]=[nums[j],nums[i]]
      }
      
  }
  
  helper(0);
  return permutation;
};
