

// Sum of all elements of an array

arr = [10,20,30,40,50,60,70,80,90,100]


// method 1 using normal for loop and function
const sumOfN = (arr1) =>{
    let sum = 0
    for(let i=0; i<arr1.length; i++){
        sum += arr1[i]
    }
    return sum
}


let sumOfArray = sumOfN(arr)
console.log(sumOfArray)








// Method 2 using Reduce Fuction of Array

// const output = arr.reduce((result, currentValue)=>{
//     return result + currentValue
// })

// console.log(output)