// create a function that display current data and time in a specific format

const getCurrentDateAndTime = () =>{
    let currentDate = new Date()
    return currentDate.toLocaleString()
}

console.log(getCurrentDateAndTime());