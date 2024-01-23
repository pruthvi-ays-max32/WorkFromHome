
h1 = {
    hid: 1,
    hname: "Taj Hotel",
    hemail: "taj.hotel123@gmail.com",
    hmobileNo: "91999",
    hlocation: "Mumbai",
    htax: {
        cgst: 2,
        sgst: 3
    },
    hmenu: [],
    horder: []
}
let h2 = {
    hid: 2,
    hname: "Burj Khalifa",
    hemail: "burj.hotel123@gmail.com",
    hmobileNo: "91979",
    hlocation: "Dubai",
    htax: {
        cgst: 2,
        sgst: 3
    },
    hmenu: [],
    horder: []
}
Hotels = [h1, h2]

console.log(Hotels)


let obj1 = {
    itemName: "poha",
    price: 20
}
let obj3 = {
    itemName: "Idli",
    price: 30
}

/****************************Add Item to the Menu **s********************************************* */
const additems = (id, obj) => {

    let item = {
        itemName: obj.itemName,
        price: obj.price
    }
    let hotelFlag = false
    for (let i = 0; i < Hotels.length; i++) {
        if (Hotels[i].hid === id) {
            console.log("id matched")
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
        else {
            console.log("id not matched")
        }
    }
}

additems(1, obj1)
additems(2,obj3)

console.log(Hotels[0].hmenu)
console.log(Hotels[1].hmenu)