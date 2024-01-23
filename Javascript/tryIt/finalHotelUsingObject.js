const tax = {
    cgst : 2.5,
    sgst : 1.5,
    serviceTax : 20
}
const Hotels = {}
let id = 1


// Function to Register the Hotel......
const registerHotel = (name, email, phoneNo, location, tax) =>{

        let hotel = {
            hid: id,
            hname: name,
            hemail: email,
            hphoneno: phoneNo,
            hlocation: location,
            htax: tax,
            hmenu: {},
            horders: {},
    
        }

        if(Hotels[id] === undefined){
            Hotels[id] = hotel
            msg = `Hotel Registered Successfully`
            id++
        }
        else{
            msg = `Hotel Already Registered`
        }
    return msg
}

let hotel1 = registerHotel("Taj Hotel", "taj.hotel123@gmail.com", "91999", "Mumbai", tax);
// console.log(hotel1)


let hotel2 = registerHotel("Taj Hotel", "taj.hotel123@gmail.com", "91999", "Mumbai", tax);
// console.log(hotel2)

let hotel3 = registerHotel("Burj Khalifa", "burj.hotel123@gmail.com", "91979", "Dubai", tax);
// console.log(hotel3)

// console.log(Hotels)


// Function to delete the Hotel

const deleteHotel=(id)=>{
    if(Hotels[id]){
        delete Hotels[id];
        msg = `Deleted Successfully`
    }
    else{
        msg=`Hotel Not Found!`
    }
    return msg;
}

// console.log(deleteHotel(11))
// console.log(Hotels)


// Function to Update the Hotel
let property = {
            hemail: "tajHotel.12@gmail.com",
            hphoneno: 8788990088,
            hlocation: "Agra",
}

const updateHotel = (id, property) =>{
    if(Hotels[id]){
        Hotels[id] = {...Hotels[id],...property}
        msg = `Hotel Updated Successfully`
    }
    else{
        msg = `Hotel with ${id} Not Found`
    }
    return msg
}

console.log(updateHotel(1,property))
// console.log(Hotels)



// Add Items to the Menu
let itemObj1 = {
    itemId : 1,
    itemName : "Poha",
    itemPrice : 20
}

let itemObj2 = {
    itemId : 2,
    itemName : "Upma",
    itemPrice : 25
}

const addItem = (id, itemObj) =>{
    let currentitemId = itemObj.itemId
    let item = {
        itemId : itemObj.itemId,
        itemName : itemObj.itemName,
        itemPrice : itemObj.itemPrice
        
    }

    if(Hotels[id]){
        Hotels[id].hmenu[currentitemId] = item
        msg = `${item.itemName} Added To The Hotel's Menu.`
    }
    else{
        msg = `The hotel with id:${id}, Doesn't Exist`
    }
    return msg
}

console.log(addItem(1, itemObj1))
//console.log(addItem(1, itemObj2))
//console.log(addItem(2, itemObj2))


// // delete the item form the menu

// const deleteItem = (id, itemId) => {

//     let currentitemId = itemId
//     if(Hotels[id]){
//         // Hotel with id found
//         if(Hotels[id].hmenu[currentitemId]){
//             delete Hotels[id].hmenu[currentitemId]
//             msg = `Deleted The Item Successfully`
//         }
//         else{
//             msg = `Item Not Found In the Menu`
//         }
//     }
//     else{
//        msg =  `Hotel Not found with This id`
//     }

//     return msg
// }

// console.log(deleteItem(4, 1))
// console.log(Hotels)
// console.log(Hotels[1].hmenu)
// console.log(Hotels[2].hmenu)


// // Update the Items in the Menu 

// Itemproperty1 = {
//     itemId : 2,
//     itemName : "Jira Rice",
//     itemPrice : 25
// }


// const updateMenu = (id, itemId, Itemproperty) => {
//     currentitemId = itemId
//     if(Hotels[id]){
//         if(Hotels[id].hmenu[currentitemId]){
//             Hotels[id].hmenu[currentitemId] = {...Hotels[id].hmenu[currentitemId],...Itemproperty}
//             console.log(Hotels[id].hmenu[currentitemId])
//             msg = 'The Item Has Been Updated Successfully'
//         }
//         else{
//             msg = `The Item Has Not Been Found`
//         }
//     }
//     else{
//         msg = `Hotel Not Found With this Id`
//     }
//     return msg
// }

// console.log(updateMenu(1,2,Itemproperty1))


// Order

const Order = {
    OrderItems : [
        {itemName : "Poha", quantity : 3},
         {itemName : "Jira Rice", quantity : 4}
    ]
}


// Function to make An Order

const makeAorder = (id, Order) =>{
    if(Hotels[id]){
        // Hotel found
        
        for(let i=0; i<Order.OrderItems.length; i++){
            let x = 1
           for( j in Hotels[id].hmenu){
                for(key in Hotels[id].hmenu[j]){
                    // console.log(Hotels[id].hmenu[j].itemName)
                
                   if(Hotels[id].hmenu[j].itemName === Order.OrderItems[i].itemName){
                     Hotels[id].horders = Order.OrderItems[i].itemName
                     msg = `Updated Order`
                     console.log(Hotels[id].horders)
                   }
                }
           }
        }
    }
    else{
        msg = `Hotel With This ID is not found`
    }
    return msg
}

console.log(makeAorder(1,Order))

// // generate bill function

// generateBillwithoutTax = (id, Order) =>{
//     let total = 0




//     return total
// }

// let Total = generateBillwithoutTax(1, Order)
// function for calculating the grand total value

// const grandTotal = (total, tax) =>{
//     let SGST = total * (tax.sgst / 100)
//     let CGST = total * (tax.cgst / 100)
//     let ServiceTax = tax.serviceTax
//     let finalAmount = total + SGST + CGST + ServiceTax
//     return `grand Total :  ${finalAmount}`
// }


// console.log(grandTotal(80, tax))

//console.log(Hotels)

