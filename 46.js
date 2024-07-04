// create a function that takes a array of numbers and return 'Boom' . if the digit 7 appears in the array.otherwise return there is no 7 in the array.
// sevenBoom([1,6,7,9]) -- Boom
// sevenBoom([34,47,56,45])--Boom

function sevenBoom (arr) {
  for(const num of arr){
    if(num.toString().includes("7")){
        return "Boom"
    }else{
        return "there is no 7 in the array"
    }
  }
}

console.log(sevenBoom([4,6,8,8]));