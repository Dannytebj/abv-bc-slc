function isPrimeNumber(number) {
  let isPrime = true;
  Array.apply(null, Array(number)).forEach((_, index) => {
    const currentNumber = index + 2;
    if (number % currentNumber == 0 && currentNumber > 1 && currentNumber < number) {
      isPrime = false;
    }
  });
  return isPrime;
}

function getPrimes(n) {
   if (!Number.isInteger(n)) {
    return [];
  }
  return Array.apply(null, Array(n)).map((_, index) => {
    const currentNumber = index + 2;
    if (currentNumber < n && isPrimeNumber(currentNumber)) {
      return currentNumber
    }
    return 0;
  }).filter((i) => { return i != 0; });
}