
// // *************************TAX Policies*************************
const tax = {
    cgst : 2.5,
    sgst : 3.5,
    serviceCharge : 20
}


// ********************** Add New Items to the Menucard ************************
const addItem = (name, price, type = 'Nasta') => {

    let item = {
            itemName : name,
            price: price,
            type : type
    }

    for(let i=0; i<=Menucard.items.length; i++){
        
        if(name === Menucard.items[i].itemName){
            return `${item.itemName} Is Already Present In menucard.`
            break;
        }
        else{
            if(i<Menucard.items.length-1){
                continue
            }
            else{
                Menucard.items.push(item)
                return `${item.itemName} Added Successfully`
            }
        }       
    }
}

// // ************************ Delete The Item from Menu **************************

// const deleteItem = (name) =>{
    
//     for(let i=0; i < Menucard.items.length ; i++){
//         if(name === Menucard.items[i].itemName ){
//             Menucard.items.splice(i,1)
//             return `${name} Item found and Deleted Successfully`
//             break;
//         }
//         else{
//             if(i<Menucard.items.length-1){
//                 continue
//             }
//             else{
//                 return `${name} Item Not Found.`
//             }
//         }
//     }
// }

// ************************ Update The Item from Menu **************************
// const updateItem = (name, obj) => {

//     let newItem = {
//         itemName : name,
//         price : obj.price,
//         type : obj.type
//     }

//         for(let i=0; i<Menucard.items.length; i++){
//             if(name === Menucard.items[i].itemName){
//                 Menucard.items[i] = newItem
//                 return `${newItem.itemName} is updated`
//                 break
//             }
//             else{
//                 if(i<Menucard.items.length-1){
//                     continue
//                 }
//                 else{
//                     return `${newItem.itemName} Not found`
//                 }
//             }   
//         }
    
// }

// ***********************MenuCard**************************

Menucard = {

    items : [ {itemName : "Burger", price : 120, type : "Nasta"} ]
}


//*******************************Adding Items*****************8 */


console.log(addItem("Burger", 120,"Nasta"))
console.log(addItem("Idli",30))
let x = addItem("IdliWada",35,"Nasta")
console.log(x)
console.log(addItem("Poha",20))
console.log(addItem("Samosa",10))
console.log(addItem("Idli",30,"Nasta"))
// console.log(addItem("Lemon Rice",30,"Nasta"))

console.log(addItem("Lemon Rice", 30))


// *************************Deleteing ITems******************* */
// console.log(deleteItem("Poha"))
console.log(deleteItem("Rava"))



// //*************Updating Items *********************** */
let obj = {
    name : "Idli",
    price : 40,
    type : "Nasta"
}
let obj1 = {
    name : "Poha",price : 30, type : "Nasta"
}

console.log(updateItem("Idli",obj))
console.log(updateItem("Poha",obj1))

//*********************Making Order****************** */

makeOrder = {
    orderItems : [
        {name : "Burger", quantity : 1},
        {name: "Poha" ,quantity : 2},
        {name : "Lemon Rice", quantity : 3}
    ]
}

//**********************************Generating Bill Function*********************** */

const generateBill = (Order, tax) => {
    
    let total = 0

    console.log("                         AYS FOOD CORNER                               ")
    console.log("-----------------------------------------------------------------------")
    console.log( `Sr.No.    |   Items   |   Quantity    |   Price per Item  |   Total   `)
    console.log("-----------------------------------------------------------------------")

    for(let i=0; i<Order.orderItems.length;i++){
        for(let j=0; j<Menucard.items.length; j++){
            if(Order.orderItems[i].name === Menucard.items[j].itemName){
                total += Order.orderItems[i].quantity * Menucard.items[j].price
                console.log(`   ${i+1}      ${Order.orderItems[i].name}            ${Order.orderItems[i].quantity}                ${Menucard.items[j].price}               ${(Menucard.items[j].price * Order.orderItems[i].quantity)} `)
                break;
            }
            else{
                continue
            }
        }
    
    }
    console.log("-----------------------------------------------------------------------")
    console.log("   Total Amount Without Tax:                                  Rs.", total)


    let SGST = total * (tax.sgst/100)
    let CGST = total * (tax.cgst/100)
    let ServiceTax = tax.serviceCharge
    let finalAmount = total + SGST + CGST + ServiceTax
    console.log(`   SGST: ${tax.sgst}%                                                 Rs.`, SGST)
    console.log(`   CGST: ${tax.cgst}%                                                 Rs.`, CGST)
    console.log("   Service Tax:                                               Rs.", ServiceTax)
    console.log("-----------------------------------------------------------------------")
    console.log("   Total Amount To Pay with Tax:                              Rs.", finalAmount)
}

// Calling the Generate Bill Function
generateBill(makeOrder, tax)

console.log(Menucard.items)