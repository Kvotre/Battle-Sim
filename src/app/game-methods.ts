import { defense } from "./character-variables";
import { attack } from "./character-variables";

export class GameMethods {

 currentTurn?: any;
 
    gameStart(): void {
      this.currentTurn = this.randomPlayerStart(); 
    }
    
    randomPlayerStart() {
      const startPlayer = Math.floor(Math.random() * 2) + 1;
      return startPlayer;
    }

    randomDefense():number {
     let defensePower = defense[Math.floor(Math.random() * defense.length)]
      return defensePower;
    }
    
    randomAttack(): number {
        let attackPower = attack[Math.floor(Math.random() * attack.length)]
        return attackPower;   
    }

    increasedAttack(): number {
      const getIncreasedAttack = this.randomAttack();
      const attackBonus = getIncreasedAttack + Math.round(getIncreasedAttack / 2);
      return attackBonus;
    }

    getAbilityActivated(): number {
      let randomNumber = Math.floor(Math.random() * 3) + 1;
       return randomNumber;
    }   
}
