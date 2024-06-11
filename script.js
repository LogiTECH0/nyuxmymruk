function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const outputUnit = document.getElementById('outputUnit').value;

    const conversionRates = {
        mm: 1000,
        cm: 100,
        m: 1,
        km: 0.001,
        yard: 1.093613,
        ft: 3.28084,
        inch: 39.37008
    };

    let outputValue = inputValue * conversionRates[outputUnit];

    document.getElementById('outputValue').innerText = `Result: ${outputValue} ${outputUnit}`
}