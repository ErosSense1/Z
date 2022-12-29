import { canvas, ctx } from "../important/data.mjs";
import { player } from "./player.mjs";

class Zombie {
  health = 1;
  damage = undefined;
  attackSpeed = undefined;
  name = undefined;
  velocity = undefined;
  color = undefined;
  constructor(x, y) {
    this.width = 50;
    this.height = 50;
    this.speed = {
      x: 0,
      y: 0,
    };
    this.pos = {
      x: x,
      y: y,
    };
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }
  update() {
    this.draw();
    this.pos.x += this.speed.x * this.velocity;
    this.pos.y += this.speed.y * this.velocity;

    var diffX = player.pos.x - this.pos.x;
    var diffY = player.pos.y - this.pos.y;

    let distance = Math.atan2(diffY, diffX);

    this.speed.x = Math.cos(distance);
    this.speed.y = Math.sin(distance);
  }
  stats() {
    ctx.fillStyle = "blue";
    ctx.fillText(this.name, this.pos.x, this.pos.y);
    ctx.fillStyle = "yellow";
    ctx.fillText("health: " + this.health, this.pos.x, this.pos.y + 10);
    ctx.fillStyle = "yellow";
    ctx.fillText("damage: " + this.damage, this.pos.x, this.pos.y + 20);
  }
}


let positions = [
  [-100, canvas.width * 2.5 + 100],
  [-100, canvas.height * 2.5 + 100],
];


export { Zombie, positions };
