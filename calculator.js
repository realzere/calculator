function calculate(expression) {
    try {
        return eval(expression);
    } catch {
        return "Ошибка";
    }
}

function factorial(n) {
    if (n < 0) return "Ошибка";
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

module.exports = { calculate, factorial };
