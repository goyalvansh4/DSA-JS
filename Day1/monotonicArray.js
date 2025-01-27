var isMonotonic = function(nums) {
  if(nums.length === 0 || nums.length === 1 || nums.length === 2){
      return true;
  }
  let type;
  if(nums[0]<nums[nums.length-1]){
    type = "inc"
  }
  else if(nums[0]==nums[nums.length-1]){
    type = "equal";
  }
  else{
    type="desc"
  }
  for(let i=0;i<nums.length-1;i++){
    if(type === "desc"){
       if(!(nums[i]>=nums[i+1]))
       return false;
     }
     else if(type==='inc'){
       if(!(nums[i]<=nums[i+1]))
       return false;
     }
     else{
       if(nums[i] != nums[i+1]){
         return false;
       }
     }
  }
  return true;
};