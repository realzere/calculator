const { calculate, factorial } = require('./calculator');

test('сложение', () => {
    expect(calculate("2+3")).toBe(5);
});

test('вычитание', () => {
    expect(calculate("10-4")).toBe(6);
});

test('умножение', () => {
    expect(calculate("5*6")).toBe(30);
});

test('деление', () => {
    expect(calculate("8/2")).toBe(4);
});

test('деление на ноль', () => {
    expect(calculate("5/0")).toBe(Infinity);
});

test('факториал положительного числа', () => {
    expect(factorial(5)).toBe(120);
});

test('факториал отрицательного числа', () => {
    expect(factorial(-3)).toBe("Ошибка");
});
