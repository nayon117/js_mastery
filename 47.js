// create a function that takes a string as an argument . the function must return a string containing 1s or 0s based on the string arguments word.if any word in the string are not equal to zero or One(case sensitive) you should ignore it.the return string length should be a multiple of 8.if the string is not multiple of 8 you should remove the number in the excess.


function textToNumber(str){
    const words = str.split(' ').filter(word=>word.toLowerCase()==='zero' || word.toLowerCase()==='one')
    // console.log(words);

    let binaryString= words.map((word)=>{
        return word.toLowerCase() === 'one' ? '1' : '0'
    }).join('')

    const excessLength = binaryString.length % 8;
    if(excessLength !== 0) {
         binaryString=binaryString.slice(0,0)
    }
    return binaryString;
}

console.log(textToNumber("zero one zero ONE zero one zero one"));
console.log(textToNumber("zero one zero ONE zero one zero one zero one"));
console.log(textToNumber("zero one zero ONE zero one zero three"));