import { ctx } from "../../important/data.mjs";

class Bullet {
  constructor(x, y, sx, sy) {
    this.pos = {
      x: x,
      y: y,
    };
    this.speed = {
      x: sx,
      y: sy,
    };
    this.vel = undefined;
  }
  drawBullet() {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.pos.x + 25, this.pos.y + 25, 10, 10);
  }
  updateBullet() {
    this.drawBullet();
    this.pos.x += this.speed.x;
    this.pos.y += this.speed.y;
  }
}
class Gun {
  constructor() {
    this.fireRate = undefined;
    this.damage = undefined;
    this.interval = undefined;
    this.speed = undefined;
    this.ammo = undefined;
    this.bullets = new Array();
  }
}

export { Gun, Bullet };
