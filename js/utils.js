function getDiceRollArray(diceCount) {
    // A function that generates an array of dice roll values based on the diceCount parameter.
    // The diceCount parameter specifies the number of dice rolls to generate.
    
    return new Array(diceCount).fill(0).map(() =>
        Math.floor(Math.random() * 6) + 1
    );
    // Creating a new array with diceCount elements.
    // Filling the array with initial values of 0.
    // Using the map() method to generate a random number between 1 and 6 for each element in the array.
    // Returning the resulting array of dice roll values.
}

function getDicePlaceholderHtml(diceCount){
    // A function that generates an HTML string representing a placeholder for dice based on the diceCount parameter.
    
    return new Array(diceCount).fill(0).map(() => 
        `<div class="placeholder-dice"></div>`
    ).join('');
    // Creating a new array with diceCount elements.
    // Filling the array with initial values of 0.
    // Using the map() method to generate a string containing a placeholder <div> element for each element in the array.
    // Joining the array of placeholder strings into a single string using an empty string as the separator.
    // Returning the resulting HTML string representing the dice placeholders.
}

function hasDuplicates(currentDiceScore) {
    const duplicates = [];
    const trackDuplicate = {};

    for(let i = 0; i < currentDiceScore.length; i++){
        let currentDice = currentDiceScore[i]

        if(trackDuplicate[currentDice] === true){
            duplicates.push(currentDice);
        }
        else {
            trackDuplicate[currentDice] = true;
        }
    }
    return duplicates.length ? duplicates.reduce((total, currentDuplicate) => total + currentDuplicate) : false;
}

const getPercentage = (remainingHealth, maximumHealth) => (100 * remainingHealth) / maximumHealth;
// A arrow function that calculates the percentage based on the remainingHealth and maximumHealth parameters.
// It multiplies the remainingHealth by 100 and then divides it by the maximumHealth.
// The result is the calculated percentage.

export {getDiceRollArray, getDicePlaceholderHtml, getPercentage, hasDuplicates};
// Exporting the getDiceRollArray, getDicePlaceholderHtml, and getPercentage functions
// to make them available for use in other modules.
