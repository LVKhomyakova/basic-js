module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = 0;
    let factor = 1;
    for(let i = 1; i <= disksNumber; i++){
        turns += factor;
        factor *= 2;
    }
    return {turns: turns, seconds: turns / (turnsSpeed / 3600) };
}