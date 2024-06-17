function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    const result = document.getElementById('convertResult');

    if (isNaN(inputValue)) {
        alert('Please enter a valid number');
        return;
    }

    const conversionRates = {
        kilometers: {
            kilometers: 1,
            miles: 0.621371,
            meters: 1000,
            feet: 3280.84
        },
        miles: {
            kilometers: 1.60934,
            miles: 1,
            meters: 1609.34,
            feet: 5280
        },
        meters: {
            kilometers: 0.001,
            miles: 0.000621371,
            meters: 1,
            feet: 3.28084
        },
        feet: {
            kilometers: 0.0003048,
            miles: 0.000189394,
            meters: 0.3048,
            feet: 1
        }
    };

    const outputValue = inputValue * conversionRates[inputUnit][outputUnit];
    result.innerHTML = `<p>${outputValue.toFixed(3)}<p/>`
}
