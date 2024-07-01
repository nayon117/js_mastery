// remove all occurences of a specific element from an array

const removeElementFromArray = (arr,target) =>{
   return arr.filter(item=>item !==target)
}



let arr = [10,15,10,20,10,25,30,10,35,40];
let target = 10;
console.log(removeElementFromArray(arr,target));

