import { canvas, ctx } from "./important/data.mjs";

class Mouse {
  pos = {
    x: 0,
    y: 0,
  };
  visualize() {
    ctx.fillRect(this.pos.x - 2.5, this.pos.y - 2.5, 5, 5);
  }
  update() {
    this.visualize();
    canvas.addEventListener("mousemove", (e) => {
      this.pos.x = e.offsetX;
      this.pos.y = e.offsetY;
    });
  }
}

let mouse = new Mouse();

export { mouse };
