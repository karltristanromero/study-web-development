// DICE ROLLER

function rollDice() {

    const numDice = Number(document.getElementById('numDice').value);
    const rollResult = document.getElementById('rollResult');
    const diceImg = document.getElementById('diceImg');

    const values = [];
    const imgs = [];

    for (let i = 0; i < numDice; i++) {
        const num = Math.floor(Math.random() * 6) + 1;
        values.push(num);
        imgs.push(`<img src="assets/${num}.png" alt="Dice ${num}.png">`);
    }

    rollResult.textContent = `Dice: ${values.join(', ')}`;
    diceImg.innerHTML = imgs.join('');
}