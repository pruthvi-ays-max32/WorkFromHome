
function max(para){

    let n = para.length;
    let secondMax = para[0];
    
    let firstMaximumNumber = para[n-1];
    for(let i=1; i<n-1; i++){
        if( para[i] > secondMax && para[i] !== firstMaximumNumber){
            secondMax = para[i];
        }
    }
    return secondMax;
}

function bubblesort (para){
    let end = para.length
    for(let i=0; i<end; i++){
        for(let j=0; j<end-i-1; j++){
            if(para[j]>para[j+1]){
                [para[j],para[j+1]] = [para[j+1], para[j]]
            }       
        }
    }  
    return para
}

let arr = [100,10,20,40,200,100,200,120,4];
let r = bubblesort(arr)
console.log("Sorted array in ascending order: ",r);

let firstMax = r[r.length-1];
console.log("firstMax : " + firstMax);

let secondMaximum = max(r)
console.log("The Second maximum number is : ", secondMaximum);
