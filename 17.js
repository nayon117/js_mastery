// find the largest element in the array using the reduce method

const findLargestElement = (arr) => {
  return arr.reduce((max, current) => 
    current > max ? current : max );
};
let arr = [10,15,20,25,30,35,40];
console.log(findLargestElement(arr));

