import { Carton } from "./Carton";
import { Egg, boil, crack } from "./Egg";

export class EggRoulette {

    carton: Carton;
    scores: number[];
    turn: number;

    constructor() {
        this.scores = [0, 0];
        this.turn = 0;

        this.carton = new Carton();

        // TODO #1.2: Call the boilEggs function

        // TODO #2.2: Call the shuffleEggs function

    }
}


// TODO #1.1: Define the function boilEggs



export let pick = (roulette: EggRoulette, index: number): void => {
    // TODO #2: pick function - logic for picking an Egg

};

export let winner = (roulette: EggRoulette): number => {
    // TODO #3: winner function - decides when someone has won the game
    return -1;
};

let shuffleEggs = (carton: Carton): void => {
    // TODO #4: Define the function shuffleEggs

};


export let currentPlayer = (roulette: EggRoulette): number => {
    return roulette.turn % 2;
};