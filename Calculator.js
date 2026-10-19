
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function modulus(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a % b;
}

function power(a, b) {
    return a ** b;
}

function computeTotal(price, qty, vatRate) {
    let subtotal = price * qty;
    let total = subtotal * (1 + vatRate);
    return Number(total.toFixed(2));
}

// Display Results
console.log("===== BASIC OPERATIONS =====");
console.log("12 + 8 =", add(12, 8));
console.log("12 - 8 =", subtract(12, 8));
console.log("12 * 8 =", multiply(12, 8));
console.log("12 / 8 =", divide(12, 8));

console.log("\n===== MODULUS =====");
console.log("17 % 5 =", modulus(17, 5));
console.log("10 % 0 =", modulus(10, 0));

console.log("\n===== EXPONENTIATION =====");
console.log("2 ** 3 =", power(2, 3));
console.log("5 ** 0 =", power(5, 0));

console.log("\n===== COMPUTE TOTAL WITH VAT =====");
console.log("Total =", computeTotal(250, 3, 0.12));
console.log("Total =", computeTotal(100, 2, 0.12));
console.log("Total =", computeTotal(0, 5, 0.12));

