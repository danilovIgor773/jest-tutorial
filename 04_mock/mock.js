function map(array, callback) {
  const resultArray = [];

  for (let i = 0; i < array.length; i++) {
    resultArray.push(callback(array[i]));
  }

  return resultArray;
}

module.exports = { map };
