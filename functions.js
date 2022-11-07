const isJonAlive = () => {
    if(jonSnowHealth > 0)
    {
        return true;
    }
    return false;
}

const attackJon = (attack) => {
    jonSnowHealth -= attack;
    console.log(jonSnowHealth);
}

const healJon = (healing) => {
    jonSnowHealth += healing;
    console.log(jonSnowHealth);
}

const greeting = (person1, person2) => {
    console.log(`${person1} and ${person2} are saying hello to each other`);
}

const rollDice = () => {
    return Math.floor((Math.random() * 6) + 1);
}

const diceMultiplier = () => {
    let firstRoll = rollDice();
    let secondRoll = rollDice();

    return firstRoll * secondRoll;
}

let jonSnowHealth = 100;

let winner = 'Jamie is the winner';

winner = winner.replace('Jamie', 'Jon');
console.log(winner);

console.log(winner.includes('Jon'));

//let winnerKebab = winner.replaceAll(' ', '-').toLowerCase();
let winnerKebab = winner.split(' ').join('-').toLowerCase();
console.log(winnerKebab);

attackJon(25);
attackJon(25);
attackJon(25);
attackJon(25);

console.log(isJonAlive());

greeting('Eric', 'Fred');

let multipliedRoll = diceMultiplier();
console.log(multipliedRoll);