// <!-- write a regular expression to validate an email address -->
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

function validateEmail (email){
    return emailRegex.test(email)
}

const email = "nayon@gmail.com"
console.log(validateEmail(email));