import { Zombie } from "./zombie.mjs";

class fastZombie extends Zombie{
    constructor(x,y){
        super(x,y);
        this.health = 25;
        this.velocity = 3;
        this.color = 'blue';
        this.damage = 15;
        this.name = 'Fast_Zombie';
        this.attackSpeed = 150;
    }
}

export {fastZombie}