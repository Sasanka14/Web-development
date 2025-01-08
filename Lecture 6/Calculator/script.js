let memoryValue = null;
let currentExpression = "";
        let memory = 0;
        const display = document.getElementById("display");
        function updateDisplay(value) {
            display.textContent = value;
        }

        function appendValue(value) {
            if (display.textContent === "0" && value !== ".") {
                currentExpression = value;
            } else {
                currentExpression += value;
            }
            updateDisplay(currentExpression);
        }

        function appendOperator(operator) {
            currentExpression += operator;
            updateDisplay(currentExpression);
        }

        function clearDisplay() {
            currentExpression = "";
            updateDisplay("0");
        }

        function backspace() {
            currentExpression = currentExpression.slice(0, -1);
            updateDisplay(currentExpression || "0");
        }

        function calculate() {
            try {
                const result = eval(currentExpression);
                updateDisplay(result);
                currentExpression = result.toString();
            } catch (error) {
                updateDisplay("Error");
                currentExpression = "";
            }
        }

        function calculateSquareRoot() {
            try {
                const result = Math.sqrt(eval(currentExpression));
                updateDisplay(result);
                currentExpression = result.toString();
            } catch (error) {
                updateDisplay("Error");
                currentExpression = "";
            }
        }

        function calculateFactorial() {
            try {
                const number = parseInt(eval(currentExpression));
                let factorial = 1;
                for (let i = 1; i <= number; i++) {
                    factorial *= i;
                }
                updateDisplay(factorial);
                currentExpression = factorial.toString();
            } catch (error) {
                updateDisplay("Error");
                currentExpression = "";
            }
        }

        function calculateLog() {
            try {
                const result = Math.log10(eval(currentExpression));
                updateDisplay(result);
                currentExpression = result.toString();
            } catch (error) {
                updateDisplay("Error");
                currentExpression = "";
            }
        }

        function memoryRecall() {
            currentExpression = memory.toString();
            updateDisplay(memory);
        }

        function memoryClear() {
            memory = 0;
        }

        function toggleDarkMode() {
            document.body.classList.toggle("light-mode");
        }
        // Function to handle memory buttons
        function handleMemory(action) {
            const display = document.getElementById('display'); // Replace with your actual display ID or class

            switch (action) {
                case 'MS': // Memory Store
                    memoryValue = parseFloat(display.value);
                    console.log(`Memory stored: ${memoryValue}`);
                    break;
                case 'MR': // Memory Recall
                    if (memoryValue !== null) {
                        display.value = memoryValue;
                        console.log(`Memory recalled: ${memoryValue}`);
                    } else {
                        console.log('No value in memory.');
                    }
                    break;
                case 'MC': // Memory Clear
                    memoryValue = null;
                    console.log('Memory cleared.');
                    break;
                default:
                    console.log('Unknown memory action');
            }
        }