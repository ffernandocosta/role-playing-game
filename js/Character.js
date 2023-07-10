import { getDiceRollArray, getDicePlaceholderHtml, getPercentage, hasDuplicates } from "./utils.js"

class Character {
    constructor(data){
        Object.assign(this, data)
        this.diceHtml = getDicePlaceholderHtml(this.diceCount)
        this.maxHealth = this.health
    }
    // The constructor function of the Character class
    // It takes an object 'data' as a parameter
    // Object.assign() is used to assign the properties of the 'data' object to the instance of the class (this)
    // The diceHtml property is initialized with the result of calling the getDicePlaceholderHtml function with the diceCount property as an argument
    // The maxHealth property is set to the initial value of the health property

    setDiceHtml() {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        // Assigning the result of calling the getDiceRollArray function with the diceCount property as an argument to the currentDiceScore property
        
        this.diceHtml = this.currentDiceScore.map((num) => 
            `<div class="dice">${num}</div>`).join('')
        // Generating an HTML string by mapping each number in currentDiceScore to a <div> element with the number as its content
        // The map() method creates an array of HTML strings
        // The join() method combines the array of HTML strings into a single string and assigns it to the diceHtml property
    }

    takeDamage(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, currentNum) => total + currentNum)
        // Calculating the total attack score by summing up all the numbers in the attackScoreArray
        
        this.health -= totalAttackScore
        // Subtracting the totalAttackScore from the health property
        
        if (this.health <= 0){
            this.dead = true;
            this.health = 0;
        }
        // Checking if the health is less than or equal to 0
        // If so, setting the dead property to true and the health property to 0

        this.moreHealth = hasDuplicates(this.currentDiceScore);
         
        if (this.moreHealth){
            this.health += this.moreHealth
        }
    }

    getHealthBarHtml() {
        const percent = getPercentage(this.health, this.maxHealth)
        // Calculating the percentage of health based on the current health and the maximum health
        
        return `
        <div class="health-bar-outer">
            <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
                        style="width: ${percent}%;">
            </div>
        </div>`
        // Returning an HTML string representing a health bar
        // The width of the inner div is set based on the calculated percentage
        // If the percentage is less than 26, the "danger" class is added to the inner div
    }

    getCharacterHtml() {
        const { elementId, name, avatar, health, diceCount, diceHtml, moreHealth } = this;
        // Destructuring the properties of the instance into individual variables
        
        const healthBar = this.getHealthBarHtml();
        // Calling the getHealthBarHtml() method to get the HTML string representing the health bar
        
        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                ${healthBar}
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>`;
        // Returning an HTML string representing the character card
        // It includes the character's name, avatar, health, health bar, and dice container
    }  
}

export default Character