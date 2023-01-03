const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(numbers => numbers%2 === 0);
const oddNumbers = numbers.filter(numbers => numbers%2 !== 0);

console.log(evenNumbers)
console.log(oddNumbers)