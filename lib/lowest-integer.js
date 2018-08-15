module.exports = array => {
  numbers = [];
  array.sort((a, b) => a - b);
  // console.log(array, 'array')
  for (i = 0; i < array.length; i++) {
    if (array[i + 1] - array[i] >= 2) {
      number = array[i] + 1;
      numbers.push(number);
      // console.log(array[i])
    }
    console.log(numbers[0]);
    return numbers[0];
  }
};
