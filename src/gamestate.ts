import { GameObject } from "./gameobject.js";
import { Map } from "./map.js";
import { Action } from "./input.js";

export class GameState {
    constructor(private readonly map: Map, public readonly tickSpeedMs: number) {
    }

    gameObjects: GameObject[] = [];
    clock: number = 0 ;
    queuedActions: Action[] = [];
}
