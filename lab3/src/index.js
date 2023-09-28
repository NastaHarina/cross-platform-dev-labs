document.getElementById("calculateButton").addEventListener("click", function () {
    const inputPolynomial = document.getElementById("inputPolynomial").value;
    const variable = document.getElementById("variableDropdown").value; // Get the selected variable

    try {
        const derivative = getDerivative(inputPolynomial, variable);
        document.getElementById("result").textContent = `Derivative: ${derivative}`;
    } catch (error) {
        document.getElementById("result").textContent = `Error: ${error.message}`;
    }
});
