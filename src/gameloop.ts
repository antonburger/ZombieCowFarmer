import { GameState } from "./gamestate.js";

function update(state: GameState) {
    state.clock++;
    d3.select("#foo").text(state.clock);
}

// Draws something to screen
function render(state: GameState) {

}

export function mainLoop(state: GameState) {
    update(state);
    render(state);

    setTimeout(() => mainLoop(state), state.tickSpeedMs);
}
