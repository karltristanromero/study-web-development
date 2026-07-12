// TEMPERATURE CONVERTER

const inputTemp = document.getElementById('inputTemp');
const celsiusRad = document.getElementById('celsiusRad');
const fahrenheitRad = document.getElementById('fahrenheitRad');
const result = document.getElementById('result');

let temp;

function convert() {
    console.log('test1')

    temp = Number(inputTemp.value);

    if (celsiusRad.checked) {
        temp = 1.8*temp + 32;
        result.textContent = temp + "°F"
    }
    else if (fahrenheitRad.checked) {
        temp = 1.8 * (temp-32);
        result.textContent = temp + "°C";
    }
    else {
        result.textContent = 'Please select a unit.';
    }
}