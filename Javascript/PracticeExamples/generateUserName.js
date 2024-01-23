

let fullName = prompt("Enter Your Name : ")

const generateUserName = (fullName) =>{
    let userName = prompt(`@${fullName}${fullName.length}`)
    return userName
}


let userName = generateUserName(fullName)
console.log(userName)