// Oddish or Evenish if sum of all num is odd then oddish . if sum of all are even then evenish
// like oddOrEven(121) = 1+2+1 = 4  evenish ex:
// like oddOrEven(41) = 4+1 = 5 oddish  ex:

function oddishOrEvenish(num){
  const digits = num.toString().split('').map(Number)
  const sum = digits.reduce((acc,digits)=>acc+digits,0)
  return sum%2===0 ? 'Evenish' : 'Oddish'
}

const sum = oddishOrEvenish(41)
console.log(sum);