const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = evaluateExpression(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function evaluateExpression(expression) {
    // Implement a safer method to evaluate mathematical expressions here
    // For simplicity, you might consider using a library like math.js
    return math.evaluate(expression);
}
