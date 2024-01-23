
// Tax policies

const tax = {
    cgst : 10,
    sgst : 3.8,
    serviceCharges : 20
}


// Menucard Present At Nimbalkar Keters

let Menu = {
    Items :{
        Rice : [
            {
                name : "Shejwaan Rice",
                type : "chicken",
                price : 90
            },
            {
                name : "Masala rice",
                type : "Veg",
                price : 30
            },
            {
                name : "Dal Rice",
                type : "Veg",
                price : 100
            }
        ]
    }
}


// Order Given By the Customer

let Order = {
    items:[
        {itemName : "Shejwaan Rice", quantity : 1},
        {itemName : "Masala Rice", quantity: 3},
        {itemName : "Dal Rice", quantity: 2}
    ]
}

// Fuction to Generate the Bill

function generateBill (Para1, Para2, Para3){
    console.log("                           NIMBALKAR KATERS                          ")
    let total = 0
    console.log("-----------------------------------------------------------------------")
    console.log( `Sr.No.    |   Items   |   Quantity    |   Price per Item  |   Total   |`)
    console.log("-----------------------------------------------------------------------")
    for(let i=0; i<Order.items.length; i++){
        total += (Para3.Items.Rice[i].price * Para1.items[i].quantity)
        console.log(`   ${i+1}  |   ${Para1.items[i].itemName}      |      ${Para1.items[i].quantity}     |   ${Para3.Items.Rice[i].price}          |   ${Para3.Items.Rice[i].price * Para1.items[i].quantity}`)
    }

    console.log("-----------------------------------------------------------------------")
    console.log("             Total Amount                                   Rs.", total)

    let CGST = (Para2.cgst/100) * total
    let SGST = (Para2.sgst/100) * total
    let serviceCharge = Para2.serviceCharges

    let finalAmount = total +CGST + SGST + serviceCharge 

    console.log("             SGST                                           Rs.", SGST)
    console.log("             CGST                                           Rs.", CGST)
    console.log("             ServiceCharges                                 Rs.", serviceCharge)
    console.log("-----------------------------------------------------------------------")
    console.log("             Total Amount To be paid                        Rs.", finalAmount)

    console.log("                                                                         ")
    console.log("                                                             ")

    console.log("   #######     Thanks for giving us a permission to serve you !!!!  Visit Again   !           ########")
    
}

// Calling the fuction to generate the bill

generateBill(Order, tax, Menu)