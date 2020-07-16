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
coins[6][1] = 1
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

function check(mo, ve, player, arr) {
  if (player == 1) {
    if (arr[mo][ve + 1] == 0) {
      return 1;
    } else if (arr[mo][ve + 2] == 0) {
      return 2;
    }
  } else {
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
let poo = 0,
  por = 0,
  poh = 0,
  pto = 0,
  ptr = 0,
  pth = 0;
let answer;
let answer2;
let pooc = 0,
  porc = 0,
  pohc = 0,
  ptoc = 0,
  ptrc = 0,
  pthc = 0;
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
        if (!(check(1, poo, 1, matrix) == 0)) {
          poo += move(1, poo, 1, matrix);
        } else {
          console.log("invalid");
          p1inv = true;
        }
        break;
      case 2:
        if (!(check(2, por, 1, matrix) == 0)) {
          por += move(2, por, 1, matrix);
        } else {
          console.log("invalid");
          p1inv = true;
        }
        break;
      case 3:
        if (!(check(3, poh, 1, matrix) == 0)) {
          poh += move(3, poh, 1, matrix);
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
        if (check(pto, 1, 2, matrix) == 1 || check(pto, 1, 2, matrix) == 2) {
          pto += move(pto, 1, 2, matrix);
        } else {
          console.log("invalid");
          p2inv = true;
        }
        break;
      case 2:
        if (!(check(ptr, 2, 2, matrix) == 0)) {
          ptr += move(ptr, 2, 2, matrix);
        } else {
          console.log("invalid");
          p2inv = true;
        }
        break;
      case 3:
        if (!(check(pth, 3, 2, matrix) == 0)) {
          pth += move(pth, 3, 2, matrix);
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
function findgood(movep1, movep2) {
  if (matrixc == []) {
    matrixc = [
      new Array(5),
      new Array(5),
      new Array(5),
      new Array(5),
      new Array(5),
    ];
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        matrixc[i][j] = matrix[i][j];
      }
    }
  }
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
    movep1[0] = 1;
    move(1, pooc, player1, matrixc);
    move(ptoc, 1, 2, matrixc);
    movep2[0] = 1;
  } else if (player1 == 2) {
    movep1[0] = answer;
  }
}
