// Q => 

function computeJoint(s1, s2) {
       
  let set1 = new Set();
  let set2 = new Set();
  
         let res1 =s1;
         let res2=s2;
  
  while(res1<20000000 && res2<20000000){
         
          res1 = findNext(res1);
        
          set1.add(res1);
          res2 = findNext(res2);
         
          set2.add(res2);
    
          if(set1.has(res2)){
                  return res2;
          }
          if(set2.has(res1)){
                  return res1;
          }
  }
  
  function findNext(n) {
      
         let sum =0;
         let a = n;
         while(n!=0){
                sum = Math.floor(sum +( n%10));
                n = n/10;
         }
         return (sum+a);
  }
  
         
  }
  let a = [1,5]
  let b = [7,3]
  debugger
  a = a.concat(b)
  var res = a.reduce((acc,curr)=>{
        return acc+curr
  },5)
  console.log(res);
  debugger
  console.log(computeJoint(2,5))