answer = [];
const decimalToBinary = (num) => {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    answer.unshift(1);
    return answer;
  }
  answer.unshift(num % 2);
  num -= num % 2;
  num /= 2;
  return decimalToBinary(num);
};
printAnswer = decimalToBinary(243);
console.log(...printAnswer);