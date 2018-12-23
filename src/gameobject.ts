import { GameState } from "./gamestate.js";
import { Pair } from "./primitive.js";

export abstract class GameObject {
    constructor(public readonly id: string) {

    }

    public x: number;
    public y: number;

    public dx: number;
    public dy: number;

    abstract update(gameState: GameState);

    moveTo(x, y) {
        this.x = x;
        this.y = y;
    }

    // This method should be called by other objects (ie fences)
    reverseDirectionX() {
        this.dx *= -1;
    }

    reverseDirectionY() {
        this.dy *= -1;
    }

    reflectDirection(){
        const temp = this.dx;
        this.dx = this.dy;
        this.dy = temp;
    }

    setDirection(dx: number, dy :number){
        this.dx = dx;
        this.dy = dy;
    }

}

export class Cow extends GameObject {
    private moves: Pair[] = [];

    constructor() {
        super("cow");
    }

    update(gameState: GameState) {
        if (this.moves.length == 0){
            if (this.dx > 0){
                this.moves.push(new Pair(this.dx, 0))
            }
            if (this.dy > 0){
                this.moves.push(new Pair(0, this.dy))
            }            
        }

        const direction = this.moves[0];
        this.moves = this.moves.slice(1);
        
        this.x += direction.x;
        this.y += direction.y;
    }
}

export class MilkingShed extends GameObject {
    constructor() {
        super("shed");
    }

    update(gameState: GameState) {
    }
}

export class Fence extends GameObject {
    constructor() {
        super("fence");
    }

    update(gameState: GameState) {
    }
}
