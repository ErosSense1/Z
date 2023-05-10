import { Bullet, Gun } from "./setup/gun.mjs";

class Pistol extends Gun {
  constructor() {
    super();
    super.speed = 10;
    super.interval = 0.5;
    super.ammo = 24*10*10;
    super.damage = 8;
    super.name = "gun";
  }
}

class AssaultRifle extends Gun{
  constructor(){
    super();
    super.speed = 20;
    super.interval = 0.2;
    super.ammo = 24*10*10;
    super.damage = 15;
    super.name = "AR"
  }
}

class Cannon extends Gun {
  constructor(){
    super();
    super.speed = 20;
    super.interval = 1.3;
    super.ammo = 24*10*10;
    super.damage = 100;
    super.name = "RPG"
  }
}
let pistol = new Pistol();
let ar = new AssaultRifle()
let rpg = new Cannon();
export { pistol,ar,rpg };
