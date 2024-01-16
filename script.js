function calculateArea() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);
    const resultBox = document.getElementById('result-box');

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        resultBox.innerText = `Please enter a valid number for each side.`;
        return;
    }

    const s = (sideA + sideB + sideC) / 2;
    var area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));
    area = area.toFixed(2);

    if (!isNaN(area)) {
        resultBox.innerText = `Area: ${area}`;
    } else {
        resultBox.innerText = `Error. Please check inputs.`;
    }
}


