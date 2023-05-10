import { ar, pistol, rpg } from "../guns/guns.mjs";
import { Bullet } from "../guns/setup/gun.mjs";
import { canvas, coin, ctx } from "../important/data.mjs";
import { mouse } from "../mouse.mjs";

class Player {
  it;
  constructor() {
    this.coins = 0
    this.health = 100;
    this.weapon = undefined
    this.speed = {
      x: 0,
      y: 0,
    };
    this.velocity = 2;
    this.width = 50;
    this.height = 50;
    this.pos = {
      x: canvas.width + 100,
      y: canvas.height + 100,
    };
  }
  draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.checkOffscreen();
    // control speed
    this.pos.y += this.speed.y * this.velocity;
    this.pos.x += this.speed.x * this.velocity;
  }
  controls(bool) {
    if (bool) {
      window.addEventListener("keydown", (e) => {
        switch (e.key) {
          case "w":
            this.speed.y = -1;
            break;
          case "s":
            this.speed.y = 1;
            break;
          case "a":
            this.speed.x = -1;
            break;
          case "d":
            this.speed.x = 1;
            break;
          case "W":
            this.speed.y = -1;
            break;
          case "S":
            this.speed.y = 1;
            break;
          case "A":
            this.speed.x = -1;
            break;
          case "D":
            this.speed.x = 1;
            break;
        }
      });

      window.addEventListener("keyup", (e) => {
        switch (e.key) {
          case "w":
            this.speed.y = 0;
            break;
          case "s":
            this.speed.y = 0;
            break;
          case "a":
            this.speed.x = 0;
            break;
          case "d":
            this.speed.x = 0;
            break;
          case "W":
            this.speed.y = 0;
            break;
          case "S":
            this.speed.y = 0;
            break;
          case "A":
            this.speed.x = 0;
            break;
          case "D":
            this.speed.x = 0;
            break;
        }
      });
    } else {
      return;
    }
  }
  checkOffscreen() {
    if (this.pos.x < 0) {
      this.pos.x = 0;
    }
    if (this.pos.x + this.width > canvas.width) {
      this.pos.x = canvas.width - this.width;
    }

    if (this.pos.y < 0) {
      this.pos.y = 0;
    }
    if (this.pos.y + this.height > canvas.height) {
      this.pos.y = canvas.height - this.height;
    }
  }
  shoot() {
    if (this.weapon.ammo > 0) {
      let angle = Math.atan2(
        mouse.pos.y - this.pos.y,
        mouse.pos.x - this.pos.x
      );

      let speed = this.weapon.speed;
      let x = Math.cos(angle) * speed;
      let y = Math.sin(angle) * speed;

      this.weapon.bullets.push(new Bullet(this.pos.x, this.pos.y, x, y, this.weapon.spread, this.weapon.spread));
      this.weapon.ammo -= 1;
    }
  }
  stats() {
    ctx.fillStyle = "blue";
    ctx.fillText(this.weapon.name, this.pos.x, this.pos.y - 10);
    ctx.fillStyle = "yellow";
    ctx.fillText("ammo: " + this.weapon.ammo, this.pos.x, this.pos.y + 0);
    ctx.fillStyle = "yellow";
    ctx.fillText("damage: " + this.weapon.damage, this.pos.x, this.pos.y + 10);
    ctx.fillStyle = "yellow";
    ctx.fillText("speed: " + this.weapon.speed, this.pos.x, this.pos.y + 20);
    ctx.fillStyle = "red";
    ctx.fillText("Player", this.pos.x, this.pos.y + 30);
    ctx.fillStyle = "yellow";
    ctx.fillText(
      "speed-x: " + this.speed.x + " " + "speed-y: " + this.speed.y,
      this.pos.x,
      this.pos.y + 40
    );
    ctx.fillStyle = "yellow";
    ctx.fillText("health: " + Math.floor(this.health), this.pos.x, this.pos.y + 50);
  }
  currency(){
    coin.innerHTML = 'Coins: ' + this.coins
  }
}
let player = new Player();
function clickDHandler() {
  player.it = setInterval(() => {
    player.shoot();
  }, player.weapon.interval * 1000);
}
function clickUHandler() {
  clearInterval(player.it);
}
let num = 0
function WeaponChange(e){
  let weapons = [ar,rpg,pistol]
  if(e.key === "q"){
    num-=1
    if(num < 0){
      num = weapons.length-1
    } else 
    {
    player.weapon = weapons[num]
    }
  }
  if(e.key === "e"){
    num+=1

    if(num > weapons.length-1){
      num = 0
    } else 
    {
    player.weapon = weapons[num]
    }
  }
}
export { player, clickDHandler, clickUHandler, WeaponChange};
