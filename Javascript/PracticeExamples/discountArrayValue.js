


// Write A code for replace the value by the 10% discount on each items price present in array at its own index

let arr = [100,200,300,230,500]
let discountValue
for(let i in arr){
    discountValue = (10/100) * arr[i]
    arr[i] -= discountValue
    console.log(`The price of Item at ${i} Index After Appling the Discount is : ${arr[i]}`)
}