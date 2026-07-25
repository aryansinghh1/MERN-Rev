// let arr = [1,2]

// arr.push(3);
// arr.push(4);
// arr.shift();
// arr.unshift(1);

// for(let i = 0 ; i<arr.length; i++){
//     console.log(arr[i]);
// }

// let ans = arr.map((num)=>{
//     return num*2;
// })

// console.log(ans);

// let name = "Aryan";

// console.log(`Hello ${name}`);

//////////////////////////////////////////////////////////

//Find max element in arr

function findMax(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(findMax(arr));
console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8]));





