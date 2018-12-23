import { Map } from "./map.js";
import { GameState } from "./gamestate.js";
import * as Game from "./gameloop.js";
import { MilkingShed, Cow } from "./gameobject.js";
const sampleMap = new Map(10, 10);
const gameState = new GameState(sampleMap, 200);
const shed = new MilkingShed();
shed.x = 9;
shed.y = 9;
gameState.gameObjects.push(shed);
const cows = d3.range(10).map(i => {
    const cow = new Cow();
    cow.x = i;
    cow.y = 0;
    return cow;
});
gameState.gameObjects.concat(cows);
Game.mainLoop(gameState);
