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
    } else  {
        // If the variable exists, but the degree is not specified, consider the degree to be 1
        coefficient = parseFloat(parts[0]);
        exponent = 1;
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
            // if the next monomial do not contain taget of derivative is not a target var, then skip sing and monomial
            if (!monomials[i+1].includes(variable))  continue 
            derivative += monomial; // Add + or - if it's a sign 
        } else {
            const monomialDerivative = diff(monomial, variable); // Taking diff()
            if  (monomialDerivative == 0){
                derivative[i-1] = '' // If derivative = 0, then deleting sing before
                continue
            } else {
                derivative += monomialDerivative;
            }
           
        }
    }
    if (derivative[0] === '+') {
        derivative = derivative.substring(1); // deleting sing if first monomial is not a target var
    }
    
    return derivative;
}


module.exports = {
    getDerivative: getDerivative,
    diff: diff
};