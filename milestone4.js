//This is Javascript like all my other codes
let sen = "The cake is a lie."
let sena = []
sena = sen.toLowerCase().split(" ")
console.log(sena);
sena.sort()
console.log(sena);

/*let nums = [1,2,3,4,5,6,7,8,9,10]
function shuffle(array) {
    let i = array.length;
    let j = 0;
    let temp;
    while (i--) {
      j = Math.floor(Math.random() * (i+1)); // swap randomly chosen element with current element
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
}
shuffle(nums)
console.log(nums);

function scale(s1,s2){
  if(s1>s2){
    return "bigger"
  }else if(s2>s1){
    return "smaller"
  }else if(s1 == s2){
    return "equal"
  }
}
function side(s,e){
  let side = 0
  for (let i = s-1; i < e; i++) {
    //console.log(i);
    side += nums[i]
  }
   return side
}

if (scale(nums[0],nums[1]) == "bigger") {
  console.log("bigger");
  small(1,nums,2)
}else{
  console.log("smaller");
  big(0,nums,2)
}
function small(num,arr,comp){
  console.log(scale(arr[num],arr[comp]));
  if(scale(arr[num],arr[comp])=="smaller" && num != arr.length){
    small[num+1, arr, comp+1]
  }else{
    small[num, arr, comp+1]
  }
}
function big(num,arr,comp){
  console.log(scale(arr[num],arr[comp]));
  if(scale(arr[num],arr[comp])=="bigger" && num != arr.length){
    big[num+1, arr, comp+1]
  }else{
    big[num+1, arr, comp+1]
  }
}*/
