const A = [50,107, 'jack', 83, 'killer', 'son', true];

const Strings = A.filter(item => typeof item === 'string');

const Numbers = A.filter(item => typeof item === 'number');

console.log("New Array1:", Strings);

console.log("New Array2:", Numbers);
