import { GameObject } from "./gameobject.js";
import { Map } from "./map.js";
import { Action } from "./input.js";

export class GameState {
    constructor(public readonly map: Map, public readonly tickSpeedMs: number) {
    }

    update() {
        this.clock++;
        for (const object of this.gameObjects) {
            object.update(this);
        }

        // for (const object of this.userObjects) {
        //     for (const cow of this.cows){
        //         // Only update if cow is in same position as user object
        //         object.update_cow(cow, this);
        //     }
        // }

        // for (const cow of this.cows){
        //     cow.update(this);
        // }
    }

    gameObjects: GameObject[] = [];
    clock: number = 0 ;
    queuedActions: Action[] = [];
    selectedItem: string;
}
