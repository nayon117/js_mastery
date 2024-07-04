// Multidimentional Array
// create a js function that generate 2d array with the specified number of rows and column.each element in the array should contain the sum of it's row and column.once you created the array write two additional function to display the array in it's original form and in reverse.


function createMultidimentionalArray(rows,columns){
   let arr = []

   for(let i=0; i<rows; i++){
    arr.push(new Array(columns))
    for(let j=0; j<columns;j++){
        arr[i][j] = i + j
    }
   }
   return arr;
}

function display(arr){
    for(let i=0; i<arr.length; i++){
        console.log(arr[i].join(" "));
    }
}
function reverseDisplay(arr){
    for(let i=arr.length-1; i>=0; i--){
        console.log(arr[i].reverse().join(" "));
    }
}

const rows = 3;
const columns = 4;
const multiArray = createMultidimentionalArray(rows,columns)
console.log('original array');
display(multiArray)

console.log('reverse arrray');
reverseDisplay(multiArray)
