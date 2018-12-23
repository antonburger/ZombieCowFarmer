import { GameState } from "./gamestate";

export abstract class GameObject {
    private x: number;
    private y: number;

    move(x, y) {
    }

    abstract update(gameState: GameState);
}

export class Cow extends GameObject {
    update(gameState: GameState) {
        throw new Error("Method not implemented.");
    }

}
