//write a recursive function to calculate the factorial of a given number
const factorial = (n) =>{
    if(n===0 || n===1) return 1;
    return n*(factorial(n-1))
}

console.log(factorial(5))
