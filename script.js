// Function to append values to the display
function appendValue(value) {
    document.calculatorForm.display.value += value;
}

// Function to clear the display
function clearDisplay() {
    document.calculatorForm.display.value = '';
}

// Function to delete the last character from the display
function deleteLast() {
    let currentValue = document.calculatorForm.display.value;
    document.calculatorForm.display.value = currentValue.slice(0, -1);
}

// Function to perform calculation
function calculate() {
    try {
        let result = eval(document.calculatorForm.display.value);
        document.calculatorForm.display.value = result;
    } catch (error) {
        document.calculatorForm.display.value = 'Error';
    }
}

// Function to calculate sine value
function calculateSin() {
    try {
        let angle = parseFloat(document.calculatorForm.display.value);
        let result = Math.sin(angle * (Math.PI / 180)); // Convert degrees to radians
        document.calculatorForm.display.value = result;
    } catch (error) {
        document.calculatorForm.display.value = 'Error';
    }
}

// Function to calculate cosine value
function calculateCos() {
    try {
        let angle = parseFloat(document.calculatorForm.display.value);
        let result = Math.cos(angle * (Math.PI / 180)); // Convert degrees to radians
        document.calculatorForm.display.value = result;
    } catch (error) {
        document.calculatorForm.display.value = 'Error';
    }
}

// Function to calculate tangent value
function calculateTan() {
    try {
        let angle = parseFloat(document.calculatorForm.display.value);
        let result = Math.tan(angle * (Math.PI / 180)); // Convert degrees to radians
        document.calculatorForm.display.value = result;
    } catch (error) {
        document.calculatorForm.display.value = 'Error';
    }
}

// Function to round the value
function roundValue() {
    try {
        let value = parseFloat(document.calculatorForm.display.value);
        let result = Math.round(value);
        document.calculatorForm.display.value = result;
    } catch (error) {
        document.calculatorForm.display.value = 'Error';
    }
}


// Function to calculate area of a circle
function calculateArea() {
    try {
        let radius = parseFloat(document.calculatorForm.display.value);
        if (!isNaN(radius)) {
            let result = Math.PI * Math.pow(radius, 2);
            document.calculatorForm.display.value = result;
        } else {
            document.calculatorForm.display.value = 'Invalid input';
        }
    } catch (error) {
        document.calculatorForm.display.value = 'Error';
    }
}

