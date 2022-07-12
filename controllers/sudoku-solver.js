class SudokuSolver {

  validate(puzzleString) {
    let grid =[];
    if(puzzleString.length===81&&!/[^\d+\.]/g.test(puzzleString)){
      for(let i=0; i<9; i++){
        grid.push(puzzleString.substr(i*9,9).split(""))
      }
      for(let i=0; i<9; i++){
        let row = grid[i];
        for(let j=0; j<9; j++){
          grid[i][j]=parseInt(grid[i][j])>=1?parseInt(grid[i][j]):0;
        }
      }
    }
    return grid;
  }

  checkRowPlacement(grid, row, column, value) {
    
    return !grid[row].includes(value);
  }

  checkColPlacement(grid, row, column, value) {
    let col=[];
    for (let index = 0; index < 9; index++) {
      col.push(grid[index][column])
    }
    return !col.includes(value);
  }

  checkRegionPlacement(grid, row, column, value) {
    let region=[];
    let startRow=row-row%3;
    let startCol=column-column%3;
    for(let i=0; i<3; i++){
      for(let j=0; j<3; j++)
      region.push(grid[startRow+i][startCol+j]);
    }
    return !region.includes(value);
  }

  solve(grid) {
    if(this.validate(grid)){
      let memory=[];
      let cursor=[];
      for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
          if(grid[i][j]===0||memory.includes([i,j])){
            if(!memory.includes([i,j])){
              memory.push([i,j]);
            }
            cursor=[i,j];
            while(!(this.checkRowPlacement(grid,i,j,grid[i][j])&&this.checkColPlacement(grid,i,j,grid[i][j])&&this.checkRegionPlacement(grid,i,j,grid[i][j]))){
              grid[i][j]++;
              if(grid[i][j]>9){
                grid[i][j]=0;
                i=memory[memory.indexOf([i,j])-1][0]
                j=memory[memory.indexOf([i,j])-1][1];
                
              }
            }
          }
        }
      }
    //   let encounters=[];
    //   let solution = puzzleString;
    //   for (let index = 0; index < solution.length; index++) {
    //     if(solution[i]==="."){
    //       encounters.push(index);
    //       let row = i-i%9;
    //       let col = i%9;
    //       solution[index].replace(".",1);
    //       while(!(this.checkRowPlacement(solution,row,col,parseInt(solution[index]))&&this.checkColPlacement(solution,row,col,parseInt(solution[index])),this.checkRegionPlacement(solution,row,col,parseInt(solution[index])))){
    //         solution[index]++;
    //         if(solution[index]>)
    //       }
          
    //     }else if (encounters.includes(index)){

    //     }
    //   }
    //   return "";
    // }else{
    //   return false;
    }else{
      return false;
    }
  }
}

module.exports = SudokuSolver;

