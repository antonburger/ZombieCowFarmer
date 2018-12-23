export class Tile {
    constructor(public readonly id: string) {

    }
}

export class Map {
    public readonly tiles: Tile[][];

    constructor(public readonly width: number, public readonly height: number) {
        this.tiles = Array.from({length: height});
        for (const y of this.tiles.keys()) {
            this.tiles[y] = Array.from({length: width});
        }
    }

    get(x: number, y: number): Tile {
        return this.tiles[y][x];
    }

    set(x: number, y: number, tile: Tile) {
        this.tiles[y][x] = tile;
    }
}
