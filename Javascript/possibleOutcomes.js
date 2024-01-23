
function possibleOutcome(para){
    let arr1 = []
    let arr2 = []
    let arr3 = []
    let arr4 =[]
    for(let i=0; i<para.length; i++){
        let x = para[i];
        for(let j=i+1; j<para.length; j++){
            x += para[j]; 
            arr1.push(x);
        }
    }

    for(let i=0; i<para.length; i++){
        let x = para[i];
        for(let j=para.length-1; j>=i; j--){
                x += para[j]; 
                arr3.push(x);
        }
    }

    for(let i=para.length-1; i>=0; i--){
        let x = para[i];
        for(let j=0; j<=i-1; j++){
            x += para[j]; 
            arr4.push(x);
        }
    }

    for(let i=para.length-1; i>=0; i--){
        let x = para[i];
        for(let j=i-1; j>=0; j--){
            x += para[j]; 
            arr2.push(x);
        }
    }

    return {arr1,arr2,arr3,arr4}
}


let arr = ['a', 'b', 'c']
console.log(possibleOutcome(arr))