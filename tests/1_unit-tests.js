const chai = require('chai');
const assert = chai.assert;

const Solver = require('../controllers/sudoku-solver.js');
const Strings = require("../controllers/puzzle-strings.js");
let solver = new Solver();
let grid=[
    [
      1, 0, 5, 0, 0,
      2, 0, 8, 4
    ],
    [
      0, 0, 6, 3, 0,
      1, 2, 0, 7
    ],
    [
      0, 2, 0, 0, 5,
      0, 0, 0, 0
    ],
    [
      0, 9, 0, 0, 1,
      0, 0, 0, 0
    ],
    [
      8, 0, 2, 0, 3,
      6, 7, 4, 0
    ],
    [
      3, 0, 7, 0, 2,
      0, 0, 9, 0
    ],
    [
      4, 7, 0, 0, 0,
      8, 0, 0, 1
    ],
    [
      0, 0, 1, 6, 0,
      0, 0, 0, 9
    ],
    [
      2, 6, 9, 1, 4,
      0, 3, 7, 0
    ]
  ];
  let solution=solver.validate(Strings.puzzlesAndSolutions[0][1]);
suite('UnitTests', () => {
    test("Logic handles a valid puzzle string of 81 characters",function(){
         assert.deepEqual(solver.validate(Strings.puzzlesAndSolutions[0][0]),grid);
    });
    test("Logic handles a puzzle string with invalid characters (not 1-9 or .)",function(){
        assert.equal(solver.validate("invalid sudoku puzzle").length,0);
    });
    test("Logic handles a puzzle string that is not 81 characters in length",function(){
        assert.equal(solver.validate(".4.5.45.5.45.55.44.5.4....45..745.").length,0);
    });
    test("Logic handles a valid row placement",function(){
        assert.equal(solver.checkRowPlacement(grid,0,1,9),true);
    });
    test("Logic handles an invalid row placement",function(){
        assert.equal(solver.checkRowPlacement(grid,0,1,5),false);
    });
    test("Logic handles a valid column placement",function(){
        assert.equal(solver.checkColPlacement(grid,0,1,3),true);
    });
    test("Logic handles an invalid column placement",function(){
        assert.equal(solver.checkColPlacement(grid,0,1,9),false);
    });
    test("Logic handles a valid region (3x3 grid) placement",function(){
        assert.equal(solver.checkRegionPlacement(grid,5,3,4),true);
    });
    test("Logic handles an invalid region (3x3 grid) placement",function(){
        assert.equal(solver.checkRegionPlacement(grid,8,8,9),false);
    });
    // test("Valid puzzle strings pass the solver",function(){
    //     assert.deepEqual(solver.solve(grid),solution);
    // });
    // test("Invalid puzzle strings fail the solver",function(){
    //     assert.equal(solver.solve("some invalid puzzle"),false);
    // });
    test("Solver returns the expected solution for an incomplete puzzle",function(){
        assert.deepEqual(solver.solve(grid),solution);
    });
});


`
solving algorithm 
1- visit empty cell in some order 
2-fill in digits sequentially and check if a number is a candidate once candidate is found 
3-move to the next cell and try to find a candidate if no candidate found then go back to the cell before and increment the number by one
4-move again and redo the check against col raw and block 
keep doing 

`