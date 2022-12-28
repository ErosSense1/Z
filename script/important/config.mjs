import { canvas } from "./data.mjs";

canvas.width = innerWidth * 0.7;
canvas.height = innerHeight * 0.7;

canvas.style.position = "absolute";
canvas.style.backgroundColor = "gray";

canvas.style.top = "50%";
canvas.style.left = "50%";
canvas.style.transform = "translate(-50%,-50%)";

canvas.style.cursor = 'none'

let connect;

export { connect };
