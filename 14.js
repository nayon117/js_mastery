// create a function that generates a random number between a given range

function getRandomNumber (min,max) {
    return Math.floor(Math.random()*(max-min+1))+min
}