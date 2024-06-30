// write a function that calculates the factorial of a given number

const factorial = (num) =>{
    if(num===0 || num===1){
        return 1;
    }
    else{
        let fact =1 ;
        for(let i=1; i<=num; i++){
            fact *=i;
        }
        return fact;
    }
}