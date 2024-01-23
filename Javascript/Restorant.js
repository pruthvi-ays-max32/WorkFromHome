

// Tax Details 

const tax = {
    cgst : 2.5,
    sgst : 2.5,
    serviceTax : 5
}
   


// Items present in Menu

    let Idli = {
        name : "Idli",
        price : 30,
        type : "Rava",
    }

    let Samosa = {
        name : "Samosa",
        price : 10.00,
        type : "Aloo Samosa",
    }       

// Order Given

Order = {
    items : [
        {
            itemName : Idli,
            quantity : 3,
        },
        {
            itemName : Samosa,
            quantity : 2,
        }
    ]
}

// Generate The Bill Function 

const generateBill = (para1, para2) => {
    let total = 0
    console.log("                         AYS FOOD CORNER                               ")
    console.log("-----------------------------------------------------------------------")
    console.log( `Sr.No.    |   Items   |   Quantity    |   Price per Item  |   Total   `)
    console.log("-----------------------------------------------------------------------")
    for(let i=0; i<para1.items.length; i++){
        
        total += (para1.items[i].itemName.price * para1.items[i].quantity);
        console.log(`${i+1}         | ${para1.items[i].itemName.name}      |      ${para1.items[i].quantity}        |           ${para1.items[i].itemName.price}      |  ${para1.items[i].itemName.price * para1.items[i].quantity}       `)
    }
   
    console.log("          |           |               | ")
    console.log("-----------------------------------------------------------------------")
    console.log("   Total Amount Without Tax:                                  Rs.", total)
    let SGST = total * (para2.sgst/100)
    let CGST = total * (para2.cgst/100)
    let ServiceTax = para2.serviceTax
    let finalAmount = total + SGST + CGST + ServiceTax
    console.log(`   SGST: ${para2.sgst}%                                                 Rs.`, SGST)
    console.log(`   CGST: ${para2.cgst}%                                                 Rs.`, CGST)
    console.log("   Service Tax:                                               Rs.", ServiceTax)
    console.log("-----------------------------------------------------------------------")
    console.log("   Total Amount To Pay with Tax:                              Rs.", finalAmount)

}

// Calling The Function

generateBill(Order, tax)


