// loading HTML element from js

// const heroDiv= document.getElementById('hero')
// heroDiv.innerHTML = 
// `<div class="character-card">
// <h4 class="name"> Hero</h4>
// <img class="avatar" src="images/hero.jpeg"/>
// <p class="score">Score: <b> 60 </b></p>
// <div class="dice-container"><div class="dice"> 6</div></div>
// </div>`

// const villianDiv= document.getElementById('villian')
// villianDiv.innerHTML = 
// `<div class="character-card">
// <h4 class="name"> Villian</h4>
// <img class="avatar" src="images/villian.jpeg"/>
// <p class="score">Score: <b> 10 </b></p>
// <div class="dice-container"><div class="dice"> 4</div></div>
// </div>`


///////////////////////////////////////////////////////////////////////////////////

// rendering cards using functions

// const heroElementId="hero"
// const heroName ="Hero"
// const heroAvatar ="images/hero.jpeg"
// const heroScore="60"
// const heroDiceRoll=6

// const villianElementId="villian"
// const villianName ="Villian"
// const villianAvatar ="images/villian.jpeg"
// const villianScore="10"
// const villianDiceRoll=4

// function renderCharacter(elementId, name,avatar,score,diceRoll){
//    document.getElementById(elementId).innerHTML=
//    `<div class="character-card">
//    <h4 class="name"> ${name}</h4>
//    <img class="avatar" src="${avatar}">
//    <p class="score">Score: <b> ${score} </b></p>
//    <div class="dice-container"><div class="dice"> ${diceRoll}</div></div>
//    </div>`

// }

// renderCharacter(heroElementId,heroName,heroAvatar,heroScore,heroDiceRoll)
// renderCharacter(villianElementId,villianName,villianAvatar,villianScore,villianDiceRoll)


///////////////////////////////////////////////////////////////////////////////////////////////////

// objects and properties

// const hero= {
//    element: "hero",
//    name:"Hero",
//    avatar:"images/hero.jpeg",
//    score:"60",
//    diceRoll:6
// }

// const villian= {
//    element:"villian",
//    name:"Villian",
//    avatar:"images/villian.jpeg",
//    score:"10",
//    diceRoll:4
// }


// function renderCharacter(data){
//    document.getElementById(data.element).innerHTML=
//    `<div class="character-card">
//    <h4 class="name"> ${data.name}</h4>
//    <img class="avatar" src="${data.avatar}">
//    <p class="score">Score: <b> ${data.score} </b></p>
//    <div class="dice-container"><div class="dice"> ${data.diceRoll}</div></div>
//    </div>`

// }

// renderCharacter(hero)
// renderCharacter(villian)


////////////////////////////////////////////////////////////////////////////////////////

 // object destructuring

//  const hero= {
//    element: "hero",
//    name:"Hero",
//    avatar:"images/hero.jpeg",
//    score:"60",
//    // diceRoll:[3,2,1],
//    diceCount :3
// }

// const villian= {
//    element:"villian",
//    name:"Villian",
//    avatar:"images/villian.jpeg",
//    score:"10",
//    // diceRoll:[4],
//    diceCount:1
// }


// function renderCharacter(data){
//    const {element, name, avatar, score, diceRoll,diceCount} = data
//    let diceHtml =''
//    for(let i = 0; i<diceRoll.length; i++){
//       diceHtml += `<div class="dice"> ${diceRoll[i]}</div> `
//    }


// using .map method

// function getDiceRollArray(diceCount){
//    let newDiceRolls=[]
//    for(let i=0;i<diceCount;i++){
//       newDiceRolls[i]= Math.floor(Math.random()*6)+1
//    }
//    return newDiceRolls
//    // console.log(newDiceRolls)
// }
// getDiceRollArray(3)

// using both constructor and fill method

// function getDiceRollArray(diceCount){
//     return new Array(diceCount).fill(0).map(function()
//    {
//       return Math.floor(Math.random()*6)+1
//    })
//    }
   



// function getDiceHtml(diceCount){
//    return getDiceRollArray(diceCount).map(function(num){
//        return  `<div class="dice"> ${num}</div>`
//    }).join('')
// }

// function renderCharacter(data){
//    const {element, name, avatar, score,diceCount} = data
//    const diceHtml = getDiceHtml(diceCount)
//    // const diceHtml = diceRoll.map(function(diceValue){
//    //      return `<div class="dice"> ${diceValue}</div>`
//    // }).join('')

//    document.getElementById(element).innerHTML=
//    `<div class="character-card">
//    <h4 class="name"> ${name}</h4>
//    <img class="avatar" src="${avatar}">
//    <p class="score">Score: <b> ${score} </b></p>
//    <div class="dice-container">
//    ${diceHtml}
//    </div>
//    </div>`

// }

// renderCharacter(hero)
// renderCharacter(villian)



//////////////////////////////////////////////////////////

// implementing  constructor function

// const hero= {
//    element: "hero",
//    name:"Hero",
//    avatar:"images/hero.jpeg",
//    score:"60",
//    diceCount :3
// }

// const villian= {
//    element:"villian",
//    name:"Villian",
//    avatar:"images/villian.jpeg",
//    score:"10",
//    diceCount:1
// }

// function Character(data){
//    // this.element = data.element,
//    // this.name = data.name,
//    // this.avatar = data.avatar,this.score = data.score,
//    // this.diceCount = data.diceCount,
//    Object.assign(this,data)                                   // Object.assign implementation 
//    this.getDiceHtml = function(diceCount){                      // Object.assign implementation 
//       return getDiceRollArray(diceCount).map(function(num){
//          return  `<div class="dice"> ${num}</div>`
//      }).join('')
//    }
//    this.getCharacterHtml = function(){
//       const {element, name, avatar, score,diceCount} = this
//       const diceHtml = this.getDiceHtml(diceCount)
//       // document.getElementById(element).innerHTML=
//          return `<div class="character-card">
//       <h4 class="name"> ${name}</h4>
//       <img class="avatar" src="${avatar}">
//       <p class="score">Score: <b> ${score} </b></p>
//       <div class="dice-container">
//       ${diceHtml}
//       </div>
//       </div>`
   
//    }
// }


// function getDiceRollArray(diceCount){
//    return new Array(diceCount).fill(0).map(function()
//   {
//      return Math.floor(Math.random()*6)+1
//   })
//   }
  
// const hero1 = new Character(hero)
// const villain1 = new Character(villian)

// function render(){
//    document.getElementById(hero1.element).innerHTML=hero1.getCharacterHtml()
//    document.getElementById(villain1.element).innerHTML=villain1.getCharacterHtml()
// }

// render()

///////////////////////////////////////////////////////////////////////////////////////////////

// using javascript modules

import characterData from "./data.js"
import Character from "./Character.js"

function attack(){
   hero1.getDiceHtml()
   villain1.getDiceHtml()
   hero1.takeDamage(villain1.currentDiceScore)
   villain1.takeDamage(hero1.currentDiceScore)
   render()
   if (hero1.dead  || villain1.dead ){             //if (hero1.dead === true || villain1.dead === true)
      endGame()
   }
}

function endGame(){
   const endMessage = hero1.score == 0 && villain1.score == 0 ? 'No Winners' : hero1.score > 0 ? 'Hero is the Winner' : 'Villain is the Winner'
   const endEmoji = hero1.score > 0 ? '🏆' : '💀'
   document.body.innerHTML = `<div class ='end-game'>
   <h2>Game Over</h2>
   <h3> ${endMessage}</h3>
   <p class= "end-emoji">${endEmoji}</p>
   </div>`
   // console.log(endMessage)
   // console.log('Game Over')
}

const hero1 = new Character(characterData.hero)
const villain1 = new Character(characterData.villian)
document.getElementById('attack-button').addEventListener('click',attack)

function render(){
      document.getElementById(hero1.element).innerHTML=hero1.getCharacterHtml()
      document.getElementById(villain1.element).innerHTML=villain1.getCharacterHtml()
   }
   
render()
   
   