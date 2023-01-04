const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray.some(array => array%2 === 0);
const anyElementInFirstIsOdd = firstArray.some(array => array%2 !== 0);

const anyElementInSecondIsEven = secondArray.some(array => array%2 === 0);
const anyElementInSecondIsOdd = secondArray.some(array => array%2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(array => array%2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(array => array%2 !== 0);
