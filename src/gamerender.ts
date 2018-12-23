import { GameState } from "./gamestate.js";
export class GameRender {
  svg: d3.Selection<d3.BaseType, {}, HTMLElement, any>;
  tiles: any;
  foreground: any;
  private readonly cellSize = 50;

  init(gameState: GameState, svg) {
    this.svg = svg;

    this.svg.attr(
      "viewBox",
      "0 0 " +
        this.cellSize * gameState.map.width +
        " " +
        this.cellSize * gameState.map.height
    );

    this.initBackground(gameState);
    this.initForeground(gameState);
  }

  initForeground(gameState: GameState) {
    this.foreground = this.svg.append("g").attr("class", "foreground");
  }

  initBackground(gameState: GameState) {
    this.svg
      .append("g")
      .attr("class", "background")
      .selectAll("g.row")
      .data(gameState.map.tiles)
      .enter()
      .append("g")
      .attr("class", "row")
      .attr("transform", (d, i) => {
        return "translate(0, " + i * this.cellSize + ")";
      });

    this.tiles = this.svg
      .selectAll("g.background g.row")
      .selectAll("g.col")
      .data(d => d)
      .enter()
      .append("g")
      .attr("class", "col")
      .attr("transform", (d, i) => {
        return "translate(" + i * this.cellSize + ", 0)";
      });

    this.tiles
      .append("rect")
      .attr("width", this.cellSize)
      .attr("height", this.cellSize)
      .attr("class", "tile-background");

    this.tiles
      .append("image")
      .attr("xlink:href", "img/empty.png")
      .attr("width", this.cellSize)
      .attr("height", this.cellSize);
  }

  render(gameState: GameState) {
    this.foreground
      .selectAll("g.gameObject")
      .data(gameState.gameObjects)
      .enter()
      .append("g")
      .attr("class", "gameObject")
      .append("image")
      .attr("xlink:href", "img/cow.png")
      .attr("width", this.cellSize)
      .attr("height", this.cellSize);

    this.foreground
      .selectAll("g.gameObject")
      .attr("transform", d => {
        return (
          "translate(" + this.cellSize * d.x + ", " + this.cellSize * d.y + ")"
        );
      })
  }
}
