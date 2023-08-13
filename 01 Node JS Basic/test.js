const sum = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  if (a > b) {
    return a / b;
  } else {
    return "Division is not possible";
  }
};

module.exports = { sum, sub, mul, div };
