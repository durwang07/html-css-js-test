

function numberChecker(n) {
    if (n > 0) {
      return `${n} is a positive number`;
    } else if (n < 0) {
      return `${n} is a negative number`;
    } else {
      return `${n} is zero`;
    }
  }
  console.log(numberChecker(5)); // Output: 5