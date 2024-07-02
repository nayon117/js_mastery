// create a function using closures that increments and return the counter on each call

const createCounter = () =>{
    let count = 0;
    return ()=>{
        return ++count;
    }
}
let counter = createCounter()
console.log(counter());
console.log(counter());
console.log(counter());
