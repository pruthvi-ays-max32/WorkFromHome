
// created one object for 1st hotel
let obj = {
    hotelId : 0,
    hotelName : "Nimbalkar Keters",
    location : "Pune",
    tax  : {
        serviceTax:10,
        cgst : 2.5,
        sgst : 3.5
    }
    , 
    ownerName : "Ashok Nimbalkar",
    contactNo : "+91-8674563890"
}

// created array restorant to add all the restoranats as a hotel in this array
let Hotels = {
    Restorants : [obj]
}


// created the function which adds the hotels to the array of hotels (Restorants)
const createResto = (Hotel,Rest) =>
{
    
    let details = {
        Id : Hotel.newHotelDetails.hotelId,
        name : Hotel.newHotelDetails.hotelName,
        address :Hotel.newHotelDetails.location,
        tax : Hotel.newHotelDetails.tax,
        ownerName : Hotel.newHotelDetails.ownerName,
        phoneNumber : Hotel.newHotelDetails.contactNo

    }
    let size = Hotel.newHotelDetails.length
    
    let size1 = Rest.length
    console.log(size1)
    for (let i=0; i<size;i++){
        for(let j=0; j<size1; j++){
            console.log(Rest[j].hotelId)
            if(details.Id === Rest[j].hotelId){
                console.log("Hotel Is Already Present")
                break;
            }
            else{
                Rest.push(details)
                
            }
        }

    }
    return Rest
    
}



let Hotel = {

    newHotelDetails : [

        obj1 = {
            hotelId : 1,
            hotelName : "SK Kichens",
            location : "Pune",
            tax  : {
                serviceTax:10,
                cgst : 2.5,
                sgst : 3.5
            }
            , 
            ownerName : "S.P.Kumar",
            contactNo : "+91-86745974480"
        },

        obj2 = {
            hotelId : 2,
            hotelName : "Mehvish Chole Bhature",
            location : "Pune",
            tax  : {
                serviceTax:10,
                cgst : 2.5,
                sgst : 3.5
            }
            , 
            ownerName : "Mehvish Shaikh",
            contactNo : "+91-86744643236"
        }
        ,
        obj3 = {
            hotelId : 3,
            hotelName : "Siddhesh Wadewale",
            location : "Pune",
            tax  : {
                serviceTax:10,
                cgst : 2.5,
                sgst : 3.5
            }
            ,
            ownerName : "Shiddhesh K. S.",
            contactNo : "+91-9421503365"
        }

        ]}


// let Hotels = [
//     obj,obj1,obj2,obj3
// ]

// console.log(arr)
console.log(createResto(Hotel, Hotels.Restorants))