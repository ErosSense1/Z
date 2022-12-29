import { positions } from "./characters/zombie.mjs";
import { clickUHandler, clickDHandler, player } from "./characters/player.mjs";
import { bulletCollision, zombieCollision } from "./important/collisions.mjs";
import { connect } from "./important/config.mjs";
import { canvas, ctx, stage } from "./important/data.mjs";
import { mouse } from "./mouse.mjs";
import { CommonZombie, zombies } from "./characters/common_zombie.mjs";
import { fastZombie } from "./characters/fast_zombie.mjs";
import { tankZombie } from "./characters/tank_zombie.mjs";
import { ar, pistol } from "./guns/guns.mjs";
import { superZombie } from "./characters/super_zombie.mjs";

let ID;
if (canvas && ctx) {
  player.weapon = pistol;
  gameLoop();
  player.controls(true);
  window.addEventListener("mousedown", clickDHandler);
  window.addEventListener("mouseup", clickUHandler);
}
function gameLoop() {
  //clear screen
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw bullets
  player.weapon.bullets.forEach((bullet, i) => {
    bullet.updateBullet();
    if (bullet.pos.x < 0) {
      player.weapon.bullets.splice(i, 1);
    }
    if (bullet.pos.y < 0) {
      player.weapon.bullets.splice(i, 1);
    }
    if (bullet.pos.x > canvas.width) {
      player.weapon.bullets.splice(i, 1);
    }
    if (bullet.pos.y > canvas.height) {
      player.weapon.bullets.splice(i, 1);
    }
  });

  // draws player
  player.update();
  player.stats();
  player.currency();

  // draws enemies
  zombies[0].pos.x = undefined;
  zombies.forEach((zombie, i) => {
    if (zombie.health <= 0) {
      player.coins += zombie.coins;
      zombies.splice(i, 1);
      console.log(zombies);
    }
    zombie.update();
    zombie.stats();
  });

  // draws mouse
  mouse.update();
  // stageLoop
  stageLoop();
  // collisions
  bulletCollision();
  zombieCollision();

  ID = requestAnimationFrame(gameLoop);
  if (player.health < 1) {
    console.log(ID);
    cancelAnimationFrame(ID);
  }
}
let zombies_Name = ["common", "fast", "tank", "super"];
let stageNumber = 1;
function stageLoop() {
  if (zombies.length === 1) {
    stageNumber++;
    stage.innerHTML = "Stage: " + stageNumber;
    for (let i = 0; i < stageNumber; i++) {
      let randomX = Math.floor(Math.random() * 2);
      let randomY = Math.floor(Math.random() * 2);
      let x = Math.floor(Math.random() * zombies_Name.length);
      if (zombies_Name[x] == "common") {
        zombies.push(
          new CommonZombie(positions[0][randomX], positions[1][randomY])
        );
      }
      if (zombies_Name[x] == "fast" && stageNumber > 3) {
        zombies.push(
          new fastZombie(positions[0][randomX], positions[1][randomY])
        );
      }
      if (zombies_Name[x] == "tank" && stageNumber > 5) {
        zombies.push(
          new tankZombie(positions[0][randomX], positions[1][randomY])
        );
      }
      if (zombies_Name[x] == "super" && stageNumber > 10) {
        zombies.push(
          new superZombie(positions[0][randomX], positions[1][randomY])
        );
      }
    }
  }
}
