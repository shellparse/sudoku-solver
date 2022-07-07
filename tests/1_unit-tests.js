const chai = require('chai');
const assert = chai.assert;

const Solver = require('../controllers/sudoku-solver.js');
const Strings = require("../controllers/puzzle-strings.js");
let solver = new Solver();

suite('UnitTests', () => {
    test("Logic handles a valid puzzle string of 81 characters",function(){
         assert.equal(solver.validate(Strings.puzzlesAndSolutions[0][0]),true);
    });
    test("Logic handles a puzzle string with invalid characters (not 1-9 or .)",function(){
        assert.equal(solver.validate("invalid sudoku puzzle"),false);
    });
    test("Logic handles a puzzle string that is not 81 characters in length",function(){
        assert.equal(solver.validate(".4.5.45.5.45.55.44.5.4....45..745."),false);
    });
    test("Logic handles a valid row placement",function(){
        assert.equal(solver.checkRowPlacement(Strings.puzzlesAndSolutions[0][0],0,1,9),true);
    });
    test("Logic handles an invalid row placement",function(){
        assert.equal(solver.checkRowPlacement(Strings.puzzlesAndSolutions[0][0],0,1,5),false);
    });
    test("Logic handles a valid column placement",function(){
        assert.equal(solver.checkColPlacement(Strings.puzzlesAndSolutions[0][0],0,1,3),true);
    });
    test("Logic handles an invalid column placement",function(){
        assert.equal(solver.checkColPlacement(Strings.puzzlesAndSolutions[0][0],0,1,9),false);

    })
});


`
solving algorithm 
1- visit empty cell in some order 
2-fill in digits sequentially and check if a number is a candidate once candidate is found 
3-move to the next cell and try to find a candidate if no candidate found then go back to the cell before and increment the number by one
4-move again and redo the check against col raw and block 
keep doing 

`