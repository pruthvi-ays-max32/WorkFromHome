// Function which returns A series of Even Number 


let arr = [1,2,3,4,5,6,7,8,9,10]


// Using Normal Function 
const even = (para) =>{
    let arr1 =[]
    for(let i=0; i<para.length; i++){
        if(para[i] %2===0){
           arr1.push(para[i])
        }
        else{
            continue
        }
    }

    return arr1
}

let evenArray = even(arr)
console.log(evenArray)


// Method 2 Using The filter Method.

let newArray = arr.filter((val)=>{
    return val%2==0
})
console.log(newArray)


// Method 3 Using The Map Method it returns only boolean value for that position if satisfy then it will return true otherwise false.

let newArray1 = arr.map((val)=>{  
    return val %2==0    
})

console.log(newArray1)