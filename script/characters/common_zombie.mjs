import { Zombie, positions } from "./zombie.mjs";

class CommonZombie extends Zombie {
  constructor(x, y) {
    super(x, y);
    this.name = "Common_Zombie";
    this.health = 50;
    this.damage = 10;
    this.attackSpeed = 100;
    this.velocity = 1;
    this.color = "lightgreen";
  }
}


let randomX = Math.floor(Math.random() * 2);
let randomY = Math.floor(Math.random() * 2);
let zombies = [
    new CommonZombie(),
    new CommonZombie(positions[0][randomX], positions[1][randomY]),
  ];
export { CommonZombie,zombies };
