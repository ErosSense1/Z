import { Zombie } from "./zombie.mjs";

class superZombie extends Zombie {
  constructor(...args) {
    super(...args);
    this.name = "Super_Zombie";
    this.health = 150;
    this.velocity = 2;
    this.damage = 25;
    this.attackSpeed = 200;
    this.color = "red";
  }
}

export {superZombie}