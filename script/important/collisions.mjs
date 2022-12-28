import { zombies } from "../characters/common_zombie.mjs";
import { player } from "../characters/player.mjs";


function bulletCollision() {
  player.weapon.bullets.forEach((bullet, i) => {
    for (let a = 0; a < zombies.length; a++) {
      const zombie = zombies[a];

      if (
        zombie.pos.x + zombie.width > bullet.pos.x &&
        zombie.pos.x < bullet.pos.x + 10 &&
        zombie.pos.y + zombie.height > bullet.pos.y &&
        zombie.pos.y < bullet.pos.y + 10
      ) {
        zombie.health -= player.weapon.damage;
        player.weapon.bullets.splice(i, 1);
      }
    }
  });
}
function zombieCollision() {
  let hit;
  zombies.forEach((zombie, i) => {
    // check collision between zombie and player
    if (
      zombie.pos.x + zombie.width > player.pos.x &&
      zombie.pos.x < player.pos.x + player.width &&
      zombie.pos.y + zombie.height > player.pos.y &&
      zombie.pos.y < player.pos.y + player.height
    ) {
      player.health -= zombie.damage * 0.01;
    }
    // check collision between zombie and zombie
    zombies.forEach((zombie2) => {
      if (
        zombie != zombie2 &&
        zombie.pos.x + zombie.width > zombie2.pos.x &&
        zombie.pos.x < zombie2.pos.x + zombie2.width &&
        zombie.pos.y + zombie.height > zombie2.pos.y &&
        zombie.pos.y < zombie2.pos.y + zombie2.height
      ) {
        zombie.pos.x += zombie2.pos.x - zombie.pos.x;
        zombie.pos.x += zombie2.width;
      }
    });
  });
}

export { bulletCollision, zombieCollision };
