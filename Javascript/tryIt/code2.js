let hotels = []
let tax = {
    cgst : 2.5,
    sgst : 1.5,
    serviceTax : 30
}
message ={
    hotelRegistered: "Hotel Is Registered Successfully",
    businessEmailExist : "business Email Already Exist ",
    added : "Item Added Successfully"
}




// to add hotel
function addHotel(name, phone, email, address, taxes) {
    
    if (hotels.length<1) {
        const hotel = {
            hotelID : 1,
            hotelName : name,
            hotelPhoneNo : phone,
            hotelEmail : email,
            hotelAddress : address,
            hotelTaxes : taxes
        }
        hotels.push(hotel)
        resultstatus = true
        reply = "Hotel Registered Successfully"
        return {hotels,resultstatus, reply}

    } else {
        for (let i = 0; i < hotels.length; i++) {
            // name == hotels[i].hotelName ? 
            if (name === hotels[i].hotelName) {
                if (email === hotels[i].hotelEmail) {
                    resultstatus = false
                    reply = "business Email Already Exist"
                    return {hotels, resultstatus, reply}
                } else {
                    const hotel = {
                        hotelID : hotels.length + 1,
                        hotelName : name,
                        hotelPhoneNo : phone,
                        hotelEmail : email,
                        hotelAddress : address,
                        hotelTaxes : taxes
                    }
                    hotels.push(hotel)
                    resultstatus = true
                    reply = message.hotelRegistered
                    return {hotels,resultstatus, reply}
                }
            } else {
                const hotel = {
                    hotelID : hotels.length + 1,
                    hotelName : name,
                    hotelPhoneNo : phone,
                    hotelEmail : email,
                    hotelAddress : address,
                    hotelTaxes : taxes
                }
                hotels.push(hotel)
                resultstatus = true
                reply = message.hotelRegistered
                return {hotels,resultstatus, reply}
            }          
        }
    }
}

// function addHotelMenuItems () {

// }

let hotelMenuItems = []

function addHotelMenuItem(itemName,itemPrice,itemType, hotelID) {
    for (let k = 0; k < hotels.length; k++) {
        if (hotelID === hotels[i].hotelID) {
            // if the list of items is empty 
            if (hotelMenuItems.length<1) {   
                let item = {
                    itemName: itemName,
                    itemPrice: itemPrice,
                    itemType: itemType
                }        
                hotelMenuItems.push(item)
                resultstatus = true
                reply = message.added
                return {hotelMenuItems, itemName, resultstatus, reply}        
            } else {
                for (let i=0; i<hotelMenuItems.length; i++) {
                    // to find if element exist in list of items
                    if (itemName===hotelMenuItems[i].itemName) {
                        resultstatus = false
                        const reply = message.itemExist
                        return {hotelMenuItems, itemName, resultstatus, reply}
                    } else {
                        // if item is not in the list of items  
                        let item = {
                            itemName: itemName,
                            itemPrice: itemPrice,
                            itemType: itemType
                        }        
                        hotelMenuItems.push(item)
                        resultstatus = true
                        reply = message.added
                        return {hotelMenuItems, itemName, resultstatus, reply}
                    }
                }  
            }
        }
    }
}


let r = addHotel("pratiksha Katers", "919421604454", "xyz@gmail.com","Pune", tax)
let s = addHotel("XYZ", "915648256584", "pqr@gmail.com", "Delhi", tax)
console.log(r)
console.log(s)