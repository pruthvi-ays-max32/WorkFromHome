
let tax ={
    cgst : 2.5,
    sgst : 3.5,
    serviceTax : 4
}


let Hotels = [
    {name : "Hotel Prabhat", mobileNo : "919736748410", address : "Pune", serviceTax : tax}
]

const registerHotel = (name, mobileNo, address) =>{
    
    details = {  
        name: name,
        mobileNo : mobileNo,    
        add : address,
        tax : tax
    }

    for(let i=0; i<Hotels.length; i++){ 
       
        if(Hotels[i]["mobileNo"] === details["mobileNo"]){
            return `${details.name} is already exists`
        }
        else{

            if(i<Hotels.length-1){
                continue
            }
            else{
                Hotels.push(details)
                return `${details.name} Successfully registered `
            }
            
            
        }
    }
}

let r1 = registerHotel("Banaras Food Corner","919421907755", "Pune", tax)
let r2 = registerHotel("Fast Food Corner","919421907755", "Pune",tax)
let r3 = registerHotel("Banaras Food Corner","919421907755", "Pune", tax)
console.log(r1)
console.log(r2)
console.log(r3)
console.log(Hotels)