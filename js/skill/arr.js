const arr = [99, 0, 33, 1, 2];  
const arr1 = [99, 0, 33, [101, 202], 1, 2]; 

const min = Math.min(...arr);
const max = Math.max(...arr);
console.log(min, max);

// function sortNumber(a,b)
// {return a - b}
// console.log(arr.sort(sortNumber)[0],arr.sort(sortNumber)[arr.length-1])

// let min = arr[0];
// let max = arr[0];
// for(let i = 1 ;i < arr.length; i++ ){
//   if(arr[i] < min){
//     min = arr[i]
//   }
//   if(arr[i] > max) {
//     max = arr[i]
//   }
// }
// console.log(min,max);