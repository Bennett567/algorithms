function quicksort(A, lo, hi){
    if (lo < hi){
        let partition_border = hoare(A, lo, hi)
        quicksort(A, lo, partition_border)
        quicksort(A, partition_border + 1, hi)
    }
}

function hoare(A, lo, hi){
    let pivot = A[Math.floor((hi + lo) / 2)]
    let i = lo
    let j = hi
    while (true) {
      while (A[i] < pivot){
          i++
      }
      while (A[j] > pivot){
          j--
      }
      if(i >= j){
        return j
      }
      c++
      console.log("swap");
      swap(A,i,j)
      i++
      j--
    }
}
function quicksort1(A, lo, hi){
    if (lo < hi){
        let p = lomuto(A, lo, hi)
        quicksort(A, lo, p - 1)
        quicksort(A, p + 1, hi)
    }
}

function lomuto(A, lo, hi){
  let pivot = lo;
  let i = A[hi];

  for (let j = lo; j < hi; j++) {
    if (arr[j] < i) {
      c1++
      console.log("swap1");
      swap(arr, pivot, j);
      pivot++
    }
  }
  c1++
  console.log("swap1");
  swap(arr, pivot, hi);
return pivot;
}

function swap(B,c,d){
  let b = B[c];
  B[c] = B[d];
  B[d] = b;
}
let c = 0;
let c1 = 0;
let arr = [1,2,3,4,5,7,6,8,9,10,11,12]
let arr1 = [1,2,3,4,5,7,6,8,9,10,11,12]
quicksort(arr,0,11)
quicksort1(arr1,0,11)
console.log(arr + " count:"+ c);
console.log(arr1 + " count:"+ c1);

let arr = [];
for (var i = 1; i <= 64; i++) {
  arr.push(i)
}
function join (A,B,C,l,m,r){
  let i = 0
  for(i = 0; i <= m - l; i++){
      A[i] = B[i];
  }
  for(let j = 0; j < r - m; j++){
      A[i + j] = C[j];
  }
}
function split(A,B,C,l,m,r)
{
    for (let i = 0; i <= m - l; i++){
        B[i] = A[i * 2];
    }
    for (let i = 0; i < r - m; i++){
        C[i] = A[i * 2 + 1];
    }
}

function generateWorstCase(A,l,r){
  if(l < r){
      let m = l + (r - l) / 2;

      // create two auxillary arrays
      let B=[m - l + 1];
      let C=[r - m];

      // Store alternate array elements in left
      // and right subarray
      split(A, B, C, l, m, r);

      // Recurse first and second halves
      generateWorstCase(B, l, m);
      generateWorstCase(C, m + 1, r);

      // join left and right subarray
      join(A, B, C, l, m, r);
  }
}

console.log("Sorted array is ");
console.log(arr);

    // generate Worst Case of Merge Sort
generateWorstCase(arr, 0, arr.length-1);
console.log("Input array that will result in worst case of merge sort is");
console.log(arr);

let arr = [];
for (var i = 1; i <= 63; i++) {
  arr.push(i);
}

let result = [];
result = a(0, arr);
result.push(64)
console.log(result);
function a(prev, list){
  if (list.length > 2) {
    let index = mid_index(list);
    let mid = list[index];
    let bal = []
    let jobb = []
    for (let i = 0; index > i; i++) {
      bal.push(list[i])
    }
    for (let i = index+1; i < list.length; i++) {
      jobb.push(list[i])
    }
    //console.log(bal);
    //console.log(jobb);
    let first = a(mid, bal)
    let second = a(mid, jobb)
    let newlist = []
    for (var i = 0; i < first.length; i++) {
      newlist.push(first[i])
    }
    for (var i = 0; i < second.length; i++) {
      newlist.push(second[i])
    }
    console.log(newlist);
    if (mid < prev) {
      newlist.push(mid)
    }
    if (mid > prev) {
      newlist.unshift(mid)
    }
    return newlist;
  }
  return list;
}
function mid_index(list){
  return Math.floor(list.length / 2);
}
