function insertionSort (array){
    length = array.length
    for(let i=0;i<length;i++){
        for (let j=i+1;j>=0;j--){
            if(array[j]<array[j-1]){
                let temp;
                temp = array[j];
                array[j]= array[j-1];
                array[j-1] = temp;
            }else{
                break;
            }
        }
    }
    return array;
}
function selectionSort(array) {
      for(let i=0;i<array.length;i++){
          let pointer=i;
          for(let j=i;j<array.length;j++){
              if(array[pointer]>array[j+1]){
                  pointer = j+1
              }
          }
          let temp;
          temp=array[i]
          array[i]=array[pointer]
          array[pointer]=temp
      }
      return array
}

function threeNumberSort(array,order){
    length = array.length;
        let firstEle=0;
        let secondEle=0;
        let thridEle=0;
        for(let j=0;j<length;j++){
            if (order[0]===array[j]){
                firstEle++;
            }else if(order[1]===array[j]){
                secondEle++;
            }else{
                thridEle++;
            }    
        }
        for(let i=0;i<firstEle;i++){
            array[i]=order[0]
        }
        for(let k=firstEle;k<firstEle+secondEle;k++){
            array[k] = order[1]
        }
        for(let l=firstEle+secondEle;l<firstEle+secondEle+thridEle;l++){
            array[l] = order[2]
        }
        return array;
}
function threeNumberSort(array,order){
    let i=0;
        let j=array.length-1;
        
        
        while(array[i]==order[0])
            i++;
        
        while(array[j]==order[2])
            j--;
        
    
        let k=i;
        
        while(k<=j){
            
                
            if(array[k]==order[0])
                    {
                        let temp=array[i];
                        array[i]=array[k];
                        array[k]=temp;
                        i++;
                        
                    }
            else if(array[k]==order[2])
                    {
                        let temp=array[j];
                        array[j]=array[k];
                        array[k]=temp;
                        j--;
                        
                    }
                        
            if(array[k]!=order[0]&&array[k]!=order[2])
                k++;
            else if(k==i)
                k++;   
            
        }
        return array
    
}