import { GameState } from "./gamestate.js";

export abstract class GameObject {
    public x: number;
    public y: number;
    public imgUrl: string;

    move(x, y) {
    }

    abstract update(gameState: GameState);
}

export class Cow extends GameObject {
    update(gameState: GameState) {
        throw new Error("Method not implemented.");
    }

}

export class MilkingShed extends GameObject {
    update(gameState: GameState) {
        throw new Error("Method not implemented.");
    }
}
