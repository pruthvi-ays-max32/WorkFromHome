
// Tax Object 
let tax = {
    cgst: 2.5,
    sgst: 1.5,
    serviceTax: 20
}

// Hotel Empty Array 
let Hotels = []

/****************************************************************************************************  Function to Register new Hotel   ************************************************************************************************* */
const registerHotel = (id, name, email, phoneNo, location, tax) => {


    let hotel = {
        hid: id,
        hname: name,
        hemail: email,
        hphoneno: phoneNo,
        hlocation: location,
        htax: tax,
        hmenu: [],
        horders: [],

    }

    let hotelFlag = false

    for (let i = 0; i < Hotels.length; i++) {
        if (Hotels[i].hname == hotel.hname) {
            message = `${name} Hotel is already registered.`
            hotelFlag = true
            return `${message}`
        }
    }

    if (!hotelFlag) {
        Hotels.push(hotel)
        // console.log("Updated", Hotels)
        message = `${hotel.hname} is registered Successfully `
        return `${message}`
    }
}


/*************************************************   calling the function to register new hotel  **************************************************************************************************** */

let hotel1 = registerHotel(1, "Taj Hotel", "taj.hotel123@gmail.com", "91999", "Mumbai", tax);
// console.log(hotel1)


let hotel2 = registerHotel(1, "Taj Hotel", "taj.hotel123@gmail.com", "91999", "Mumbai", tax);
// console.log(hotel2)

let hotel3 = registerHotel(2, "Burj Khalifa", "burj.hotel123@gmail.com", "91979", "Dubai", tax);
// console.log(hotel3)


/************************************* function for delete the hotel details completely from the hotels array by checking the email and name  ************************************************************************/
const deleteHotel = (name, email) => {

    let hotelFlag = false
    for (let i = 0; i < Hotels.length; i++) {
        if (Hotels[i].hname == name && Hotels[i].hemail == email) {
            hotelFlag = true
            Hotels.splice(i, 1)
            message = `${name} Hotel associated with email ${email} found and deleted successfully`
            return message
        }
    }

    if (hotelFlag == false) {
        message = `${name} Hotel associated with email ${email} Not found`
        return message
    }
}

/**************************************  calling the delete Hotel Function ************************************************************************/


let r8 = deleteHotel("Burj Khalifa", "burj.hotel123@gmail.com")
console.log(r8)

let r1 = deleteHotel("Burj Khalifa", "burj.hotel123@gmail.com")
console.log(r1)

// Created Object that includes the updation details of hotels
let Hobj1 = {
    hemail: "taj.resto123@gmail.com",
    hphoneno: "8564978932",
    hlocation: "Agra",

}

// /***************************************** function to update the hotel details in hotel array ***************************************************************************************************************************** */
const updateHotel = (id, name, Hobj) => {

    for (let i = 0; i < Hotels.length; i++) {
        if (Hotels[i].hid === id) {
            // console.log("id matched")
            Hotels[i] = {...Hotels[i],... Hobj}
            return `Updated Successfully`
        }
    }
    return Hotels
}
// calling the update hotel function 

let r = updateHotel(1, "Taj Hotel", Hobj1)
console.log(r)
console.log(Hotels)

/***********************************************  function to create the menu ***************************************************************************************************** */



let obj1 = {
    itemId: 2,
    itemName: "poha",
    price: 20
}
let obj3 = {
    itemId: 1,
    itemName: "Idli",
    price: 30
}

/****************************Add Item to the Menu *********************************************** */
const additems = (id, obj) => {

    let item = {
        itemId: obj.itemId,
        itemName: obj.itemName,
        price: obj.price
    }
    let hotelFlag = false
    for (let i = 0; i < Hotels.length; i++) {
        if (Hotels[i].hid === id) {
            // console.log("id matched")
            if (Hotels[i].hmenu.length <= 0) {
                Hotels[i].hmenu.push(item)
            } else {
                for (let j = 0; j < Hotels[i].hmenu.length; j++) {
                    // check item already exists  and push
                    if (Hotels[i].hmenu[j].itemName == item.itemName) {
                        return "Item is already Exists"
                    }
                    else {
                        Hotels[i].hmenu.push(item)
                    }
                }
            }

        }
        console.log(Hotels[i].hmenu)
    }

}

// // calling the function which additems in the menu based on the objects given
additems(1, obj1)
additems(1, obj3)
additems(2, obj3)


// /*******************************************Delete Item form the Menu ************************* */

// const deleteItem = (id, itemName) => {
//     let hotelflag = false
//     for (let i = 0; i < Hotels.length; i++) {
//         if (Hotels[i].hid === id) {
//             hotelflag = true
//             menuFlag = false
//             for (let j = 0; j < Hotels[i].hmenu.length; i++) {
//                 if (Hotels[i].hmenu[j].itemName == itemName) {
//                     Hotels[i].hmenu.splice(j, 1)
//                     menuFlag = true
//                     return `${itemName} found and deleted successfully`
//                 }
//             }
//             if (!menuFlag) {
//                 return `I${itemName} not found in the hotel's menu`
//             }
//         }
//         else {
//             return `Hotel with ${id} Not Found`
//         }
//     }
// }


// // calling the delete function to delete the item based on hotel id and itemName present in the menu
// let j = deleteItem(1, "poha")
// console.log(j)


/*****************************************  Update Item In Menu ***************************************/
// let objects1 = {
//     itemId: 1, itemName: 'DOSA', price: 20
// }

// /********* Update Item Function ************** */
// const updateItem = (id, objects) => {

//     for (let i = 0; i < Hotels.length; i++) {
//         // Hotel Find
//         if (Hotels[i].hid == id) {
//             Hotels[i] = {...Hotels[i],... objects}
//             return `Successfully`
//         }
//     }
// }

// let r2 = updateItem(1, objects1)
// console.log("Updated Item ",r2);
// console.log(Hotels)



/********************************************** order object details which we have to pass to the function of make order **************************/


let Order = {
    orderItems: [
        {
            itemId: 1,
            itemName: "Idli",
            quantity: 2,
        },
        {
            itemId: 2,
            itemName: "poha",
            quantity: 1,
        }

    ]

}

// // /*********************** Function to Make An Order *************************************************** */
let makeOrder = (name, Order) => {
    console.log(name)
    // for hotel check
    hotelFlag = false
    for (let i = 0; i < Hotels.length; i++) {
        // Hotel Name
        hotelFlag = true
        if (Hotels[i].hname === name) {

            // Order Array 
            for (let j = 0; j < Order.orderItems.length; j++) {
                // check in menu
                for (let k = 0; k < Hotels[i].hmenu.length; k++) {
                    if (Hotels[i].hmenu[k].itemName === Order.orderItems[j].itemName) {
                        Hotels[i].horders.push(Order.orderItems[j])
                        console.log(`Order added in the Order Array of ${Hotels[i].hname}`)
                        return `Order successful`
                    }
                }
            }
        }
    }

}

let r11 = makeOrder("Taj Hotel", Order)
console.log(r11);




// /**************************** Generate Bill with Taxes ***************************/

generateBill = (id, Order, tax) => {

    let total = 0

    console.log("                         AYS FOOD CORNER                               ")
    console.log("-----------------------------------------------------------------------")
    console.log(`Sr.No.    |   Items   |   Quantity    |   Price per Item  |   Total   `)
    console.log("-----------------------------------------------------------------------")

    for (let i = 0; i < Hotels.length; i++) {
        // Hotel check 
        if (Hotels[i].hid === id) {
            // Hotel Found

            for (let j = 0; j < Order.orderItems.length; j++) {
                // take j th index item id from the order
                for (let k = 0; k < Hotels[i].hmenu.length; k++) {
                    // take k th index item id from the Hotelmenu
                    // Now  compare both if true proceed or increase the k value
                    if (Order.orderItems[j].itemId === Hotels[i].hmenu[k].itemId) {
                        // Item found in hotel menu
                        total += Order.orderItems[j].quantity * Hotels[i].hmenu[k].price;
                        console.log(`   ${j + 1}      ${Order.orderItems[j].itemName}            ${Order.orderItems[j].quantity}                ${Hotels[i].hmenu[k].price}               ${(Order.orderItems[j].quantity * Hotels[i].hmenu[k].price)} `)

                    }
                }

            }
            console.log("-----------------------------------------------------------------------")
            console.log("   Total Amount Without Tax:                                  Rs.", total)

            
            let SGST = total * (tax.sgst / 100)
            let CGST = total * (tax.cgst / 100)
            let ServiceTax = tax.serviceTax
            let finalAmount = total + SGST + CGST + ServiceTax
            console.log(`   SGST: ${tax.sgst}%                                                 Rs.`, SGST)
            console.log(`   CGST: ${tax.cgst}%                                                 Rs.`, CGST)
            console.log("   Service Tax:                                               Rs.", ServiceTax)
            console.log("-----------------------------------------------------------------------")
            console.log("   Total Amount To Pay with Tax:                              Rs.", finalAmount)


            return total

        }
        else {
            // Hotel Not Found
            if (i < Hotels.length) {
                return "Hotel Not Found"
            }

        }

    }
}


let total = generateBill(1, Order, tax)
console.log(total)


/*********************************************Generate Bill Without Taxes***************************** */


function generateBillwithoutTax(total, tax){
    let SGST = total * (tax.sgst / 100)
            let CGST = total * (tax.cgst / 100)
            let ServiceTax = tax.serviceTax
            let finalAmount = total + SGST + CGST + ServiceTax
            return `grand Total :  ${finalAmount}`
}

let withoutTax = generateBillwithoutTax(total, tax)
console.log(withoutTax)