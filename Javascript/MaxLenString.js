
function max (para){
    let maxlen = para[0].length;
    let maxString = para[0]

    for(let i=0; i<para.length; i++){
        if(maxlen < para[i].length) {
            maxlen = para[i].length
            maxString = para[i]
        }
    }
    return {maxlen, maxString}
}



let arr = ['Pratiksha', 'Abhishek', 'Vaibhav', 'Pruthaviraj', 'Sid', 'Abhinandan']
console.log(max(arr))