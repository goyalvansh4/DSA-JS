var sortedSquares = function(nums) {
  let newArr =[];
   let left=0;
   let right = nums.length-1;
   for(let i=nums.length-1;i>=0;i--){
       if((nums[left]*nums[left])>(nums[right]*nums[right])){
           newArr[i]=nums[left]*nums[left];
           left++;
       }
       else{
           newArr[i]=nums[right]*nums[right];
           right--;
       }
   }
   return newArr;  
};