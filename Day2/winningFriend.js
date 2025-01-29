var winnerFriend=(arr,start,k)=>{
  if(arr.length === 1) return arr[0];
   let removeIdx = (start+k-1)%arr.length;
   arr.splice(removeIdx,1);
   //console.log(arr);
   return winnerFriend(arr,removeIdx,k);
}

console.log(winnerFriend([1,2,3,4,5],0,7));