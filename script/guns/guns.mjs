import { Bullet, Gun } from "./setup/gun.mjs";

class Pistol extends Gun {
  constructor() {
    super();
    super.speed = 10;
    super.damage = 5;
    super.interval = 0.3;
    super.ammo = 24*10*10;
    super.damage = 16;
  }
}
let pistol = new Pistol();

export { pistol };
