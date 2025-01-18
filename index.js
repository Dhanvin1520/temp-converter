function convertTemperature() {
    let tempInput = document.getElementById("tempInput").value;
    let conversionType = document.getElementById("conversionType").value;
    let result = document.getElementById("result");

    if (tempInput === "") {
        result.innerHTML = "Please enter a temperature value.";
        return;
    }

    tempInput = parseFloat(tempInput);

    if (conversionType === "celsiusToFahrenheit") {
        let fahrenheit = (tempInput * 9/5) + 32;
        result.innerHTML = `${tempInput}° Celsius is equal to ${fahrenheit.toFixed(2)}° Fahrenheit.`;
    } else if (conversionType === "fahrenheitToCelsius") {
        let celsius = (tempInput - 32) * 5/9;
        result.innerHTML = `${tempInput}° Fahrenheit is equal to ${celsius.toFixed(2)}° Celsius.`;
    }
}