import { Component, OnInit } from '@angular/core';
import { GameMethods } from '../game-methods';
import { characterOneHp } from '../character-variables';
import { characterTwoHp } from '../character-variables';

@Component({
  selector: 'app-characters-logic',
  templateUrl: './characters-logic.component.html',
  styleUrls: ['./characters-logic.component.scss'],
  providers: [GameMethods]
})
export class CharactersLogicComponent implements OnInit {

//Global variables  
 characterOneHealth = characterOneHp;
 characterTwoHealth = characterTwoHp;

 getFirstPlayerAbility: any;
 firstCharacterAttack: any;
 
 getSecondPlayerAbility: any;
 secondCharacterAttack: any;

 playerTurn:any;
 over?: boolean = false;
 count:any = 0;
 winner: any;

  constructor(public game: GameMethods) {}

  ngOnInit(): void {  
  }
 
  playerOne() {
    let abilityActivation = Math.floor(Math.random() * 100) + 1;
    
    if (abilityActivation < 75) {
      const basicDamage = this.game.randomAttack() - this.game.randomDefense();
      this.firstCharacterAttack = basicDamage;
      this.characterTwoHealth -= basicDamage;
      this.getFirstPlayerAbility = 'No ability activated!';
    
    } else if ( this.game.getAbilityActivated() === 1) {
      const firstAbility = this.game.randomAttack() - this.game.randomDefense();  
      this.firstCharacterAttack = Math.round(firstAbility / 2); 
      this.characterTwoHealth -= this.firstCharacterAttack;
      this.getSecondPlayerAbility = 'Character 2 activate ability 1';

    }  else if (this.game.getAbilityActivated() === 2) {
      const secondAbility = this.game.increasedAttack() - this.game.randomDefense();
      this.firstCharacterAttack = secondAbility;
      this.characterTwoHealth -= secondAbility;
      this.getFirstPlayerAbility = 'Ability 2 activated';

    } else if(this.game.getAbilityActivated() === 3 && this.characterTwoHealth < 30){
            this.characterTwoHealth += 5;      
            this.getSecondPlayerAbility = 'Character 2 activate ability 3';           
    }   
    if(this.characterTwoHealth <= 0) {
      this.winner = 'Player one wins';
    }  
  }
 
  playerTwo() {
    let abilityActivation = Math.floor(Math.random() * 100) + 1;
    
    if (abilityActivation < 75) {
      const basicDamage = this.game.randomAttack() - this.game.randomDefense();
      this.secondCharacterAttack = basicDamage; 
      this.characterOneHealth -= basicDamage;
      this.getSecondPlayerAbility = 'No ability activated!';

    } else if ( this.game.getAbilityActivated() === 1) {
      const firstAbility = this.game.randomAttack() - this.game.randomDefense();  
      this.secondCharacterAttack = Math.round(firstAbility / 2);
      this.characterOneHealth -= this.secondCharacterAttack;
      this.getFirstPlayerAbility = 'Character 1 activate ability 1';

    }  else if (this.game.getAbilityActivated() === 2) {
      const secondAbility = this.game.increasedAttack() - this.game.randomDefense();
      this.secondCharacterAttack = secondAbility;
      this.characterOneHealth -= secondAbility
      this.getSecondPlayerAbility = 'Ability 2 activated';

    } else if(this.game.getAbilityActivated() === 3 && this.characterOneHealth < 30){
            this.characterOneHealth += 5;      
            this.getFirstPlayerAbility = 'Character 1 activate ability 3';           
    }    
    
    if(this.characterOneHealth <= 0) {
      this.winner = 'Player two wins';
    }
  }

  playerOneAttack(): void {
    setTimeout(() => {
      this.count++;
    this.playerOne()
    if (this.characterTwoHealth <= 0) {
      this.over = true;
    }
  }, 500);
}

playerTwoAttack(): void {
    setTimeout(() => {
    this.count++;
    this.playerTwo()
    if (this.characterOneHealth <= 0) {
       this.over = true;
    }
  }, 500);
}

   attack() {
    this.game.gameStart();
    const currentPlayer = `Player: ${this.game.currentTurn} attacks`;
    this.playerTurn = currentPlayer;

    if(this.game.currentTurn === 1 ){
      this.playerOneAttack();   
   }
    if(this.game.currentTurn === 2 ){
      this.playerTwoAttack();        
   }
}

  //Reset the game when is over
  reset(): void {
    window.location.reload();
  }
}

