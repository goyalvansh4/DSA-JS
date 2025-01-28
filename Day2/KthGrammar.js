var kthGrammar = function(n, k) {
  //Write code here
  let str='0';
  while(n>1){
      let len=str.length;
      for(let i=0;i<len;i++){
         if(str[i]=="0"){
           str += '1'
          }
          else if(str[i]=="1"){
              str += '0'
          }
      }
      n=n-1;
  }
  
  console.log(str);
  return Number(str[k]);
};

let x=kthGrammar(3,2)
console.log(x)