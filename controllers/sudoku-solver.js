class SudokuSolver {

  validate(puzzleString) {
    let grid =[];
    if(puzzleString.length===81&&!/[^\d+\.]/g.test(puzzleString)){
      for(let i=0; i<9; i++){
        grid.push(puzzleString.substr(i*9,9).split(""))
      }
      for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
          grid[i][j]=parseInt(grid[i][j])>=1?parseInt(grid[i][j]):0;
        }
      }
    }
    return grid;
  }

  checkRowPlacement(grid, row, column, value) {
    let rowToCheck=[...grid[row]];
    rowToCheck.splice(column,1);
    return !rowToCheck.includes(value);
  }

  checkColPlacement(grid, row, column, value) {
    let col=[];
    for (let index = 0; index < 9; index++) {
      col.push(grid[index][column])
    }
    col.splice(row,1);
    return !col.includes(value);
  }

  checkRegionPlacement(grid, row, column, value) {
    let region=[];
    let startRow=row-row%3;
    let startCol=column-column%3;
    for(let i=0; i<3; i++){
      region.push([grid[startRow+i][startCol],grid[startRow+i][startCol+1],grid[startRow+i][startCol+2]]);
    }
    region[row%3].splice(column%3,1);
    return !region.some((row)=>row.includes(value));
  }


  solve(grid) {
    if(this.validate(grid)){
      let memory=[];
      let cursor=[];
      console.log("the original grid");
      console.table(grid);
      let workSpace=[...grid];
      for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
          if(workSpace[i][j]===0||memory.some((plc)=>plc[0]===i&&plc[1]===j)){
            if(!memory.some((plc)=>plc[0]===i&&plc[1]===j)){
              memory.push([i,j]);
            }// pushing to the memory the locations of all blank encounters
            if(workSpace[i][j]===0)workSpace[i][j]++; //to make sure that we are not checking against 0 for the first incremental run
            
            while(!(this.checkRowPlacement(workSpace,i,j,workSpace[i][j])&&this.checkColPlacement(workSpace,i,j,workSpace[i][j])&&this.checkRegionPlacement(workSpace,i,j,workSpace[i][j]))){
              workSpace[i][j]++;
              if(workSpace[i][j]>9){
                workSpace[i][j]=0;
                console.log("reached a deadend with "+[i,j]+" and the memory was ",memory);
                console.table(workSpace);
                i=memory[memory.findIndex((plc)=>plc[0]===i&&plc[1]===j)-1][0];
                j=memory[memory.findIndex((plc)=>plc[0]===i&&plc[1]===j)-1][1];
                console.log("reset i and j");
                console.log(i,j);
                workSpace[i][j]++;
              }
            }
          }//end of if to check is it blank or previous encounter if else then it will continue with the loop ;
        }
      }
      console.log("the right solution")
      console.table(this.validate('135762984946381257728459613694517832812936745357824196473298561581673429269145378'))
      console.warn("the solution we got")
      console.table(workSpace);
      return workSpace;
    }else{
      return false;
    }
  }
}

module.exports = SudokuSolver;

