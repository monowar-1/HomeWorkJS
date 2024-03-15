const A = [10, 1001, 'AB', 150, 'AC', 'AD', 30, 120, 'AF'];

const Strings = A.filter(item => typeof item === 'string');

const Numbers = A.filter(item => typeof item === 'number');

console.log("New Array1:", Strings);

console.log("New Array2:", Numbers);
