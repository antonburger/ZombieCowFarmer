import { GameState } from "./gamestate";

// Global. Here be dragons. Zombie ones.
let gameState = new GameState();

function update(state: GameState): GameState {
    return state;
}

// Draws something to screen
function render(state: GameState) {

}

function tick(state: GameState) {
    update(state);
    render(state);
}
