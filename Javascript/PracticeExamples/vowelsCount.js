
// Create A function which Takes String as a Parameter and returns the total number of vowels present in that string.




// Normal Function -------->

function vowel (para1){

    let str = para1.toLowerCase();
    let count = 0;
    for(let i=0; i<str.length; i++){

        if((str[i]=='a')||(str[i]=='e') || (str[i]=='i') || (str[i]=='o') || (str[i] == 'u')){
            count += 1;
        }
    }

    return count;
}

let count = vowel("Pruthaviraj")
console.log(count)


// Arrow Function ---->

// const vowel  = (para1) => {
//     let str = para1.toLowerCase()
//     let count = 0

//     for(let i=0; i<str.length; i++){
//         if((str[i]=='a')||(str[i]=='e') || (str[i]=='i') || (str[i]=='o') || (str[i] == 'u')){
//             count += 1;
//         }
//     }

//     return count
// }


// let count = vowel("Parameter")
// console.log(count)