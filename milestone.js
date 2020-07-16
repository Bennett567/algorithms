//1/1
let p = 0;
let num = 7;
let array1 = [1,2,3,4,5,6,7,8,9,10,50];
while (array1[p] != num) {
  p++
}
console.log(p);

//1/2
var unsortedArr = [340, 1, 3, 3, 76, 23, 4, 12, 122, 7642, 646];
function merge(leftArr, rightArr) {
let sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr[0]);
      leftArr = leftArr.slice(1)
   } else {
      sortedArr.push(rightArr[0]);
      rightArr = rightArr.slice(1)
     }
   }
  while (leftArr.length)
    sortedArr.push(leftArr.shift());
  while (rightArr.length)
    sortedArr.push(rightArr.shift());
  return sortedArr;
}
function mergesort(arr) {
  if (arr.length < 2) {
    return arr; }
  else {
    let midpoint = parseInt(arr.length / 2);
    let leftArr   = arr.slice(0, midpoint);
    let rightArr  = arr.slice(midpoint, arr.length);
    return merge(mergesort(leftArr), mergesort(rightArr));
  }
}
console.log('This should be the sorted array!')
console.log(mergesort(unsortedArr));
