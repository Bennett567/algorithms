let middle = [];
let end = [];
let start = [];
let n = 2
function move(from, to){
/*  console.log(" ");
  console.log(end);
  console.log(middle);
  console.log(start);
  console.log();*/
  to.push(from[from.length-1]);
  from.splice(from.length-1, 1);



}
function hanoi(count, source, aux, destination) {


    if (count === 1) {
      move(source, destination);
    }
    else {
        hanoi(count - 1, source, destination, aux);
        move(source, destination);
        hanoi(count - 1, aux, source, destination);
    }
}
if(start.length == 0){
  for (let i = 1; i <= n; i++) {
    start.push(i)
  }
}
hanoi(n, start, middle, end)
/*console.log(" ");
console.log(end);
console.log(middle);
console.log(start);*/
