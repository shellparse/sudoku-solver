class SudokuSolver {

  validate(puzzleString) {
    return puzzleString.length===81&&!/[^\d+\.]/g.test(puzzleString);
  }

  checkRowPlacement(puzzleString, row, column, value) {
    let r = puzzleString.substr(row*9,9);
    let valueStr = value;
    return !r.includes(valueStr);
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
    for(let i=0; i<3;i++){
      region+=puzzleString.substr((((row-row%3)+i)*9)+(column-column%3),3);
    }
    return !region.includes(value.toString());
  }

  solve(puzzleString) {
    if(this.validate(puzzleString)){
      let encounters=[];
      let solution = puzzleString;
      for (let index = 0; index < solution.length; index++) {
        if(solution[i]==="."){
          encounters.push(index);
          let row = i-i%9;
          let col = i%9;
            if(this.checkRowPlacement(solution,row,col,1)&&this.checkColPlacement(solution,row,col,1),this.checkRegionPlacement(solution,row,col,1)){
              solution[index].replace(".",1);
            }else{
              index=//find a way to check this
            }
          
        }else if (encounters.includes(index)){

        }
      }
      return "";
    }else{
      return false;
    }
  }
}

module.exports = SudokuSolver;

