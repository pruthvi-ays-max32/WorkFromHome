let obj = {
    id : 1,
    name: "Hotel Royal",

}

let Hotel = [obj]

const createResto = (id, R_name, C_details, add, tax) =>{
   let details = {
    hotel_id : id,
    name : R_name,
    contact_details: C_details,
    address : add,
    tax : tax
    }


    for(let i=0; i<=Hotel.length;i++){
        if(id === Hotel[i].id){
            return `${R_name} Is already Present.`
        }
        else{
            Hotel.push(details)
            return `${R_name} Is Created.`
        }
    }
    
}

tax ={
    cgst : 2.5,
    sgst : 3
}
let r = createResto(1,"Khalu Chai & Restorant", "723849403", "Latur", tax)
console.log(r);
let S = createResto(2,"Khalu ", "723849403", "Latur", tax)
let a = createResto(2,"Khalu ", "723849403", "Latur", tax)


console.log(Hotel)