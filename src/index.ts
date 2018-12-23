import { Map, Tile } from "./map.js";
import { GameState } from "./gamestate.js";
import * as Game from "./gameloop.js";
import { MilkingShed, Cow } from "./gameobject.js";
import { GameRender } from "./gamerender.js";

const sampleMap = new Map(10, 10);
for (const y of d3.range(sampleMap.height)) {
    for (const x of d3.range(sampleMap.width)) {
        sampleMap.set(x, y, new Tile("" + (y * sampleMap.width + x)));
    }
}
const gameState = new GameState(sampleMap, 1000);
const shed = new MilkingShed();
shed.x = 9;
shed.y = 9;
gameState.gameObjects.push(shed);
const cows = d3.range(10).map(i => {
    const cow = new Cow();
    cow.x = i;
    cow.y = 0;
    cow.dx = 0;
    cow.dy = 1;
    return cow;
});
gameState.gameObjects = gameState.gameObjects.concat(cows);
const renderer = new GameRender;
const svg = d3.select("svg");
renderer.init(gameState, svg);

Game.init(gameState);
Game.mainLoop(renderer, gameState);

