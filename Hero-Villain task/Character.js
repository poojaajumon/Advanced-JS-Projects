
import {getDiceRollArray,getDicePlaceholderHtml} from "./utils.js"

function Character(data){
    Object.assign(this,data)
    this.diceArray = getDicePlaceholderHtml(this.diceCount) 
                                                      
    this.getDiceHtml = function(){
      this.currentDiceScore = getDiceRollArray(this.diceCount)
      // this.diceArray = this.currentDiceScore.map(function(num){
      //    return `<div class="dice">${num}</div>`
      // }).join('')

      this.diceArray = this.currentDiceScore.map(num =>`<div class="dice">${num}</div>`    // using arrow function the toggled code just above is simplified to this code
      ).join('')

    }
    
   this.takeDamage = function(attackScoreArray){
      // const attackScore = attackScoreArray.reduce(function(sum,currentNumber){
      //         return sum+ currentNumber
      // })

      const attackScore = attackScoreArray.reduce((sum,currentNumber) => sum+ currentNumber)     // using arrow function the toggled code just above is simplified to this code 
 
      this.score -=attackScore  // this.score= this.score-this.attackScore
      if (this.score <= 0 ){
         this.score = 0
         this.dead = true
      }
    }
      
    this.getCharacterHtml = function(){
       const {element, name, avatar, score,diceCount} = this
      //  const diceHtml = this.getDiceHtml(diceCount)
          return `<div class="character-card">
       <h4 class="name"> ${name}</h4>
       <img class="avatar" src="${avatar}">
       <p class="score">Score: <b> ${score} </b></p>
       <div class="dice-container">
       ${this.diceArray}
       </div>
       </div>`
    
    }
 }

 export default Character