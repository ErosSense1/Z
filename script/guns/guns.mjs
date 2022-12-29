import { Bullet, Gun } from "./setup/gun.mjs";

class Pistol extends Gun {
  constructor() {
    super();
    super.speed = 10;
    super.interval = 0.5;
    super.ammo = 24*10*10;
    super.damage = 16;
  }
}

class AssaultRifle extends Gun{
  constructor(){
    super();
    super.speed = 20;
    super.interval = 0.2;
    super.ammo = 24*10*10;
    super.damage = 32;
  }
}
let pistol = new Pistol();
let ar = new AssaultRifle()

export { pistol,ar };
