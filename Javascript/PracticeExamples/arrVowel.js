

// Create A function which Takes array of String as a Parameter and returns the total number of vowels present in the each string of that array.




let arr = ["Pruthaviraj" , "Akanksha", "Pranjal", "Pratiksha", "Ayesha", "Hanumant", "Abhishek"]

function arrVowelCount (para){
    for(let i =0; i<=para.length; i++){
        let count = 0;
        let str1 = para[i];
        let str = str1.toLowerCase();
        for(let j=0; j<str.length; j++){
            if((str[j]=='a')||(str[j]=='e') || (str[j]=='i') || (str[j]=='o') || (str[j] == 'u')){
                count += 1;
            }
        }
       
         console.log(`The count of vowels present in ${str} is ${count}`)
    }
    return count
}


let r = arrVowelCount(arr)
console.log(r)