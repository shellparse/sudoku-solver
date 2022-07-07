class SudokuSolver {

  validate(puzzleString) {
    return puzzleString.length===81&&!/[^\d+\.]/g.test(puzzleString);
  }

  checkRowPlacement(puzzleString, row, column, value) {
    let r = puzzleString.substr(row*9,9);
    let valueStr = value;
    return !r.includes(valueStr)
  }

  checkColPlacement(puzzleString, row, column, value) {
    let col="";
    let counter = 0;
    for (let index = 0; index < 9; index++) {
      col+=puzzleString[column+counter];
      counter=counter+9;
    }
    return !col.includes(value.toString());
  }

  checkRegionPlacement(puzzleString, row, column, value) {
    let region="";
    
  }

  solve(puzzleString) {
    
  }
}

module.exports = SudokuSolver;

