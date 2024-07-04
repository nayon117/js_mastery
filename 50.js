// given two integer representing the numerator and denominator of a fraction , return the fraction in string format.

const fraction = (numerator,denominator) =>{
    const result =  numerator/denominator
    return result.toString();
}

console.log(fraction(1,2));