import { GameState } from "./gamestate.js";
import { GameRender } from "./gamerender";

export function init(state: GameState) {
    
}

export function mainLoop(renderer: GameRender, state: GameState) {
    state.update();
    renderer.render(state);

    setTimeout(() => mainLoop(renderer, state), state.tickSpeedMs);
}
