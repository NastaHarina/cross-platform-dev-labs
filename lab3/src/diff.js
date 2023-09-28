// Function for taking first derivative of monomial
function diff(inputFunction, variable) {

    // Checking if there is a in ax^n
    if (inputFunction[0] == 'x' || inputFunction[0] == 'y'){
        inputFunction = '1' + inputFunction
    }
    // Checking if there is a variable in the input string
    if (!inputFunction.includes(variable)) {
        return '0'; 
    }

    // Splitting on a and n 
    const parts = inputFunction.split(`${variable}^`);
    let coefficient = 0;
    let exponent = 0;

    if (parts.length === 2) {
        coefficient = parseFloat(parts[0]);
        exponent = parseFloat(parts[1]);

        if (isNaN(coefficient) || isNaN(exponent)) {
            throw new Error('Incorrect coefficient or degree.');
        }
    } else if (parts.length === 1 && inputFunction.endsWith(variable)) {
        // If the variable exists, but the degree is not specified, consider the degree to be 1
        coefficient = parseFloat(parts[0]);
        exponent = 1;
    } else {
        throw new Error(`The input string must be in the format "a${variable}^2" or "a${variable}".`);
    }

    // Taking derivative 
    const derivativeCoefficient = coefficient * exponent;
    const derivativeExponent = exponent - 1;

    // Formating
    let derivativeString = `${derivativeCoefficient}${variable}^${derivativeExponent}`;
    if (derivativeExponent === 0) {
        derivativeString = `${derivativeCoefficient}`;
    } else if (derivativeExponent === 1) {
        derivativeString = `${derivativeCoefficient}${variable}`;
    }

    return derivativeString;
}

// Function for taking derivative
function getDerivative(polynomial, variable) {
    
    // Spliting polinomial to monomials
    const monomials = polynomial.split(/([+\-])/); 
    let derivative = '';

    for (let i = 0; i < monomials.length; i++) {
        const monomial = monomials[i].trim();
        if (monomial === '+' || monomial === '-') {
            if (!monomials[i+1].includes(variable))  continue
            derivative += monomial; // Add + or - if it's a sign 
        } else {
            const monomialDerivative = diff(monomial, variable); // Taking diff()
            if  (monomialDerivative == 0){
                derivative[i-1] = ''
                continue
            } else {
                derivative += monomialDerivative;
            }
           
        }
    }
    
    if (derivative[0] === '+') {
        derivative = derivative.substring(1); // Удалить первый символ
    }
    return derivative;
}


module.exports = {
    getDerivative: getDerivative,
    diff: diff
};