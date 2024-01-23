

function average (para){
    let sum = 0;
    for(let i=0 ;i< para.length; i++){
        sum += para[i];
    }
    return sum/para.length;
}

let arr =[1,2,3,4,5,6,7,8,9,10]
let avg = average(arr)
console.log("The average of Numbers in array is : " , avg);