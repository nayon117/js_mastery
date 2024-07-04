// Given a string reverse all the words which have odd length.the even length words are not changed.
// reverseOdd('Apple') => length 5 so result elppA   ex;

function reverseOdd(str) {
    if(str.length%2===1){
        return str.split('').reverse().join('')
    }else{
        return str;
    }
}

const result = reverseOdd('Apple')
const result2 = reverseOdd('Banana')
console.log(result,result2);