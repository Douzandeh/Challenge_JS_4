// * Challeng: Remove duplicates in an Array
const arr = [1, 2, 2, 3, 4, 5, 3, 6, 6, 7];
const newArr = [...new Set(arr)];
console.log(newArr);
