document.addEventListener('DOMContentLoaded', function () {
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
        try {
            // Using Function constructor to evaluate expressions (safer than eval)
            const result = new Function('return ' + expression)();
            if (isNaN(result)) throw new Error('Invalid expression');
            return result;
        } catch (error) {
            throw new Error('Invalid expression');
        }
    }

    function handleKeyUp(event) {
        if (event.key === 'Enter') {
            calculateResult();
        }
    }

    function handleButtonClick(event) {
        const buttonValue = event.target.dataset.value;
        if (buttonValue) {
            appendToDisplay(buttonValue);
        }
    }

    function addEventListenersToButtons(buttons, handler) {
        buttons.forEach(button => {
            button.addEventListener('click', handler);
        });
    }

    function init() {
        const numberButtons = document.querySelectorAll('.number');
        const operatorButtons = document.querySelectorAll('.operator');
        const clearButton = document.getElementById('clear');
        const equalsButton = document.getElementById('equals');

        addEventListenersToButtons(numberButtons, handleButtonClick);
        addEventListenersToButtons(operatorButtons, handleButtonClick);
        clearButton.addEventListener('click', clearDisplay);
        equalsButton.addEventListener('click', calculateResult);

        display.addEventListener('input', function () {
            // Validate or process user input if needed
        });

        display.addEventListener('keyup', handleKeyUp);
    }

    init();
});
