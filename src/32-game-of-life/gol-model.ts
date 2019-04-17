/**
 * The "model" of GameOfLife contains the data about the cells
 * and all of the logic for updating each cell at each step of the game.
 */
export class GameOfLife {

    rows: number;
    cols: number;
    cells: number[][];

    constructor(rows: number, cols: number) {
        this.rows = rows;
        this.cols = cols;
        reset(this);
    }
}


/**
 * The isLIve function should return true when a row, cell is live (1)
 * and false when it is dead (0).
 * 
 * There is an important edge case to consider!
 * 
 * When row or column is < 0 or >= rows / cols, then we should "wrap"
 * the row or column around to the other side of the cells. Think of
 * this like pacman exiting one side of the screen and coming out of
 * the opposite.
 * 
 * The specific edge cases we must handle for row are when:
 * 
 *  - row is -1
 *  - row is rows
 *  - col is -1
 *  - col is cols
 */
let isLive = (gol: GameOfLife, row: number, col: number): boolean => {
    // TODO

    return false;
};

/**
 * Given a row and column, check the surrounding 8 cells and count
 * the number which are live.
 */
let countLiveNeighbors = (gol: GameOfLife, row: number, col: number): number => {
    // TODO

    return 0;
};

/**
 * Given the state of all cells currently, compute the next state of
 * all cells and replace the cells property with the next state.
 * 
 * This method is called by the controller once when the "Step" button
 * is pressed. It is called continuously every quarter second when the
 * "Start" button is pressed.
 */
export let step = (gol: GameOfLife): void => {
    let next: number[][] = array2d(gol.rows, gol.cols, 0);

    // TODO

    gol.cells = next;
};

/**
 * The rules in conway's game of life are:
 * 
 * 1. Underpopulation: A live cell with fewer than 2 live neighbors dies.
 * 2. Stasis: A live cell with 2 or 3 live neighbors lives.
 * 3. Overpopulation: A live cell with more than 3 live neighbors dies.
 * 4. Reproduction: A dead cell with 3 live neighbors comes to life.
 */
let rules = (gol: GameOfLife, row: number, col: number): number => {
    // TODO: Fix this logic.
    if (isLive(gol, row, col)) {
        return 0; // Dead
    } else {
        return 1; // Alive
    }
};

/**
 * This method is called by the controller when the game is stopped
 * and the user clicks on a particular cell.
 */
export let toggle = (gol: GameOfLife, row: number, col: number): void => {
    if (gol.cells[row][col] > 0) {
        gol.cells[row][col] = 0;
    } else {
        gol.cells[row][col] = 1;
    }
};

/**
 * This method is called by the controller when the user resets the game.
 */
export let reset = (gol: GameOfLife): void => {
    gol.cells = array2d(gol.rows, gol.cols, 0);
};

let array2d = (rows: number, cols: number, value: number): number[][] => {
    let a: number[][] = [];

    for (let row = 0; row < rows; row++) {
        a[row] = [];
        for (let col = 0; col < cols; col++) {
            a[row][col] = value;
        }
    }

    return a;
};