// create a function that takes a month and year (as integer ) and returns the number of days in that month.
// days (2,2018) -- 28 day 

const days = (month,year) =>{
 
    const isLeapYear = (year) => {
        return ((year%4===0 && year%100 !==0) || year%400===0)
    }

    if(month===2) {
        return isLeapYear(year)? 29 : 28
    }else if([4,6,9,11].includes(month)){
        return 30;
    }else{
        return 31;
    }
}

console.log(days (2,2024));