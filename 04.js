// string manupulation: write a function that takes a string & returns the reversed version of it.

let str = "Hello world"
function reverseString (str) {
    return str.split('').reverse().join('')
}