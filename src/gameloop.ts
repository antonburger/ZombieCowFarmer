import { GameState } from "./gamestate.js";
import { GameRender } from "./gamerender";

function update(state: GameState) {
    state.clock++;
}

export function init(state: GameState) {
    
}

export function mainLoop(renderer: GameRender, state: GameState) {
    update(state);
    renderer.render();

    setTimeout(() => mainLoop(renderer, state), state.tickSpeedMs);
}
