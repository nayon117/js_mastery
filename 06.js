// create a program that checks if a given year is a leap year;

const isLeapYear = (year) =>{
    if((year%4===0 && year%100 !==0) || year%400===0){
        return true;
    }else{
        return false;
    }
}