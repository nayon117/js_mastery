// Given a string reverse all the words which have odd length.the even length words are not changed.
// reverseOdd('Apple') => length 5 so result elppA   ex;
// reverseOdd('one two four') =>  result eno owt four   ex;

function reverseOdd(str) {
   
    function reverseString(str){
    return str.split('').reverse().join('')
   }

   const words = str.split(' ')
   for(let i=0; i<words.length; i++){
    if(words[i].length%2 !==0){
        words[i] = reverseString(words[i])
    }
   }
   return words.join(' ')
}

const result = reverseOdd('Apple')
const result2 = reverseOdd('one two four')
console.log(result,result2);