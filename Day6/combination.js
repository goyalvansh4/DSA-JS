var combine = function(n, k) {
  //Write Code here
  
  const res=[];
  function helper(i,arr){
      //base case
      if(arr.length===k){
         res.push([...arr]);
         return;
      }
      
      let need = k-arr.length;
      for(let j=i;j<=n-need+1;j++){
        arr.push(j);
        helper(j+1,arr);
        arr.pop();
      }
      
  }
  helper(1,[]);
  return res;
};


// [1,2,3,4]