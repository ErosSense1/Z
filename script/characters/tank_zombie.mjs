import { Zombie } from "./zombie.mjs";

class tankZombie extends Zombie {
  constructor(x, y) {
    super(x, y);
    this.name = "Tank_Zombie";
    this.health = 200;
    this.damage = 50;
    this.coins = 30;
    this.attackSpeed = 50;
    this.velocity = 0.5;
    this.color = "black";
  }
}

export { tankZombie };
