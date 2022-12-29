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
  player.weapon.bullets.forEach((bullet) => {
    bullet.updateBullet();
  });

  // draws player
  player.update();
  player.stats();

  // draws enemies
  zombies[0].pos.x = undefined;
  zombies.forEach((zombie, i) => {
    if (zombie.health <= 0) {
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
let zombies_Name = ['common','fast','tank','super']
let stageNumber = 1;
function stageLoop() {
  if (zombies.length === 1) {
    stageNumber++;
    stage.innerHTML = "Stage: " + stageNumber;
    for (let i = 0; i < stageNumber; i++) {
      let randomX = Math.floor(Math.random() * 2);
      let randomY = Math.floor(Math.random() * 2);
      let x = Math.floor(Math.random() * zombies_Name.length);
      switch (zombies_Name[x]){
        case 'common':
          zombies.push(
            new CommonZombie(positions[0][randomX], positions[1][randomY])
          );
          break;
        case 'fast':
          zombies.push(
            new fastZombie(positions[0][randomX], positions[1][randomY])
          );
          break;
        case 'tank':
          zombies.push(new tankZombie(positions[0][randomX], positions[1][randomY]))
          break;
        case 'super':
          zombies.push(new superZombie(positions[0][randomX], positions[1][randomY]))
          break;
      }
    }
  }
}
