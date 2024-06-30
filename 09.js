// Write a function to check if a given string is a palindrome.
 
const palindrome = (str) =>{
    const reversed = str.split('').reverse().join('')
    return reversed === str;
}
// console.log(palindrome('level'));