

let tax = {
    cgst : 2.5,
    sgst : 1.5,
    serviceTax : 30
}


let obj ={Hid : 1 , Hname: "Tripura Bakers" , HmbNumber : "919945658326", Haddress : "Pune", Htax :{sgst : tax.sgst, cgst : tax.cgst, serviceCharge : tax.serviceTax}, Hmenu : [], Horder : []}
Resto = []

const registerHotel = (id,name,mbNumber,address, tax, menu , order )=>{


    if(Resto.length<1){
        const hotel = {
            Hid : 1,
            Hname: name,
            HmbNumber : mbNumber,
            Haddress : address,
            Htax : tax,
            Hmenu : menu,
            Horders : order
        }
        Resto.push(hotel)
        return `${hotel.Hname} Registered Successfully`
    }

    else{

        for(let i=0; i<=Resto.length;i++){
            if(name === Resto[i].Hname){
                return `This ${name} Hotel is already registered`
            }
            else{
                const hotel = {
                    Hid : Resto.length+1,
                    Hname: name,
                    HmbNumber : mbNumber,
                    Haddress : address,
                    Htax : tax,
                    Hmenu : menu,
                    Horders : order
                }
                Resto.push(hotel)
                return `${hotel.Hname} Registered Successfully`
            }
        }



    }
}

let menu = {
}
let order = {

}
let r = registerHotel(0, "pratiksha Katers", "919421604454", "Pune", tax, menu,order)
let s = registerHotel(1, "pratiksha Katers", "919421604454", "Pune", tax, menu,order)
console.log(r)