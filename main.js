let check_X = true;
let check_0 = false;

function line1_column1() {
    let value1_1 = document.getElementById("l1c1").value;
    if (value1_1 == "" && check_X == true) {
       value1_1 = document.getElementById("l1c1").value = "X";
       check_X = false;
       check_0 = true;
    } else if (value1_1 == "" && check_X == false) {
       value1_1 = document.getElementById("l1c1").value = "0";
       check_0 = false;
       check_X = true;
    }
    let line = 1;
    let column = 1;
    checkSquare(line, column, value1_1);
}

function line1_column2() {
    let value1_2 = document.getElementById("l1c2").value;
    if (value1_2 == "" && check_X == true) {
        value1_2 = document.getElementById("l1c2").value = "X";
        check_X = false;
        check_0 = true;
    } else if (value1_2 == "" && check_X == false) {
        value1_2 = document.getElementById("l1c2").value = "0";
        check_0 = false;
        check_X = true;
    }
    let line = 1;
    let column = 2;
    checkSquare(line, column, value1_2);
}

function line1_column3() {
    let value1_3 = document.getElementById("l1c3").value;
    if (value1_3 == "" && check_X == true) {
        value1_3 = document.getElementById("l1c3").value = "X";
        check_X = false;
        check_0 = true;
    } else if (value1_3 == "" && check_X == false) {
        value1_3 = document.getElementById("l1c3").value = "0";
        check_0 = false;
        check_X = true;
    }   
    let line = 1;
    let column = 3;
    checkSquare(line, column, value1_3);
}

function line2_column1() {
    let value2_1 = document.getElementById("l2c1").value;
    if (value2_1 == "" && check_X == true) {
        value2_1 = document.getElementById("l2c1").value = "X";
        check_X = false;
        check_0 = true;
    } else if (value2_1 == "" && check_X == false) {
        value2_1 = document.getElementById("l2c1").value = "0";
        check_0 = false;
        check_X = true;
    }
    let line = 2;
    let column = 1;
    checkSquare(line, column, value2_1);
}

function line2_column2() {
    let value2_2 = document.getElementById("l2c2").value;
    if (value2_2 == "" && check_X == true) {
        value2_2 = document.getElementById("l2c2").value = "X";
        check_X = false;
        check_0 = true;
    } else if (value2_2 == "" && check_X == false) {
        value2_2 = document.getElementById("l2c2").value = "0";
        check_0 = false;
        check_X = true;
    }
    let line = 2;
    let column = 2;
    checkSquare(line, column, value2_2);
}

function line2_column3() {
    let value2_3 = document.getElementById("l2c3").value;
    if (value2_3 == "" && check_X == true) {
        value2_3 = document.getElementById("l2c3").value = "X";
        check_X = false;
        check_0 = true;
    } else if (value2_3 == "" && check_X == false) {
        value2_3 = document.getElementById("l2c3").value = "0";
        check_0 = false;
        check_X = true;
    }
    let line = 2;
    let column = 3;
    checkSquare(line, column, value2_3);
}

function line3_column1() {
    let value3_1 = document.getElementById("l3c1").value;
    if (value3_1 == "" && check_X == true) {
        value3_1 = document.getElementById("l3c1").value = "X";
        check_X = false;
        check_0 = true;
    } else if (value3_1 == "" && check_X == false) {
        value3_1 = document.getElementById("l3c1").value = "0";
        check_0 = false;
        check_X = true;
    }
    let line = 3;
    let column = 1;
    checkSquare(line, column, value3_1);
}

function line3_column2() {
    let value3_2 = document.getElementById("l3c2").value;
    if (value3_2 == "" && check_X == true) {
        value3_2 = document.getElementById("l3c2").value = "X";
        check_X = false;
        check_0 = true;
    } else if (value3_2 == "" && check_X == false) {
        value3_2 = document.getElementById("l3c2").value = "0";
        check_0 = false;
        check_X = true;
    }
    let line = 3;
    let column = 2;
    checkSquare(line, column, value3_2);
}

function line3_column3() {
    let value3_3 = document.getElementById("l3c3").value;
    if (value3_3 == "" && check_X == true) {
        value3_3 = document.getElementById("l3c3").value = "X";
        check_X = false;
        check_0 = true;
    } else if (value3_3 == "" && check_X == false) {
        value3_3 = document.getElementById("l3c3").value = "0";
        check_0 = false;
        check_X = true;
    }
    let line = 3;
    let column = 3;
    checkSquare(line, column, value3_3);
}

let winner_line_1_X = 0;
let winner_line_1_0 = 0;
let winner_line_2_X = 0;
let winner_line_2_0 = 0;
let winner_line_3_X = 0;
let winner_line_3_0 = 0;
let winner_column_1_X = 0;
let winner_column_1_0 = 0;
let winner_column_2_X = 0;
let winner_column_2_0 = 0;
let winner_column_3_X = 0;
let winner_column_3_0 = 0;
let diagonal_1_X = 0;
let diagonal_1_0 = 0;
let diagonal_2_X = 0;
let diagonal_2_0 = 0;
let draw = 0;

function checkSquare(x, y, z) { 
   if (x == 1 && z == "X") {
    ++winner_line_1_X;
   } else if (x == 1 && z != "X") {
    winner_line_1_X = 0;
   }

   if (x == 1 && z == "0") {
    ++winner_line_1_0;
   } else if (x == 1 && z != "0") {
    winner_line_1_0 = 0;
   }

   if (x == 2 && z == "X") {
    ++winner_line_2_X;
   } else if (x == 2 && z != "X") {
    winner_line_2_X = 0;
   }

   if (x == 2 && z == "0") {
    ++winner_line_2_0;
   } else if (x == 2 && z != "0") {
    winner_line_2_0 = 0;
   }


   if (x == 3 && z == "X") {
    ++winner_line_3_X;
   } else if (x == 3 && z != "X") {
    winner_line_3_X = 0;
   }

   if (x == 3 && z == "0") {
    ++winner_line_3_0;
   } else if (x == 3 && z != "0") {
    winner_line_3_0 = 0;
   }

   if (y == 1 && z == "X") {
    ++winner_column_1_X;
   } else if (y == 1 && z != "X") {
    winner_column_1_X = 0;
   }

   if (y == 1 && z == "0") {
    ++winner_column_1_0;
   } else if (y == 1 && z != "0") {
    winner_column_1_0 = 0;
   }

   if (y == 2 && z == "X") {
    ++winner_column_2_X;
   } else if (y == 2 && z != "X") {
    winner_column_2_X = 0;
   }

   if (y == 2 && z == "0") {
    ++winner_column_2_0;
   } else if (y == 2 && z != "0") {
    winner_column_2_0 = 0;
   }

   if (y == 3 && z == "X") {
    ++winner_column_3_X;
   } else if (y == 3 && z != "X") {
    winner_column_3_X = 0;
   }

   if (y == 3 && z == "0") {
    ++winner_column_3_0;
   } else if (y == 3 && z != "0") {
    winner_column_3_0 = 0;
   }

   if (x == 1 && y == 1 && z == "X") {
    ++diagonal_1_X;
   } else if (x == 2 && y == 2 && z == "X") {
    ++diagonal_1_X
   } else if (x == 3 && y == 3 && z == "X") {
    ++diagonal_1_X;
   }

   if (x == 1 && y == 1 && z == "0") {
    ++diagonal_1_0;
   } else if (x == 2 && y == 2 && z == "0") {
    ++diagonal_1_0;
   } else if (x == 3 && y == 3 && z == "0") {
    ++diagonal_1_0;
   }

   if (x == 1 && y == 3 && z == "X") {
    ++diagonal_2_X;
   } else if (x == 2 && y == 2 && z == "X") {
    ++diagonal_2_X;
   } else if (x == 3 && y == 1 && z == "X") {
    ++diagonal_2_X;
   }

   if (x == 1 && y == 3 && z == "0") {
    ++diagonal_2_0;
   } else if (x == 2 && y == 2 && z == "0") {
    ++diagonal_2_0;
   } else if (x == 3 && y == 1 && z == "0") {
    ++diagonal_2_0;
   }
   if (winner_line_1_X == 3 || winner_line_1_0 == 3 || winner_line_2_X == 3 ||  winner_line_2_0 == 3 || winner_line_3_X == 3 || winner_line_3_0 == 3 || winner_column_1_X == 3 || winner_column_1_0 == 3 || winner_column_2_X == 3 || winner_column_2_0 == 3 || winner_column_3_X == 3 || winner_column_3_0 == 3 || diagonal_1_X == 3 || diagonal_1_0 == 3 || diagonal_2_X == 3 || diagonal_2_0 == 3) {
    stopGame();
    restartButton_Win();
   }
}

function stopGame() {
    document.addEventListener("click", handler, true);
    function handler(e) {
        if (e.target.className=="square") {
          e.stopPropagation();
          e.preventDefault();
        }
      }
}

function restartButton_Win() {
    let btn = document.createElement("button");
     btn.innerHTML = '<button onclick="restartGame()">WINNER <img src="https://img.icons8.com/3d-plastilina/69/null/restart--v1.png"/></button>';
     document.getElementById("restartButton").appendChild(btn);
}

function restartGame() {
    location.reload();
}
