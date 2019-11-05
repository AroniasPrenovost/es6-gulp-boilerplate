// game point count
var player1 = "Player 1",
    player2 = "Player 2",
    message = document.getElementById("message"),
    p1ScoreCount = 0, 
    p2ScoreCount = 0, 
    p1ScoreBox = document.getElementById('p1score'),
    p2ScoreBox = document.getElementById('p2score'),
    defaultSlotColor = "rgb(236, 240, 241)",
    transparent = 'transparent',
    p1Color = "rgb(51, 162, 218)",
    p2Color = "rgb(996, 100, 10)",
    noColor = "#FFF",
    slots = document.querySelectorAll(".four-slot"),
    resetGame = document.getElementById("resetButton"),
    resetPoints = document.getElementById("resetPoints");

    p1ScoreBox.style.background = p1Color;

// for use in slot animation 
function setIntervalLimited(callback, interval, x) {
    for (var i = 0; i < x; i++) {
        setTimeout(callback, i * interval);
    }
}

// validate board 
function connectFour(board, connect_length) {

  var upDiagonal = board,
  boardLength = board.length,
  diagdownboard = board,
  maxIndex = board.length - 3,
  rowLength = board[0].length,
  horizonLength = rowLength - 4,
  rowIndexes = board[0].length - 1,
  mergedArray = [].concat.apply([], board),
  diagonalDownBoard = board,
  num_position = board.indexOf(board[i]);

  // check array for consecutive matches
  function hasConsecutive(arr, amount) {

    var last = null;
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] != last) {
        last = arr[i];
        count = 0;
      }   

      // ignore default slot color  
      if (arr[i] != defaultSlotColor) {
        count += 1;
      }

      if (amount <= count) { // amount = 4
        return true;
      }
    }    
    return false;
  }

  // check for matches across each row
  for (var i = 0; i < boardLength; i++) {
    var lineIndex = board.indexOf(board[i]);
    if (hasConsecutive(board[i], connect_length) === true) {
      console.log('true - 4 across ' + lineIndex);
      return true;
    }
  }

  // check diagonal matches, from the bottom going up and across
  var upDiagonals = [
    [upDiagonal[5][0], upDiagonal[4][1], upDiagonal[3][2], upDiagonal[2][3]],
    [upDiagonal[5][1], upDiagonal[4][2], upDiagonal[3][3], upDiagonal[2][4]],
    [upDiagonal[5][2], upDiagonal[4][3], upDiagonal[3][4], upDiagonal[2][5]],
    [upDiagonal[5][3], upDiagonal[4][4], upDiagonal[3][5], upDiagonal[2][6]],
    [upDiagonal[4][0], upDiagonal[3][1], upDiagonal[2][2], upDiagonal[1][3]],
    [upDiagonal[4][1], upDiagonal[3][2], upDiagonal[2][3], upDiagonal[1][4]],
    [upDiagonal[4][2], upDiagonal[3][3], upDiagonal[2][4], upDiagonal[1][5]],
    [upDiagonal[4][3], upDiagonal[3][4], upDiagonal[2][5], upDiagonal[1][6]],
    [upDiagonal[3][0], upDiagonal[2][1], upDiagonal[1][2], upDiagonal[0][3]],
    [upDiagonal[3][1], upDiagonal[2][2], upDiagonal[1][3], upDiagonal[0][4]],
    [upDiagonal[3][2], upDiagonal[2][3], upDiagonal[1][4], upDiagonal[0][5]],
    [upDiagonal[3][3], upDiagonal[2][4], upDiagonal[1][5], upDiagonal[0][6]],
  ];

  for (var q = 0; q < upDiagonals.length; q++) {
    var collocation = upDiagonals.indexOf(upDiagonals[q]);
    if (hasConsecutive(upDiagonals[q], connect_length) === true) {
      console.log('true - diagonal up ' + collocation);
      return true;
    }
  }

  // create columns from array, n = index
  var vertCount = 0;
  var columns = [];
  var arrayColumn = (arr, n) => arr.map(x => x[n]);
  for (var u = 0; u < rowLength; u++) {
    columns.push(arrayColumn(board, vertCount));
    vertCount++;
  }

  // check for matches across each column
  for (var p = 0; p < rowLength; p++) {
    var columnIndex = columns.indexOf(columns[p]);
    if (hasConsecutive(columns[p], connect_length) === true) {
      console.log('true - across column ' + columnIndex);
      return true;
    }
  }

  // check for matches down + diagonal
  // delete first items from array after each cycle
  diagonalDownRights = [];
  function diagCheck(args) {
    for (var y = 0; y < maxIndex; y++) {
      var diarray = [];
      var vertRowCounter = 0;
      for (var s = 0; s < horizonLength + 1; s++) {
        var downDiagIndex = board.indexOf(board[s]);
        diarray.push(board[y + vertRowCounter][s]);
        vertRowCounter++;
      }
      diagonalDownRights.push(diarray);
    }
  }

  // remove first column from diagdownboard
  function removeColumn(args) {
    args[0].shift();
    args[1].shift();
    args[2].shift();
    args[3].shift();
    args[4].shift();
    args[5].shift();
  }

  diagCheck(diagdownboard);
  removeColumn(diagdownboard);
  diagCheck(diagdownboard);
  removeColumn(diagdownboard);
  diagCheck(diagdownboard);
  removeColumn(diagdownboard);
  diagCheck(diagdownboard);

  // validate this has any matches
  for (var b = 0; b < diagonalDownRights.length; b++) {
    var downRightIndex = diagonalDownRights.indexOf(diagonalDownRights[b]);
    if (hasConsecutive(diagonalDownRights[b], connect_length) === true) {
      console.log('true - diagonal down right' + ' ' + downRightIndex);
      return true;
    }
  }
return false;
}

// reset game and populate board data
function generateBoard() {
  var board = [];
  for (var i = 0; i < slots.length; i++) {
    var slot = slots[i];
    slot.style.backgroundColor = defaultSlotColor;
    var color = slot.style.backgroundColor;

    board.push(JSON.stringify(color));
  }

  count = 0;
  message.innerHTML = player1 + '\'s turn';

  var newBoard = Object.values(board);
  return newBoard;
}

// initialize
generateBoard();

// audit board and create array of color strings
function auditBoard() {
  var board = [];

  for (var i = 0; i < slots.length; i++) {
    var slot = slots[i];

    var color = slot.style.backgroundColor;
    board.push(color);
  }
  board = Object.values(board);

  var formattedBoard = [
    [board[0], board[1], board[2], board[3], board[4], board[5], board[6]],
    [board[7], board[8], board[9], board[10], board[11], board[12], board[13]],
    [board[14], board[15], board[16], board[17], board[18], board[19], board[20]],
    [board[21], board[22], board[23], board[24], board[25], board[26], board[27]],
    [board[28], board[29], board[30], board[31], board[32], board[33], board[34]],
    [board[35], board[36], board[37], board[38], board[39], board[40], board[41]]
  ];
  return formattedBoard;
}

// handles click event for each column 
var g = document.getElementById('columnWrapper');
  for (var i = 0, len = g.children.length; i < len; i++) {
    var count = 0;

    (function(index){

      // hover effect 
      g.children[i].onmouseover = function() {
        var hoverSlots = document.querySelectorAll(".hover-slot");

        if (message.innerHTML === "Player 1's turn") {
          hoverSlots[index].style.backgroundColor = p1Color;
        } else {
          hoverSlots[index].style.backgroundColor = p2Color;
        }

      } 

      g.children[i].onmouseout = function() {
        var hoverSlots = document.querySelectorAll(".hover-slot");
        hoverSlots[index].style.backgroundColor = transparent;

      } 

      g.children[i].onclick = function(){

        

        // have index (column)
        columnPos = index;

        // generate new board 
        var newnewBoard = auditBoard();

        // create columns from array, n = index
        var vertCount = 0;
        var columns = [];
        var arrayColumn = (arr, n) => arr.map(x => x[n]);
        for (var u = 0; u < 7; u++) {
          columns.push(arrayColumn(newnewBoard, vertCount));
          vertCount++;
        }

      // animate token falling to slot 
        var columnLocs = []; 
          switch (columnPos) {
            case 0:
              columnLocs = [slots[0], slots[7], slots[14], slots[21], slots[28], slots[35]];
            break;
            case 1:
              columnLocs = [slots[1], slots[8], slots[15], slots[22], slots[29], slots[36]];
            break;
            case 2:
              columnLocs = [slots[2], slots[9], slots[16], slots[23], slots[30], slots[37]];        
            break;
            case 3:
              columnLocs = [slots[3], slots[10], slots[17], slots[24], slots[31], slots[38]];
            break;
            case 4:
              columnLocs = [slots[4], slots[11], slots[18], slots[25], slots[32], slots[39]];
            break;
            case 5:
              columnLocs = [slots[5], slots[12], slots[19], slots[26], slots[33], slots[40]];
            break;
            case 6:
              columnLocs = [slots[6], slots[13], slots[20], slots[27], slots[34], slots[41]];
            break;
            default:
              return null;
        }

          // loop backwards through vertical columns 
          var specificColumn = columns[columnPos];
          var indexCount = 1;
          for (var z = specificColumn.length - 1; z >= 0; z--) {

            if (specificColumn[z] === defaultSlotColor) {

              var rowPos = 6 - indexCount; 

              // reformat so I can target using rowPos and columnPos
              var formattedSlots = [
                [slots[0], slots[1], slots[2], slots[3], slots[4], slots[5], slots[6]],
                [slots[7], slots[8], slots[9], slots[10], slots[11], slots[12], slots[13]],
                [slots[14], slots[15], slots[16], slots[17], slots[18], slots[19], slots[20]],
                [slots[21], slots[22], slots[23], slots[24], slots[25], slots[26], slots[27]],
                [slots[28], slots[29], slots[30], slots[31], slots[32], slots[33], slots[34]],
                [slots[35], slots[36], slots[37], slots[38], slots[39], slots[40], slots[41]]
              ];

              var freeSlot = formattedSlots[rowPos][columnPos];

              // pass 'columnLocs' as args
              function getAvailableSlots(arg) {
              var freeSlots = []; 
                for (var a = 0; a < arg.length; a++) {
                  if (arg[a].style.backgroundColor === 'rgb(236, 240, 241)') {
                    freeSlots.push(arg[a].style.backgroundColor);
                  }
                }
                return freeSlots.length;
              }
              
              function animateSlotDrop(emptySlots, columnLocation, playerColor, defaultColor) {

                var columnPos = 0;
                var columnPos1 = 0;
                var animateXtimes = emptySlots;
 
                setIntervalLimited(function() {
                  columnLocation[columnPos].style.backgroundColor = playerColor;
                  columnPos++; 
                }, 250, animateXtimes);

                setTimeout(function(){
                  setIntervalLimited(function() {
                    columnLocation[columnPos1].style.backgroundColor = defaultColor;
                    columnPos1++; 
                  }, 250, animateXtimes-1);
                }, 250);
              }

              var availableSlots = getAvailableSlots(columnLocs);
              var p = document.getElementsByClassName('columnWrapper')[0];

              if (count % 2 == 0) {

                p.style.pointerEvents = 'none';
 
                animateSlotDrop(availableSlots, columnLocs, p1Color, defaultSlotColor);
                setTimeout(function(){
                  p2ScoreBox.style.background = p2Color;
                  p1ScoreBox.style.background = noColor;
                  message.innerHTML = player2 + '\'s turn';
                  if (connectFour(auditBoard(), 4) === true) {
                    setTimeout(function(){ 
                      generateBoard();
                      p1ScoreCount++;
                      p1ScoreBox.innerHTML = p1ScoreCount;
                      p2ScoreBox.style.background = noColor;
                      p1ScoreBox.style.background = p1Color;
                    }, 650);
                  }  
                }, availableSlots*250);
                setTimeout(function(){ 
                  p.style.pointerEvents = 'auto';
                }, availableSlots*250); 
              } else {

                p.style.pointerEvents = 'none';

                animateSlotDrop(availableSlots, columnLocs, p2Color, defaultSlotColor);
                setTimeout(function(){
                  p1ScoreBox.style.background = p1Color;
                  p2ScoreBox.style.background = noColor;
                  message.innerHTML = player1 + '\'s turn';

                  if (connectFour(auditBoard(), 4) === true) {
                    setTimeout(function(){ 
                      generateBoard();
                      p2ScoreCount++;
                      p2ScoreBox.innerHTML = p2ScoreCount;
                      p2ScoreBox.style.background = noColor;
                      p1ScoreBox.style.background = p1Color;
                    }, 650);
                  } 
                }, availableSlots*250);
                setTimeout(function(){ 
                  p.style.pointerEvents = 'auto';
                }, availableSlots*250); 
              }
              count++;
              z = 0; 
            }
            indexCount++;
          }
        }    
      })(i);
    } 

function resetScoreBox() {
  p2ScoreBox.style.background = noColor;
  p1ScoreBox.style.background = p1Color;
}

function resetGamesWon() {
  p1ScoreCount = 0;
  p2ScoreCount = 0;
  p1ScoreBox.innerHTML = 0;
  p2ScoreBox.innerHTML = 0;
}

resetGame.addEventListener("click", function() {
  generateBoard();
  resetScoreBox();
});

resetPoints.addEventListener("click", function() {
  resetGamesWon();
});

export{};