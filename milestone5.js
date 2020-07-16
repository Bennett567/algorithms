/*let pays = []
for (var i = 1; i <= 500; i++) {
  pays.push(i)
}
let coins =[[1],[2],[5],[10],[20],[50],[100],[200]]
console.log(coins);
coins[0][1] = 1
coins[1][1] = 2
coins[2][1] = 1
coins[3][1] = 1
coins[4][1] = 2
coins[5][1] = 1
coins[][1] = 1
coins[7][1] = 2
console.log(coins)
find(499,coins)
function find(num,mat) {
  //console.log(num);
  //console.log(mat);
  for (var i = 7; i >= 0; i--) {
    //console.log(mat[i][0]);
    //console.log(num/(mat[i][0]));
    if (num == 0) {
      return true
    }
    console.log(num/mat[i][0]);
    console.log(num);
    if (num/(mat[i][0]) >= 2 && mat[i][1]==2) {
      num -=(mat[i][0]*2)
    }else if(num/mat[i][0] >=1){
      num -= (mat[i][0])
    }
    //console.log(i);

  }
  //console.log(num);
}*/

const readline = require("readline-sync");
let matrixc = [];
var matrix = [];
for (var i = 0; i < 5; i++) {
  matrix[i] = new Array(5);
}
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 5; j++) {
    matrix[i][j] = 0;
  }
}
matrix[1][0] = 1;
matrix[2][0] = 1;
matrix[3][0] = 1;
matrix[0][1] = 2;
matrix[0][2] = 2;
matrix[0][3] = 2;
console.log(matrix);

function copy (arr){
  let mcopy 
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      mcopy[i][j] = matrix[i][j]
    }
  }
  return mcopy
}

function should(mo, ve, player, arr){
  if(player == 1){
    if (ve == 4){ 
      return false
    }
    if(arr[mo-1][ve+1] == 2){
      return false;
    }
  }else if(player == 2){
    if(mo == 4){
      return false
    }
    if(arr[mo+1][ve-1] == 2){
      return false;
    }
  }
  return true

function check(mo, ve, player, arr) {
  if (player == 1) {
    if (arr[mo][ve + 1] == 0) {
      return 1;
    } else if (arr[mo][ve + 2] == 0) {
      return 2;
    }
  } else {
    if(mo == 4){
      return 0
    }
    if (arr[mo + 1][ve] == 0) {
      return 1;
    } else if (arr[mo + 2][ve] == 0 && arr[mo + 1][ve] == 1) {
      return 2;
    }
  }
  return 0;
}

function move(mo, ve, player, arr) {
  if (player == 1) {
    switch (check(mo, ve, player, arr)) {
      case 1:
        arr[mo][ve] = 0;
        arr[mo][ve + 1] = 1;
        return 1;
        break;
      case 2:
        arr[mo][ve] = 0;
        arr[mo][ve + 2] = 1;
        return 2;
        break;
      case 0:
        console.log("invalid move");
        return 0
        break;
    }
  } else if (player == 2) {
    switch (check(mo, ve, player, arr)) {
      case 1:
        arr[mo][ve] = 0;
        arr[mo + 1][ve] = 2;
        return 1;
        break;
      case 2:
        arr[mo][ve] = 0;
        arr[mo + 2][ve] = 2;
        return 2;
        break;
      case 0:
        console.log("invalid move");
        return 0
        break;
    }
  }
}
let win1 = 0;
function win(arr) {
  if (arr[1][4] == 1 && arr[2][4] == 1 && arr[3][4] == 1) {
    console.log("P1 won!");
    win1 = 1;
    return false;
  } else if (arr[4][1] == 2 && arr[4][2] == 2 && arr[4][3] == 2) {
    console.log("P2 won!");
    win1 = 2;
    return false;
  }
  return true;
}
let first
let p1move = [0,0,0]
let p2move = [0,0,0]

let answer;
let answer2;
let p1movec = [0,0,0]
let p2movec = [0,0,0]
let p1inv = false;
let p2inv = false;
let playerans = readline.question("Which player are you? \n");
let player1 = parseInt(playerans, 10);
while (win(matrix)) {
  p1inv = false;
  if (!p2inv) {
    answer = readline.question("P1 move: \n");
    switch (parseInt(answer, 10)) {
      case 1:
        if (!(check(1, p1move[0], 1, matrix) == 0)) {
          p1move[0] += move(1, p1move[0], 1, matrix);
        } else {
          console.log("invalid");
          p1inv = true;
        }
        break;
      case 2:
        if (!(check(2, p1move[1], 1, matrix) == 0)) {
          p1move[1] += move(2, p1move[1], 1, matrix);
        } else {
          console.log("invalid");
          p1inv = true;
        }
        break;
      case 3:
        if (!(check(3, p1move[2], 1, matrix) == 0)) {
          p1move[2] += move(3, p1move[2], 1, matrix);
        } else {
          console.log("invalid");
          p1inv = true;
        }
        break;
      default:
        console.log("invalid");
        p1inv = true;
        break;
    }
  }
  p2inv = false;
  console.log(matrix);
  if (!p1inv) {
    answer2 = readline.question("P2 move: \n");
    switch (parseInt(answer2, 10)) {
      case 1:
        if (check(p2move[0], 1, 2, matrix) == 1 || check(p2move[0], 1, 2, matrix) == 2) {
          p2move[0] += move(p2move[0], 1, 2, matrix);
        } else {
          console.log("invalid");
          p2inv = true;
        }
        break;
      case 2:
        if (!(check(p2move[1], 2, 2, matrix) == 0)) {
          p2move[1] += move(p2move[1], 2, 2, matrix);
        } else {
          console.log("invalid");
          p2inv = true;
        }
        break;
      case 3:
        if (!(check(p2move[2], 3, 2, matrix) == 0)) {
          p2move[2] += move(p2move[2], 3, 2, matrix);
        } else {
          console.log("invalid");
          p2inv = true;
        }
        break;
      default:
        console.log("invalid");
        p2inv = true;
        break;
    }
  }
  console.log(matrix);
}
/*PlayAnyGame(X, player):
  if player has already won in state X
    return Good
  if player has already lost in state X
    return Bad
  for all legal moves X   Y
    if PlayAnyGame(Y,¬player) = Bad
      return Good
return Bad*/
function findgood(arr, p1c, p2c) {
  if (player1 == 1) {
    if (win1 == 1) {
      return true;
    } else if (win1 == 2) {
      return false;
    }
  } else if (player1 == 2) {
    if (win1 == 2) {
      return true;
    } else if (win1 == 1) {
      return false;
    }
  }
  if (player1 == 1) {
    if (matrix[1][0] == matrix[2][0] == matrix[3][0] == 1){
      first = Math.floor((Math.random()+0.5)*3)
      console.log(first)
      p1movec[0] += move(first, p1movec[0], 1, arr)
    }
    p2c[0] = p2move[0];
    p2c[1] = p2move[1];
    p2c[2] = p2move[2];
    let cop = copy(arr)
    //meg kell nézni tudunk e lépni a jelen cuccal
    //folytassuk később?
    
    p1movec[0] += move(1, p1movec[0], 1, arr)
    player1 = 2
    findgood(cop)
    p1movec[1] += move(2, p1movec[0], 1, arr)
    p1movec[2] += move(3, p1movec[0], 1, arr)
    findgood
  } else if (player1 == 2) {
    //második ként kezdünk vagy második játkos lépéseit nézzük
  }
}
