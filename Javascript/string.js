
function max(para){
    
    let char ;
    let n = para.length;
    let maximum = 0;
    let arr1 = []
    for(let i=0; i<n; i++){   
        let x = para[i]; 
        let count = 0

        
        for (let j=0; j<n; j++){

            for(let k=0; k<arr1.length; k++){
                if(x !== arr1[k]){
                    arr1.push(x)
                }
                else{
                    break;
                }
            }

           if(x===para[j]){
            count++;
           } 
        }
        
        if(count > maximum) {
            char = para[i];
            maximum = count;
        }
    }
    
    return  {maximum, char};
}

let arr = ['a', 'b', 'a', 'a', 'c', 'd', 'c', 'c', 'c','c'];
let maxInteration = max(arr)
console.log(maxInteration)