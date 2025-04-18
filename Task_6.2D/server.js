function convertTemperature() {
    const temp = parseFloat(document.getElementById('inputTemp').value);
    const unit = document.getElementById('unit').value;
    const resultDisplay = document.getElementById('result');
  
    if (isNaN(temp)) {
      resultDisplay.innerText = "⚠️ Please enter a valid temperature.";
      return;
    }
  
    let converted, resultText;
    if (unit === 'C') {
      converted = (temp * 9 / 5) + 32;
      resultText = `${temp}°C = ${converted.toFixed(2)}°F`;
    } else {
      converted = (temp - 32) * 5 / 9;
      resultText = `${temp}°F = ${converted.toFixed(2)}°C`;
    }
  
    resultDisplay.innerText = resultText;
  }
  