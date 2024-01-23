
let Hotels = []
const addHotel = (name, cDetails, email, location) =>{
    if(Hotels.length<1){
        const hotel = {
            Hid : 1,
            Hname : name,
            HcDetails : cDetails,
            Hemail : email,
            Hlocation: location
        }
        Hotels.push(hotel)
        return `Hotel ${hotel.Hname} with ID ${hotel.Hid} registered successfully.`
    }
    else{
        for(let i=0; i<Hotels.length; i++){

            console.log(Hotels[i].Hemail)
            // if(Hotels[i].Hname == name && Hotels[i].Hemail == email){
            //     console.log('This Hotel is already in the system')
            // }
            // else{
            //     const hotel = {
            //         Hid : Hotels.length + 1,
            //         Hname : name,
            //         HcDetails : cDetails,
            //         Hemail : email,
            //         Hlocation: location
            //     }
            //     Hotels.push(hotel);
            //     return `Hotel ${hotel.Hname} with ID ${hotel.Hid} registered successfully.`
            // }
        }

    }
}


let r = addHotel("pratiksha Katers", "919421604454", "xyz@gmail.com","Pune")
let s = addHotel("pranjal Bekari", "919421604454", "pqr@gmail.com","Pune")
let t = addHotel("pratiksha Katers", "919421604454", "xyz@gmail.com","Pune")
console.log(r)

console.log(s)
console.log(t)